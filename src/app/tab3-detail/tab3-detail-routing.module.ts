import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3DetailPage } from './tab3-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3DetailPageRoutingModule {}
