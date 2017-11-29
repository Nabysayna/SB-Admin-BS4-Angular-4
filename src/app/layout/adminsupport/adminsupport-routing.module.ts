import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsupportComponent } from './adminsupport.component';

const routes: Routes = [
    { path: '', component: AdminsupportComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminsupportRoutingModule { }
