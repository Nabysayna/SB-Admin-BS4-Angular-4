<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";


@Component({
    selector: 'app-formuserbbs',
    templateUrl: 'formuserbbs.component.html',
    styleUrls: ['formuserbbs.component.scss'],
    animations: [routerTransition()]
})
export class FormuserbbsComponent implements OnInit {

    @Input() commercial: any;
    confirmpwdcom:string;

    public staticAlertClosed: boolean = false;
    public isEnregistrerCommercial: boolean = false;



    constructor(private _utilService:UtilService) { }

    ngOnInit() {
        console.log(this.commercial);
    }

    enregisternouvcom(){
        console.log(this.commercial);
        this._utilService.ajoutCommercial(this.commercial)
            .subscribe(
                data => {
                    console.log(data);
                    this.isEnregistrerCommercial = true;
                },
                error => alert(error),
                () => console.log('')
            );
    }

}
=======
import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";


@Component({
    selector: 'app-formuserbbs',
    templateUrl: 'formuserbbs.component.html',
    styleUrls: ['formuserbbs.component.scss'],
    animations: [routerTransition()]
})
export class FormuserbbsComponent implements OnInit {

    @Input() commercial: any;
    confirmpwdcom:string;

    public staticAlertClosed: boolean = false;
    public isEnregistrerCommercial: boolean = false;



    constructor(private _utilService:UtilService) { }

    ngOnInit() {
    }

    enregisternouvcom(){
        this._utilService.ajoutCommercial(this.commercial)
            .subscribe(
                data => {
                    this.isEnregistrerCommercial = true;
                },
                error => alert(error),
                () => console.log('')
            );
    }

}
>>>>>>> 7284c611c5547bd7280c333b3af5e160eec97cfe
