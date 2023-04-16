import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnjoyService {

  apiUrl: string = environment.API_URL + '/enjoy/';

  constructor(private http: HttpClient) {}

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + id);
  }

}
