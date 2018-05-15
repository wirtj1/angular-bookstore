import { Component, OnInit } from '@angular/core';
import {BOOK_DATA} from '../domain/book-data';
import {Book} from '../domain/book';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  public books: Book[] = BOOK_DATA;
  public selectedBook : Book;
  public keywords: string;

  selectBook(book){
    this.selectedBook = book;
  }

  searchBooks(){
  }

  constructor() {
  }

  ngOnInit() {
  }

}
