import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperviseurComponent } from './superviseur.component';

const routes: Routes = [
    { path: '', component: SuperviseurComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuperviseurRoutingModule { }
