import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LOGINRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LOGINRoutingModule
  ]
})
export class LOGINModule { }
