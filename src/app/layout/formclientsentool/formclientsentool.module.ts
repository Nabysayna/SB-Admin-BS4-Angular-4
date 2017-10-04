import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormsModule} from '@angular/forms' ;

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormclientsentoolRoutingModule } from './formclientsentool-routing.module';
import { FormclientsentoolComponent } from './formclientsentool.component';
import { PageHeaderModule } from './../../shared';
import {DataTableModule} from "angular2-datatable";



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormclientsentoolRoutingModule,
        PageHeaderModule,
        DataTableModule,
        NgbModule
    ],
    declarations: [FormclientsentoolComponent]
})
export class FormclientsentoolModule { }
