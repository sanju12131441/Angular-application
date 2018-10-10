import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleManagmentComponent } from './role-managment.component';

const routes: Routes = [
    {
        path: '', component: RoleManagmentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoleManagmentRoutingModule {
}
