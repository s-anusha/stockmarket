package com.stockmarket.stockexchange.service;

import java.util.List;
import java.util.Optional;

import com.stockmarket.stockexchange.model.StockExchange;

public interface StockExchangeService {
	
	public List<StockExchange> getAllStockExchange();

	public Optional<StockExchange> getStockExchange(int id);
	
	public StockExchange saveStockExchange(StockExchange s);
	
	public StockExchange updateStockExchange(StockExchange s);

	public String deleteStockExchange(int id);

}