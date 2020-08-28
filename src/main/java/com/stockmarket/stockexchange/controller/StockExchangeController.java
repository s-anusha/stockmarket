package com.stockmarket.stockexchange.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import.com.stockmarket.stockexchange.service.StockExchangeService;

@RestController
@RequestMapping("")
public class StockExchangeController {
	
	private StockExchangeService stockExchangeService;

	@Autowired
    	public StockExchangeController(StockExchangeService thestockexchangeservice){
        stockExchangeService = thestockexchangeservice;

    	}
	
	@GetMapping("/stockexchange/all")
	public ResponseEntity<List<StockExchange>> findAll(){
       	System.out.println(stockExchangeService.getAllStockExchange().size());
        	return new ResponseEntity<List<Transaction>>(stockExchangeService.getAllStockExchange(), HttpStatus.OK);
    	}

	@GetMapping("/stockexchange/{id}")
	public Optional<StockExchange> fineOne (@PathVariable int id)  {
        	Optional<StockExchange> stockExchange = stockExchangeService.getStockExchange(id);
		return stockExchange;
    	}
	
	@PostMapping("/stockexchange")
	public StockExchange addOne(@RequestBody StockExchange s)	{
		Optional<StockExchange> stockExchange = stockExchangeService.saveStockExchange(s);
		return stockExchange;
    }
	
	@PutMapping("/stockexchange")
	public StockExchange updateOne(@RequestBody StockExchange s)
	{
        	Optional<StockExchange> stockExchange = stockExchangeService.getStockExchange(s.getId());
        	if (stockExchange == null)
		{
           	throw new RuntimeException("Stock Exchange to update doesn't exist.");
        	}
		else
        		return (stockExchangeService.updateStockExchange(s));
    }
	
	@DeleteMapping("/stockexchange/{id}")
	public String deleteStockExchange(@PathVariable int id)
	{
		return (stockExchangeService.deleteStockExchange(id));
	}

}