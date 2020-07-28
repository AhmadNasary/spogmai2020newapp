import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivetreamPageRoutingModule } from './livetream-routing.module';

import { LivetreamPage } from './livetream.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivetreamPageRoutingModule
  ],
  declarations: [LivetreamPage]
})
export class LivetreamPageModule {}
