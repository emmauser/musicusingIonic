import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongsparcategoriePageRoutingModule } from './songsparcategorie-routing.module';

import { SongsparcategoriePage } from './songsparcategorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongsparcategoriePageRoutingModule
  ],
  declarations: [SongsparcategoriePage]
})
export class SongsparcategoriePageModule {}
