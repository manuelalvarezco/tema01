import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path:'home',
  loadChildren:()=> import('./home/home.module').then(home=>home.HomeModule)
  },
  {
    path:'movies',
    loadChildren:()=> import('./movies/movies.module').then(movie=>movie.MoviesModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
