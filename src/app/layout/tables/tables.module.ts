import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { PageHeaderModule } from './../../shared';

import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe }   from './data-filter.pipe';
import { ZonesFilterPipe }   from './zones-filter.pipe';
import { SousZonesFilterPipe }   from './souszones-filter.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TablesRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
    ],
    declarations: [
    	TablesComponent, 
    	DataFilterPipe,
    	ZonesFilterPipe,
    	SousZonesFilterPipe
    ]
})
export class TablesModule { }
