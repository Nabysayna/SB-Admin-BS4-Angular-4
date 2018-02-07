import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';
import { DataTableModule } from "angular2-datatable";
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { LivreurComponent } from './livreur.component';
import { LivreurRoutingModule } from './livreur-routing.module';
import { PageHeaderModule } from './../../shared';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LivreurRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
	      apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
	    }),
        Ng2Charts,
    ],
    declarations: [
        LivreurComponent,
    ]
})

export class LivreurModule { }
