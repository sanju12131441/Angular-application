import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './usermanagment.component.html',
    styleUrls: ['./usermanagment.component.scss'],
    animations: [routerTransition()]
})
export class UsermanagmentComponent {
  
    constructor() { }
 
}
