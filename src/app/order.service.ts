import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Book} from './domain/book';
import {Customer} from './domain/customer';

@Injectable()
export class OrderService {
  // private books: Book[] = Array();
  private book: Book;
  private customer: Customer;

  constructor(private httpClient: HttpClient) {
  }

  getCustomer() {
    return this.customer;
  }

  saveCustomer(customer: Customer) {
    this.customer = customer;
  }

  resetCustomer() {
    this.customer = undefined;
  }

  getBook() {
    return this.book;
  }

  saveBook(book: Book) {
    this.book = book;
    // this.books.push(book);
  }

  // getBooks() {
  //   return this.books;
  // }

  // resetBooks() {
  //   this.books = Array();
  // }

  // removeBook(book: Book) {
  //   const index: number = this.books.indexOf(book);
  //   if (index !== -1) {
  //     this.books.splice(index, 1);
  //   }
  // }

  public orderBook(): Promise<number> {
    const url = 'http://distsys.ch:1450/api/books/' + this.book.isbn + '/orders';
    const options = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
    return this.httpClient.post<number>(url, this.customer, options).toPromise()
      .catch((response: HttpErrorResponse) => {
        // throw new Error('Unexpected error (HTTP status ' + response.status + ')');
        throw new Error(response.error + ' (' + response.statusText + ')');
      });
  }
}
