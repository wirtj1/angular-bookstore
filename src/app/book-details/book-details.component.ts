import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderService} from '../order.service';
import {Router} from '@angular/router';
import {Book} from '../domain/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  @Output() back = new EventEmitter<boolean>();

  constructor(private orderService: OrderService, private router: Router) {
  }

  public saveBook(): void {
    this.orderService.saveBook(this.book);
    this.router.navigateByUrl('/customer-details');
  }

  public goBack(): void {
    this.back.emit(true);
  }


  ngOnInit() {
  }

}
