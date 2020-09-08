import { StockExchangeDetailsComponent } from './stockExchange-details/stockExchange-details.component';
import { CreateStockExchangeComponent } from './create-stockExchange/create-stockExchange.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockExchangesListComponent } from './stockExchanges-list/stockExchanges-list.component';
import { UpdateStockExchangeComponent } from './update-stockExchange/update-stockExchange.component';

const routes: Routes = [
  { path: '', redirectTo: 'stockexchanges', pathMatch: 'full' },
  { path: 'stockexchanges', component: StockExchangesListComponent },
  { path: 'create', component: CreateStockExchangeComponent },
  { path: 'update/:id', component: UpdateStockExchangeComponent },
  { path: 'details/:id', component: StockExchangeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }