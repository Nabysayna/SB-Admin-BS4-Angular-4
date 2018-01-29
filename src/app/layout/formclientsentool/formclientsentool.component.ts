import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import {ApiPlatformService} from "../../services/apiplateform.service";

@Component({
    selector: 'app-formclientsentool',
    templateUrl: 'formclientsentool.component.html',
    styleUrls: ['formclientsentool.component.scss'],
    animations: [routerTransition()],
    providers: [UtilService, ApiPlatformService]
})

export class FormclientsentoolComponent implements OnInit {
	fakevalues = true ;
    regionsactivites:{activites:any[],regions:any[]};
    zones:any[];
    souszones:any[];
    public clientsentool: any = {
        nom:'', prenom:'', telephone:'', email:'',
        nometps:'', nomshop:'',
        adresse:{
            region:'--Choix région--',
            zone:'--Choix zone--',
            souszone:'--Choix sous zone--',
            address:'',
        },
    };

    public staticAlertClosed: boolean = false;
    public reponsesouscripdejaexit: boolean = false;


    constructor(public router: Router, private _utilService: UtilService, private _apiplatform: ApiPlatformService) { }

    ngOnInit() {
        this.getRegionActivite();
    }

    getRegionActivite(){
        this._utilService.getRegionActivite()
            .subscribe(
                data => {
                    console.log(data);
                    this.regionsactivites = data;
                },
                error => alert(error),
                () => console.log(this.regionsactivites)
            );
    }

    selectRegion(){
        this.clientsentool.adresse.zone = '--Choix zone--';
        this.clientsentool.adresse.souszone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.clientsentool.adresse.region)
            .subscribe(
                data => this.zones = data,
                error => alert(error),
                () => console.log(this.zones)
            );
    }

    selectZone(){
        this._utilService.getSouszoneByZone(this.clientsentool.adresse.zone)
            .subscribe(
                data => this.souszones = data,
                error => alert(error),
                () => console.log(this.souszones)
            );
    }

    validernewclientsentool(){
        this._apiplatform.souscrireSentool(this.clientsentool)
            .subscribe(
                data => {
                    if(data.errorCode){
                        if(data.message =='dejainscrit'){
                            this.reponsesouscripdejaexit = true;
                        }
                        else{
                            this.router.navigate(['/dashboard']);
                        }
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => console.log('souscrireSentool')
            );
    }

    annulersouscrire(){
        this.router.navigate(['/dashboard']);
    }
}
