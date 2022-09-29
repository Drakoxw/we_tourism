import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/public/views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent
  },
  {
    path: 'public',
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
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
