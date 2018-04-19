import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullusingComponent } from './fullusing.component';
import {CartographieComponent} from "./cartographie/cartographie.component";
import {ReliquatComponent} from "./reliquat/reliquat.component";
import {ModifPdvIncompletComponent} from "./modif-pdv-incomplet/modif-pdv-incomplet.component";

const routes: Routes = [
    { path: '', component: FullusingComponent },
    { path: 'cartographie', component: CartographieComponent },
    { path: 'reliquat', component: ReliquatComponent },
    { path: 'modif-pdv', component: ModifPdvIncompletComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FullusingRoutingModule { }
