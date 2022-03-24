import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';

import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { TrackComponent } from './components/track/track.component';
import { TrackDetailComponent } from './components/track-detail/track-detail.component';
import { MaterialModule } from '../material/material.module';
import { SearchInputComponent } from './components/search-input/search-input.component';


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailComponent,
    TracksComponent,
    TrackComponent,
    TrackDetailComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class AlbumsModule { }
