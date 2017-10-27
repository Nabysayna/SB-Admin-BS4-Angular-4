import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ProgressionbyModule } from '../progressionby/progressionby.module';
import { RatingbyoptionModule } from '../ratingbyoption/ratingbyoption.module';

import { SuperviseurComponent } from './superviseur.component';
import { SuperviseurRoutingModule } from './superviseur-routing.module';
import { PageHeaderModule } from './../../shared';

import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe }   from './data-filter.pipe';
import { ZonesFilterPipe }   from './zones-filter.pipe';
import { SousZonesFilterPipe }   from './souszones-filter.pipe';
import {FormuserbbsComponent} from "../formuserbbs/formuserbbs.component";
import {DataFilterListeComPipe} from "./data-filter-list-com.pipe";
import {DataFilterListeCliPipe} from "./data-filter-list-portefeuille.pipe";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuperviseurRoutingModule,
        PageHeaderModule,
        DataTableModule,
        ProgressionbyModule,
        RatingbyoptionModule,
        NgbModule.forRoot(),
        Ng2Charts,
    ],
    declarations: [
    	SuperviseurComponent,
    	DataFilterPipe,
        ZonesFilterPipe,
        SousZonesFilterPipe,
        FormuserbbsComponent,
        DataFilterListeComPipe,
        DataFilterListeCliPipe,

    ]
})
export class SuperviseurModule { }
