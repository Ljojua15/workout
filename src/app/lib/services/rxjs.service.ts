import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPosts } from '@app/lib/interfaces/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private http = inject(HttpClient);
  private jsonApi = 'https://jsonplaceholder.typicode.com';

  public getPosts$(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(`${this.jsonApi}/posts`);
  }

  public makePost$(post: IPosts): Observable<IPosts> {
    return this.http.post<IPosts>(`${this.jsonApi}/posts`, post);
  }
}
