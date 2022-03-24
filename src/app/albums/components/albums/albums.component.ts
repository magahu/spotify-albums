import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './../../../core/services/albums/albums.service';
import {AlbumsResponse, Album} from '../../../models/Album.models';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  searchField: string = '';

  albumsResponse: AlbumsResponse = {
    albums: { 
      href: '',
      items: [],
      limit: 0,
      next: '',
      offset: 0,
      previous: 0,
      total: 0
    }
  }
  
  items: Album[] = [];


  constructor(private albumsService: AlbumsService) { }


  async searchAlbums(searchField: string){

    if(searchField){
      console.log(searchField);
      let response = await this.albumsService.getAlbums(searchField)
      response.subscribe((data: AlbumsResponse)=>{
        //debugger;
        console.log(data.albums.items);
        this.items = data.albums.items;
      });
     
      
      console.log(`params: ${response}`);
    }
  }

  ngOnInit(): void {
  }

}
