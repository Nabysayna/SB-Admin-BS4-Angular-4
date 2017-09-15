import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import {NgxPaginationModule} from 'ngx-pagination';

import { ProgressionbyModule } from '../progressionby/progressionby.module';
import { RatingbyoptionModule } from '../ratingbyoption/ratingbyoption.module';

import { ManagerstockComponent } from './managerstock.component';
import { ManagerstockRoutingModule } from './managerstock-routing.module';
import { PageHeaderModule } from './../../shared';

import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe }   from './data-filter.pipe';
import { ZonesFilterPipe }   from './zones-filter.pipe';
import { SousZonesFilterPipe }   from './souszones-filter.pipe';
import {StockmanagingComponent} from "../stockmanaging/stockmanaging.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ManagerstockRoutingModule,
        PageHeaderModule,
        DataTableModule,
        ProgressionbyModule,
        RatingbyoptionModule,
        NgbModule.forRoot(),
        Ng2Charts,
        NgxPaginationModule,
    ],
    declarations: [
        ManagerstockComponent,
    	DataFilterPipe,
        ZonesFilterPipe,
        SousZonesFilterPipe,

        StockmanagingComponent
    ]
})
export class ManagerstockModule { }
