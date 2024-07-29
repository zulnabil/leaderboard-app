import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/types/feature';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users'; // TODO: Store this in a config file env

  constructor(private http: HttpClient) {}

  getList(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getDetail(id: number | string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id.toString()}`);
  }
}
