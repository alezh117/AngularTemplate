import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [    
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
