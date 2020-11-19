import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import {fadeInAnimation} from "../../core/route-animation/route.animation";
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-animation-demo',
   templateUrl:'./animation-component.html',
   styleUrls: ['./animation-component.scss'],
   encapsulation: ViewEncapsulation.None,
   host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class AnimationComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Animation').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });

      var animation = document.getElementsByClassName('animate-element');
      for(let i = 0;i<animation.length;i++){
         animation[i].addEventListener("click",function(event) {
            document.getElementById('animation-object').className = ''; 
            var animation_class = animation[i].getAttribute('data-animation-class');
            document.getElementById('animation-object').classList.add('animated', animation_class);
         })
      }
   }

   effects = [
      'bounce',
      'flash',
      'pulse',
      'rubberBand',
      'shake',
      'swing',
      'tada',
      'wobble',
      'bounceIn',
      'bounceInDown',
      'bounceInLeft',
      'bounceInUp',
      'bounceInRight',
      'bounceOut',
      'bounceOutDown',
      'bounceOutLeft',
      'bounceOutRight',
      'bounceOutUp',
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpBig',
      'fadeOut',
      'fadeOutDown',
      'fadeOutDownBig',
      'fadeOutLeft',
      'fadeOutLeftBig',
      'fadeInRight',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpBig',
      'flip',
      'flipInX',
      'flipInY',
      'flipOutX',
      'flipOutY',
      'lightSpeedIn',
      'lightSpeedOut',
      'rotateIn',
      'rotateInDownLeft',
      'rotateInDownRight',
      'rotateInUpLeft',
      'rotateInUpRight',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpBig',
      'flip',
      'flipInX',
      'flipInY',
      'flipOutX',
      'flipOutY',
      'lightSpeedIn',
      'lightSpeedOut',
      'zoomIn',
      'zoomInDown',
      'zoomInLeft',
      'zoomInRight',
      'zoomInUp',
      'zoomOut',
      'zoomOutDown',
      'zoomOutLeft',
      'zoomOutRight',
      'zoomOutUp',
      'hinge',
      'rollIn',
      'rollOut'
   ];
   	
}



