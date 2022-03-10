import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filiere } from '../interfaces/filiere.interface';

const API: string = "http://localhost:8082/api/filiere"


@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  constructor(private http: HttpClient) { }


  getFiliere(): Observable<Filiere[]>{
    return this.http.get<Filiere[]>(API);
  }

  getFiliereId(id: number): Observable<Filiere[]>{
    return this.http.get<Filiere[]>(API + id);
  }

  // getOneFiliere(id):Observable

  postFiliere(filiere: Filiere): Observable<HttpResponse<Filiere>>{
    return this.http.post<Filiere>(API, filiere, {observe: 'response'});
  }

  putFiliere(filiere: Filiere): Observable<Filiere>{
    return this.http.put<Filiere>(API + filiere, filiere)
  }

  // deleteFiliere(filiere: Filiere): Observable<Filiere>{
  //   return this.http.p
  // }
}
