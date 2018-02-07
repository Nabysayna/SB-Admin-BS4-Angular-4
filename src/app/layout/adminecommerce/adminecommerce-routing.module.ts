import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminecommerceComponent } from './adminecommerce.component';

const routes: Routes = [
    { path: '', component: AdminecommerceComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminecommerceRoutingModule { }
