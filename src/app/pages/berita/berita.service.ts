import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeritaService {
  private apiUrl = 'https://jakpost.vercel.app/api/category';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
