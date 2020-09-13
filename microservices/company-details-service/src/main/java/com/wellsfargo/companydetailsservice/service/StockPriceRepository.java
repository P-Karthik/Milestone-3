package com.wellsfargo.companydetailsservice.service;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.wellsfargo.companydetailsservice.models.StockPrice;

public interface StockPriceRepository extends CrudRepository<StockPrice,Long>{
		List<StockPrice> findByCompanyCode(String company_code);
		List<StockPrice> findBySeName(String se_name);
		List<StockPrice> findByCompanyCodeAndSeName(String company_code,String se_name);
		List<StockPrice> findByCompanyCodeAndDateBetween(String company_code,Timestamp startDate, Timestamp endDate);
		List<StockPrice> findByCompanyCodeAndSeNameAndDateBetween(String company_code,String se_name, Timestamp startDate, Timestamp endDate);
		StockPrice findFirstByCompanyCodeOrderByDateDesc(String company_code);
		void deleteByCompanyCode(String company_code);
		void deleteBySeName(String se);
		List<StockPrice> findByCompanyCodeAndSeNameAndDate(String company_code,String se_name,Date date);
	
		
}
