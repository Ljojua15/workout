import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '@app/lib/interfaces/products.interface';
import { ICarts } from '../interfaces/carts.interface';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  private http = inject(HttpClient);

  private url: string = 'https://fakestoreapi.com/';

  getProducts$(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/products`);
  }

  getCarts$(): Observable<ICarts[]> {
    return this.http.get<ICarts[]>(`${this.url}/carts`);
  }

  addProduct(data: any) {
    return this.http.post(`${this.url}products`, data);
  }
}
