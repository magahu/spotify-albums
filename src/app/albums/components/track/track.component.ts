import { Component, Input, OnInit } from '@angular/core';
import { Track } from './../../../models/Tracks.models';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input() track: Track = {
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
  };

  constructor() { }

  ngOnInit(): void {
  }

}
