import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

//Layouts
import { Layout1Component } from './layouts/layout1.component';
import { Layout2Component } from './layouts/layout2.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index1',
    pathMatch: 'full',
  },
  {
    path: '',
    component: Layout1Component,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'index1',
        loadChildren: './index1/index1.module#Index1Module'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'error404',
        loadChildren: './er404/er404.module#Er404Module'
      },
      {
        path: 'error500',
        loadChildren: './er500/er500.module#Er500Module'
      },
      {
        path: 'registro',
        loadChildren: './registro/registro-principal/registro.module#RegistroModule'
      },
      {
        path: 'idioma',
        loadChildren: './registro/idioma/idioma.module#IdiomaModule'
      },
    ]
  },
  {
    path: 'logeado',
    component: Layout2Component,
    data: {
      title: 'logeado'
    },
    children: [
      {
        path: '',
        loadChildren: './logeado/logeado.module#LogeadoModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
