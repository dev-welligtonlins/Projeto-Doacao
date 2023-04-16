import { Observable } from "rxjs";

export interface ICrudService<T> {

    apiUrl: string;

    insert(objeto: T): Observable<T>;
    
}