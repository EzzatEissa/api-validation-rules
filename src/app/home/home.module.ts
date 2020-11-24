import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './component/main/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule
  ]
})
export class HomeModule { }
