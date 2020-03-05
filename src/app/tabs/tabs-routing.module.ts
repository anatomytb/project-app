import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab-home/tab-home.module').then(m => m.TabHomePageModule)
          }
        ]
      },
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab5/tab5.module').then(m => m.Tab5PageModule)
          }
        ]
      },
      {
        path: 'tab1-detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1-detail/tab1-detail.module').then(m => m.Tab1DetailPageModule)
          }
        ]
      },
      {
        path: 'tab2-detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2-detail/tab2-detail.module').then(m => m.Tab2DetailPageModule)
          }
        ]
      },
      {
        path: 'tab3-detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3-detail/tab3-detail.module').then(m => m.Tab3DetailPageModule)
          }
        ]
      },
      {
        path: 'tab5-detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab5-detail/tab5-detail.module').then(m => m.Tab5DetailPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
