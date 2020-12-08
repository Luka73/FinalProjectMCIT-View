import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //apiUrl = 'http://localhost:8087/movies';
  apiUrl = 'https://app-movies-mcit.herokuapp.com/movies';
  apiUrlById = 'https://app-movies-mcit.herokuapp.com/movie/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getMoviesWithCategory(category: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?category=' + category);
  }

  public postMovies(movie: any): Observable<Movie> {
    return this.httpClient.post<any>(this.apiUrl, movie, this.httpOptions);
  }

  public deleteMovie(movieId: number): Observable<Movie> {
    return this.httpClient.delete<any>(this.apiUrlById + movieId);
  }
}
