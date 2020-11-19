import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit, OnDestroy {

   addNewUserForm  : FormGroup;
   emailPattern    : string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

   constructor(  public  activeModal: NgbActiveModal, 
                 public  router : Router,
                 private formBuilder : FormBuilder,
                 public translate: TranslateService) { }

   ngOnInit() {
      this.addNewUserForm = this.formBuilder.group({
         firstName    : ['',[Validators.required]],
         lastName     : ['',[Validators.required]],
         email        : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
         accountType  : ['',[Validators.required]]
      })

      var body = document.body;
      body.classList.add("management-modal");   
   }

   // onFormSubmit method is submit a add new user form.
   onFormSubmit(){
      this.activeModal.close(this.addNewUserForm.value);
   }

   ngOnDestroy(){
      var body = document.body;
      body.classList.remove("management-modal");
   }
}
