package com.stockmarket.stockexchange.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stockmarket.stockexchange.model.StockExchange;

@Repository
public interface StockExchangeRepository extends JpaRepository<StcokExchange,Integer> {

}
