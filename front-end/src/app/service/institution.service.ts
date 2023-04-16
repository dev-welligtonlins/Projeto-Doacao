import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Institution } from '../model/institution';
import { ICrudService } from './i-crud-service';
import { Donor } from "../model/donor";
import { ActivatedRoute, ActivationEnd } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InstitutionService implements ICrudService<Institution> {

  apiUrl: string = environment.API_URL + '/institution/';

  constructor(private http: HttpClient, private route: ActivatedRoute,) { }

  insert(objeto: Institution): Observable<Institution> {
    return this.http.post<Institution>(this.apiUrl, objeto);
  }

  fileUpload(files: any[]): Observable<any> {
    const formData = new FormData();
    formData.append("files", files[0]);
    return this.http.post<any>(this.apiUrl + "upload-image", formData);
  }

  update(objeto: Institution): Observable<Institution> {
    return this.http.put<Institution>(this.apiUrl, objeto);
  }

  get(pageNumber: String): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.apiUrl + '?page=' + pageNumber);
  }

  getGenerate(): Observable<Institution> {
    return this.http.get<Institution>(this.apiUrl + 'generate');
  }

  findFollowByUserId(id: number, pageNumber: String): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.apiUrl + "follow/" + id + '?page=' + pageNumber);
  }

  getById(id: number): Observable<Institution> {
    return this.http.get<Institution>(this.apiUrl + id);
  }

  delete(id: number): Observable<Institution> {
    return this.http.delete<Institution>(this.apiUrl + id);
  }

  getPending(): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.apiUrl + 'pending');
  }

  updateValidation(objeto: Institution): Observable<Institution> {
    return this.http.put<Institution>(this.apiUrl + 'pending', objeto);
  }

  getByUserId(id: number): Observable<Institution> {
    return this.http.get<Institution>(this.apiUrl + "user/" + id);
  }

  getByCampaignId(id: number): Observable<Institution> {
    return this.http.get<Institution>(this.apiUrl + "campaign/" + id);
  }

}
