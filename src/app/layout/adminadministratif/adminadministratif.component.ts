import { Component, OnInit, OnDestroy } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import {NewclientService} from "../../services/newclient.service";
import {ApiPlatformService} from "../../services/apiplateform.service";
import {NgbModalRef, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SuivipositionnementService} from "../../services/suivipositionnement.service";

@Component({
  selector: 'app-adminadministratif',
  templateUrl: './adminadministratif.component.html',
  styleUrls: ['./adminadministratif.component.scss'],
    providers:[UtilService, NewclientService, ApiPlatformService, SuivipositionnementService],
})

export class AdminadministratifComponent implements OnInit {

    public menuHead = {menuHead1:false, menuHead2:true, menuHead3:false, menuHead4:false, menuHead5:false, menuHead6:false, menuHead7:false, menuHead8:false};

    public killsetinterval:any;


    constructor(private _suivipositionnementService:SuivipositionnementService, private modalService: NgbModal, public router: Router, private _utilService:UtilService,  private _apiPlatformService:ApiPlatformService, private _newclientService:NewclientService) { }

    ngOnInit() {
        this.getNouveauxpoints();
    }

    ngOnDestroy() {
        clearInterval(this.killsetinterval);
    }


    public menuHeadClick(option: number){
        clearInterval(this.killsetinterval);
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.getEncienpoints();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.getNouveauxpoints();
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.getPointssouscritBBS();
        }
        if(option == 5){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.getReclamationsNonResolu();
        }
        if(option == 6){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = true;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.getEtatDeposit();
        }
        if(option == 7){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = true;
            this.menuHead.menuHead8 = false;
            this.getListBilanDeposit();
        }
        if(option == 8){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = true;
            this.getListStatusDeposition();

            this.killsetinterval = setInterval(() => {
                this.getListStatusDeposition();
                console.log('step');
            }, 10000);
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
                },
                error => alert(error),
                () => console.log('getEncienpoints')
            );
    }

    validresouscritsentool(point: any, type:string){
        this._newclientService.validerSouscritSentool(point)
            .subscribe(
                data => {
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
        this._newclientService.validerSouscritWafacash(point)
            .subscribe(
                data => {
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
        this._newclientService.validerSouscritSentoolAndWafacash(point)
            .subscribe(
                data => {
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
                    }
                },
                error => alert(error),
                () => console.log('getPointsdeploye')
            );
    }

    validresolutionreclamation(reclamation){
        this._apiPlatformService.validReclamationsNonResolu(reclamation)
            .subscribe(
                data => {
                    console.log('');
                },
                error => alert(error),
                () => console.log('validReclamationsNonResolu')
            );
        this.listereclamationsnonresolu = this.listereclamationsnonresolu.filter( opt => opt.id_reclamation!=reclamation.id_reclamation );
    }




    /************************************************************************************
     **********************************   PARTIE ETAT DEPOSIT   COMPTABLE****************************
     ***********************************************************************************/

    public rowsOnPageEtatDeposit = 10;
    public sortByEtatDeposit = "date_update";
    public sortOrderEtatDeposit = "desc";
    public filterQueryEtatDeposit:any;
    public listeetatdeposit:any[] = [];
    public getEtatDeposit(): void {
        this._apiPlatformService.getEtatDeposit()
            .subscribe(
                data => {
                    this.listeetatdeposit = data.message.map(function (type) {
                        return {
                            date_update:type.updater.date.split('.')[0],
                            montantactuel:type.caution,
                            last_deposit:type.cautiondebase,
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: type.infopoint?JSON.parse(type.infopoint).nometps:'-',
                        }
                    });
                },
                error => alert(error),
                () => console.log('getListBilanDeposit')
            );
    }



    /************************************************************************************
     **********************************   PARTIE HISTORIQUE DEPOSIT    COMPTABLE ****************************
     ***********************************************************************************/


    tocurrency(number){
        return Number(number).toLocaleString();
    }

    public rowsOnPageBilanDeposit = 10;
    public sortByBilanDeposit = "date_update";
    public sortOrderBilanDeposit = "desc";
    public filterQueryBilanDeposit:any;
    public listebilandeposit:any[] = [];
    public getListBilanDeposit(): void {
        this._apiPlatformService.getListBilanDeposit()
            .subscribe(
                data => {
                    this.listebilandeposit = data.message.map(function (type) {
                        return {
                            date_update:type.daterenflu.date.split('.')[0],
                            maj_by:JSON.parse(type.updater).prenom +" "+JSON.parse(type.updater).nom,
                            montant:JSON.parse(type.infotrace).montant,
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: JSON.parse(type.infopoint).nometps,
                        }
                    });
                },
                error => alert(error),
                () => console.log('getListBilanDeposit')
            );
    }




    /************************************************************************************
     **********************************   PARTIE STATUS POSITIONNEMENT ****************************
     ***********************************************************************************/


    public rowsOnPageStatusDeposition = 25;
    public sortByStatusDeposition = "dateeffectif";
    public sortOrderStatusDeposition = "desc";
    public filterQueryStatusDeposition:any;
    public listestatusdeposition:any[] = [];
    public statusdoneeposition:any;
    montantpayement:number;
    modepayement:number;
    montantversement:number;

    public modalRef: NgbModalRef;

    public closedModal(){
        this.modalRef.close('Close click');
    }
    showModalPayementDepot(content, item) {
        this.modepayement = undefined;
        this.montantpayement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    }
    showModalVersementDepot(content, item) {
        this.montantversement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    }

    public getListStatusDeposition(): void {
        this._apiPlatformService.getListStatusDeposition()
            .subscribe(
                data => {
                    this.listestatusdeposition = data.message.map(function (type) {
                        let pointObjet = JSON.parse(type.point);
                        return {
                            id: type.id,
                            dateeffectif: type.dateeffectif,
                            recouvre_by: type.recouvre_by,
                            positionne_by: type.positionne_by,
                            montant: type.montant,
                            point: pointObjet.prenom+" "+pointObjet.nom,
                            telephone: pointObjet.telephone,
                            adresse: JSON.parse(pointObjet.adresse).address+", "+JSON.parse(pointObjet.adresse).souszone+", "+JSON.parse(pointObjet.adresse).zone,
                            etatposit: type.etatpositionnement==0?'KO':'OK',
                            etatpayement: type.etatpayement==0?0:"".concat(type.etatpayement," par ", type.modepayement),
                            etatversement: type.etatversement,
                        }
                    });
                },
                error => alert(error),
                () => console.log("getListStatusDeposition")
            );
    }

    public validePayementDepot(){
        this._suivipositionnementService.validePayementDepot({id:this.statusdoneeposition.id, montantpayement:this.montantpayement, modepayement:this.modepayement})
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.closedModal();
                    }
                },
                error => alert(error),
                () => {
                    this.getListStatusDeposition();
                    this.killsetinterval = setInterval(() => {
                        this.getListStatusDeposition();
                        console.log('step');
                    }, 10000);
                }
            );
    }

    public valideVersementDepot(){
        this._suivipositionnementService.valideVersementDepot({id:this.statusdoneeposition.id, montantversement:this.montantversement})
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.closedModal();
                    }
                },
                error => alert(error),
                () => {
                    this.getListStatusDeposition();
                    this.killsetinterval = setInterval(() => {
                        this.getListStatusDeposition();
                        console.log('step');
                    }, 10000);
                }
            );
    }


}
