import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Superviseurtest1Component } from './superviseurtest1.component';

const routes: Routes = [
    { path: '', component: Superviseurtest1Component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Superviseurtest1RoutingModule { }
