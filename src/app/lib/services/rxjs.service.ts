import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private http = inject(HttpClient);
  private jsonApi = 'https://jsonplaceholder.typicode.com';
}
