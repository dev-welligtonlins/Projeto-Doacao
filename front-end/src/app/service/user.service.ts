import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICrudService } from './i-crud-service';
import { User } from "../model/user";
import { Denounce } from '../model/denounce';
import { Institution } from '../model/institution';
import { Campaign } from '../model/campaign';

@Injectable({
  providedIn: 'root'
})
export class UserService implements ICrudService<User> {

  apiUrl: string = environment.API_URL + '/user/';

  constructor(private http: HttpClient) {}

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  insert(objeto: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, objeto);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + id);
  }

  getUserFollowsById(id: number): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.apiUrl + "follows/" + id);
  }

  getUserTrustsById(id: number): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.apiUrl + "trusts/" + id);
  }

  getUserEnjoysById(id: number): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl + "enjoys/" + id);
  }

  getUserDenouncesById(id: number): Observable<Denounce[]> {
    return this.http.get<Denounce[]>(this.apiUrl + "denounces/" + id);
  }

}
