//Utils
import HttpClient from './utils/HttpClient';

class CategoryService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }

  createCategories(category) {
    return this.httpClient.post('/categories', { body: category });
  }

  listProductsByCategoryId(id) {
    return this.httpClient.get(`/categories/${id}/products`);
  }
}

export default new CategoryService;
