import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { DataTableModule } from "angular2-datatable";

import { AdminadministratifComponent } from './adminadministratif.component';
import { AdminadministratifRoutingModule } from './adminadministratif-routing.module';
import { PageHeaderModule } from './../../shared';

import {DataFilterCommercialAdminAdminPipe} from "./filterdata-commercialAdminAdmin.pipe";
import {DataFilterNewPointAdminAdminPipe} from "./filterdata-newpointAdminAdmin.pipe";
import {DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe} from "./filterdata-reclamationsnonresoluAdminAdmin.pipe";
import {DataFilterAdminadministratifBilanPipe} from "./filterdata-adminadministratif-getbilan.pipe";
import {DataFilterAdminadministratifEtatPipe} from "./filterdata-adminadministratif-getetat.pipe";
import {DataFilterAdminadministratifSuivipositionnementPipe} from "./filterdata-adminadministratif-getsuivipositionnement.pipe";
import {ModifPdvIncompletComponent} from "./modif-pdv-incomplet/modif-pdv-incomplet.component";
import {CartoadministratifComponent} from "./cartoadministratif/cartoadministratif.component";
import {DataFilterAdminadministratifPDVCRMINCOMPipe} from "./filterdata-adminadministratif-pdvcrmincom.pipe";




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminadministratifRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        DataTableModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
        }),
    ],
    declarations: [
    	AdminadministratifComponent,
        ModifPdvIncompletComponent,
        DataFilterCommercialAdminAdminPipe,
        DataFilterNewPointAdminAdminPipe,
        DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe,
        DataFilterAdminadministratifBilanPipe,
        DataFilterAdminadministratifEtatPipe,
        DataFilterAdminadministratifSuivipositionnementPipe,
        CartoadministratifComponent,
        DataFilterAdminadministratifPDVCRMINCOMPipe
    ]
})

export class AdminadministratifModule { }
