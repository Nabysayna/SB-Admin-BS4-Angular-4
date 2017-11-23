 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComptableComponent } from './comptable.component';
import { ComptableRoutingModule } from './comptable-routing.module';
import { PageHeaderModule } from './../../shared';
 import {DataTableModule} from "angular2-datatable";
 import {DataFilterComptableBilanPipe} from "./filterdata-comptable-getbilan.pipe";
 import {DataFilterComptableEtatPipe} from "./filterdata-comptable-getetat.pipe";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComptableRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),

        DataTableModule,
    ],
    declarations: [
        ComptableComponent,
        DataFilterComptableBilanPipe,
        DataFilterComptableEtatPipe,
    ]
})
export class ComptableModule { }
