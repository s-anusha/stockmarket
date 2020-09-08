import { StockExchangeDetailsComponent } from '../stockExchange-details.component';
import { Observable } from "rxjs";
import { StockExchangeService } from "../stockExchange.service";
import { StockExchange } from "../stockExchange";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-stockExchanges-list",
  templateUrl: "./stockExchanges-list.component.html",
  styleUrls: ["./stockExchanges-list.component.css"]
})
export class StockExchangesListComponent implements OnInit {

  stockExchanges: Observable<StockExchange[]>;

  constructor(private stockExchangeService: StockExchangeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.stockExchanges = this.stockExchangeService.getStockExchangesList();
  }

  deleteStockExchange(id: number) {
    this.stockExchangeService.deleteStockExchange(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  stockExchangeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}