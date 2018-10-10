import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'data-loader', loadChildren: './data-loader/data-loader.module#DataLoaderModule' },
            { path: 'usermanagment', loadChildren: './user-managment/usermanagment.module#UserManagmentModule' },
            { path: 'rolemanagment', loadChildren: './role-managment/role-managment.module#RoleManagmentModule' },
            { path: 'profile', loadChildren: './profile-managment/profile-managment.module#ProfileManagmentModule' },
            { path: 'settings', loadChildren: './settings-managment/settings-managment.module#SettingsManagmentModule' }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
