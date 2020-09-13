package com.wellsfargo.companydetailsservice.service;

import com.wellsfargo.companydetailsservice.models.Company;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CompanyRepository extends CrudRepository<Company, Integer>{
    
	Company findByCompanyName(String company_name);
	Company findByCompanyCode(String company_code);
	List<Company> findBySector(String sector_name);
	List<Company> findByCompanyCodeIn(List<String> company_codes);
	void deleteByCompanyCode(String company_code);
}