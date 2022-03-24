import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/Album.models';
import { AlbumsService } from './../../../core/services/albums/albums.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) { }

  album: Album = {
    album_type: '',
    artists: [],
    available_markets: [],
    copyrights: [],
    external_ids: {upc: ''},
    external_urls: { spotify: '' },
    genres: [],
    href: '',
    id: '',
    images: [],
    label: '',
    name: '',
    release_date: '',
    release_date_precision: '',
    total_tracks: 0,
    tracks: {
      href: '',
      items: [],
      limit: 0,
      next: null,
      offset: 0,
      previous: null,
      total: 0
    },
    type: '',
    uri: ''
  }

 
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      //console.log(params);
      const id = params['album-id'];
      const obj = this.albumsService.getAlbum(id);
      obj.subscribe((data: Album)=>{
        console.log(data);
        this.album = data;
      })
    }) 
  }
}
