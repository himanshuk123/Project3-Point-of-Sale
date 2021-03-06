import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://pos-customer.herokuapp.com/customer/';

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'products');
  }
  public getCategoryProducts(categoryId): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/proudcts/' + categoryId);
  }
  public getProduct(productId): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'product/' + productId);
  }
}
