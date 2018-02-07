import { Component, OnInit, OnDestroy  } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {Router} from "@angular/router";
import {NewclientService} from "../../services/newclient.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Color} from "ng2-charts";
import {SuivipositionnementService} from "../../services/suivipositionnement.service";

@Component({
  selector: 'app-admincommercial',
  templateUrl: './admincommercial.component.html',
  styleUrls: ['./admincommercial.component.scss'],
  providers:[UtilService, AssignationSuiviService, NewclientService, SuivipositionnementService],

})

export class AdmincommercialComponent implements OnInit, OnDestroy {

    public staticAlertClosed: boolean = false;
    public isEnregistrerAssignation: boolean = false;

    public readyforassination:boolean=true;
    public isclickforassination:boolean=false;

    public loading_data = true;
    public killsetinterval:any;

    public menuHead = {menuHead1:true, menuHead2:false, menuHead3:false, menuHead4:false, menuHead5:false, menuHead7:false};

    public modalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        public router: Router,
        private _utilService:UtilService,
        private _assignationsuiviService:AssignationSuiviService,
        private _suivipositionnementService:SuivipositionnementService,
        private _newclientService:NewclientService
    ) { }

  	ngOnInit() {
        this.loading_data = true;
        this.getRegionsSuperviseurs();
    }

    ngOnDestroy() {
        clearInterval(this.killsetinterval);
    }




    public menuHeadClick(option: number){
        this.loading_data = true;
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = false;

            this.filtreRegion = "--Choix région--";
            this.filtreZone = "";
            this.filtreSousZone = "-";
            this.choixsuperviseur = "--Choix superviseur--";
            this.objetifsuperviseur = 0;
            this.selectSouszone()
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = false;

            this.getCommerciauxForPerformance();
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = false;
            this.getComSuperviseurs();
        }
        if(option == 4){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = false;

            this.getAllDemandeDepotEncours();
            /*this.killsetinterval = setInterval(() => {
                this.getAllDemandeDepotEncours();
                console.log('step init');
            }, 20000);*/
        }
        if(option == 5){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
            this.menuHead.menuHead7 = false;
            this.getPointssouscritBBS();
        }
        if(option == 7){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead7 = true;
            this.getPointsdeploye();
        }
    }

    public toInt(num: string) { return +num; }

    public getRegionsSuperviseurs(): void {
        this._utilService.getRegionsSuperviseurs()
            .subscribe(
                data => {
                    this.superviseurs = data.superviseurs
                    this.regions = data.regions
                    this.loading_data = false;
                },
                error => alert(error),
                () => console.log('getRegionsSuperviseurs')
            );
    }

    choixsuperviseurforcommercial(id_superviseur){ }

    public selectRegion(){
        this.optionassignations = [];
        this.filtreSousZone = "--Choix sous zone--";
        this._utilService.getZoneByRegion(this.filtreRegion.toString())
            .subscribe(
                data => {
                    this.zones = data
                },
                error => alert(error),
                () => console.log('')
            );
    }

    public showModal(content) {
        this.modalRef = this.modalService.open(content, {size: "lg"});
    }

    public closedModal(){
        this.modalRef.close('Close click');
    }


    /************************************************************************************
     ********************   PARTIE ASSIGNATIONS   ****************************
     ***********************************************************************************/

    public regions:any[] = [];
    public zones:any[] = [];
    public souszones:any[] = [];
    public superviseurs:any[] = [];
    public optionassignations:any[] = [];

    public filtreRegion:string = "--Choix région--";
    public filtreZone:string = "--Choix zone--";
    public filtreSousZone:string = "--Choix sous zone--";
    public choixsuperviseur:string = "--Choix superviseur--"
    public objetifsuperviseur:number = 0;
    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";
    public sortByWordLength = (a: any) => { return a.adresse.length; }


    public selectZone(){
        this.isEnregistrerAssignation = false;
        this.optionassignations = [];
        this._utilService.getSouszoneByZoneByRegion({region: this.filtreRegion.toString(), zone: this.filtreZone.toString()})
            .subscribe(
                data => this.souszones = data,
                error => alert(error),
                () => console.log('')
            );
    }

    public selectSouszone(){
        this._newclientService.getPointBySouszoneByZone({zone:this.filtreZone, souszone:this.filtreSousZone})
            .subscribe(
                data => {
                    this.optionassignations = data.map(function(type) {
                        return {
                            id:type.id,
                            libellepoint:type.libellepoint,
                            prenom:type.prenom,
                            nom:type.nom,
                            infosup:JSON.parse(type.infosup),
                            fullname:type.fullname,
                            telephone:type.telephone,
                            adresse:type.adresse,
                            note:type.note,
                            commentaire:'',
                            value:type.id,
                            checked:false
                        };
                    });
                    this.loading_data = false;
                },
                error => alert(error),
                () => console.log('')
            );
    }

    get selectedOptions():any {
        return this.optionassignations
            .filter(opt => opt.checked)
            .map(opt => opt.value);
    };

    public assignersuperviseur(){
        this.isclickforassination = true;
        if( this.filtreZone == "--Choix zone--" ||
            this.filtreRegion == "--Choix région--" ||
            this.filtreSousZone == "--Choix sous zone--" ||
            this.choixsuperviseur == "--Choix superviseur--" ||
            this.objetifsuperviseur == 0 ){
            this.readyforassination = false;
        }
        else {
            let optionassignations = this.optionassignations;
            let assignes:any = this.selectedOptions.map(function(option) {
                return optionassignations.find( (assigne) => assigne.id == Number(option));
            });
            let assignations:any = {
                region:this.filtreRegion,
                zone:this.filtreZone,
                souszone:this.filtreSousZone,
                superviseur:this.superviseurs.find( (superviseur) => superviseur.id ==this.choixsuperviseur),
                objectifsuperviseur:this.objetifsuperviseur,
                assignes:assignes,
                infosup:{
                    date_assignationsuperviser:'',
                    objectifsuperviseur:this.objetifsuperviseur,
                    commentaireforsuperviseur:'',
                    date_assignationcommercial:'',
                    objectifcommercial:'',
                    commentaireforcommercial:''
                }
            };
            this._assignationsuiviService.assignationsuperviseur(assignations)
                .subscribe(
                    data => {
                        this.isEnregistrerAssignation = true;
                        this.filtreRegion = "--Choix région--";
                        this.filtreZone = "";
                        this.filtreSousZone = "-";
                        this.choixsuperviseur = "--Choix superviseur--";
                        this.objetifsuperviseur = 0;
                        this.selectSouszone()
                    },
                    error => alert(error),
                    () => console.log('assignationsuperviseur')
                );
        }
    }


    /************************************************************************************
     ********************   PARTIE AFFECTATIONS   ****************************
     ***********************************************************************************/

    public rowsOnPageCom = 10;
    sortByCom = "fullname";
    public sortOrderCom = "asc";
    filterQueryCommercial:any;

    public commerciaux:any[] = [];

    public superviseurNew: any;
    confirmpwdsup:string;
    userexist:boolean = false;

    showModalSuperviseur(content) {
        this.userexist = false;
        this.superviseurNew = {access:'sup', prenom:'', nom:'', login:'', pwd:'', telephone:77};
        this.showModal(content);
    }

    public getComSuperviseurs(): void {
        this._utilService.getComSuperviseurs()
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.superviseurs = data.message.superviseurs;
                        this.commerciaux = data.message.commerciaux;
                        this.loading_data = false;
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => console.log('getComSuperviseurs')
            );
    }

    reaffectercommercial(item){
        this._utilService.affectationCommercial(item)
            .subscribe(
                data => {
                    this.getComSuperviseurs();
                },
                error => alert(error),
                () => console.log('affectationCommercial')
            );
    }

    enregisternouvsup(){
        this._utilService.ajoutSuperviseur(this.superviseurNew)
            .subscribe(
                data => {
                    if(data.errorCode){
                        if(data.message =='exist'){
                            this.userexist = true;
                        }
                        else{
                            this.closedModal();
                            this.getComSuperviseurs();
                        }
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => console.log('')
            );
    }



    /************************************************************************************
     *************************************   SUIVI POINTS   ****************************
     ***********************************************************************************/


    public listeadminccsuivipoints:any[] = [];
    public getAdminCCSuiviPoints(): void {
        this._utilService.getAdminCCSuiviPoints()
            .subscribe(
                data => {
                    this.listeadminccsuivipoints = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adresse_point);
                        return {
                            id:type.id,
                            date_ajout:type.date_ajout,
                            nom_point:type.nom_point,
                            fullname_gerant:type.prenom_gerant+" "+type.nom_gerant,
                            telephone_gerant:type.telephone_gerant,
                            infosup:JSON.parse(type.infosup),
                            adresse_point: adresse_point.adressepoint+", "+adresse_point.souszonepoint+", "+adresse_point.zonepoint,
                        }
                    });
                },
                error => alert(error),
                () => console.log('getAdminCCSuiviPoints')
            );
    }

    validresouscritsentool(point: any){
        this._newclientService.validerSouscritSentool(point)
            .subscribe(
                data => {
                    this.listeadminccsuivipoints = this.listeadminccsuivipoints.filter( opt => opt.id!=point.id );
                },
                error => alert(error),
                () => console.log('validerSouscritSentool')
            );
    }
    validresouscritwafacash(point: any){
        this._newclientService.validerSouscritWafacash(point)
            .subscribe(
                data => {
                    this.listeadminccsuivipoints = this.listeadminccsuivipoints.filter( opt => opt.id!=point.id );
                },
                error => alert(error),
                () => console.log('validerSouscritWafacash')
            );
    }
    validresouscritsentoolandwafacash(point: any){
        this._newclientService.validerSouscritSentoolAndWafacash(point)
            .subscribe(
                data => {
                    this.listeadminccsuivipoints = this.listeadminccsuivipoints.filter( opt => opt.id!=point.id );
                },
                error => alert(error),
                () => console.log('validerSouscritWafacash')
            );
    }




    /************************************************************************************
     **********************************   POINTS SOUSCRITS   ****************************
     ***********************************************************************************/


    public listepointsouscrits:any[] = [];
    public getPointssouscritBBS(): void {
        this._utilService.getPointssouscritBBS()
            .subscribe(
                data => {
                    this.listepointsouscrits = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adresse_point);
                        return {
                            id:type.id,
                            date_ajout:type.date_ajout,
                            nom_point:type.nom_point,
                            infosup:JSON.parse(type.infosup),
                            fullname_gerant:type.prenom_gerant+" "+type.nom_gerant,
                            telephone_gerant:type.telephone_gerant,
                            adresse_point: adresse_point.adressepoint+", "+adresse_point.souszonepoint+", "+adresse_point.zonepoint,
                            souscription: (JSON.parse(type.infosup).service_sentool==1 && JSON.parse(type.infosup).service_wafacash==0)?'SenTool':(JSON.parse(type.infosup).service_sentool==0 && JSON.parse(type.infosup).service_wafacash==1)?'WafaCash':(JSON.parse(type.infosup).service_sentool==1 && JSON.parse(type.infosup).service_wafacash==1)?'SenTool & WafaCash':'Abandonné',
                            fullname_commercial:type.prenom_commercial+" "+type.nom_commercial
                        }
                    });
                },
                error => alert(error),
                () => this.loading_data = false
            );
    }





    /************************************************************************************
     ********************   PARTIE NEW POINT ET SOUSCRIT   ****************************
     ***********************************************************************************/

    public rowsOnPageNewPoint = 10;
    public sortByNewPoint = "date_ajout";
    public sortOrderNewPoint = "desc";
    public filterQueryNewPoint:any;
    public filterQueryDeploye:any;

    public listenewpoints:any[] = [];
    public listepointsdepoye:any[] = [];

    public getNouveauxpoints(): void {
        this._utilService.getNouveauxpoints()
            .subscribe(
                data => {
                    this.listenewpoints = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adresse_point);
                        return {
                            date_ajout:type.date_ajout,
                            nom_point:type.nom_point,
                            fullname_gerant:type.prenom_gerant+" "+type.nom_gerant,
                            telephone_gerant:type.telephone_gerant,
                            adresse_point: adresse_point.adressepoint+", "+adresse_point.souszonepoint+", "+adresse_point.zonepoint,
                            fullname_commercial:type.prenom_commercial+" "+type.nom_commercial
                        }
                    });
                },
                error => alert(error),
                () => console.log('getNouveauxpoints')
            );
    }

    public getPointsdeploye(): void {
        this._utilService.getPointsdeploye()
            .subscribe(
                data => {
                    this.listepointsdepoye = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adressecomplet);
                        return {
                            date_ajout: type.date_ajout,
                            nom_point: type.nomentreprise,
                            nom_boutique: type.nomboutique,
                            fullname_gerant: type.prenom + " " + type.nom,
                            telephone_gerant: type.telephone,
                            adresse_point: adresse_point.adresse?adresse_point.adresse+',':'' + " " + adresse_point.souszone + ", " + adresse_point.zone,
                            fullname_commercial: type.prenom_commercial + " " + type.nom_commercial
                        }
                    });
                },
                error => alert(error),
                () => this.loading_data = false
            );
    }




    /************************************************************************************
     **********************************   PARTIE SUIVI COM   ****************************
     ***********************************************************************************/

    public data:any[];
    public barChartOptions: any = { scaleShowVerticalLines: false, responsive: true };
    public barChartData: any[] = [];
    public barChartLabels: string[] = [];
    public barChartDataSuperviseur: any[] = [];
    public barChartLabelsSuperviseur: string[] = [];
    public doughnutChartLabels: string[] = ['Objetifs non atteint', 'Objectifs Atteint'];
    public doughnutChartData: number[] = [50, 50];
    getCommerciauxForPerformance() {
        this._assignationsuiviService.getCommerciauxForPerformance()
            .subscribe(
                data => {
                    if(data.errorCode){
                        let dataobjectiffixe:number[] = data.message.map(function(type) {
                            return type.objectif;
                        });
                        let dataobjectifatteint:number[] = data.message.map(function(type) {
                            return type.atteint;
                        });
                        this.barChartData = [
                            { data: dataobjectiffixe, label: 'Objectifs fixés' },
                            { data: dataobjectifatteint, label: 'Objectifs atteints' }
                        ];
                        this.barChartLabels = data.message.map(function(type) {
                            return type.fullname_commercial;
                        });
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => {
                    this._assignationsuiviService.getSuperviseursForPerformancetest()
                        .subscribe(
                            data => {
                                this.data = data.message;
                                if(data.errorCode){

                                    let supervisorDataAll = this.data;
                                    console.log(supervisorDataAll);

                                    let dataobjectiffixe:number[] = data.message.map(function(type) {
                                        return type.objectif;
                                    });
                                    let dataobjectifatteint:number[] = data.message.map(function(type) {
                                        return type.atteint;
                                    });
                                    this.barChartDataSuperviseur = [
                                        { data: dataobjectiffixe, label: 'Objectifs fixés' },
                                        { data: dataobjectifatteint, label: 'Objectifs atteints' }
                                    ];
                                    this.barChartLabelsSuperviseur = data.message.map(function(type) {
                                        return type.prenom+' '+type.nom;
                                    });



                                    let compteuratteint = 0;
                                    let compteurtotalobjectif = 0;
                                    for(let element of data.message){
                                        compteurtotalobjectif = compteurtotalobjectif  + Number(element.objectif);
                                        compteuratteint = compteuratteint +Number(element.atteint);
                                    }
                                    this.doughnutChartData = [compteurtotalobjectif - compteuratteint, compteuratteint];
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
            );
    }

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
                    this.loading_data=false;
                }
            );
    }




    /************************************************************************************
     *********************************   PARTIE DEPOSIT  EN COURS ****************************
     ***********************************************************************************/

    public listedepositsencours:any[] = [];

    getAllDemandeDepotEncours(){
        console.log('getAllDemandeDepotEncours')
        this._suivipositionnementService.getAllDemandeDepotEncours()
            .subscribe(
                data => {
                    if(data.errorCode==0){
                        this.listedepositsencours = data.message.map(function(type){
                            return {
                                id_accepteur: -1,
                                niveau_avancement: (type.etatdemande==0 && type.accepteur=='attente')?-4:(type.etatdemande==0 && type.accepteur!='attente')?-3:type.etatdemande==1?-2:type.etatdemande==2?-1:0,
                                datedemande: type.datedemande,
                                adressecomplet: JSON.parse(type.initiateur.adresse).address+", "+JSON.parse(type.initiateur.adresse).souszone+", "+JSON.parse(type.initiateur.adresse).zone,
                                montantdemande: type.montantdemande,
                                telephone: type.initiateur.telephone,
                                point: type.initiateur,
                                initiateur: type.initiateur.prenom+' '+type.initiateur.nom,
                                cc: JSON.parse(type.validateur).prenom+" "+JSON.parse(type.validateur).nom,
                                accepteur: type.accepteur=='attente'?type.accepteur:JSON.parse(type.accepteur).prenom+" "+JSON.parse(type.accepteur).nom,
                                infosup: type.infosup,
                                etatdemande: type.etatdemande,
                                tokencc: type.tokencc,
                            }
                        });

                    }
                },
                error => alert(error),
                () => {
                    this.loading_data = false;
                }
            );
    }

    tocurrency(number){
        return Number(number).toLocaleString();
    }




}
