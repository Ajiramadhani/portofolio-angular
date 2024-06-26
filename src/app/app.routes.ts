import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortalWebComponent } from './pages/portal-web/portal-web.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BeritaComponent } from './pages/berita/berita.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        component: PortalWebComponent,
        // children: [
        //     {
        //         path:
        //     }
        // ]
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path:'berita',
        component: BeritaComponent
    },
    {
        path:'detail',
        component: DetailComponent,
        children: [
            
        ]
    }
];
