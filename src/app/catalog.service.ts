import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Book} from './domain/book';
import {BOOK_DATA} from './domain/book-data';

@Injectable()
export class CatalogService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * diese funktion sucht die Attributte isbn, title und authors nach den keyword durch
   */
  public searchBooks(keywords: string): Promise<any> {

    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        const searchText = keywords.toLocaleLowerCase();

        const books = BOOK_DATA.filter(book => {

          // Dies ist eine andere filter Loesung mit der ueber alle Properties eines books iteriert wird (nicht nur isbn, title und authors)
          // Hinweis: im (aelteren) IE funktioniert .includes() moeglicherweise nicht und es muss mit .indexOf() gearbeitet werden.

          // for (const prop in book) {
          //   if (book[prop] && String(book[prop]).toLocaleLowerCase().includes(searchText)) {
          //     return true;
          //   }
          // }

          if (book['isbn'] && String(book['isbn']).toLocaleLowerCase().includes(searchText)) {
            return true;
          }
          if (book['authors'] && String(book['authors']).toLocaleLowerCase().includes(searchText)) {
            return true;
          }
          if (book['title'] && String(book['title']).toLocaleLowerCase().includes(searchText)) {
            return true;
          }
          return false;

        });
        if (books.length > 0) {
          resolve(books);
        } else {
          reject('no matching books!');
        }
      }, 1500);
    });

  }

  /**
   *  Dies war die Musterloesung
   */
  public searchBooksMuesterLoesung(keywords: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        const books = BOOK_DATA.filter(book => this.isMatching(book, keywords));
        if (books.length > 0) {
          resolve(books);
        } else {
          reject('no matching books!');
        }
      }, 1500);
    });
  }

  private isMatching(book: Book, keywords: string): boolean {
    let matches = true;
    const data = (book.isbn + ' ' + book.title + ' ' + book.authors).toLocaleLowerCase();
    keywords.toLocaleLowerCase().split(' ').forEach(
      keyword => matches = matches && data.includes(keyword)
    );
    return matches;
  }

  public searchBooksViaHttp(keywords: string): Promise<Book[]> {
    const url = 'http://distsys.ch:1450/api/books?keywords=' + keywords;
    // const secondurl ="http://distsys.ch:1450/api/orders/--number--";
    const options = {params: new HttpParams().set('keywords', keywords)};
    return this.httpClient.get<Book[]>(url, options).toPromise()
    // return this.httpClient.get<Book[]>(url).toPromise()
      .catch((response: HttpErrorResponse) => {
        // throw new Error('Unexpected error (HTTP status ' + response.status + ')');
        throw new Error(response.error + ' (' + response.statusText + ')');
      });
  }

}
