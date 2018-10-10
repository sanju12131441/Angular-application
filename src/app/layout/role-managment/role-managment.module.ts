import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { RoleManagmentRoutingModule } from './role-managment.routing.module';
import { RoleManagmentComponent } from './role-managment.component';
import { PageHeaderModule } from '../../shared/services';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [CommonModule, RoleManagmentRoutingModule, PageHeaderModule,DataTablesModule,FormsModule],
    declarations: [RoleManagmentComponent]
})
export class RoleManagmentModule {}
