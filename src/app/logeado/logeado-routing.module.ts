import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index2Component } from './index2/index2.component';

const routes: Routes = [
  
  {    
    path: '',
    data: {
    title: 'Paginas Logeado'},

    children: [
      {
        path: 'index2',
        component: Index2Component,
        data: {
          title: ''
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogeadoRoutingModule {}
