import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index1Component } from './index1.component';

const routes: Routes = [
  {
    path: '',
    component: Index1Component,
    data: {
      title: 'Index1'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Index1RoutingModule {}