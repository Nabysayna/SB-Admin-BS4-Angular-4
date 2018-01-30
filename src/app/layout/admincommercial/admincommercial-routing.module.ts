import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmincommercialComponent } from './admincommercial.component';

const routes: Routes = [
    { path: '', component: AdmincommercialComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdmincommercialRoutingModule { }
