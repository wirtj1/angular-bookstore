import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CatalogComponent} from './catalog/catalog.component';
import {CatalogService} from './catalog.service';
import {HomeComponent} from './home/home.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {RouterModule, Routes} from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import {HttpClientModule} from '@angular/common/http';
import {OrderService} from './order.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HomeComponent,
    CustomerDetailsComponent,
    BookDetailsComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CatalogService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
