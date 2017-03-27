import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { CommonModule } from '@angular/common';

import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';

@NgModule({
  imports: [
    RegistroRoutingModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  declarations: [ RegistroComponent ]
})
export class RegistroModule { }
