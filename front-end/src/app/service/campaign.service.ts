import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campaign } from '../model/campaign';
import { ICrudService } from './i-crud-service';
import { Enjoy } from "../model/enjoy";

@Injectable({
  providedIn: 'root'
})
export class CampaignService implements ICrudService<Campaign> {

  apiUrl: string = environment.API_URL + '/campaign/';

  enjoyUrl: string = environment.API_URL + '/enjoy/';

  constructor(private http: HttpClient) { }

  insert(objeto: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(this.apiUrl, objeto);
  }

  fileUpload(files: any[]): Observable<any> {
    const formData = new FormData();
    formData.append("files", files[0]);
    return this.http.post<any>(this.apiUrl + "upload-image", formData);
  }

  update(objeto: Campaign): Observable<Campaign> {
    return this.http.put<Campaign>(this.apiUrl, objeto);
  }

  get(pageNumber: String): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl + '?page=' + pageNumber);
  }

  getGenerate(): Observable<Campaign> {
    return this.http.get<Campaign>(this.apiUrl + 'generate');
  }

  getByInstitutionId(id: number, pageNumber: String): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl + "institution/" + id + '?page=' + pageNumber);
  }

  gethome(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl + 'a');
  }

  getById(id: number): Observable<Campaign> {
    return this.http.get<Campaign>(this.apiUrl + id);
  }

  // TODO: mudar para entidade de enjoy!
  insertEnjoy(object: Enjoy): Observable<Enjoy> {
    return this.http.post<Enjoy>(this.enjoyUrl, object);
  }

  getEnjoyByDonorId(donorId: number, campaignId: number): Observable<Enjoy> {
    return this.http.get<Enjoy>(this.enjoyUrl, {
      params: {
        donorId: donorId,
        campaignId: campaignId
      }
    });
  }

  search(searchTittle: String, pageNumber: String): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl + 'search/campaign/'+ searchTittle + '?page=' + pageNumber);
  }
}
