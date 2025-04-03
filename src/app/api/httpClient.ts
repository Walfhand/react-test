import axios, { AxiosResponse, AxiosError } from "axios";
import { Product } from "../models/product";
import { toast } from "sonner";

axios.defaults.baseURL = "http://localhost:5004";

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response || {};

    switch (status) {
      case 400:
        if (typeof data === "string") {
          toast.error(`Bad Request: ${data}`);
        } else {
          toast.error("Bad Request - Invalid data submitted");
        }
        break;
        break;
      case 403:
        toast.error("Forbidden - You are not allowed to do this action");
        break;
      case 404:
        toast.error("Not Found - The requested resource does not exist");
        break;
      case 500:
        toast.error("Server Error - Please try again later");
        break;
      default:
        toast.error("An unexpected error occurred");
    }

    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Products = {
  list: () => requests.get<Product[]>("/api/products"),
  create: (product: Product) =>
    requests.post<Product>("/api/products", product),
  delete: (id: number) => requests.delete<void>(`/api/products/${id}`),
};

const httpClient = {
  Products,
};

export default httpClient;
