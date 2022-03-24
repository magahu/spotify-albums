import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { TrackDetailComponent} from './components/track-detail/track-detail.component';
import { SearchInputComponent } from './components/search-input/search-input.component'; 

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent
  },
  {
    path: ':album-id',
    component: AlbumDetailComponent
  },
  {
    path: ':album-id/track/:track-id',
    component: TrackDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
