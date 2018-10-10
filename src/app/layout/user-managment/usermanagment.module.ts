import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { UserManagmentRoutingModule } from './user-managment.routing.module';
import { UsermanagmentComponent } from './usermanagment.component';
import {HttpClientModule} from '@angular/common/http';
import { PageHeaderModule } from '../../shared/services';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';

@NgModule({
    imports: [CommonModule, UserManagmentRoutingModule, PageHeaderModule,DataTablesModule,FormsModule,HttpClientModule],
    declarations: [UsermanagmentComponent]
})
export class UserManagmentModule {}
