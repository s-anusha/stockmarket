package com.stockmarket.stockexchange.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.stockexchange.model.StockExchange;
import com.stockmarket.stockexchange.repository.StockExchangeRepository;

@Service
public class StockExchangeServiceImpl implements StockExchangeService {
	
	@Autowired
	public StockExchangeRepository stockExchangeRepository;
	
	@Override
	public List<StockExchange> getAllStockExchange()
	{
		List<StockExchange> stockExchanges = stockExchangeRepository.findAll();
		return stockExchanges;
	}

	@Override
	public Optional<StockExchange> getStockExchange(int id)
	{
		Optional<StockExchange> stockExchange = stockExchangeRepository.findById(id);
		return stockExchange;
	}
	
	@Override
	public  StockExchange saveStockExchange(StockExchange s)

	{
		StockExchange stockExchange = stockExchangeRepository.save(s);
		return stockExchange;
	}
	
	@Override
	public StockExchange updateStockExchange(StockExchange s)

	{
		StockExchange stockExchange = stockExchangeRepository.save(s);
		return stockExchange;
	}
	
	@Override
	public String deleteStockExchange(int id)

	{
		Optional<StockExchange> s = stockExchangeRepository.findById(id);
		
		if(s!=null)
			{
			stockExchangeRepository.deleteById(id);
			return "Deleted stock exchange with id "+ id + ".";
			}
		else
			return "Invalid stock exchange id.";
	}
}