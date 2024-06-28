import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetNews } from '../../model/news.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private apiUrl = 'https://jakpost.vercel.app/api';

  constructor(private load:HttpClient) { }

  // getBeritas(): Observable<GetNews>{
  //   return this.load.get<GetNews>(`${this.apiUrl}/category/indonesia`);
  // }

  getBeritas(name: string): Observable<GetNews>{
    return this.load.get<GetNews>(`${this.apiUrl}/category/${name}`);
  }

  // getNews(name: string): Observable<Detail[]> {
  //   console.log(name);
  //   return this.load.get<Detail[]>(`${this.apiUrl}/category?name=${name}`)
  // }
}
