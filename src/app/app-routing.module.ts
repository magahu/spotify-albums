import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';

/*const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./albums/albums.module').then(m=>m.AlbumsModule)
  }
];*/

const routes: Routes = [
  {
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'home',
      redirectTo:'/',
      pathMatch: 'full',
    },
    {
      path: '',
      loadChildren: () => import('./albums/albums.module').then(m=>m.AlbumsModule)
    }
  ]
},
{
  path: '',
  loadChildren: () => import('./albums/albums.module').then(m=>m.AlbumsModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule { }

