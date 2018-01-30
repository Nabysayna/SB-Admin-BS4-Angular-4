import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormsModule} from '@angular/forms' ;

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { depositRoutingModule } from './deposit-routing.module';
import { DepositComponent } from './deposit.component';
import { PageHeaderModule } from './../../shared';
import {DataTableModule} from "angular2-datatable";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        depositRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule
    ],
    declarations: [DepositComponent]
})
export class depositModule { }
