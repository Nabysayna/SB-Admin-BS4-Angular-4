import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperviseurComponent } from './superviseur.component';
import {SuivionepointComponent} from "../suivionepoint/suivionepoint.component";

const routes: Routes = [
    { path: '', component: SuperviseurComponent },
    { path: 'suivionepoint', component: SuivionepointComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuperviseurRoutingModule { }
