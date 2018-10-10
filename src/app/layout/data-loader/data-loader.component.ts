import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import * as $ from 'jquery';


import { AuthenticationService } from '../../authentication.service';
@Component({
    selector: 'app-dataloader',
    templateUrl: './data-loader.component.html',
    styleUrls: ['./data-loader.component.scss'],
    animations: [routerTransition()]
})
export class DataLoaderComponent implements OnInit {
   files = "";
   type = "";
   size='';
upload:boolean = false;
    constructor(private auth:AuthenticationService) {
    }

    afuConfig = {
        uploadAPI: {
            url: "https://slack.com/api/files.upload"
        }
    };

    updateFile(event) {

        this.upload = true;
       
      for (var i = 0; i < event.target.files.length; i++) { 
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;
      this.files = name;
      this.type = type;
      this.size=  Math.round(size / 1024) + " KB"

      console.log ('Name: ' + name + "\n" + 
        'Type: ' + type + "\n" +
        'Last-Modified-Date: ' + modifiedDate + "\n" +
        'Size: ' + Math.round(size / 1024) + " KB");
    }
  
   
      }
      
   
    ngOnInit() {
   
    }

  
}
