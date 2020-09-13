package com.wellsfargo.companydetailsservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import javax.transaction.Transactional;

import com.wellsfargo.companydetailsservice.models.Company;
import com.wellsfargo.companydetailsservice.service.CompanyService;

@RestController
public class CompanyController {

    @Autowired
    private CompanyService companyService;
    
    @Autowired
	private RestTemplate restTemplate;
	
    @GetMapping(value = "/companies")
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }
    
    @PostMapping("/companies")
    public List<Company> getCompaniesByCodes(@RequestBody List<String> company_codes){
    	return companyService.getCompaniesByCodes(company_codes);
    }
    
    @GetMapping(value = "/companies/code/{company_code}")
    public Company getCompanyByCode(@PathVariable String company_code) {
    	return companyService.getCompanyByCode(company_code);
    	//Here an implementation of getting the latest stock price can be added by using the REST 
    	//Template to communicate with StockPrice microservice but since we are doing a basic application without
    	//many microservices the stock price details are present in the same microservice
    	
    	//Assuming stock price microservice was different this will be the code to the the latest stock 
    	//price of a given company code:
    	//Double latest_price=restTemplate.getForObject(url:"http://<stock-price-microservice-name>/sp/latest/"+companyService.getCompanyByCode(company_code).getCompanyCode(),Double);
    }
    
    @GetMapping(value = "/companies/name")
    public Company getCompanyByName(@RequestBody String company_name) {
    	return companyService.getCompanyByName(company_name);
    }
    
    @GetMapping(value = "/companies/id/{company_id}")
    public Company getCompanyById(@PathVariable int company_id) {
    	return companyService.getCompanyById(company_id);
    }

    @GetMapping(value = "/companies/sector")
    public List<Company> getCompanyBySectorName(@RequestBody String sector_name) {
    	return companyService.getCompanyBySectorName(sector_name);
    }
    
    @PostMapping(value = "/companies/add")
    public void addcompany(@RequestBody Company company) {
        companyService.addcompany(company);
    }

    @PutMapping(value = "/companies/update")
    public void updateCompany(@RequestBody Company company) {
        companyService.updateCompany(company);
    }
    
    @Transactional
    @DeleteMapping(value = "/companies/delete/{company_code}")
    public void deleteCompany(@PathVariable String company_code) {
        companyService.deleteCompanyByCode(company_code);
    }
}
