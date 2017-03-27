import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Er404Component } from './er404.component';

const routes: Routes = [
  {
    path: '',
    component: Er404Component,
    data: {
      title: 'Error404'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Er404RoutingModule {}