import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductAPIService {
  constructor(private http: HttpClient) {}
  GetProducts(): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/products');
  }
}
