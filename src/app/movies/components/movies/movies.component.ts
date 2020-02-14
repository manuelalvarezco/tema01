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
    this.movieService.getCartelera()
    .subscribe(data=>{
      console.log(data);
      this.movies = data
    })
  }

  clickMovie(id:string){
    console.log('Movie');
    console.log(id);
  }


}
