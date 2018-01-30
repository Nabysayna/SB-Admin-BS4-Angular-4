import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerstockComponent } from './managerstock.component';

const routes: Routes = [
    { path: '', component: ManagerstockComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagerstockRoutingModule { }
