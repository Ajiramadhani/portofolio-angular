import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { BeritaService } from './berita.service';
import { Berita } from '../../model/berita.interface';
import { Category } from '../../model/category';
import { HeaderComponent } from '../../components/header/header.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-berita',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './berita.component.html',
  styleUrl: './berita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// export class BeritaComponent {
//   title = 'JakPost Categories';
//   categories:any[] = [];

//   handleClick(categoryName: string) {
//     console.log(`${categoryName}`.toLowerCase());
//     `${categoryName}`.toLowerCase();
//     // Do something with the category name
//   }

//   constructor(private http: HttpClient){
//     this.fetchCategories();
//   }

//   fetchCategories() {
//       const apiUrl = 'https://jakpost.vercel.app/api/category';
//     this.http.get<any>(apiUrl).subscribe(
//       (data) => {
//         this.categories = data.category;
//         console.log(data.category);
        
//       },
//       (error) => {
//         console.error('Error fetching data', error);
//       }
//     );
//   }
// }
export class BeritaComponent implements OnInit {
  title = 'JakPost API Category';
  constructor(private beritaService: BeritaService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadCategories();
    });
  }

  categories: Category[] = [];

  ngOnInit(): void {
    this.loadCategories();
    // console.log(this.categories);
    
  }

  handleClick(categoryName: string) {
    console.log(categoryName.toLowerCase());
    const param = categoryName.toLowerCase();
    this.router.navigate(['/detail', param]); // Navigate to DetailComponent with parameter
  }

  loadCategories() {
    this.beritaService.getCategories().subscribe (resp => {
      console.log(resp);
      this.categories = resp.category;
    })
  }
}
