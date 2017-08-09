import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { PageHeaderModule } from './../../shared';

import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe }   from './data-filter.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TablesRoutingModule,
        PageHeaderModule,
        DataTableModule
    ],
    declarations: [TablesComponent, DataFilterPipe]
})
export class TablesModule { }
