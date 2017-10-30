import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminadministratifComponent } from './adminadministratif.component';
import { AdminadministratifRoutingModule } from './adminadministratif-routing.module';
import { PageHeaderModule } from './../../shared';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminadministratifRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
    ],
    declarations: [
    	AdminadministratifComponent,
    ]
})

export class AdminadministratifModule { }
