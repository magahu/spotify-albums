import { Component, OnInit } from '@angular/core';
import { TracksService } from './../../../core/services/tracks/tracks.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TrackDetail, Track} from './../../../models/Tracks.models';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit {

  /*track: Track = {
    artists: [],
    available_markets: [],
    disc_number: 0,
    duration_ms: 0,
    explicit: false,
    external_urls: { spotify: ''},
    href: '',
    id: '',
    is_local: false,
    name: '',
    preview_url: '',
    track_number: 0,
    type: '',
    uri: ''
  }*/

  trackDetail: TrackDetail = {
    album: {
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
    },
    artists: [{
      external_urls: { spotify: ''},
    href: '',
    id: '',
    name: '',
    type: '',
    uri: '',
    }],
    available_markets: [],
    disc_number: 0,
    duration_ms: 0,
    explicit: false,
    external_ids: { isrc: ''},
    external_urls: { spotify: ''},
    href: '',
    id: '',
    is_local: false,
    name: '',
    popularity: 0,
    preview_url: '',
    track_number: 0,
    type: {
      artists: [],
      available_markets: [],
      disc_number: 0,
      duration_ms: 0,
      explicit: false,
      external_urls: {spotify: ''},
      href: '',
      id: '',
      is_local: false,
      name: '',
      preview_url: '',
      track_number: 0,
      type: '',
      uri: ''
    },
    uri: '',
    }
    

  constructor(private trackService: TracksService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      //console.log(params);
      const id = params['track-id'];
      const obj = this.trackService.getTrack(id);
      obj.subscribe((data: TrackDetail)=>{
        console.log(data);
        this.trackDetail = data;
      })
    }) 
  }

}
