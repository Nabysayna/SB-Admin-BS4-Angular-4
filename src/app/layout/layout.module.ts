import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';


import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule,
        ProgressbarModule.forRoot(),
        NgbModule,
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,

    ]
})
export class LayoutModule { }
