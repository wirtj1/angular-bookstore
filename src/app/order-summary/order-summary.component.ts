import {Component, OnInit} from '@angular/core';
import {Book} from '../domain/book';
import {Customer} from '../domain/customer';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent implements OnInit {

  private book: Book;
  private customer: Customer;
  private orderNumber: number;
  private error: String;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.book = this.orderService.getBook();
    this.customer = this.orderService.getCustomer();
  }

  public orderBook(): void {
    this.orderNumber = null;
    this.orderService.orderBook()
      .then((result: number) => {
        this.orderNumber = result;
        this.error = null;
      })
      .catch((error: string) => {
        this.error = error;
      });
  }

}
