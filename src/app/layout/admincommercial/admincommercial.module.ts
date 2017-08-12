import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';
import { DataTableModule } from "angular2-datatable";
import { ChartsModule as Ng2Charts } from 'ng2-charts';


import { AdmincommercialComponent } from './admincommercial.component';
import { AdmincommercialRoutingModule } from './admincommercial-routing.module';
import { PageHeaderModule } from './../../shared';

import { DataAdminFilterPipe }   from '../../pipe/data-admin-filter.pipe';
import { ZonesAdminFilterPipe }   from '../../pipe/zones-admin-filter.pipe';
import { SousZonesAdminFilterPipe }   from '../../pipe/souszones-admin-filter.pipe';

import { AdminsuiviComponent } from '../adminsuivi/adminsuivi.component';
import { ProgressionbyComponent } from '../progressionby/progressionby.component';
import { RatingbyComponent } from '../ratingby/ratingby.component';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';



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
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        Ng2Charts,
    ],
    declarations: [
    	AdmincommercialComponent, 
    	DataAdminFilterPipe,
    	ZonesAdminFilterPipe,
        SousZonesAdminFilterPipe,
    	AdminsuiviComponent,
        ProgressionbyComponent,
        RatingbyComponent,
    ]
})

export class AdmincommercialModule { }
