import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormclientsentoolComponent } from './formclientsentool.component';

const routes: Routes = [
    { path: '', component: FormclientsentoolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormclientsentoolRoutingModule { }
