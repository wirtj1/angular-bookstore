import {Component, OnInit} from '@angular/core';
import {logging} from 'selenium-webdriver';
import {Book} from '../domain/book';
import {BOOK_DATA} from '../domain/book-data';
import {CatalogService} from '../catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  public books: Book[] = BOOK_DATA;
  public selectedBook: Book;
  public keywords: string;
  public error: string;

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
  }

  searchBooks(): void {
    this.error = null;
    let books;
    books = this.catalogService.searchBooks(this.keywords);
    // books = this.catalogService.searchBooksFischli(this.keywords);
    if (books.length > 0) {
      this.books = books;
    } else {
      this.error = 'no matching books';
    }
  }

  selectBook(book): void {
    this.selectedBook = book;
  }


}
