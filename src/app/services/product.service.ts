import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('http://localhost:3000/products');
  }
  addProduct(product: any) {
    return this.http.post<any>(
      'http://localhost:3000/products',
      JSON.stringify(product),
      {
        headers: new HttpHeaders({
          'content-type': 'application/json',
        }),
      }
    );
  }

  getAllCategories() {
    return this.http.get('http://localhost:3000/categories');
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/products/${productId}`);
  }

  updateProduct(prod: any): Observable<any> {
    return this.http.put<any>(
      `http://localhost:3000/products/${prod.id}`,
      JSON.stringify(prod),
      {
        headers: new HttpHeaders({
          'content-type': 'application/json',
        }),
      }
    );
  }
}
