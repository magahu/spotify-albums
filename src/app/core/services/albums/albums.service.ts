import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { AlbumsResponse, Album } from '../../../models/Album.models'

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  spotifyUrl: string = 'https://api.spotify.com/v1';
  searchUrl: string = 'search';
  albumsUrl: string = 'albums';
  auth_token = 'BQCEZEeNBy9W21kSXlFOoujj2wwsX01hH4UknyIO7sqeDDT_0hqOPCmOrM0OvD4EdKyWT9qA4atripUOUhARFoQHsboCMBnQ_OC5LW-nSimzl0Q-LQ-vH_NzQcAYoZ_Q1k85y2sKOUlb5vY';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });

  constructor(private http: HttpClient) { }

  /*  Request all albums related elements for a given query */
  getAlbums(query: string){
    
    
    let type = 'album';
    let market = 'mx';
    let offset = 0;
    let limit = 20;
   
    let fullUrl  =  `${this.spotifyUrl}/${this.searchUrl}?query=${query}&type=${type}&market=${market}&offset=${offset}&limit=${limit}`;
    let response = this.http.get<AlbumsResponse>(fullUrl, {headers:this.headers});

    return response;
  }
 
  /* Request an album for a given id */
  getAlbum(id: string){
    let fullUrl = `${this.spotifyUrl}/${this.albumsUrl}/${id}`;
    let response = this.http.get<Album>(fullUrl, {headers:this.headers});
    return response;
  }

}

