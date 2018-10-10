import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileManagmentComponent } from './profile-managment.component';

const routes: Routes = [
    {
        path: '', component: ProfileManagmentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileManagmentRoutingModule {
}
