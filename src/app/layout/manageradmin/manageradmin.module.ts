import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataTableModule } from "angular2-datatable";
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ManageradminComponent } from './manageradmin.component';
import { ManageradminRoutingModule } from './manageradmin-routing.module';
import { PageHeaderModule } from './../../shared';

import {DataFilterCommercialPipe} from "./filterdata-commercial.pipe";
import {DataFilterNewPointPipe} from "./filterdata-newpoint.pipe";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ManageradminRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        Ng2Charts,
    ],
    declarations: [
        ManageradminComponent,

        DataFilterCommercialPipe,
        DataFilterNewPointPipe,
    ]
})

export class ManageradminModule { }
