import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  private movies:Movie[] = [];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopular()
      .subscribe( resp=>{
        this.movies = resp;
      } )
  }


}
