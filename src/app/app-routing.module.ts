import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';
// import { AuthGuardService as AuthGuard } from '../app/_services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },

  {
    path: 'about',
    component: AboutComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'admin/login',
    component: AdminComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
