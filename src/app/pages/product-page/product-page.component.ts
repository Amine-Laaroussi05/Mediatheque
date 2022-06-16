import { Component, Input, OnInit } from '@angular/core';

import { Album } from 'app/_models/album.model';
import { Film } from 'app/_models/film.model';

import { AlbumService } from 'app/_services/album.service';
import { FilmService } from 'app/_services/film.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  films: Film[] = [];
  albums: Album[] = [];


  constructor(private filmService: FilmService, private albumService: AlbumService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => {this.films = films});
    this.albumService.getAlbums().subscribe((albums)=> {this.albums = albums});
  }

}
