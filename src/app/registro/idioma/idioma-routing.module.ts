import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdiomaComponent } from './idioma.component';

const routes: Routes = [
  {
    path: '',
    component: IdiomaComponent,
    data: {
      title: 'Registro'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdiomaRoutingModule {}