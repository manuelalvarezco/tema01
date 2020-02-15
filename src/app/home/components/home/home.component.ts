import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies:any[] = [];

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

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
