import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminadministratifComponent } from './adminadministratif.component';

const routes: Routes = [
    { path: '', component: AdminadministratifComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminadministratifRoutingModule { }
