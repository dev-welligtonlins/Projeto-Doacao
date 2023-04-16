import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Trust} from "../model/trust";

@Injectable({
  providedIn: 'root'
})
export class TrustService {

  apiUrl: string = environment.API_URL + '/trust/';

  constructor(private http: HttpClient) {}

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + id);
  }

  getByDonorId(donorId: number, institutionId: number): Observable<Trust> {
    return this.http.get<Trust>(this.apiUrl, {
      params: {
        donorId: donorId,
        institutionId: institutionId
      }
    });
  }

  insert(object: Trust): Observable<Trust> {
    return this.http.post<Trust>(this.apiUrl, object);
  }

}
