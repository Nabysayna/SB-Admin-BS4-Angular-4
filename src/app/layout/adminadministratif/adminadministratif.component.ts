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

export class AdminadministratifComponent implements OnInit, OnDestroy {

    public loading_data:boolean = true;
    public menuHead = {menuHead1:false, menuHead2:false, menuHead3:false, menuHead4:false, menuHead5:false, menuHead6:false, menuHead7:false, menuHead8:false, menuHead9:true};
    public killsetinterval:any;


    constructor(private _suivipositionnementService:SuivipositionnementService, private modalService: NgbModal, public router: Router, private _utilService:UtilService,  private _apiPlatformService:ApiPlatformService, private _newclientService:NewclientService) { }

    ngOnInit(){
        this.loading_data = true;
        this.getNouveauxpoints();
    }

    ngOnDestroy(){
        clearInterval(this.killsetinterval);
    }


    public menuHeadClick(option: number){
        this.loading_data = true;
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
            this.menuHead.menuHead9 = false;
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
            this.menuHead.menuHead9 = false;
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
            this.menuHead.menuHead9 = false;
            this.getPointssouscritBBS();
        }
        if(option == 4){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.menuHead.menuHead9 = false;
            this.getPointsInfosIncomplets();
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
            this.menuHead.menuHead9 = false;
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
            this.menuHead.menuHead9 = false;
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
            this.menuHead.menuHead9 = false;
            this.histDepositCautionInit();
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
            this.menuHead.menuHead9 = false;
            this.getListStatusDeposition();

            this.killsetinterval = setInterval(() => {
                this.getListStatusDeposition();
                console.log('step');
            }, 10000);
        }
        if(option == 9){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.menuHead.menuHead9 = true;
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
        this.loading_data = true;
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
                    this.loading_data = false;
                },
                error => alert(error),
                () => console.log('getEncienpoints')
            );
    }

    validresouscritsentool(point: any, type:string){
        this.loading_data = true;
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
        this.loading_data = true;
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
        this.loading_data = true;
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
        this.loading_data = true;
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
                    this.loading_data = false;
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
        this.loading_data = true;
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
                    this.loading_data = false;
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
        this.loading_data = true;
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
                        this.loading_data = false;
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
        this.loading_data = true;
        this._apiPlatformService.getEtatDeposit()
            .subscribe(
                data => {
                    console.log(data.message[0]);
                    this.listeetatdeposit = data.message.map(function (type) {
                        return {
                            date_update:type.updater.date.split('.')[0],
                            montantactuel:Number(type.caution),
                            last_deposit:Number(type.cautiondebase),
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: type.infopoint?JSON.parse(type.infopoint).nometps:'-',
                            pointFordemandeDepot:type.user
                        }
                    });
                    this.loading_data = false;
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
    public totaldeposit:number = 0;

    public selectionjour:string;
    public selectionintervalledateinit:string;
    public selectionintervalleddatefinal:string;

    historiquejourDepositCaution(){
        this.loading_data = true;
        this.selectionintervalledateinit = undefined;
        this.selectionintervalleddatefinal = undefined;
        this._apiPlatformService.getListBilanDepositByDate({type: 'jour', infotype:this.selectionjour})
            .subscribe(
                data => {
                    this.listebilandeposit = data.message.map(function (type) {
                        return {
                            date_update:type.daterenflu.date.split('.')[0],
                            maj_by:JSON.parse(type.updater).prenom +" "+JSON.parse(type.updater).nom,
                            montant:Number(JSON.parse(type.infotrace).montant),
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: JSON.parse(type.infopoint).nometps,
                        }
                    });
                },
                error => alert(error),
                () => {
                    this.listebilandeposit.forEach(type => {
                        this.totaldeposit += Number(type.montant);
                    });
                    this.loading_data = false;
                }
            );
    }

    historiqueintervalleDepositCaution(){
        this.loading_data = true;
        this.selectionjour = undefined;
        this._apiPlatformService.getListBilanDepositByDate({type: 'intervalle', infotype:this.selectionintervalledateinit+" "+this.selectionintervalleddatefinal})
            .subscribe(
                data => {
                    this.listebilandeposit = data.message.map(function (type) {
                        return {
                            date_update:type.daterenflu.date.split('.')[0],
                            maj_by:JSON.parse(type.updater).prenom +" "+JSON.parse(type.updater).nom,
                            montant:Number(JSON.parse(type.infotrace).montant),
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: JSON.parse(type.infopoint).nometps,
                        }
                    });
                },
                error => alert(error),
                () => {
                    this.listebilandeposit.forEach(type => {
                        this.totaldeposit += Number(type.montant);
                    });
                    this.loading_data = false;
                }
            );
    }

    histDepositCautionInit(){
        this.loading_data = true;
        this.selectionintervalledateinit = undefined;
        this.selectionintervalleddatefinal = undefined;
        let datenow = ((new Date()).toJSON()).split("T",2)[0];
        this.selectionjour = datenow;
        this._apiPlatformService.getListBilanDepositByDate({type: 'jour', infotype:this.selectionjour})
            .subscribe(
                data => {
                    this.listebilandeposit = data.message.map(function (type) {
                        return {
                            date_update:type.daterenflu.date.split('.')[0],
                            maj_by:JSON.parse(type.updater).prenom +" "+JSON.parse(type.updater).nom,
                            montant:Number(JSON.parse(type.infotrace).montant),
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: JSON.parse(type.infopoint).nometps,
                        }
                    });
                },
                error => alert(error),
                () => {
                    this.listebilandeposit.forEach(type => {
                        this.totaldeposit += Number(type.montant);
                    });
                    this.loading_data = false;
                }
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
                        let adressecomplet = (typeof pointObjet.adresse === 'object')?pointObjet.adresse:JSON.parse(pointObjet.adresse)
                        return {
                            id: type.id,
                            dateeffectif: type.dateeffectif,
                            recouvre_by: type.recouvre_by,
                            positionne_by: type.positionne_by,
                            montant: Number(type.montant),
                            point: pointObjet.prenom+" "+pointObjet.nom,
                            telephone: pointObjet.telephone,
                            adresse: adressecomplet.address+", "+adressecomplet.souszone+", "+adressecomplet.zone,
                            etatposit: type.etatpositionnement==0?'KO':'OK',
                            etatpayement: type.etatpayement==0?""+0:"".concat(type.etatpayement," par ", type.modepayement),
                            etatversement: type.etatversement,
                        }
                    });
                    this.loading_data = false;
                },
                error => alert(error),
                () => console.log("getListStatusDeposition")
            );
    }

    public validePayementDepot(){
        clearInterval(this.killsetinterval);
        if(confirm("Confirmer la validation du payement dépot")){
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.validePayementDepot({id:this.statusdoneeposition.id, montantpayement:this.montantpayement, modepayement:this.modepayement})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.closedModal();
                            this.loading_data = false;
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
        else{
            console.log("Je ne confirme pas")
        }
    }

    public valideVersementDepot(){
        clearInterval(this.killsetinterval);
        if(confirm("Confirmer la validation du versement dépot")){
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.valideVersementDepot({id:this.statusdoneeposition.id, montantversement:this.montantversement})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.closedModal();
                            this.loading_data = false;
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
        else{
            console.log("Je ne confirme pas")
        }
    }


    /***************************************************************************************
     ********************   PARTIE Modify Point crm incomplet   ****************************
     **************************************************************************************/

    public filterQueryPDVCRMINCOM:any;
    public rowsOnPage = 10;
    public sortBy = "date_ajout";
    public sortOrder = "desc";
    public sortByWordLength = (a: any) => { return a.adresse.length; }

    public points:any[] = [];
    public point:any;

    getPointsInfosIncomplets(){
        this._utilService.getPointsInfosIncomplets()
            .subscribe(
                data => {

                    this.points = data.message.filter(opt => !JSON.parse(opt.adresse_point).regionpoint || opt.adresse_point.match('--Choix') || opt.adresse_point.match('autre') || opt.adresse_point.match('Autre')).map(function(type) {
                        let adresse = JSON.parse(type.adresse_point);
                        return {
                            id: type.id,
                            infosup: JSON.parse(type.infosup),
                            libellepoint: type.nom_point.trim()?type.nom_point.trim():'__',
                            fullname_gerant: type.prenom_gerant +' '+ type.nom_gerant,
                            fullname_proprietaire: type.prenom_proprietaire +' '+ type.nom_proprietaire,

                            region:adresse.regionpoint?adresse.regionpoint:'__',
                            zone:adresse.zonepoint?adresse.zonepoint:'__',
                            sous_zone:adresse.souszonepoint?adresse.souszonepoint:'__',
                            adresse: adresse.adressepoint?adresse.adressepoint:'__',

                            activites: JSON.parse(type.activites),
                            services: JSON.parse(type.services),
                            fichiers: JSON.parse(type.fichiers),
                            note: type.avis,

                            prenom_gerant: type.prenom_gerant,
                            nom_gerant: type.nom_gerant,
                            telephone_gerant: type.telephone_gerant,
                            email_gerant: type.email_gerant?type.email_gerant:'__',

                            prenom_proprietaire: type.prenom_proprietaire,
                            nom_proprietaire: type.prenom_proprietaire,
                            telephone_proprietaire:type.telephone_gerant,

                            id_gerant_point:type.id_gerant_point,
                            id_proprietaire_point:type.id_proprietaire_point,
                            id_commercial:type.id_commercial,

                            date_ajout:type.date_ajout,
                        };
                    });
                },
                error => alert(error),
                () => {
                    this.loading_data = false;
                }
            );
    }

    public toInt(num: string) { return +num; }

    showModalModifPoint(content, point) {
        this.point = point;
        this.modalService.open(content, {size: 'lg'}).result.then( (result) => {
        }, (reason) => {} );
    }


    //////////////////// FAIRE UN DEPOT ///////////////////

    pointdemandedepot:any;
    montantfairedepot:number;
    showModalFaireUnDepot(content, item) {
        console.log(item);
        this.montantfairedepot = undefined;
        this.pointdemandedepot = item;
        this.modalRef = this.modalService.open(content);
    }

    public valideFaireUnDepot(){
        if(confirm("Confirmer la validation demande dépot")){
            clearInterval(this.killsetinterval);
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.valideFaireUnDepot({point:this.pointdemandedepot.pointFordemandeDepot, montant:this.montantfairedepot})
                .subscribe(
                    data => {
                        console.log(data);
                        if(data.errorCode){
                            this.closedModal();
                            this.loading_data = false;
                        }
                    },
                    error => alert(error),
                    () => console.log("------------------------------------")
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }



}
