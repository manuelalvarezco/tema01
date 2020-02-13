import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [MoviesComponent, MovieComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class MoviesModule { }
