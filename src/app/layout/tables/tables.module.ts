import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';
import {DataTableModule} from "angular2-datatable";
import { RatingModule } from 'ngx-bootstrap/rating';


import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { PageHeaderModule } from './../../shared';

import { DataFilterPipe }   from './data-filter.pipe';
import { ZonesFilterPipe }   from './zones-filter.pipe';
import { SousZonesFilterPipe }   from './souszones-filter.pipe';

import { GeomapComponent } from '../geomap/geomap.component';

import { ProspectPdvComponent } from '../prospect-pdv/prospect-pdv.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TablesRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
	      apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
	    }),
        RatingModule.forRoot(),
    ],
    declarations: [
    	TablesComponent, 
    	DataFilterPipe,
    	ZonesFilterPipe,
    	SousZonesFilterPipe,
    	GeomapComponent,
        ProspectPdvComponent
    ]
})
export class TablesModule { }
