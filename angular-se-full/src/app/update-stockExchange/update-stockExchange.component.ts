import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockExchangeService } from "../stockExchange.service";
import { StockExchange } from "../stockExchange";


@Component({
  selector: 'app-update-stockExchange',
  templateUrl: './update-stockExchange.component.html',
  styleUrls: ['./update-stockExchange.component.css']
})
export class UpdateStockExchangeComponent implements OnInit {

  id: number;
  stockExchange: StockExchange;

  constructor(private route: ActivatedRoute,private router: Router,
    private stockExchangeService: StockExchangeService) { }

  ngOnInit() {
    this.stockExchange = new StockExchange();

    this.id = this.route.snapshot.params['id'];
    
    this.stockExchangeService.getStockExchangesList(this.id)
      .subscribe(data => {
        console.log(data)
        this.stockExchange = data;
      }, error => console.log(error));
  }

  updateStockExchange() {
    this.stockExchangeService.updateStockExchange(this.id, this.stockExchange)
      .subscribe(data => {
        console.log(data);
        this.stockExchange = new StockExchange();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateStockExchange();    
  }

  gotoList() {
    this.router.navigate(['/stockexchanges']);
  }
}