import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule } from '@agm/core';
import { DataTableModule } from "angular2-datatable";
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { AdminecommerceComponent } from './adminecommerce.component';
import { AdminecommerceRoutingModule } from './adminecommerce-routing.module';
import { PageHeaderModule } from './../../shared';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminecommerceRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
	      apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
	    }),
        Ng2Charts,
    ],
    declarations: [
    	AdminecommerceComponent,
    ]
})

export class AdminecommerceModule { }
