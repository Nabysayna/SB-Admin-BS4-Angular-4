<<<<<<< HEAD
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
            { path: 'formsentool', loadChildren: './formclientsentool/formclientsentool.module#FormclientsentoolModule' },
            { path: 'deposit', loadChildren: './deposit/deposit.module#depositModule' },

            { path: 'superviseur', loadChildren: './superviseur/superviseur.module#SuperviseurModule' },
            { path: 'admincom', loadChildren: './admincommercial/admincommercial.module#AdmincommercialModule' },

            { path: 'adminadministratif', loadChildren: './adminadministratif/adminadministratif.module#AdminadministratifModule' },

            { path: 'manager', loadChildren: './manageradmin/manageradmin.module#ManageradminModule' },
            { path: 'managerstock', loadChildren: './managerstock/managerstock.module#ManagerstockModule' },
            { path: 'marketingcom', loadChildren: './marketingcom/marketingcom.module#MarketingcomModule' },
            { path: 'comptable', loadChildren: './comptable/comptable.module#ComptableModule' },
            { path: 'adminsupport', loadChildren: './adminsupport/adminsupport.module#AdminsupportModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
=======
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
            { path: 'formsentool', loadChildren: './formclientsentool/formclientsentool.module#FormclientsentoolModule' },
            { path: 'demandedepot', loadChildren: './demandedepot/demandedepot.module#DemandedepotsModule' },

            { path: 'superviseur', loadChildren: './superviseur/superviseur.module#SuperviseurModule' },
            { path: 'admincom', loadChildren: './admincommercial/admincommercial.module#AdmincommercialModule' },

            { path: 'adminadministratif', loadChildren: './adminadministratif/adminadministratif.module#AdminadministratifModule' },

            { path: 'manager', loadChildren: './manageradmin/manageradmin.module#ManageradminModule' },
            { path: 'managerstock', loadChildren: './managerstock/managerstock.module#ManagerstockModule' },
            { path: 'marketingcom', loadChildren: './marketingcom/marketingcom.module#MarketingcomModule' },
            { path: 'comptable', loadChildren: './comptable/comptable.module#ComptableModule' },
            { path: 'adminsupport', loadChildren: './adminsupport/adminsupport.module#AdminsupportModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
>>>>>>> 7284c611c5547bd7280c333b3af5e160eec97cfe
