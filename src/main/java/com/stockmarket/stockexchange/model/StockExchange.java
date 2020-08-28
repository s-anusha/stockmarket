package com.stockmarket.stockexchange.model;

import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="StockExchange")
public class StockExchange {
	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="stock_exchange")
	private String name;
	
	@Column(name="brief")
	private String brief;
	
	@Column(name="contact_address")
	private String contact_address;
	
	@Column(name="remarks")
	private String remarks;
	
	StockExchange(){}

	public StockExchange(int id, String stock_exchange, String brief, String contact_address, String remarks) {
		super();
		this.id = id;
		this.stock_exchange = stock_exchange;
		this.brief = brief;
		this.contact_address = contact_address;
		this.remarks = remarks;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStockExchange() {
		return stock_exchange;
	}

	public void setStockExchange(String stock_exchange) {
		this.stock_exchange = stock_exchange;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getContactAddress() {
		return contact_address;
	}

	public void setContactAddress(String contact_address) {
		this.contact_address = contact_address;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "Stock Exchange [id=" + id + ", stock_exchange=" + stock_exchange + ", brief=" + brief + ", contact_address=" + contact_address + ", remarks=" + remarks + "]";
	}

}
