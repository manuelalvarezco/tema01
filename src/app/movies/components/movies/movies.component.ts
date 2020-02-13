import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:any[] = [];

  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.getPopular()
      .subscribe( (resp)=>{
        console.log(resp)
        this.movies = resp
      } )
  }

  clickMovie(id:string){
    console.log('Movie');
    console.log(id);
  }


}
