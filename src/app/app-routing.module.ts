import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

import {MainComponent} from './main/main.component';

export const AppRoutes: Routes = [

  {
    path: '',
    redirectTo: 'consent',
    pathMatch: 'full',
  },
  {
    path: 'session', loadChildren: () =>
    import('./session/session.module').then(m => m.SessionDemoModule)
  },

  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [{
      path: 'consent', loadChildren: () =>
        import('./home/home.module').then(m => m.HomeModule)
    }],
  },
  {
    path: '**',
    redirectTo: 'consent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}

