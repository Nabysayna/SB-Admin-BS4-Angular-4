import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComptableComponent } from './comptable.component';

const routes: Routes = [
    { path: '', component: ComptableComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComptableRoutingModule { }
