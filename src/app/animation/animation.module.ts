import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AnimationComponent } from './animation/animation.component';
import { AnimationRoutes } from './animation.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AnimationRoutes),
    TranslateModule
  ],
  declarations: [ 
    AnimationComponent
  ]
})

export class AnimationDemoModule {}
