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
  peliculas:any[] = [];

  constructor(private http: HttpClient) { }

  getCartelera(){

    
    let desde = new Date();
    let hasta = new Date();

    hasta.setDate( hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${ desde.getMonth()+1 }-${desde.getDate().toString().padStart(2, "0")}`
    let hastaStr = `${hasta.getFullYear()}-${ hasta.getMonth()+1 }-${hasta.getDate().toString().padStart(2, "0")}`



    let url = `${this.urlmovie}/discover/movie?primary_release_date.gte=2015-09-09&primary_release_date.lte=2018-09-09&api_key=${this.apikey}`;

    return this.http.get( url )
    .pipe(
      map( (res:any) => res.results)
    );
  }


  getPupulares(){
    let url = `${this.urlmovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
    .pipe(
      map( (res:any) => res)
    );
  }

  getPupularesNinos(){
    let url = `${this.urlmovie}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}`;

    return this.http.get( url )
    .pipe(
      map( (res:any) => res)
    );
  }

  getPeliculas(texto:string){
    let url = `${this.urlmovie}/search/movie?query=${texto}&sort_by=popularity&api_key=${this.apikey}`;

    

    return this.http.get( url )
    .pipe(
      map( (res:any) => {
        this.peliculas = res;
        return res
      })
    );
  }
}
