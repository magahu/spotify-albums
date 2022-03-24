import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './../../../core/services/albums/albums.service';
import {AlbumsResponse, Album} from './../../../models/Album.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

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

  ngOnInit(): void {
  }

  async searchAlbums(event: Event){

    event.preventDefault();
    if(this.searchField){
      console.log(this.searchField);
      let response = await this.albumsService.getAlbums(this.searchField)
      response.subscribe((data: AlbumsResponse)=>{
        //debugger;
        console.log(data.albums.items);
        this.items = data.albums.items;
      });
     
      
      console.log(`params: ${response}`);
    }
  }

}
