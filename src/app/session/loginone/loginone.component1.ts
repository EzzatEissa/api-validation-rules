import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { Router} from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import {AuthService} from "../../core/service/auth/auth.service";


@Component({
   selector: 'ms-loginone-session1',
   templateUrl:'./loginone-component1.html',
   styleUrls: ['./loginone-component1.scss'],
   encapsulation: ViewEncapsulation.None,
})

export class LoginoneComponent1 {

   email    : string ="demo@example.com";
   password : string = "0123456789";
   name     :string;

   constructor( private router: Router,
                private authService : AuthService,
                public translate: TranslateService) { }

   // when email and password is correct, user logged in.
   logIn(value){
      this.authService.loginUser(value);
   }

}



