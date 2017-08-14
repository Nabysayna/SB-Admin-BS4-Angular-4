import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratifComponent } from './administratif.component';

const routes: Routes = [
    { path: '', component: AdministratifComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministratifRoutingModule { }
