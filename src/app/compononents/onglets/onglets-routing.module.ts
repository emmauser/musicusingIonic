import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngletsPage } from './onglets.page';

const routes: Routes = [
  {
    path: '',
    component: OngletsPage,
    children: [ 
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: '/onglets/home',
        pathMatch: 'full'
      },
      {
        path: 'music',
        loadChildren: () => import('../music/music.module').then( m => m.MusicPageModule)
      },
      {
        path: 'apropos',
        loadChildren: () => import('../apropos/apropos.module').then( m => m.AproposPageModule)
      },
      {
        path: 'songsparcategorie',
        loadChildren: () => import('../songsparcategorie/songsparcategorie.module').then( m => m.SongsparcategoriePageModule)
      },
      {
        path: 'playmusic',
        loadChildren: () => import('../playmusic/playmusic.module').then( m => m.PlaymusicPageModule)
      },
      {
        path: 'allmusic',
        loadChildren: () => import('../allmusic/allmusic.module').then( m => m.AllmusicPageModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngletsPageRoutingModule {}
