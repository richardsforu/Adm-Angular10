import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080/api/products';

  listAll(): any {
    return this.http.get(this.baseUrl);
  }

  findProduct(id): any {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  saveProduct(product): any {
    return this.http.post(this.baseUrl, product);
  }

  updateProduct(product):any {
    return this.http.put(this.baseUrl, product);
  }

  deleteProduct(id) {
    this.http.delete(this.baseUrl + `/${id}`).subscribe();
  }




}
