import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';
import {DataTableModule} from "angular2-datatable";
import { RatingModule } from 'ngx-bootstrap/rating';


import { PageHeaderModule } from './../../shared';

import {DemandedepotRoutingModule} from "./demandedepot-routing.module";
import {DemandedepotComponent} from "./demandedepot.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DemandedepotRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
	      apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
	    }),
        RatingModule.forRoot(),
    ],
    declarations: [
        DemandedepotComponent,
    ]
})
export class DemandedepotsModule { }
