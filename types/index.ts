export type Book = {
  id: number,
  title: string,
  author: string,
  cover: string,
  metaTitle: string,
  metaDescription: string,
}

export type TrimmedBook = Pick<Book, "id" | "title" >

export type HomepageApiResponse = {
  SEO: {
    metaTitle: string,
    metaDescription: string,
  },
  homepageCopy: string
}

export type AvailableBooksApiResponse = TrimmedBook[];

export type BooksApiResponse = Book[];

export type BasketItem = {
  id: number,
  title: string,
  qty: number,
}

export type BasketState = {
  items: BasketItem[]
}

export type AppState = {
  basket: BasketState
}