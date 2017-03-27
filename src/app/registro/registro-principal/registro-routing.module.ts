import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComponent } from './registro.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroComponent,
    data: {
      title: 'Registro'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule {}