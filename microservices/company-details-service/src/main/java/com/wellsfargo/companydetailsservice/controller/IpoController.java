package com.wellsfargo.companydetailsservice.controller;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.wellsfargo.companydetailsservice.models.IPO;
import com.wellsfargo.companydetailsservice.service.IpoService;

@RestController
public class IpoController {
	
	@Autowired
	private IpoService ipoService;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@RequestMapping("/ipos")
	public List<IPO> getallIpos(){
		return ipoService.getAllIpos();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/ipos/company")
	public List<IPO> getallIposByCompanyName(@RequestBody JSONObject param){
		String companyName=(String)param.get("companyName");
		return ipoService.getsortedIpoDetailsFromCompanyName(companyName);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/ipos/se/")
	public List<IPO> getallIposBySeName(@RequestBody String se_name){
		return ipoService.getIpoDetailsFromSeName(se_name);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/ipos/se/company")
	public List<IPO> getallIposByCompanyNameAndSeName(@RequestBody JSONObject param){
		String companyName=(String)param.get("companyName");
		String seName=(String)param.get("seName");
		return ipoService.getsortedIpoDetailsFromCompanyNameAndSeName(companyName, seName);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/ipos/add")
	public void addIpo(@RequestBody IPO ipo) {
		ipoService.addIpo(ipo);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/ipos/update")
	public void updateIpo(@RequestBody IPO ipo) {
		ipoService.updateIpoDetails(ipo);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/ipos/delete/{id}")
	public void deleteIpo(@PathVariable long id) {
		ipoService.deleteIpoDetails(id);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/ipos/delete/by_company_name")
	public void deleteIpoByCompanyName(@RequestBody String company_name) {
		ipoService.deleteIpoDetailsByCompanyName(company_name);
	}
	
	
	
	
	
}
