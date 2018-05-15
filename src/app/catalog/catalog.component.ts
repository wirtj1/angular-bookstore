import {Component, OnInit} from '@angular/core';
import {logging} from 'selenium-webdriver';
import {Book} from '../domain/book';
import {BOOK_DATA} from '../domain/book-data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  public books: Book[] = BOOK_DATA;
  public selectedBook: Book;
  public keywords: string;

  selectBook(book) {
    this.selectedBook = book;
  }

  searchBooks() {
    const searchText = this.keywords.toLocaleLowerCase();

    this.books = BOOK_DATA.filter(book => {
      for (const prop in book) {
        if (book[prop] && String(book[prop]).toLocaleLowerCase().includes(searchText)) {
          return true;
        }
      }

      return false;
    });
  }

  constructor() {
  }

  ngOnInit() {
  }

}
