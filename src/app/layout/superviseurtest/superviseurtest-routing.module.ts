import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperviseurtestComponent } from './superviseurtest.component';

const routes: Routes = [
    { path: '', component: SuperviseurtestComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SuperviseurtestRoutingModule { }
