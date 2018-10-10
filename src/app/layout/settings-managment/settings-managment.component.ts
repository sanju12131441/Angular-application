import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-settings-managment',
  templateUrl: './settings-managment.component.html',
  styleUrls: ['./settings-managment.component.scss']
})
export class SettingsManagmentComponent implements OnInit {
  changePassword : any = {};
  hide:boolean = false;
  constructor() { }
  changepassword(){
    console.log(this.changePassword.password,'Reset password password ');
    
}
  ngOnInit() {
  }

}
