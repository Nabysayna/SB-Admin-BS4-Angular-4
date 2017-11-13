import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminadministratifComponent } from './adminadministratif.component';
import { AdminadministratifRoutingModule } from './adminadministratif-routing.module';
import { PageHeaderModule } from './../../shared';
import { DataTableModule } from "angular2-datatable";

import {DataFilterCommercialAdminAdminPipe} from "./filterdata-commercialAdminAdmin.pipe";
import {DataFilterNewPointAdminAdminPipe} from "./filterdata-newpointAdminAdmin.pipe";
import {DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe} from "./filterdata-reclamationsnonresoluAdminAdmin.pipe";




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminadministratifRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),

        DataTableModule,
        NgbModule.forRoot(),
    ],
    declarations: [
    	AdminadministratifComponent,

        DataFilterCommercialAdminAdminPipe,
        DataFilterNewPointAdminAdminPipe,

        DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe
    ]
})

export class AdminadministratifModule { }
