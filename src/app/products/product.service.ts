import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  addProduct(product: any) {
    return this.http.post(this.url + '/add', product);
  }

  updateProduct(id: number, product: any) {
    return this.http.patch(this.url + `/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + `/${id}`);
  }
}
