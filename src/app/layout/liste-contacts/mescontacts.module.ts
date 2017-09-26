import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';
import {DataTableModule} from "angular2-datatable";
import { RatingModule } from 'ngx-bootstrap/rating';


import { MesContactsRoutingModule } from './mescontacts-routing.module';
import { PageHeaderModule } from './../../shared';

import { DataFilterPipe }   from './data-filter.pipe';

import { GeomapComponent } from '../geomap/geomap.component';

import { ProspectPdvComponent } from '../prospect-pdv/prospect-pdv.component';
import {MesContactsComponent} from "./mescontacts.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MesContactsRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
	      apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
	    }),
        RatingModule.forRoot(),
    ],
    declarations: [
        MesContactsComponent,
    	DataFilterPipe,
    	GeomapComponent,
        ProspectPdvComponent
    ]
})
export class MesContactsModule { }
