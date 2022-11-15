import { AvailableBooksApiResponse, Book, HomepageApiResponse } from "../types";

const BASE_URL = "http://localhost:3000";

async function fetcher<T>(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data as T;
}

const ApiService = {
  async getHomePageData(){
    return fetcher<HomepageApiResponse>(`${BASE_URL}/homepage`);
  },

  async getAvailableBooks(){
    return fetcher<AvailableBooksApiResponse>(`${BASE_URL}/availableBooks`);
  },

  async getBookDetails(id: number | string){
    return fetcher<Book>(`${BASE_URL}/books/${id}`);
  }
}

export default ApiService;