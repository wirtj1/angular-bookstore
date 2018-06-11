import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {Router} from '@angular/router';
import {CreditCardType, Customer} from '../domain/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
})
export class CustomerDetailsComponent implements OnInit {

  public customer: Customer;
  public creditCardTypes = Object.keys(CreditCardType);
  public saved: boolean;
  public currentYear = new Date().getFullYear();
  // public currentYearSecondLast = Number(this.currentYear.toString().substr(2, 1));
  // public currentYearSecondLastAndOne = Number((this.currentYear + 10).toString().substr(2, 1));
  // public currentYearLast = Number((this.currentYear).toString().substr(3, 1));

  constructor(private orderService: OrderService, private router: Router) {
    this.customer = orderService.getCustomer() || new Customer();
  }

  saveCustomer(): void {
    this.saved = true;
    this.orderService.saveCustomer(this.customer);
    this.router.navigateByUrl('/order-summary');
  }

  ngOnInit(): void {

  }
}

