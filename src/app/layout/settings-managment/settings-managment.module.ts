import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SettingsManagmentRoutingModule } from './settings-managment.routing.module';
import { SettingsManagmentComponent } from './settings-managment.component';
import { PageHeaderModule } from '../../shared/services';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, SettingsManagmentRoutingModule, PageHeaderModule,DataTablesModule,FormsModule],
    declarations: [SettingsManagmentComponent]
})
export class SettingsManagmentModule {}
