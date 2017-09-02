import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProgressionbyComponent} from './progressionby.component';
import { PageHeaderModule } from './../../shared';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PageHeaderModule,
        NgbModule.forRoot(),
    ],
    declarations: [
    	ProgressionbyComponent,
    ],
    exports: [ProgressionbyComponent]
})
export class ProgressionbyModule { }
