import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminsupportComponent } from './adminsupport.component';
import { AdminsupportRoutingModule } from './adminsupport-routing.module';
import { PageHeaderModule } from './../../shared';
import {DataTableModule} from "angular2-datatable";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminsupportRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),

        DataTableModule,
    ],
    declarations: [
        AdminsupportComponent,
    ]
})
export class AdminsupportModule { }
