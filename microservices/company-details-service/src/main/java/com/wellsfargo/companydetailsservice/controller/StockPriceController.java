package com.wellsfargo.companydetailsservice.controller;

import java.sql.Timestamp;
import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.wellsfargo.companydetailsservice.models.StockPrice;
import com.wellsfargo.companydetailsservice.service.StockPriceService;


@RestController
public class StockPriceController {
	
	@Autowired
    private StockPriceService spService;
    
    @Autowired
	private RestTemplate restTemplate;
    
    @GetMapping("/sp")
    public List<StockPrice> getAll(){
    	return spService.getAllStockPrice();
    }
    
    @GetMapping("/sp/id/{id}")
    public StockPrice getSpById(@PathVariable long id){
    	return spService.getStockPriceById(id);
    }
    
    @GetMapping("/sp/company_code/{company_code}")
    public List<StockPrice> getSpByCompanyCode(@PathVariable String company_code){
    	return spService.getByCompanyCode(company_code);
    }
    
    @PostMapping("/sp/company_code/se_name")
    public List<StockPrice> getSpByCompCodeAndSeName(@RequestBody JSONObject param){
    	String company_code=(String)param.get("companyCode");
    	String se_name=(String)param.get("seName");
    	return spService.getByCompanyCodeAndSeName(company_code, se_name);
    }
    
    @PostMapping("/sp/company_code/duration")
    public List<StockPrice> getSpByCompCodeAndDuration(@RequestBody JSONObject param){
    	String company_code=(String)param.get("companyCode");
    	Timestamp start_date=Timestamp.valueOf((String)param.get("startDate"));
    	Timestamp end_date=Timestamp.valueOf((String)param.get("endDate"));
    	return spService.getByCompanyCodeAndDuration(company_code, start_date, end_date);
    }
    
    @PostMapping("/sp/company_code/se_name/duration")
    public List<StockPrice> getSpByCompCodeAndSeNameAndDuration(@RequestBody JSONObject param){
    	String company_code=(String)param.get("companyCode");
    	String se_name=(String)param.get("seName");
    	Timestamp start_date=Timestamp.valueOf((String)param.get("startDate"));
    	Timestamp end_date=Timestamp.valueOf((String)param.get("endDate"));
    	return spService.getByCompanyCodeAndSeNameAndDuration(company_code, se_name, start_date, end_date);
    }
    
    @GetMapping("/sp/latest_sp/{company_code}")
    public StockPrice getLatestSpByCompanyCode(@PathVariable String company_code) {
    	return spService.getLatestStockOfCompanyCode(company_code);
    }
    
    @PostMapping("/sp/add")
    public void addSp(@RequestBody StockPrice sp) {
    	spService.addStockPrice(sp);
    }
    
    @PostMapping("/sp/addlist")
    public String addSp(@RequestBody List<StockPrice> sp) throws Exception{
    	spService.addStockPriceList(sp);
    	return "Successful!";
    }
    
    
    
    @PutMapping("/sp/update")
    public void updateSp(@RequestBody StockPrice sp) {
    	spService.addStockPrice(sp);
    }
    
    @DeleteMapping("sp/delete/{company_code}")
    public void deleteByCompanyCode(@PathVariable String company_code) {
    	spService.deleteStockPriceByCompanyCode(company_code);
    }
    
    @DeleteMapping("sp/delete")
    public void deleteBySeName(@RequestBody String se_name) {
    	spService.deleteStockPriceByStockExchange(se_name);
    }
}
