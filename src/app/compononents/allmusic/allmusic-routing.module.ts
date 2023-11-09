import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllmusicPage } from './allmusic.page';

const routes: Routes = [
  {
    path: '',
    component: AllmusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllmusicPageRoutingModule {}
