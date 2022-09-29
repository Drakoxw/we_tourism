import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubRoutingModule } from './sub-routing.module';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    SubRoutingModule,
    CommonModule
  ]
})
export class PublicModule { }
