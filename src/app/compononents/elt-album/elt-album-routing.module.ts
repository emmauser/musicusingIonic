import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EltAlbumPage } from './elt-album.page';

const routes: Routes = [
  {
    path: '',
    component: EltAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EltAlbumPageRoutingModule {}
