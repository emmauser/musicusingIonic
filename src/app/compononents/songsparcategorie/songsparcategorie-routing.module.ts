import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongsparcategoriePage } from './songsparcategorie.page';

const routes: Routes = [
  {
    path: '',
    component: SongsparcategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsparcategoriePageRoutingModule {}
