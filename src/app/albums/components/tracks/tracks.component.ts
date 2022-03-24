import { Component, Input, OnInit } from '@angular/core';
import { TracksService } from './../../../core/services/tracks/tracks.service';
import { TracksResponse } from './../../../models/Tracks.models';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {



  constructor(private tracksService: TracksService) { }

  @Input() id: string = '';
  tracksResponse: TracksResponse = {
    href: '',
    items: [],
    limit: 0,
    next: null,
    offset: 0,
    previous: null,
    total: 0
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    if(this.id != ''){
    console.log('ONCHANGE '+ this.id);
    this.searchTracks();
    }
  
  }

  async searchTracks(){

      let response = await this.tracksService.getTracks(this.id);
      response.subscribe((data: TracksResponse)=>{
        //debugger;
        console.log(data);
        this.tracksResponse = data;
      });
     
      console.log(`params: ${response}`);
    }

}
