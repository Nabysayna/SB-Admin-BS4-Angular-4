import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataTableModule } from "angular2-datatable";


import { AdminadministratifComponent } from './adminadministratif.component';
import { AdminadministratifRoutingModule } from './adminadministratif-routing.module';
import { PageHeaderModule } from './../../shared';

import { ProgressionbyComponent } from '../progressionby/progressionby.component';


import { DataAdminAdministratifAssignationFilterPipe }   from '../../pipe/data-admin-administratif-assignation-filter.pipe';
import { DataAdminAdministratifSuiviFilterPipe }   from '../../pipe/data-admin-administratif-suivi-filter.pipe';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminadministratifRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
    ],
    declarations: [
    	AdminadministratifComponent, 
        ProgressionbyComponent,

        DataAdminAdministratifAssignationFilterPipe,
        DataAdminAdministratifSuiviFilterPipe
    ]
})

export class AdminadministratifModule { }
