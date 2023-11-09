import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EltAlbumPageRoutingModule } from './elt-album-routing.module';

import { EltAlbumPage } from './elt-album.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EltAlbumPageRoutingModule
  ],
  declarations: [EltAlbumPage]
})
export class EltAlbumPageModule {}
