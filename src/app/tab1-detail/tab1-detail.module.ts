import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1DetailPageRoutingModule } from './tab1-detail-routing.module';
 
import { Tab1DetailPage } from './tab1-detail.page';
import { DateFormat3Pipe } from './date-format3.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1DetailPageRoutingModule
  ],
  declarations: [Tab1DetailPage ,DateFormat3Pipe]
})
export class Tab1DetailPageModule {}
