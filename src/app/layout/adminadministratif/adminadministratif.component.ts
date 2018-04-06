import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgbModalRef, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BaseChartDirective} from 'ng2-charts/ng2-charts';
import {Color} from "ng2-charts";

import {UtilService} from "../../services/util.service";
import {SuivipositionnementService} from "../../services/suivipositionnement.service";
import {NewclientService} from "../../services/newclient.service";
import {ApiPlatformService} from "../../services/apiplateform.service";

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

            this.histPositionnementInit();
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
     ***********************   PARTIE BILAN POSITIONNEMENT   ****************************
     ***********************************************************************************/

    public filterQueryBilanPositionnementAllDetail:any;
    public listebilanPositionnement:any[] = [];
    public listeBilanPositionnementCC:any[] = [];
    public detailRecouvrement:any = {
        promesses:{type:"promesses", nbre:0, montant:0, list:[]},
        positionnes:{type:"positionnes", nbre:0, montant:0, list:[]},
        payes:{type:"payes", nbre:0, montant:0, list:[]},
        verses:{type:"verses", nbre:0,montant:0,list:[]}
    };
    public type:string = 'jour';
    public infotypeDepotCompteBBS:any;

    public selectionjourPositionnement:string;
    public selectionintervalledateinitPositionnement:string;
    public selectionintervalleddatefinalPositionnement:string;

    public bilanPositionnementAllDetail:any;
    public getListeServiceBBS:any[]=[];
    public listedepotCompteBBS:any[]=[];

    showModalBilanBilanPositionnementAllDetail(content, item) {
        this.bilanPositionnementAllDetail = item;
        this.modalRef = this.modalService.open(content, {size: 'lg'});
    }

    @ViewChild("baseChart1")  chart1: BaseChartDirective;
    public touslesjours:any[] = [];
    public lineChartData:Array<any> = [];
    public lineChartLabels:Array<any> = [];
    public lineChartOptions:any = { responsive: true };
    public lineChartType:string = 'line';
    public lineChartLegend:boolean = true;

    public suivionepointgraphe(){
        this.lineChartLabels=[];
        if(this.type=='jour'){
            this.touslesjours = this.listebilanPositionnement.map( type => type.datedemande_heure);
        }
        else{
            this.touslesjours = this.listebilanPositionnement.map( type => type.datedemande_jour);
        }
        this.touslesjours.sort();
        let tabjours:string[] = [];
        let jour:string = this.touslesjours[0];
        tabjours.push(jour);
        this.lineChartLabels.push(jour);
        this.touslesjours.forEach(type => {
            if(type!=jour){
                tabjours.push(type);
                this.lineChartLabels.push(type);
                jour = type;
            }
        });

        if(this.chart1 !== undefined){
            this.chart1.chart.config.data.labels = this.lineChartLabels;
        }

        let nbrebyjourpromesses:number[] = [];
        let nbrebyjourpositionnes:number[] = [];
        let nbrebyjourpayes:number[] = [];
        let nbrebyjourverses:number[] = [];
        if(this.type=='jour'){
            tabjours.forEach(type => {
                let nbrebyjourpromessesSom:number = 0;
                let nbrebyjourpositionnesSom:number = 0;
                let nbrebyjourpayesSom:number = 0;
                let nbrebyjourversesSom:number = 0;

                this.detailRecouvrement.promesses.list.forEach( opt => { if(opt.datedemande_heure==type){ nbrebyjourpromessesSom += Number(opt.montant); } }); nbrebyjourpromesses.push( nbrebyjourpromessesSom );
                this.detailRecouvrement.positionnes.list.forEach( opt => { if(opt.datedemande_heure==type){ nbrebyjourpositionnesSom += Number(opt.etatpositionnement); } }); nbrebyjourpositionnes.push( nbrebyjourpositionnesSom );
                this.detailRecouvrement.payes.list.forEach( opt => { if(opt.datedemande_heure==type){ nbrebyjourpayesSom += Number(opt.etatpayement); } }); nbrebyjourpayes.push( nbrebyjourpayesSom );
                this.detailRecouvrement.verses.list.forEach( opt => { if(opt.datedemande_heure==type){ nbrebyjourversesSom += Number(opt.etatversement); } }); nbrebyjourverses.push( nbrebyjourversesSom );
            });
        }
        else {
            tabjours.forEach(type => {
                let nbrebyjourpromessesSom:number = 0;
                let nbrebyjourpositionnesSom:number = 0;
                let nbrebyjourpayesSom:number = 0;
                let nbrebyjourversesSom:number = 0;

                this.detailRecouvrement.promesses.list.forEach( opt => { if(opt.datedemande_jour==type){ nbrebyjourpromessesSom += Number(opt.montant); } }); nbrebyjourpromesses.push( nbrebyjourpromessesSom );
                this.detailRecouvrement.positionnes.list.forEach( opt => { if(opt.datedemande_jour==type){ nbrebyjourpositionnesSom += Number(opt.etatpositionnement); } }); nbrebyjourpositionnes.push( nbrebyjourpositionnesSom );
                this.detailRecouvrement.payes.list.forEach( opt => { if(opt.datedemande_jour==type){ nbrebyjourpayesSom += Number(opt.etatpayement); } }); nbrebyjourpayes.push( nbrebyjourpayesSom );
                this.detailRecouvrement.verses.list.forEach( opt => { if(opt.datedemande_jour==type){ nbrebyjourversesSom += Number(opt.etatversement); } }); nbrebyjourverses.push( nbrebyjourversesSom );
            });
        }

        this.lineChartData = [
            {data: nbrebyjourpromesses, label: 'PROMESSES'},
            {data: nbrebyjourpositionnes, label: 'POSITIONNES'},
            {data: nbrebyjourpayes, label: 'PAYES'},
            {data: nbrebyjourverses, label: 'VERSES'}
        ];
    }

    initialisation(datas){
        let detailRecouvrements = {
            promesses:{type:"promesses", nbre:0, montant:0, list:[]},
            positionnes:{type:"positionnes", nbre:0, montant:0, list:[]},
            payes:{type:"payes", nbre:0, montant:0, list:[]},
            verses:{type:"verses", nbre:0,montant:0,list:[]}
        };
        let listeBilanCC:any[] = [];
        let bilanPositionnementCC:any[] = [];

        detailRecouvrements.promesses.nbre = datas.length;
        let listestatus = datas.map((type) => {
            detailRecouvrements.promesses.montant += Number(type.montant);

            if(Number(type.etatpositionnement)!=0){ detailRecouvrements.positionnes.nbre ++;    }
            detailRecouvrements.positionnes.montant += Number(type.etatpositionnement);
            if(Number(type.etatpayement)!=0){ detailRecouvrements.payes.nbre ++;  }
            detailRecouvrements.payes.montant += Number(type.etatpayement);
            if(Number(type.etatversement)!=0){ detailRecouvrements.verses.nbre ++; }
            detailRecouvrements.verses.montant += Number(type.etatversement);

            let pointObjet = JSON.parse(type.point);
            let adressecomplet = (typeof pointObjet.adresse === 'object')?pointObjet.adresse:JSON.parse(pointObjet.adresse);
            let cc = type.cc?JSON.parse(type.cc).prenom+" "+JSON.parse(type.cc).nom:"alioune";

            if(!listeBilanCC.includes(cc)) { listeBilanCC.push(cc); }

            return {
                id: type.id,
                datedemande: type.datedemande,
                datedemande_jour:type.datedemande.split(' ')[0],
                datedemande_heure:type.datedemande.split(':')[0],
                montant: Number(type.montant),
                point: pointObjet.prenom+" "+pointObjet.nom,
                telephone: pointObjet.telephone,
                adresse: adressecomplet.address+", "+adressecomplet.souszone+", "+adressecomplet.zone,
                cc: cc,
                recouvre_by: type.recouvre_by?type.recouvre_by:"attente",
                etatpositionnement:type.etatpositionnement?type.etatpositionnement:0,
                positionne_at:type.positionne_at?type.positionne_at:"attente",
                etatpayement: type.etatpayement?type.etatpayement:0,
                validpaye_at:type.validpaye_at?type.validpaye_at:"attente",
                etatversement: type.etatversement?type.etatversement:0,
                validverse_at:type.validverse_at?type.validverse_at:"attente",
                modepayement:type.modepayement?type.modepayement:"non defini",
                modedemande:type.modedemande?type.modedemande:"non defini",
                modeversement:type.modeversement?type.modeversement:"non defini",
                dateeffectif: type.dateeffectif?type.dateeffectif:"attente",
            }
        });
        this.listebilanPositionnement = listestatus;
        detailRecouvrements.promesses.list = listestatus;
        detailRecouvrements.positionnes.list = listestatus.filter( opt => Number(opt.etatpositionnement)!=0 );
        detailRecouvrements.payes.list = listestatus.filter( opt => Number(opt.etatpayement)!=0 );
        detailRecouvrements.verses.list = listestatus.filter( opt => Number(opt.etatversement)!=0 );

        listeBilanCC.forEach(type => {
            let liste = listestatus.filter( opt => opt.cc==type );
            let promesses:number = 0;
            let positionnes:number = 0;
            let payes:number = 0;
            let verses:number = 0;

            let detailRecouvrementsCC = {
                promesses:{type:"promesses", nbre:0, montant:0, list:[]},
                positionnes:{type:"positionnes", nbre:0, montant:0, list:[]},
                payes:{type:"payes", nbre:0, montant:0, list:[]},
                verses:{type:"verses", nbre:0,montant:0,list:[]}
            };
            detailRecouvrementsCC.promesses.nbre = liste.length;

            liste.forEach(optcc => {
                detailRecouvrementsCC.promesses.montant += Number(optcc.montant);
                if(Number(optcc.etatpositionnement)!=0){ detailRecouvrementsCC.positionnes.nbre ++;    }
                detailRecouvrementsCC.positionnes.montant += Number(optcc.etatpositionnement);
                if(Number(optcc.etatpayement)!=0){ detailRecouvrementsCC.payes.nbre ++;  }
                detailRecouvrementsCC.payes.montant += Number(optcc.etatpayement);
                if(Number(optcc.etatversement)!=0){ detailRecouvrementsCC.verses.nbre ++; }
                detailRecouvrementsCC.verses.montant += Number(optcc.etatversement);
            });
            detailRecouvrementsCC.promesses.list = liste;
            detailRecouvrementsCC.positionnes.list = liste.filter( opt => Number(opt.etatpositionnement)!=0 );
            detailRecouvrementsCC.payes.list = liste.filter( opt => Number(opt.etatpayement)!=0 );
            detailRecouvrementsCC.verses.list = liste.filter( opt => Number(opt.etatversement)!=0 );

            bilanPositionnementCC.push({
                cc:type,
                type:type,
                detail:detailRecouvrementsCC,
                list:liste,
            })
        });
        this.listeBilanPositionnementCC=bilanPositionnementCC;
        this.detailRecouvrement = detailRecouvrements;

        this.suivionepointgraphe();
    }

    historiquejourPositionnement(){
        this.type = 'jour';
        this.loading_data = true;
        this.selectionintervalledateinitPositionnement = undefined;
        this.selectionintervalleddatefinalPositionnement = undefined;
        this.infotypeDepotCompteBBS = this.selectionjourPositionnement;
        this._apiPlatformService.getListBilanPositionnementByDate({type: 'jour', infotype:this.selectionjourPositionnement})
            .subscribe(
                data => {
                    this.initialisation(data.message)
                },
                error => alert(error),
                () => {
                    this.getDepotCompteBBS();
                    this.loading_data = false;
                }
            );
    }

    historiqueintervallePositionnement(){
        this.loading_data = true;
        this.selectionjourPositionnement = undefined;
        this.type = 'intervalle';
        this.infotypeDepotCompteBBS = this.selectionintervalledateinitPositionnement+" "+this.selectionintervalleddatefinalPositionnement;
        this._apiPlatformService.getListBilanPositionnementByDate({type: 'intervalle', infotype:this.selectionintervalledateinitPositionnement+" "+this.selectionintervalleddatefinalPositionnement})
            .subscribe(
                data => {
                    this.initialisation(data.message)
                },
                error => alert(error),
                () => {
                    this.getDepotCompteBBS();
                    this.loading_data = false;
                }
            );
    }

    histPositionnementInit(){
        this.type = 'jour';
        this.loading_data = true;
        this.selectionintervalledateinitPositionnement = undefined;
        this.selectionintervalleddatefinalPositionnement = undefined;
        let datenow = ((new Date()).toJSON()).split("T",2)[0];
        this.selectionjourPositionnement = datenow;
        this.infotypeDepotCompteBBS = datenow;
        this._apiPlatformService.getListBilanPositionnementByDate({type: 'jour', infotype:this.selectionjourPositionnement})
            .subscribe(
                data => {
                    console.log(data);
                    this.getListeServiceBBS = data.datasbbs;
                    this.listedepotCompteBBS = data.datasbbs;
                    this.initialisation(data.message)
                },
                error => alert(error),
                () => {
                    this.loading_data = false;
                }
            );
    }

    clickPositionnement(datasGraphe){
        this.listebilanPositionnement = datasGraphe;
        this.suivionepointgraphe();
    }


    public typeservice:string;
    public montanttypeservice:number;

    showModalDepotCompteBBS(content) {
        this.typeservice = undefined;
        this.montanttypeservice = undefined;
        this.modalRef = this.modalService.open(content);
    }

    getDepotCompteBBS(){
        this._suivipositionnementService.getDepotCompteBBS({type:this.type, infotype:this.infotypeDepotCompteBBS})
            .subscribe(
                data => {
                    console.log(data)
                    this.listedepotCompteBBS = data.message;
                },
                error => alert(error),
                () => {
                    console.log("finish")
                }
            );
    }

    valideDepotCompteBBS(){
        if(confirm("Confirmer le versement "+this.typeservice+" de "+this.tocurrency(this.montanttypeservice)+" FCFA")){
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.valideDepotCompteBBS({type:this.typeservice, montant:this.montanttypeservice})
                .subscribe(
                    data => {
                        console.log(data)
                        if(data.errorCode){
                            this.closedModal();
                        }
                    },
                    error => alert(error),
                    () => {
                        this.getDepotCompteBBS();
                        this.loading_data = false;
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    /***********************************************************************************
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
    ****************************  PARTIE POINT SOUSCRIT BBS  ****************************
    ************************************************************************************/

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
    ***********************   PARTIE HISTORIQUE DEPOSIT COMPTABLE ***********************
    ************************************************************************************/

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
        this.totaldeposit = 0;
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
        this.totaldeposit = 0;
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
        this.totaldeposit = 0;
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
