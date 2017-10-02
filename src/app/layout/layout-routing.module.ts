import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'mescontacts', loadChildren: './liste-contacts/mescontacts.module#MesContactsModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'superviseur', loadChildren: './superviseur/superviseur.module#SuperviseurModule' },
            { path: 'admincom', loadChildren: './admincommercial/admincommercial.module#AdmincommercialModule' },
/*
            { path: 'administratif', loadChildren: './administratif/administratif.module#AdministratifModule' },
            { path: 'adminadministratif', loadChildren: './adminadministratif/adminadministratif.module#AdminadministratifModule' },
*/
            { path: 'manager', loadChildren: './manager/manager.module#ManagerModule' },
            { path: 'managerstock', loadChildren: './managerstock/managerstock.module#ManagerstockModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
