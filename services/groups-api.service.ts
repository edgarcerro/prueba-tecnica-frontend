import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'components/app.module';

@Injectable({
  providedIn: 'root'
})
export class GroupsApiService {

  private baseUrl = SERVER_URL + '/api/groups';

  constructor(private http: HttpClient) { }

  listGroups(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getGroup(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createGroup(group: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, group);
  }

  updateGroup(data: any): Observable<any> {
    const id = data.id;
    delete data.id;
    return this.http.patch(`${this.baseUrl}/${id}`, data);
  }

  deleteGroup(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
