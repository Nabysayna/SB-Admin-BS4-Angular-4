import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandedepotComponent } from './demandedepot.component';

const routes: Routes = [
    { path: '', component: DemandedepotComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemandedepotRoutingModule { }
