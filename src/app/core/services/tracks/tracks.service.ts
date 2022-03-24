import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TracksResponse, TrackDetail } from 'src/app/models/Tracks.models';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  spotifyUrl: string = 'https://api.spotify.com/v1';
  tracksUrl: string = 'tracks';
  albumsUrl: string = 'albums';
  auth_token = 'BQCEZEeNBy9W21kSXlFOoujj2wwsX01hH4UknyIO7sqeDDT_0hqOPCmOrM0OvD4EdKyWT9qA4atripUOUhARFoQHsboCMBnQ_OC5LW-nSimzl0Q-LQ-vH_NzQcAYoZ_Q1k85y2sKOUlb5vY';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });
 

  constructor(private http: HttpClient) { }

  getTracks(albumId: string){
    let fullUrl = `${this.spotifyUrl}/${this.albumsUrl}/${albumId}/${this.tracksUrl}`;
    let response = this.http.get<TracksResponse>(fullUrl, {headers:this.headers});
    return response;
  }

  getTrack(trackId: string){
    let fullUrl = `${this.spotifyUrl}/${this.tracksUrl}/${trackId}`;
    console.log(fullUrl);
    //debugger;
    let response = this.http.get<TrackDetail>(fullUrl, {headers:this.headers});
    return response;
  }
}
