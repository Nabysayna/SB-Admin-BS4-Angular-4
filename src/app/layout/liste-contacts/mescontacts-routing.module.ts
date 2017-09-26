import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MesContactsComponent } from './mescontacts.component';

const routes: Routes = [
    { path: '', component: MesContactsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MesContactsRoutingModule { }
