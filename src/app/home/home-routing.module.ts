import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './component/main/main.component';


const routes: Routes = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
