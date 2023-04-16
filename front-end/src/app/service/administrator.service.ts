import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administrator } from '../model/administrator';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService implements ICrudService<Administrator> {

  apiUrl: string = environment.API_URL + '/administrator/';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Administrator> {
    return this.http.get<Administrator>(this.apiUrl + id);
  }

  get(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(this.apiUrl);
  }

  insert(objeto: Administrator): Observable<Administrator> {
    return this.http.post<Administrator>(this.apiUrl, objeto);
  }

  update(objeto: Administrator): Observable<Administrator> {
    return this.http.put<Administrator>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<Administrator> {
    return this.http.delete<Administrator>(this.apiUrl + id);
  }

  getByUserId(id: number): Observable<Administrator> {
    return this.http.get<Administrator>(this.apiUrl + "user/" + id);
  }

}
