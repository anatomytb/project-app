import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5DetailPageRoutingModule } from './tab5-detail-routing.module';

import { Tab5DetailPage } from './tab5-detail.page';
import { DateFormat8Pipe } from './date-format8.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5DetailPageRoutingModule
  ],
  declarations: [Tab5DetailPage , DateFormat8Pipe]
})
export class Tab5DetailPageModule {}
