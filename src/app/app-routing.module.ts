import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'onglets/home',
    pathMatch: 'full'
  },
  {
    path: 'onglets',
    loadChildren: () => import('./compononents/onglets/onglets.module').then( m => m.OngletsPageModule)
  },
 {
    path: 'songsparcategorie',
    loadChildren: () => import('./compononents/songsparcategorie/songsparcategorie.module').then( m => m.SongsparcategoriePageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./compononents/music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./compononents/apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'playmusic',
    loadChildren: () => import('./compononents/playmusic/playmusic.module').then( m => m.PlaymusicPageModule)
  },
  {
    path: 'allmusic',
    loadChildren: () => import('./compononents/allmusic/allmusic.module').then( m => m.AllmusicPageModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./compononents/albums/albums.module').then( m => m.AlbumsPageModule)
  },
  {
    path: 'artiste',
    loadChildren: () => import('./compononents/artiste/artiste.module').then( m => m.ArtistePageModule)
  },
  {
    path: 'elt-album',
    loadChildren: () => import('./compononents/elt-album/elt-album.module').then( m => m.EltAlbumPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
