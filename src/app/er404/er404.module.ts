import { NgModule } from '@angular/core';
import { Er404Component } from './er404.component';
import { Er404RoutingModule } from './er404-routing.module';

@NgModule({
  imports: [
    Er404RoutingModule,
  ],
  declarations: [ Er404Component ]
})
export class Er404Module { }
