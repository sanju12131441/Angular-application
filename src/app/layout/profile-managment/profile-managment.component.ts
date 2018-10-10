import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-managment',
  templateUrl: './profile-managment.component.html',
  styleUrls: ['./profile-managment.component.scss']
})
export class ProfileManagmentComponent implements OnInit {
email:any ={};
firstname:any = {};
lastname:any ={};

  constructor() { }

  ngOnInit() {
    console.log(this.email);
    console.log(this.firstname);
    console.log(this.lastname);
  }

}
