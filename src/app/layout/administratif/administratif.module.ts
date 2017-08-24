import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AdministratifComponent } from './administratif.component';
import { AdministratifRoutingModule } from './administratif-routing.module';

import {DataTableModule} from "angular2-datatable";

import { DataAdministratifFilterPipe }   from '../../pipe/data-administratif-filter.pipe';

import { PageHeaderModule } from './../../shared';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdministratifRoutingModule,
        NgbModule.forRoot(),

        PageHeaderModule,
        DataTableModule,
    ],
    declarations: [
        AdministratifComponent, 
        DataAdministratifFilterPipe
    ]
})


export class AdministratifModule { }