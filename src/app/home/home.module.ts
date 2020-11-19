import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './component/main/main.component';
import {FormsModule} from '@angular/forms';


import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    TranslateModule,
    SharedModule
  ]
})
export class HomeModule { }
