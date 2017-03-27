import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
