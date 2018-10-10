import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { PageHeaderComponent } from './../../shared/modules/page-header/page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {ReactiveFormsModule} from '@angular/forms' ;
import { FormsModule} from '@angular/forms';
import { SearchPipe } from './../../shared/pipes/search.pipe';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent,

        SearchPipe
    ]
})
export class DashboardModule {}
