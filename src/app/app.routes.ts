import { Routes } from '@angular/router';
import { PortalWebComponent } from './pages/portal-web/portal-web.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BeritaComponent } from './pages/berita/berita.component';
import { DetailComponent } from './pages/detail/detail.component';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        component: PortalWebComponent,
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [

        ]
    },
    {
        path:'berita',
        component: BeritaComponent
    },
    {
        path:'detail/:slug',
        component: DetailComponent,
        children: [
            
        ]
    }
];
