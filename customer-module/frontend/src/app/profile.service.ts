import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl = 'https://pos-customer.herokuapp.com/customer/';

  constructor(private httpClient: HttpClient) {}
  public getProfile(customerId): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'customer/' + customerId);
  }
  public updateProfile(customer): Observable<any> {
    return this.httpClient.put(this.baseUrl + 'updateProfile', customer);
  }
}
