package com.wellsfargo.userdetailsservice.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.wellsfargo.userdetailsservice.models.User;

@Service
public class UserService implements UserDetailsService{
	
	@Autowired
	private UserRepository userRepo;
	
	public void addUser(User u) {
		userRepo.save(u);
	}
	
	public List<User> getAllUsers(){
		List<User> users=new ArrayList<>();
		userRepo.findAll().forEach(users::add);
		return users;
	}
	
	public List<User> authenticate(String username,String password){
		return userRepo.findAllByUsernameAndPassword(username, password);
	}
	public User getUserDetails(int id) {
		return userRepo.findById(id).orElse(null);
	}
	
	public User getUserByUsername(String username) throws UsernameNotFoundException{
		User u=userRepo.findByUsername(username);
		if(u!=null)
			return u;
		else throw new UsernameNotFoundException("Username not found");
	}
	
	public void deleteUser(int id) {
		userRepo.deleteById(id);
	}
	
	public void deleteUserByUsername(String name) {
		userRepo.deleteByUsername(name);
	}


	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User u= getUserByUsername(username);
		if(u.getConfirmed()) {
			GrantedAuthority authority;
			if(u.getIsAdmin()==true)
				authority=new SimpleGrantedAuthority("ROLE_ADMIN");
			else
				authority=new SimpleGrantedAuthority("ROLE_USER");
			return new org.springframework.security.core.userdetails.User(u.getUsername(), u.getPassword(), Arrays.asList(authority));
		}
		else {
			throw new UsernameNotFoundException("The user account is not confirmed, plese confirm your account using the link in the mail!");
		}
	}
}
