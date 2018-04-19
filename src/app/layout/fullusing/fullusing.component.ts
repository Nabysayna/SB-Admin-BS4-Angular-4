import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-fullusing',
  templateUrl: 'fullusing.component.html',
  styleUrls: ['fullusing.component.scss'],
    providers:[],
})

export class FullusingComponent implements OnInit, OnDestroy {

    public loading_data:boolean = true;
    constructor() { }

    ngOnInit(){
//        this.loading_data = true;
    }

    ngOnDestroy(){
    }

}
