import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStockExchangeComponent } from './create-stockExchange/create-stockExchange.component';
import { StockExchangeDetailsComponent } from './stockExchange-details/stockExchange-details.component';
import { StockExchangesListComponent } from './stockExchanges-list/stockExchanges-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateStockExchangeComponent } from './update-stockExchange/update-stockExchange.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStockExchangeComponent,
    StockExchangeDetailsComponent,
    StockExchangesListComponent,
    UpdateStockExchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }