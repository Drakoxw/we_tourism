import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OauthGuard } from 'src/app/core/guards/oauth.guard';
import { SecureComponent } from './views/secure/secure.component';

const routes: Routes = [
  {
    path: 'secure',
    canActivate: [OauthGuard],
    component: SecureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRoutingModule { }
