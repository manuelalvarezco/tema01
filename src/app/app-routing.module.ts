import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path:'home',
        loadChildren:()=> import('./home/home.module').then(home=>home.HomeModule)
      },
      {
        path:'movies',
        loadChildren:()=> import('./movies/movies.module').then(movie=>movie.MoviesModule)
      }
    ],
  },
  {
    path:'admin',
    loadChildren:()=> import('./admin/admin.module').then(movie=>movie.AdminModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
