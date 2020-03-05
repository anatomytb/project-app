import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5DetailPage } from './tab5-detail.page';


const routes: Routes = [
  {
    path: '',
    component: Tab5DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ] ,
})
export class Tab5DetailPageRoutingModule {}
