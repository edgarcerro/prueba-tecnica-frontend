import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'components/app.module';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private baseUrl = SERVER_URL + '/api/users';

  constructor(private http: HttpClient) { }

  listUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(data: any): Observable<any> {
    const id = data.id;
    delete data.id;
    return this.http.patch(`${this.baseUrl}/${id}`, data);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
