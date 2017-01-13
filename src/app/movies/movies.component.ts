import { Component, OnInit } from '@angular/core';
import {MoviesService} from './movies.service';

@Component({
  selector: 'app-movies',
  template: '<h2>Movies...</h2>', //'./movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {

	genres: Array<Object>;

  constructor(private _moviesServices: MoviesService) {
    /*this._moviesServices.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
    });*/
  }

  ngOnInit() {
  }

}
