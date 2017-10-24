import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketingcomComponent } from './marketingcom.component';

const routes: Routes = [
    { path: '', component: MarketingcomComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketingcomRoutingModule { }
