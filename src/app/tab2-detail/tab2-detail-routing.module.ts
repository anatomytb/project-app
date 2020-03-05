import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2DetailPage } from './tab2-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2DetailPageRoutingModule {}
