import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Film } from 'app/_models/film.model';
import { Album } from 'app/_models/album.model';

import { FilmService } from 'app/_services/film.service';
import { AlbumService } from 'app/_services/album.service';


@Component({
  selector: 'app-details-pages',
  templateUrl: './details-pages.component.html',
  styleUrls: ['./details-pages.component.scss']
})
export class DetailsPagesComponent implements OnInit {

  product!: Film | Album;

  constructor(private router: Router, private route: ActivatedRoute, private filmService: FilmService, private albumService: AlbumService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }

  private subscribeFilm(id: number): void{
    this.filmService.getFilm(id).subscribe((film: Film) => this.product = film);
  }

private subscribeAlbum(id: number): void{
  this.albumService.getAlbum(id).subscribe((album: Album) => this.product = album);
}

private setSubscribe(type: string | null, id: string | null){
  if(id && type === 'albums'){
    this.subscribeAlbum(+id);
  } else if(id && type === 'films'){
    this.subscribeFilm(+id);
  } else if(!id || type){
    this.router.navigate(['/not-found']);
  }
}

}
