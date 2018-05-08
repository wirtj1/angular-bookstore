export class Book {
  constructor(
    readonly isbn: string,
    readonly authors: string,
    readonly title: string,
    readonly price: number,
    readonly publisher: string,
    readonly publicationYear: number,
    readonly binding: BookBinding,
    readonly numberOfPages: number,
    readonly description: string,
    readonly imageUrl: string) {

  }


}

export enum BookBinding {
  HARDCOVER,
  PAPERBACK,
  UNKNOWN
}
