import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminadministratifComponent } from './adminadministratif.component';
import {CartoadministratifComponent} from "./cartoadministratif/cartoadministratif.component";

const routes: Routes = [
    { path: '', component: AdminadministratifComponent },
    { path: 'cartoadministratif', component: CartoadministratifComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminadministratifRoutingModule { }
