import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormsModule} from '@angular/forms' ;

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormRoutingModule,
        PageHeaderModule
    ],
    declarations: [FormComponent]
})
export class FormModule { }
