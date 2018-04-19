import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { DataTableModule } from "angular2-datatable";

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { FullusingComponent } from './fullusing.component';
import { FullusingRoutingModule } from './fullusing-routing.module';
import { PageHeaderModule } from './../../shared';
import {CartographieComponent} from "./cartographie/cartographie.component";
import {ReliquatComponent} from "./reliquat/reliquat.component";
import {ModifPdvIncompletComponent} from "./modif-pdv-incomplet/modif-pdv-incomplet.component";
import {DataFilterRestantRelequatPipe} from "./filterdata-restantrelequat.pipe";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FullusingRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        DataTableModule,
        Ng2Charts,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
        }),
    ],
    declarations: [
        FullusingComponent,
        CartographieComponent,
        ReliquatComponent,
        ModifPdvIncompletComponent,

        DataFilterRestantRelequatPipe,
    ]
})

export class FullusingModule { }
