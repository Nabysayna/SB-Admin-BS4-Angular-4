import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { SuperviseurtestComponent } from './superviseurtest.component';
import { ProspectPdvComponent } from '../prospect-pdv/prospect-pdv.component';
import { SuperviseurtestRoutingModule } from './superviseurtest-routing.module';
import { PageHeaderModule } from './../../shared';

import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe }   from './data-filter.pipe';
import { ZonesFilterPipe }   from './zones-filter.pipe';
import { SousZonesFilterPipe }   from './souszones-filter.pipe';

import { GeomapComponent } from '../geomap/geomap.component';
import {ProgressionbyComponent} from "../progressionby/progressionby.component";
import {RatingbyoptionComponent} from "../ratingbyoption/ratingbyoption.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuperviseurtestRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
	      apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
	    }),
        Ng2Charts,
    ],
    declarations: [
    	SuperviseurtestComponent,
    	DataFilterPipe,
        ZonesFilterPipe,
        SousZonesFilterPipe,
    	GeomapComponent,
        ProspectPdvComponent,

        ProgressionbyComponent,
        RatingbyoptionComponent,
    ]
})
export class SuperviseurtestModule { }
