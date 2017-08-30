import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataTableModule } from "angular2-datatable";
import { ChartsModule as Ng2Charts } from 'ng2-charts';




import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { PageHeaderModule } from './../../shared';



 // import { ManagerFilterPipe }   from '../../pipe/managerFilter.pipe';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ManagerRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule.forRoot(),
        Ng2Charts,

    ],
    declarations: [
    	ManagerComponent, 

    ]
})

export class ManagerModule { }
