import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ProfileManagmentRoutingModule } from './profile-managment.routing.module';
import { ProfileManagmentComponent } from './profile-managment.component';
import { PageHeaderModule } from '../../shared/services';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ProfileManagmentRoutingModule, PageHeaderModule,DataTablesModule,FormsModule],
    declarations: [ProfileManagmentComponent]
})
export class ProfileManagmentModule {}
