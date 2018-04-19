import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from "angular2-datatable";

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { AdminadministratifComponent } from './adminadministratif.component';
import { AdminadministratifRoutingModule } from './adminadministratif-routing.module';
import { PageHeaderModule } from './../../shared';

import {DataFilterCommercialAdminAdminPipe} from "./filterdata-commercialAdminAdmin.pipe";
import {DataFilterNewPointAdminAdminPipe} from "./filterdata-newpointAdminAdmin.pipe";
import {DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe} from "./filterdata-reclamationsnonresoluAdminAdmin.pipe";
import {DataFilterAdminadministratifBilanPipe} from "./filterdata-adminadministratif-getbilan.pipe";
import {DataFilterAdminadministratifEtatPipe} from "./filterdata-adminadministratif-getetat.pipe";
import {DataFilterAdminadministratifSuivipositionnementPipe} from "./filterdata-adminadministratif-getsuivipositionnement.pipe";
import {DataFilterAdminadministratifPDVCRMINCOMPipe} from "./filterdata-adminadministratif-pdvcrmincom.pipe";
import {RecouvrementDemandedepotComponent} from "../recouvrement-demandedepot/recouvrement-demandedepot.component";
import {DataFilterSuiviDemandepositPipe} from "../recouvrement-demandedepot/filterdata-suividemandepot.pipe";
import {DataFilterAdminadministratifSuivipositionnementHistoriquePipe} from "./filterdata-adminadministratif-getsuivipositionnementhistorique.pipe";




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminadministratifRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        DataTableModule,
        Ng2Charts,
        NgbModule.forRoot(),
    ],
    declarations: [
    	AdminadministratifComponent,
        DataFilterCommercialAdminAdminPipe,
        DataFilterNewPointAdminAdminPipe,
        DataFilterfilterQueryReclamationsnonresoluAdminAdminPipe,
        DataFilterAdminadministratifBilanPipe,
        DataFilterAdminadministratifEtatPipe,
        DataFilterAdminadministratifSuivipositionnementPipe,
        DataFilterAdminadministratifSuivipositionnementHistoriquePipe,
        DataFilterSuiviDemandepositPipe,
        DataFilterAdminadministratifPDVCRMINCOMPipe,
        RecouvrementDemandedepotComponent,
    ]
})

export class AdminadministratifModule { }
