import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie:any;
  @Output() movieClicked:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addFavorites(){
    console.log('añadido');
    this.movieClicked.emit(this.movie.id);
  }

}
