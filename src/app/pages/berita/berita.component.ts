import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-berita',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './berita.component.html',
  styleUrl: './berita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BeritaComponent {
  title = 'JakPost Categories';
  categories:any[] = [];

  handleClick(categoryName: string) {
    console.log(`${categoryName}`.toLowerCase());
    `${categoryName}`.toLowerCase();
    // Do something with the category name
  }

  constructor(private http: HttpClient){
    this.fetchCategories();
  }

  fetchCategories() {
      const apiUrl = 'https://jakpost.vercel.app/api/category';
    this.http.get<any>(apiUrl).subscribe(
      (data) => {
        this.categories = data.category;
        console.log(data.category);
        
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
