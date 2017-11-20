import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import {NewclientService} from "../../services/newclient.service";
import {ApiPlatformService} from "../../services/apiplateform.service";

@Component({
  selector: 'app-adminadministratif',
  templateUrl: './adminadministratif.component.html',
  styleUrls: ['./adminadministratif.component.scss'],
    providers:[UtilService, NewclientService, ApiPlatformService],
})

export class AdminadministratifComponent implements OnInit {

    public menuHead = {menuHead1:false, menuHead2:true, menuHead3:false, menuHead4:false, menuHead5:false};

    constructor(public router: Router, private _utilService:UtilService,  private _apiPlatformService:ApiPlatformService, private _newclientService:NewclientService) { }

    ngOnInit() {
        this.getNouveauxpoints();
    }

    public menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getEncienpoints();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getNouveauxpoints();
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead5 = false;
            this.getPointssouscritBBS();

        }
        if(option == 5){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
            this.getReclamationsNonResolu();
        }
    }




    /************************************************************************************
     ********************   PARTIE ENCIEN   ****************************
     ***********************************************************************************/

    public listencienpoints:any[] = [];
    public getEncienpoints(): void {
        this._utilService.getEncienpoints()
            .subscribe(
                data => {
                    this.listencienpoints = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adresse_point);
                        return {
                            id:type.id,
                            date_ajout:type.date_ajout,
                            nom_point:type.nom_point,
                            infosup:JSON.parse(type.infosup),
                            fullname_gerant:type.prenom_gerant+" "+type.nom_gerant,
                            telephone_gerant:type.telephone_gerant,
                            adresse_point: adresse_point.adressepoint+", "+adresse_point.souszonepoint+", "+adresse_point.zonepoint
                        }
                    });
                    console.log(this.listencienpoints);
                },
                error => alert(error),
                () => console.log('getEncienpoints')
            );
    }

    validresouscritsentool(point: any, type:string){
        console.log(point);
        this._newclientService.validerSouscritSentool(point)
            .subscribe(
                data => {
                    console.log(data);
                    if(type == 'ancien'){
                        this.getEncienpoints();
                    }
                    if(type == 'nouveau'){
                        this.getNouveauxpoints();
                    }
                },
                error => alert(error),
                () => console.log('validerSouscritSentool')
            );
    }

    validresouscritwafacash(point: any, type:string){
        console.log(point);
        this._newclientService.validerSouscritWafacash(point)
            .subscribe(
                data => {
                    console.log(data);
                    if(type == 'ancien'){
                        this.getEncienpoints();
                    }
                    if(type == 'nouveau'){
                        this.getNouveauxpoints();
                    }
                },
                error => alert(error),
                () => console.log('validerSouscritWafacash')
            );
    }

    validresouscritsentoolandwafacash(point: any, type:string){
        console.log(point);
        this._newclientService.validerSouscritSentoolAndWafacash(point)
            .subscribe(
                data => {
                    console.log(data);
                    if(type == 'ancien'){
                        this.getEncienpoints();
                    }
                    if(type == 'nouveau'){
                        this.getNouveauxpoints();
                    }
                },
                error => alert(error),
                () => console.log('validerSouscritWafacash')
            );
    }




    /************************************************************************************
     **********************************   PARTIE NEW POINT   ****************************
     ***********************************************************************************/

    public rowsOnPageNewPoint = 10;
    public sortByNewPoint = "date_ajout";
    public sortOrderNewPoint = "desc";
    public filterQueryNewPoint:any;
    public listenewpoints:any[] = [];
    public getNouveauxpoints(): void {
        this._utilService.getNouveauxpoints()
            .subscribe(
                data => {
                    this.listenewpoints = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adresse_point);
                        return {
                            id:type.id,
                            date_ajout:type.date_ajout,
                            nom_point:type.nom_point,
                            infosup:JSON.parse(type.infosup),
                            fullname_gerant:type.prenom_gerant+" "+type.nom_gerant,
                            telephone_gerant:type.telephone_gerant,
                            adresse_point: adresse_point.adressepoint+", "+adresse_point.souszonepoint+", "+adresse_point.zonepoint,
                        }
                    });
                    console.log(this.listenewpoints);
                },
                error => alert(error),
                () => console.log('getNouveauxpoints')
            );
    }




    /************************************************************************************
     **********************   PARTIE POINT SOUSCRIT BBS ****************************
     ***********************************************************************************/

    public rowsOnPagePointSouscription = 10;
    public sortByPointSouscription = "date_ajout";
    public sortOrderPointSouscription = "desc";
    public filterQueryPointSouscription:any;
    public listepointsouscritbbs:any[] = [];
    public getPointssouscritBBS(): void {
        this._utilService.getPointssouscritBBS()
            .subscribe(
                data => {
                    this.listepointsouscritbbs = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adresse_point);
                        return {
                            id:type.id,
                            date_ajout:type.date_ajout,
                            nom_point:type.nom_point,
                            infosup:JSON.parse(type.infosup),
                            fullname_gerant:type.prenom_gerant+" "+type.nom_gerant,
                            telephone_gerant:type.telephone_gerant,
                            adresse_point: adresse_point.adressepoint+", "+adresse_point.souszonepoint+", "+adresse_point.zonepoint,
                            souscription: (JSON.parse(type.infosup).service_sentool==1 && JSON.parse(type.infosup).service_wafacash==0)?'SenTool':(JSON.parse(type.infosup).service_sentool==0 && JSON.parse(type.infosup).service_wafacash==1)?'WafaCash':'SenTool & WafaCash',
                        }
                    });
                    console.log(this.listepointsouscritbbs);
                },
                error => alert(error),
                () => console.log('getPointsdeploye')
            );
    }





    /************************************************************************************
     ***************************   PARTIE ETAT RECLAMATION   ****************************
     ***********************************************************************************/

    public rowsOnPageReclamationsnonresolu = 10;
    public sortByReclamationsnonresolu = "date_reclamation";
    public sortOrderReclamationsnonresolu = "asc";
    public filterQueryReclamationsnonresolu:any;

    public listereclamationsnonresolu:any[] = [];

    public getReclamationsNonResolu(): void {
        this._apiPlatformService.getReclamationsNonResolu()
            .subscribe(
                data => {
                    if(data.errorCode==0){
                        this.listereclamationsnonresolu = data.message.map(function (type) {
                            return {
                                id_reclamation: type.id,
                                date_reclamation: type.dateajout.date.split('.')[0],
                                nom_point: JSON.parse(type.infosup).nometps,
                                name_caissier: type.name_caissier,
                                telephone: type.telephone.split('221')[1],
                                nomservice: type.nomservice,
                                sujet: type.sujet,
                                message: type.message,
                            }
                        });
                        console.log(this.listereclamationsnonresolu);
                    }
                },
                error => alert(error),
                () => console.log('getPointsdeploye')
            );
    }

    validresolutionreclamation(reclamation){
        console.log(reclamation);
        this._apiPlatformService.validReclamationsNonResolu(reclamation)
            .subscribe(
                data => {
                    console.log(data);
                },
                error => alert(error),
                () => console.log('validReclamationsNonResolu')
            );
        this.listereclamationsnonresolu = this.listereclamationsnonresolu.filter( opt => opt.id_reclamation!=reclamation.id_reclamation );
    }




}
