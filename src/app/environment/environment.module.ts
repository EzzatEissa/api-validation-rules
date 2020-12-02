import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EnvironmentRoutingModule} from './environment-routing.module';
import {MainComponent} from './component/main/main.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    EnvironmentRoutingModule,
    SharedModule
  ]
})
export class EnvironmentModule { }
