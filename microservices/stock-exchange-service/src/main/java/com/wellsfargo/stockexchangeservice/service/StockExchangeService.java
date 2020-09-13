package com.wellsfargo.stockexchangeservice.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wellsfargo.stockexchangeservice.models.StockExchange;

@Service
public class StockExchangeService {

    @Autowired
    private StockExchangeRepository stockExchangeRepository;

    
	public List<StockExchange> getAllStockExchanges() {
		List<StockExchange> se = new ArrayList<>();
		stockExchangeRepository.findAll().forEach(se::add);
        return se;
	}

	public void addStockExchange(StockExchange stockExchange) {
        stockExchangeRepository.save(stockExchange);
	}

	public void updateStockExchange(StockExchange stockExchange) {
        stockExchangeRepository.save(stockExchange);
	}

	public StockExchange getStockExchangeByName(String se_name) {
		return stockExchangeRepository.findBySeName(se_name);
	}
	
	public void deleteStockExchangeById(int id) {
        stockExchangeRepository.deleteById(id);
	}

	public void deleteStockExchangeByName(String se_name) {
        stockExchangeRepository.deleteBySeName(se_name);
	}

	public StockExchange getStockExchangeById(int id) {
		return stockExchangeRepository.findById(id).orElse(null);
	}

}
