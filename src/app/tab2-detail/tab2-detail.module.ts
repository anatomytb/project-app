import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2DetailPageRoutingModule } from './tab2-detail-routing.module';

import { Tab2DetailPage } from './tab2-detail.page';
import { DateFormat5Pipe } from './date-format5.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2DetailPageRoutingModule
  ],
  declarations: [Tab2DetailPage , DateFormat5Pipe]
})
export class Tab2DetailPageModule {}
