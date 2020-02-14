import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
