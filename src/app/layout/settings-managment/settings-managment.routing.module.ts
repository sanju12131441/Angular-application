import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsManagmentComponent } from './settings-managment.component';

const routes: Routes = [
    {
        path: '', component: SettingsManagmentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsManagmentRoutingModule {
}
