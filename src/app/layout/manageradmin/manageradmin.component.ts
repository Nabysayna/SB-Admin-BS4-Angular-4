import { Component, OnInit, OnDestroy } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import {Color} from "ng2-charts";
import {NewclientService} from "../../services/newclient.service";

@Component({
  selector: 'app-admincommercial',
  templateUrl: 'manageradmin.component.html',
  styleUrls: ['manageradmin.component.scss'],
  providers:[UtilService, NewclientService],
})

export class ManageradminComponent implements OnInit,OnDestroy  {

    public staticAlertClosed: boolean = false;

    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";

    public rowsOnPageCom = 10;
    sortByCom = "fullname";
    public sortOrderCom = "asc";
    filterQueryCommercial:any;

    public commerciaux:any[] = [];
    public superviseurs:any[] = [];
    public dashboardNbres:any;

    public menuHead = {menuHead1:true, menuHead2:false, menuHead3:false, menuHead4:false};
    killsetinterval:any;
    public loading_data = true;


    constructor(public router: Router, private _utilService: UtilService, private _newclientService:NewclientService) {}

    ngOnInit() {
        this.loading_data = true;

        this.getDashboardNbres();
        this.killsetinterval = setInterval(() => {
            this.getDashboardNbres();
        }, 60000);

    }

    ngOnDestroy() {
        clearInterval(this.killsetinterval);
    }

    public menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.getDashboardNbres();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.getPointscrm();
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.getComSuperviseurs();
        }
        if(option == 4){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.getPointssentool();
        }

  	}

    public toInt(num: string) { return +num; }

    public getDashboardNbres(): void {
        this._utilService.getDashboardNbres()
            .subscribe(
                data => {

                    if(data.errorCode){
                        this.dashboardNbres = data.message;
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => {
                    this.getAdmincomsuiviPP();
                }
            );
    }





    /************************************************************************************
     **********************************   PARTIE AFFECTATION COMMERCIAL   ****************************
     ***********************************************************************************/

    public getComSuperviseurs(): void {
        this._utilService.getComSuperviseurs()
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.superviseurs = data.message.superviseurs;
                        this.commerciaux = data.message.commerciaux;
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => console.log('getComSuperviseurs')
            );
    }

    public getRegionsSuperviseurs(): void {
        this._utilService.getRegionsSuperviseurs()
            .subscribe(
                data => {
                    this.superviseurs = data.superviseurs
                },
                error => alert(error),
                () => console.log('getRegionsSuperviseurs')
            );
    }

    choixsuperviseurforcommercial(id_superviseur){
        //console.log(id_superviseur);
    }

    reaffectercommercial(item){
        this._utilService.affectationCommercial(item)
            .subscribe(
                data => {
                    console.log('');
                },
                error => alert(error),
                () => console.log('affectationCommercial')
            );
    }




    /************************************************************************************
     **********************************   PARTIE SUIVI COM   ****************************
     ***********************************************************************************/

    public doughnutChartLabelsPP: string[] = ['Aucun', 'SenTool', 'Wafa', 'BBS'];
    public doughnutChartDataPP: number[] = [1, 3, 2, 4];
    public colorsEmptyObject: Array<Color> = [{ backgroundColor: ["blue", "orange", "yellow", "green"] }];


    getAdmincomsuiviPP() {
        this._utilService.getAdmincomsuiviPP()
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.doughnutChartDataPP = [
                            data.message.filter(opt => opt.service_sentool==0 && opt.service_wafacash==0).length,
                            data.message.filter(opt => opt.service_sentool==1 && opt.service_wafacash==0).length,
                            data.message.filter(opt => opt.service_sentool==0 && opt.service_wafacash==1).length,
                            data.message.filter(opt => opt.service_sentool==1 && opt.service_wafacash==1).length
                        ];
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => {
                    this.loading_data = false;
                }
            );
    }


    /************************************************************************************
     **********************************   PARTIE POINT  CRM  ****************************
     ***********************************************************************************/

    public rowsOnPagepointscrm = 10;
    public sortBypointscrm = "date_ajout";
    public sortOrderpointscrm = "desc";
    public filterQuerypointscrm:any;
    public listpointscrm:any[] = [];

    public getPointscrm(): void {
        this.loading_data = true;
        this._utilService.getPointscrm()
            .subscribe(
                data => {
                    console.log(data);
                    this.listpointscrm = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adresse_point);
                        let infsup = JSON.parse(type.infosup);
                        return {
                            id:type.id,
                            id_proprietaire:type.id_proprietaire_point,
                            id_gerant:type.id_gerant_point,
                            date_ajout:type.date_ajout,
                            anciennete:type.date_ajout<'2017-10-12'?'Du TNT':'Nouveau',
                            nom_point:type.nom_point.trim()?type.nom_point.trim():'__',
                            profil:(infsup.service_sentool==1 && infsup.service_wafacash==1)?'Sent & Wafa':(infsup.service_sentool==1 && infsup.service_wafacash==0)?'Sent':(infsup.service_sentool==0 && infsup.service_wafacash==1)?'Wafa':'Non défini',
                            infosup:infsup,
                            fullname_gerant:type.prenom_gerant+" "+type.nom_gerant,
                            telephone_gerant:type.telephone_gerant,
                            region_point: adresse_point.regionpoint?adresse_point.regionpoint.trim():'__',
                            zone_point: adresse_point.zonepoint?adresse_point.zonepoint.trim():'__',
                            souszone_point: adresse_point.souszonepoint?adresse_point.souszonepoint.trim():'__',
                            adresse_point: adresse_point.adressepoint?adresse_point.adressepoint.trim():'__',
                        }
                    });
                },
                error => alert(error),
                () => this.loading_data = false
            );
    }

    validsuppression(point: any){
        if(confirm('confirmer suppression du point crm: '+point.nom_point)){
            console.log('ok');
            this.loading_data = true;
            this._newclientService.validsuppression(point)
                .subscribe(
                    data => this.getPointscrm(),
                    error => alert(error),
                    () => this.loading_data = false
                );
        }
        else{
            console.log('ko')
        }
    }


    /************************************************************************************
     **********************************   PARTIE SENTOOL POINT   ****************************
     ***********************************************************************************/

    public listpointssentool:any[] = [];

    public getPointssentool(): void {
        this.loading_data = true;
        this._utilService.getPointssentool()
            .subscribe(
                data => {
                    console.log(data);
                    this.listpointssentool = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adresse);
                        let infsup = JSON.parse(type.infosup);
                        return {
                            id:type.idUser,
                            idcaution:type.idCaution,
                            dateajoutcaution:type.dateAjout,
                            date_ajout:type.dateCreation.date.split('.')[0],
                            anciennete:type.dateCreation.date.split('.')[0]<'2017-10-12'?'Du TNT':'Nouveau',
                            nom_point:infsup.nometps,
                            fullname_gerant:type.prenom+" "+type.nom,
                            telephone_gerant:type.telephone,
                            caution:type.caution,
                            cautiondebase:type.cautiondebase,
                            region_point: adresse_point.region?adresse_point.region:"",
                            zone_point: adresse_point.zone?adresse_point.zone:"",
                            souszone_point: adresse_point.souszone?adresse_point.souszone:"",
                            adresse_point: adresse_point.address?adresse_point.address:"",
                        }
                    });
                },
                error => alert(error),
                () => this.loading_data = false
            );
    }

    validsuppressionsentool(point: any){
        if(confirm('confirmer suppression du point sentool: '+point.nom_point)){
            console.log('ok');
            this.loading_data = true;
            this._newclientService.validsuppressionsentool(point)
             .subscribe(
             data => this.getPointssentool(),
             error => alert(error),
             () => console.log('validsuppressionsentool')
             );
        }
        else{
            this.loading_data = false
        }

    }










}
