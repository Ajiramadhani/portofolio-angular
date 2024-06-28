import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Berita } from '../../model/berita.interface';
import { GetNews } from '../../model/news.interface';

@Injectable({
  providedIn: 'root'
})
export class BeritaService {
  private apiUrl = 'https://jakpost.vercel.app/api';

  constructor(private load: HttpClient) { }

  getCategories(): Observable<Berita>{
    return this.load.get<Berita>(`${this.apiUrl}/category`);
  }

  getCategoriesName(name: string): Observable<GetNews[]> {
    console.log(name);
    return this.load.get<GetNews[]>(`${this.apiUrl}/category/${name}`)
  }
}

