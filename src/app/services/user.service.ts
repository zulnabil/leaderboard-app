import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users'; // TODO: Store this in a config file env

  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getDetail(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
