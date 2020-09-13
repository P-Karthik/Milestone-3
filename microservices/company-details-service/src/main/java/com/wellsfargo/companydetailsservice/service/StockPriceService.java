package com.wellsfargo.companydetailsservice.service;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.companydetailsservice.models.StockPrice;
@Service
public class StockPriceService {
	
	@Autowired
	private StockPriceRepository spRepo;
	
	public List<StockPrice> getAllStockPrice() {
        List<StockPrice> sps = new ArrayList<>();
    	spRepo.findAll().forEach(sps::add);
        return sps;
    }
     
    public StockPrice getStockPriceById(long id) {
		return spRepo.findById(id).orElse(null);
	}
    
    public List<StockPrice> getByCompanyCode(String company_code){
    	return spRepo.findByCompanyCode(company_code);
    }
    
    public List<StockPrice> getBySeName(String se_name){
    	return spRepo.findBySeName(se_name);
    }
    
    public List<StockPrice> getByCompanyCodeAndSeName(String company_code,String se_name){
    	return spRepo.findByCompanyCodeAndSeName(company_code,se_name);
    }
    
    public List<StockPrice> getByCompanyCodeAndDuration(String company_code,Timestamp start_date,Timestamp end_date){
    	return spRepo.findByCompanyCodeAndDateBetween(company_code, start_date, end_date);
    }
    
    public List<StockPrice> getByCompanyCodeAndSeNameAndDuration(String company_code,String se_name,Timestamp start_date,Timestamp end_date){
    	return spRepo.findByCompanyCodeAndSeNameAndDateBetween(company_code, se_name, start_date, end_date);
  
    }
    
    public StockPrice getLatestStockOfCompanyCode(String company_code){
    	return spRepo.findFirstByCompanyCodeOrderByDateDesc(company_code);
    }
    
    public void addStockPrice(StockPrice sp) {
    	spRepo.save(sp);
    }
    
    public void updateStockPrice(StockPrice sp) {
    	spRepo.save(sp);
    }
    
    public void deleteStockPriceByCompanyCode(String company_code) {
    	spRepo.deleteByCompanyCode(company_code);
    }
    
    public void deleteStockPriceByStockExchange(String se) {
    	spRepo.deleteBySeName(se);
    }
    
    public List<StockPrice> findStockPricesOfADay(String company_code,String se_name,Date date){
    	return spRepo.findByCompanyCodeAndSeNameAndDate(company_code, se_name, date);
    }

	public void addStockPriceList(List<StockPrice> sp) {
		spRepo.saveAll(sp);		
	}

}
