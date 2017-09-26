import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AsuperviseurComponent } from './asuperviseur.component';
import { AsuperviseurRouting } from './asuperviseur.routing';
import { PageHeaderModule } from './../../shared';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AsuperviseurRouting,
        PageHeaderModule,
    ],
    declarations: [
    	AsuperviseurComponent,
    ]
})
export class AsuperviseurModule { }
