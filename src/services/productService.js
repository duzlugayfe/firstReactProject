import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get("http://localhost:9090/api/products/getAll");
  }
  getByProductName(productName) {
    return axios.get(
      `http://localhost:9090/api/products/getByProductName?productName=${productName}`
    );
  }
  getBCategoryId(categoryId) {
    return axios.get(
      `http://localhost:9090/api/products/getByCategoryId?categoryId=${categoryId}`
    );
  }
  getCategories() {
    return axios.get("http://localhost:9090/api/categories/getAll");
  }
}
