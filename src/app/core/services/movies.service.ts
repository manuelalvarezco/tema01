import { Injectable } from '@angular/core';
import {  map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
   // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
  // https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png



  private apikey:string = "a141476b1338ea5c7ec9b6ab6a812869";
  private urlmovie:string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  getPopular(){

    let url = `${this.urlmovie}/discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2020-01-12&api_key=${this.apikey}`;

    return this.http.get(url)
      .pipe(
        map( (resp:any) => resp.results )
      )
  }
}
