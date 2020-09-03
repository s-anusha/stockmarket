import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class StockExchangeService {  
  
  private baseUrl = 'http://localhost:8080/stockexchange/';  // UPDATE BASE URL
  
  constructor(private http:HttpClient) { }  
  
  getStockExchangesList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'all');  
  }  
  
  createStockExchange(stockExchange: Object): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`, stockExchange);  
  }  
  
  deleteStockExchange(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });  
  }  
  
  getStockExchange(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/${id}`);  
  }  
  
  updateStockExchange(stockExchange: object): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`, stockExchange);
  }  
    
}