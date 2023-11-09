import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllmusicPageRoutingModule } from './allmusic-routing.module';

import { AllmusicPage } from './allmusic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllmusicPageRoutingModule
  ],
  declarations: [AllmusicPage]
})
export class AllmusicPageModule {
  
}
