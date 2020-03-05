import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3DetailPageRoutingModule } from './tab3-detail-routing.module';

import { Tab3DetailPage } from './tab3-detail.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3DetailPageRoutingModule
  ],
  declarations: [Tab3DetailPage, ]
})
export class Tab3DetailPageModule {}
