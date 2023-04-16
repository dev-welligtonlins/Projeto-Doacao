import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donor } from '../model/donor';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class DonorService implements ICrudService<Donor> {

  apiUrl: string = environment.API_URL + '/donor/';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Donor> {
    return this.http.get<Donor>(this.apiUrl + id);
  }

  // get(): Observable<Donor[]> {
  //   return this.http.get<Donor[]>(this.apiUrl);
  // }

  get(pageNumber: String): Observable<Donor[]> {
    return this.http.get<Donor[]>(this.apiUrl + '?page=' + pageNumber);
  }

  getGenerate(): Observable<Donor> {
    return this.http.get<Donor>(this.apiUrl + 'generate');
  }

  insert(objeto: Donor): Observable<Donor> {
    return this.http.post<Donor>(this.apiUrl, objeto);
  }

  update(objeto: Donor): Observable<Donor> {
    return this.http.put<Donor>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<Donor> {
    return this.http.delete<Donor>(this.apiUrl + id);
  }

  getByUserId(id: number): Observable<Donor> {
    return this.http.get<Donor>(this.apiUrl + "user/" + id);
  }

}
