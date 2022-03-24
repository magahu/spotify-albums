import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from '../../../models/Album.models';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() album: Album = {
    album_type: '',
    artists: [],
    external_urls: {
      spotify: '',
    },
    href: '',
    id: '',
    images: [],
    name: '',
    release_date: '',
    release_date_precision: '',
    total_tracks: 0,
    type: '',
    uri: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

}
