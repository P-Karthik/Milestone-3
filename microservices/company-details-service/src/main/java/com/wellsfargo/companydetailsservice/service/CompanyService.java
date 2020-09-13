package com.wellsfargo.companydetailsservice.service;

import com.wellsfargo.companydetailsservice.models.Company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CompanyService {

        @Autowired
        private CompanyRepository companyRepository;

        public List<Company> getAllCompanies() {
            List<Company> companies = new ArrayList<>();
        	companyRepository.findAll().forEach(companies::add);
            return companies;
        }
         
        public Company getCompanyById(int company_id) {
			return companyRepository.findById(company_id).orElse(null);
		}
        
        public Company getCompanyByName(String company_name) {
			return companyRepository.findByCompanyName(company_name);
		}
        
        public Company getCompanyByCode(String company_code) {
        	return companyRepository.findByCompanyCode(company_code);
        }

		public List<Company> getCompanyBySectorName(String sector_name) {
			return companyRepository.findBySector(sector_name);
		}
		
		public List<Company> getCompaniesByCodes(List<String> company_codes) {
			return companyRepository.findByCompanyCodeIn(company_codes);
		}

        public void addcompany(Company company) {
            companyRepository.save(company);
        }

        public void updateCompany(Company company) {
            companyRepository.save(company);
        }	

		public void deleteCompanyByCode(String company_code) {
	        companyRepository.deleteByCompanyCode(company_code);
		}


		

}