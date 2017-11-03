 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MarketingcomComponent } from './marketingcom.component';
import { MarketingcomRoutingModule } from './marketingcom-routing.module';
import { PageHeaderModule } from './../../shared';
 import {DataTableModule} from "angular2-datatable";
 import {DataFilterModifAdressePointPipe} from "./filterdata-modifadressepoint.pipe";
 import {DataFilterfilterQueryReclamationsnonresoluPipe} from "./filterdata-reclamationsnonresolu.pipe";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MarketingcomRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),

        DataTableModule,
    ],
    declarations: [
        MarketingcomComponent,

        DataFilterModifAdressePointPipe,
        DataFilterfilterQueryReclamationsnonresoluPipe,
    ]
})
export class MarketingcomModule { }
