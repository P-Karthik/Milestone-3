package com.wellsfargo.companydetailsservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.companydetailsservice.models.IPO;

@Service
public class IpoService {
	
	@Autowired
	private ipoRepository ipoRepo;
	
	public void addIpo(IPO ipo) {
		ipoRepo.save(ipo);
	}
	
	public List<IPO> getAllIpos(){
		List<IPO> ipos=new ArrayList<>();
		ipoRepo.findAll().forEach(ipos::add);
		return ipos;
	}
	
	public List<IPO> getIpoDetailsFromCompanyName(String company_name) {
		return ipoRepo.findByCompanyName(company_name);
	}
	
	public List<IPO> getIpoDetailsFromSeName(String se_name) {
		return ipoRepo.findBySeName(se_name);
	}
	
	public List<IPO> getIpoDetailsFromCompanyNameAndSeName(String company_name,String se_name) {
		return ipoRepo.findByCompanyNameAndSeName(company_name,se_name);
	}
	
	public List<IPO> getsortedIpoDetailsFromCompanyName(String company_name) {
		return ipoRepo.findByCompanyNameOrderByOpenDateTimeAsc(company_name);
	}
	
	public List<IPO> getsortedIpoDetailsFromCompanyNameAndSeName(String company_name,String se_name) {
		return ipoRepo.findByCompanyNameAndSeNameOrderByOpenDateTimeAsc(company_name,se_name);
	}
	
	public void updateIpoDetails(IPO ipo) {
		ipoRepo.save(ipo);
	}
	
	public void deleteIpoDetails(long id) {
		ipoRepo.deleteById(id);
	}
	
	public void deleteIpoDetailsByCompanyName(String company_name) {
		ipoRepo.deleteByCompanyName(company_name);
	}
		
}
