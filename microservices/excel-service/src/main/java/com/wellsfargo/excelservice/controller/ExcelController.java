package com.wellsfargo.excelservice.controller;
import java.util.List;

import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.wellsfargo.excelservice.models.ResponseMessage;
import com.wellsfargo.excelservice.models.StockPrice;
import com.wellsfargo.excelservice.util.ExcelParser;

@RestController
public class ExcelController {
	
	@Autowired 
	private RestTemplate rt;

	@PostMapping("/upload")
	public ResponseEntity<ResponseMessage> addStockPrices(@RequestParam("input") MultipartFile file) throws Exception{
		if(ExcelParser.isExcelFile(file)) {
				List<StockPrice> sps=ExcelParser.getStockPricesList(file.getInputStream());
				String StockPriceServiceURL="http://localhost:8082/sp/addlist";
				HttpHeaders headers=new HttpHeaders();
				headers.set("Content-Type",MediaType.APPLICATION_JSON);
				HttpEntity<Object> requestEntity = new HttpEntity<Object>(sps,headers);
				String msg=rt.postForObject(StockPriceServiceURL, requestEntity,String.class);
				return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(msg,sps));
		}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage("Please upload an excel file"));
	}
}
