import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataLoaderRoutingModule } from './data-loader-routing.module';
import { DataLoaderComponent } from './data-loader.component';
import { PageHeaderModule } from '../../shared/services';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DataLoaderRoutingModule,
        PageHeaderModule,
        HttpModule   
    ],
    declarations: [
        DataLoaderComponent,
       
    ]
})
export class DataLoaderModule {}
