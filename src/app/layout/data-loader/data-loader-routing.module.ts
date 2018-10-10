import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataLoaderComponent } from './data-loader.component';

const routes: Routes = [
    {
        path: '', component: DataLoaderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataLoaderRoutingModule {
}
