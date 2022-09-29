import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SubRoutingModule } from './sub-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    SubRoutingModule,
    CommonModule
  ]
})
export class PublicModule { }
