import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

import {MainComponent} from './main/main.component';

export const AppRoutes: Routes = [

  {
    path: '',
    redirectTo: 'api-rule',
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
      path: 'api-rule', loadChildren: () =>
        import('./home/home.module').then(m => m.HomeModule)
    }],
  },

  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [{
      path: 'api-rule/app', loadChildren: () =>
        import('./application/application.module').then(m => m.ApplicationModule)
    }],
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [{
      path: 'api-rule/env', loadChildren: () =>
        import('./environment/environment.module').then(m => m.EnvironmentModule)
    }],
  },
  {
    path: '**',
    redirectTo: 'api-rule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}

