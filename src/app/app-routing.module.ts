import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/public/views/home/home.component';
import { LoginComponent } from './modules/public/views/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent
  },
  {
    path: 'login',
    loadChildren: () =>
    import('./modules/public/public.module').then((m) => m.PublicModule)
  },
  {
    path: 'clientes',
    loadChildren: () =>
    import('./modules/clients/clients.module').then((m) => m.ClientsModule)
  },
  {
    path: 'agentes',
    loadChildren: () =>
    import('./modules/agents/agents.module').then((m) => m.AgentsModule)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
