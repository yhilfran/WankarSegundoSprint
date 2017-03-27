import { NgModule } from '@angular/core';
import { Index2Component } from './index2/index2.component';
import { LogeadoRoutingModule } from './logeado-routing.module';

@NgModule({
  imports: [ LogeadoRoutingModule ],
  declarations: [
    Index2Component,
  ]
})
export class LogeadoModule { }
