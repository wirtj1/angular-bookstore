import {Component, OnInit} from '@angular/core';
import {CatalogService} from '../catalog.service';
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
  public error: string;
  public loading = false;

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
  }

  searchBooks(): void {
    // Hier koennte auch die Musterloesung aufgerufen werden
    // this.catalogService.searchBooksMuesterLoesung(this.keywords)
    this.catalogService.searchBooks(this.keywords)
      .then((result: Book[]) => {
        this.error = null;
        this.loading = false;
        this.books = result;
      })
      .catch((error: string) => {
        this.loading = false;
        this.error = error;
      });
    this.loading = true;
  }

  selectBook(book): void {
    this.selectedBook = book;
  }

}
