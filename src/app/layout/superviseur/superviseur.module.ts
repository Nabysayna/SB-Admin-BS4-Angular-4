import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { SuperviseurComponent } from './superviseur.component';
import { ProspectPdvComponent } from '../prospect-pdv/prospect-pdv.component';
import { SuperviseurRoutingModule } from './superviseur-routing.module';
import { PageHeaderModule } from './../../shared';

import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe }   from './data-filter.pipe';
import { ZonesFilterPipe }   from './zones-filter.pipe';
import { SousZonesFilterPipe }   from './souszones-filter.pipe';

import {ProgressionbyComponent} from "../progressionby/progressionby.component";
import {RatingbyoptionComponent} from "../ratingbyoption/ratingbyoption.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuperviseurRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        Ng2Charts,
    ],
    declarations: [
    	SuperviseurComponent,
    	DataFilterPipe,
        ZonesFilterPipe,
        SousZonesFilterPipe,
        ProspectPdvComponent,

        ProgressionbyComponent,
        RatingbyoptionComponent,
    ]
})
export class SuperviseurModule { }
