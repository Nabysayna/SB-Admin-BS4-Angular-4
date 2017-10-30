import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { AdministratifComponent } from './administratif.component';
import { AdministratifRoutingModule } from './administratif-routing.module';



import { PageHeaderModule } from './../../shared';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdministratifRoutingModule,

        PageHeaderModule,
    ],
    declarations: [
        AdministratifComponent,
    ]
})


export class AdministratifModule { }
