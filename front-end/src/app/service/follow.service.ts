import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Enjoy} from "../model/enjoy";
import {Follow} from "../model/follow";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  apiUrl: string = environment.API_URL + '/follow/';

  constructor(private http: HttpClient) {}

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + id);
  }

  getByDonorId(donorId: number, institutionId: number): Observable<Follow> {
    return this.http.get<Follow>(this.apiUrl, {
      params: {
        donorId: donorId,
        institutionId: institutionId
      }
    });
  }

  insert(object: Follow): Observable<Follow> {
    return this.http.post<Follow>(this.apiUrl, object);
  }

}
