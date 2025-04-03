import axios, { AxiosResponse } from "axios";
import { Product } from "../models/product";

axios.defaults.baseURL = "http://localhost:5004"; // Backend API URL

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Products = {
  list: () => requests.get<Product[]>("/api/products"),
  create: (product: Omit<Product, "id">) =>
    requests.post<Product>("/api/products", product),
  delete: (id: number) => requests.delete<void>(`/api/products/${id}`),
};

const httpClient = {
  Products,
};

export default httpClient;
