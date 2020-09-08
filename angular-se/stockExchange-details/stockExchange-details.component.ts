import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StockExchangeService } from "../stockExchange.service";
import { StockExchangesListComponent } from '../stockExchanges-list.component';
import { StockExchange } from "../stockExchange";

@Component({
  selector: 'app-stockExchange-details',
  templateUrl: './stockExchange-details.component.html',
  styleUrls: ['./stockExchange-details.component.css']
})
export class StockExchangeDetailsComponent implements OnInit {

  id: number;
  stockExchange: StockExchange;

  constructor(private route: ActivatedRoute,private router: Router,
    private stockExchangeService: StockExchangeService) { }

  ngOnInit() {
    this.stockExchange = new StockExchange();

    this.id = this.route.snapshot.params['id'];
    
    this.stockExchangeService.getStockExchange(this.id)
      .subscribe(data => {
        console.log(data)
        this.stockExchange = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['stockexchange']);
  }
}