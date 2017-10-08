import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageradminComponent } from './manageradmin.component';

const routes: Routes = [
    { path: '', component: ManageradminComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageradminRoutingModule { }
