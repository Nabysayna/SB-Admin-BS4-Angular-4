import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {RatingbyoptionComponent} from './ratingbyoption.component';
import { PageHeaderModule } from './../../shared';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PageHeaderModule,
        NgbModule.forRoot(),
    ],
    declarations: [
    	RatingbyoptionComponent,
    ],
    exports: [RatingbyoptionComponent]
})
export class RatingbyoptionModule { }
