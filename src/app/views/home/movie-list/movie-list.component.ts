import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/shared/model/movie.model';
import { MovieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  moviesAnimation: Movie[];
  moviesRomance: Movie[];
  moviesAction: Movie[];
  movies : Movie[];

  constructor(
    public movieService: MovieService,
    public sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  removeMovie(movie): void {
    if(confirm("Are you sure to delete " + movie.name + "? ")) {
      console.log("Movie: " + movie.id);

      this.movieService.deleteMovie(movie.id).subscribe(result => {});
      window.location.reload();
    }
  }

  getMovies(){
    this.movieService.getMoviesWithCategory('animation').subscribe(data => {
        this.moviesAnimation = data.content;
        console.log(this.moviesAnimation);
        this.moviesAnimation.forEach(movie => {
          movie.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(movie.trailer);
        })
    });

    this.movieService.getMoviesWithCategory('romance').subscribe(data => {
      this.moviesRomance = data.content;
      console.log(this.moviesRomance);
      this.moviesRomance.forEach(movie => {
        movie.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(movie.trailer);
      })
    });

    this.movieService.getMoviesWithCategory('action').subscribe(data => {
      this.moviesAction = data.content;
      console.log(this.moviesAction);
      this.moviesAction.forEach(movie => {
        movie.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(movie.trailer);
      })
    });
  }
}
