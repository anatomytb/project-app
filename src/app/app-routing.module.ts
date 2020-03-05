import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1-detail',
    loadChildren: () => import('./tab1-detail/tab1-detail.module').then( m => m.Tab1DetailPageModule)
  },
  {
    path: 'tab2-detail',
    loadChildren: () => import('./tab2-detail/tab2-detail.module').then( m => m.Tab2DetailPageModule)
  },
  {
    path: 'tab3-detail',
    loadChildren: () => import('./tab3-detail/tab3-detail.module').then( m => m.Tab3DetailPageModule)
  },
  {
    path: 'tab5-detail',
    loadChildren: () => import('./tab5-detail/tab5-detail.module').then( m => m.Tab5DetailPageModule)
  },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
