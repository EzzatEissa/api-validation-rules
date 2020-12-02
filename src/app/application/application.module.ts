import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import {MainComponent} from './component/main.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule
  ]
})
export class ApplicationModule { }
