//Utils
import HttpClient from './utils/HttpClient';

class ProductService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  createProduct(product) {
    return this.httpClient.post('/products', { body: product });
  }

  deleteProduct(id) {
    return this.httpClient.delete(`/products/${id}`);
  }
}

export default new ProductService;
