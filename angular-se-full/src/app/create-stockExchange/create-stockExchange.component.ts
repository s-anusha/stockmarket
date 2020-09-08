import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { StockExchangeService } from '../stockExchange.service';  
import { StockExchange } from '../stockExchange';

@Component({  
  selector: 'app-create-stockExchange',  
  templateUrl: './create-stockExchange.component.html',  
  styleUrls: ['./create-stockExchange.component.css']  
})

export class CreateStockExchangeComponent implements OnInit {  
  
  stockExchange: StockExchange = new StockExchange();
  submitted = false;
  
  constructor(private stockExchangeService:StockExchangeService,
	private router: Router) { }
  
  ngOnInit() {
  }

  newStockExchange(): void {
    this.submitted = false;
    this.stockExchange = new StockExchange();
  }
  
  save() {
    this.stockExchangeService
    .createStockExchange(this.stockExchange).subscribe(data => {
      console.log(data)
      this.stockExchange = new StockExchange();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/stockexchanges']);
  }
}  