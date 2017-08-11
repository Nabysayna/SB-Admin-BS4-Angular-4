import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';
import {DataTableModule} from "angular2-datatable";
import { RatingModule } from 'ngx-bootstrap/rating';


import { AdmincommercialComponent } from './admincommercial.component';
import { AdmincommercialRoutingModule } from './admincommercial-routing.module';
import { PageHeaderModule } from './../../shared';


import { DataAdminFilterPipe }   from '../../pipe/data-admin-filter.pipe';
import { ZonesAdminFilterPipe }   from '../../pipe/zones-admin-filter.pipe';
import { SousZonesAdminFilterPipe }   from '../../pipe/souszones-admin-filter.pipe';

import { AdminsuiviComponent } from '../adminsuivi/adminsuivi.component';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdmincommercialRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
	      apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
	    }),
        RatingModule.forRoot(),
    ],
    declarations: [
    	AdmincommercialComponent, 
    	DataAdminFilterPipe,
    	ZonesAdminFilterPipe,
        SousZonesAdminFilterPipe,
    	AdminsuiviComponent,
    ]
})
export class AdmincommercialModule { }
