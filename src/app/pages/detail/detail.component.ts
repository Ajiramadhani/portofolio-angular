import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  title = 'Detail Berita';
  details:any[] = [];

  constructor(private http: HttpClient){
    this.fetchDetails();
  }

  fetchDetails() {
    const apiUrl = 'https://jakpost.vercel.app/api/category/indonesia';
    this.http.get<any>(apiUrl).subscribe(
      (data) => {
        this.details = data.post;
        console.log(data.post);
        
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

}
