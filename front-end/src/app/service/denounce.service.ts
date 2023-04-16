import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICrudService } from './i-crud-service';
import { Denounce } from "../model/denounce";

@Injectable({
  providedIn: 'root'
})
export class DenounceService implements ICrudService<Denounce> {

  apiUrl: string = environment.API_URL + '/denounce/';

  constructor(private http: HttpClient) {}

  get(): Observable<Denounce[]> {
    return this.http.get<Denounce[]>(this.apiUrl);
  }

  getById(id: number): Observable<Denounce> {
    return this.http.get<Denounce>(this.apiUrl + id);
  }

  insert(objeto: Denounce): Observable<Denounce> {
    return this.http.post<Denounce>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<Denounce> {
    return this.http.delete<Denounce>(this.apiUrl + id);
  }

  updateAccept(objeto: Denounce): Observable<Denounce> {
    return this.http.put<Denounce>(this.apiUrl+'accept', objeto);
  }

}
