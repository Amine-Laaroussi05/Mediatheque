import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from 'app/_models/album.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

getAlbums(): Observable<Album[]>{
  return this.httpClient.get<Album[]>(this.apiUrl + '/albums');
}

getAlbum(id: number): Observable<Album>{
  return this.httpClient.get<Album>(`${this.apiUrl}/albums/${id}`);
}

createAlbum(album: Album): Observable<Album> {
  return this.httpClient.post<Album>(`${this.apiUrl}/albums`,album);
}

updateAlbum(album: Album): Observable<Album> {
  return this.httpClient.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
}

deleteAlbum(id: number): Observable<Album> {
  return this.httpClient.delete<Album>(`${this.apiUrl}/albums/${id}`);
}

}
function album<T>(arg0: string, album: any): Observable<Album> {
  throw new Error('Function not implemented.');
}

