import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DetailService } from './detail.service';
import { Detail } from '../../model/detail.interface';
import { HeaderComponent } from '../../components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GetNews } from '../../model/news.interface';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    HeaderComponent,
    MatIconModule,
    RouterModule,
    
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

// Bisa Jalan
// export class DetailComponent {
//   title = 'Detail Berita';
//   constructor(private detailService: DetailService) {}

//   news: Detail[] = [];

//   ngOnInit(): void {
//     this.loadNews();
//   }

//   loadNews(){
//     this.detailService.getBeritas().subscribe(resp => {
//       console.log(resp);
//       this.news = resp.posts;
      
//     })
//   }
// }

// export class DetailComponent {
//   title = 'Detail Berita';
//   name: string | null = '';
//   constructor(private route: ActivatedRoute, private detailService: DetailService) {}

//   news: Detail[] = [];

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       this.name = params.get('name');
//       this.loadNews();
//     })
//   }

//   loadNews(){
//     this.detailService.getBeritas().subscribe(resp => {
//       console.log(resp);
//       this.news = resp.posts;
      
//     })
//   }
// }

export class DetailComponent implements OnInit {
  title: string | null = 'Detail JakPost';
  slug: string | null = '';
  news: Detail[] = [];

  constructor(private route: ActivatedRoute, private detailService: DetailService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.loadDetail();
    });
  }

  loadDetail() {
    if (this.slug) {
      this.detailService.getBeritas(this.slug).subscribe(data => {
        console.log(data.posts);
        
        this.news = data.posts;
      });
    }
  }
}