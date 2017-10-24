 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MarketingcomComponent } from './marketingcom.component';
import { MarketingcomRoutingModule } from './marketingcom-routing.module';
import { PageHeaderModule } from './../../shared';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MarketingcomRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        MarketingcomComponent,
    ]
})
export class MarketingcomModule { }
