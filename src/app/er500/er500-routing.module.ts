import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Er500Component } from './er500.component';

const routes: Routes = [
  {
    path: '',
    component: Er500Component,
    data: {
      title: 'Error500'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Er500RoutingModule {}