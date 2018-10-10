import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Checkpassword } from './validators';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ResetPassword : any = {};
  signUpForm: FormGroup;
  hide:boolean = false;
  constructor(private route:ActivatedRoute,fb: FormBuilder) { 
    this.signUpForm = fb.group({
      oldpassword: ['', Validators.compose([
        Validators.required,
        Checkpassword.checkPasswordLength
      ])],
      passwords: fb.group({
        newpassword1: ['', Validators.required],
        newpassword2: ['', Validators.required]
      },{validator: Checkpassword.isSamePassword})    
  });
    const id: string = route.snapshot.params.token;
  
  }

  ngOnInit() {
   
  }

}
