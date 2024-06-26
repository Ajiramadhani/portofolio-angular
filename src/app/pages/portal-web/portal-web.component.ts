import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';

@Component({
  selector: 'app-portal-web',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent
  ],
  templateUrl: './portal-web.component.html',
  styleUrl: './portal-web.component.css'
})
export class PortalWebComponent {
judul = 'Home Page'
}
