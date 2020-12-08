import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MovieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-movie-form-dialog',
  templateUrl: './movie-form-dialog.component.html',
  styleUrls: ['./movie-form-dialog.component.css']
})
export class MovieFormDialogComponent implements OnInit {
  public movieForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private rest: MovieService,
    public dialogRef: MatDialogRef<MovieFormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      name:     ['', [Validators.required]],
      price:    ['', [Validators.required]],
      category: ['', [Validators.required]],
      trailer:  ['', [Validators.required]],
    })
  }

  createMovie() {
    this.rest.postMovies(this.movieForm.value).subscribe(result => {});
    this.dialogRef.close(true);
    this.movieForm.reset();
    window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close(true);
    this.movieForm.reset();
  }

}
