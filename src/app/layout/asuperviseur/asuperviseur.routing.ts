import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsuperviseurComponent } from './asuperviseur.component';

const routes: Routes = [
    { path: '', component: AsuperviseurComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AsuperviseurRouting { }
