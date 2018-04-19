import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Location }  from '@angular/common';
import {UtilService} from "../../../services/util.service";
import {Router} from "@angular/router";
import {ApiPlatformService} from "../../../services/apiplateform.service";
import {NewclientService} from "../../../services/newclient.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {SuivipositionnementService} from "../../../services/suivipositionnement.service";
import {BaseChartDirective} from "ng2-charts";


@Component({
    selector: 'app-reliquat',
    templateUrl: 'reliquat.component.html',
    styleUrls: ['reliquat.component.scss'],
    providers:[UtilService, NewclientService, ApiPlatformService, SuivipositionnementService]
})
export class ReliquatComponent implements OnInit, OnDestroy {

    title: string = '12';
    test:number = 100000;
    public loading_data:boolean = true;
    public menuHead = {menuHead1:true, menuHead2:false};
    public killsetinterval:any;

    constructor(private location: Location, private _suivipositionnementService:SuivipositionnementService, private modalService: NgbModal, public router: Router, private _utilService:UtilService,  private _apiPlatformService:ApiPlatformService, private _newclientService:NewclientService){}

    ngOnInit() {
        this.getListSuiviRelequat();
    }

    ngOnDestroy() {
        clearInterval(this.killsetinterval)
    }

    tocurrency(number){
        return Number(number).toLocaleString();
    }

    goBack() {
        this.location.back();
    }

    public menuHeadClick(option: number){
        this.loading_data = true;
        clearInterval(this.killsetinterval);
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.getListSuiviRelequat();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.histPositionnementInit();
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
        verses:{type:"verses", nbre:0,montant:0,list:[]},
    };
    public type:string = 'jour';
    public infotypeDepotCompteBBS:any;

    public selectionjourPositionnement:string;
    public selectionintervalledateinitPositionnement:string;
    public selectionintervalleddatefinalPositionnement:string;

    public datedebut:string;
    public datefin:string;

    public bilanPositionnementAllDetail:any;
    public getListeServiceBBS:any[]=[];
    public listedepotCompteBBS:any[]=[];

    showModalBilanBilanPositionnementAllDetail(content, item) {
        this.bilanPositionnementAllDetail = item;
        this.modalRef = this.modalService.open(content, {size: 'lg'});
    }

    public listestatusdeposition:any[] = [];

    public modalRef: NgbModalRef;

    public closedModal(){
        this.modalRef.close('Close click');
    }

    @ViewChild("baseChart1")  chart1: BaseChartDirective;
    public touslesjours:any[] = [];
    public lineChartData:Array<any> = [];
    public lineChartLabels:Array<any> = [];
    public lineChartOptions:any = { responsive: true };
    public lineChartType:string = 'line';
    public lineChartLegend:boolean = true;

    public suivionepointgraphe(datedebut, datefin){
        this.lineChartLabels=[];
        if(this.type=='jour'){
            this.touslesjours = this.listebilanPositionnement.map( type => type.datedemande_heure);
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map( type => type.positionne_at_heure));
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map( type => type.validpaye_at));
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map( type => type.validverse_at));
        }
        else{
            this.touslesjours = this.listebilanPositionnement.map( type => type.datedemande_jour);
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map( type => type.positionne_at_jour));
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map( type => type.validpaye_at_jour));
            this.touslesjours = this.touslesjours.concat(this.listebilanPositionnement.map( type => type.validverse_at_jour));
        }
        this.touslesjours = this.touslesjours.filter( opt => (opt>=datedebut) && (opt<=datefin) )
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
                this.detailRecouvrement.positionnes.list.forEach( opt => { if(opt.positionne_at_heure==type){ nbrebyjourpositionnesSom += Number(opt.etatpositionnement); } }); nbrebyjourpositionnes.push( nbrebyjourpositionnesSom );
                this.detailRecouvrement.payes.list.forEach( opt => { if(opt.validpaye_at_heure==type){ nbrebyjourpayesSom += Number(opt.etatpayement); } }); nbrebyjourpayes.push( nbrebyjourpayesSom );
                this.detailRecouvrement.verses.list.forEach( opt => { if(opt.validverse_at_heure==type){ nbrebyjourversesSom += Number(opt.etatversement); } }); nbrebyjourverses.push( nbrebyjourversesSom );
            });
        }
        else {
            tabjours.forEach(type => {
                let nbrebyjourpromessesSom:number = 0;
                let nbrebyjourpositionnesSom:number = 0;
                let nbrebyjourpayesSom:number = 0;
                let nbrebyjourversesSom:number = 0;

                this.detailRecouvrement.promesses.list.forEach( opt => { if(opt.datedemande_jour==type){ nbrebyjourpromessesSom += Number(opt.montant); } }); nbrebyjourpromesses.push( nbrebyjourpromessesSom );
                this.detailRecouvrement.positionnes.list.forEach( opt => { if(opt.positionne_at_jour==type){ nbrebyjourpositionnesSom += Number(opt.etatpositionnement); } }); nbrebyjourpositionnes.push( nbrebyjourpositionnesSom );
                this.detailRecouvrement.payes.list.forEach( opt => { if(opt.validpaye_at_jour==type){ nbrebyjourpayesSom += Number(opt.etatpayement); } }); nbrebyjourpayes.push( nbrebyjourpayesSom );
                this.detailRecouvrement.verses.list.forEach( opt => { if(opt.validverse_at_jour==type){ nbrebyjourversesSom += Number(opt.etatversement); } }); nbrebyjourverses.push( nbrebyjourversesSom );
            });
        }

        this.lineChartData = [
            {data: nbrebyjourpromesses, label: 'PROMESSES'},
            {data: nbrebyjourpositionnes, label: 'POSITIONNES'},
            {data: nbrebyjourpayes, label: 'PAYES'},
            {data: nbrebyjourverses, label: 'VERSES'}
        ];
    }

    historiquejourPositionnement(){
        this.type = 'jour';
        this.loading_data = true;
        this.selectionintervalledateinitPositionnement = undefined;
        this.selectionintervalleddatefinalPositionnement = undefined;
        this.infotypeDepotCompteBBS = this.selectionjourPositionnement;
        this.datedebut = this.selectionjourPositionnement;
        this.datefin = this.selectionjourPositionnement+" 23:59";
        this._apiPlatformService.getListBilanPositionnementByDate({type: 'jour', infotype:this.selectionjourPositionnement})
            .subscribe(
                data => {
                    this.initialisation(data.message, this.selectionjourPositionnement, this.selectionjourPositionnement+" 23:59")
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

        this.datedebut = this.selectionintervalledateinitPositionnement;
        this.datefin = this.selectionintervalleddatefinalPositionnement+" 23:59";

        this.infotypeDepotCompteBBS = this.selectionintervalledateinitPositionnement+" "+this.selectionintervalleddatefinalPositionnement;
        this._apiPlatformService.getListBilanPositionnementByDate({type: 'intervalle', infotype:this.selectionintervalledateinitPositionnement+" "+this.selectionintervalleddatefinalPositionnement})
            .subscribe(
                data => {
                    this.initialisation(data.message, this.selectionintervalledateinitPositionnement, this.selectionintervalleddatefinalPositionnement+" 23:59")
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

        this.datedebut = this.selectionjourPositionnement;
        this.datefin = this.selectionjourPositionnement+" 23:59";
        this._apiPlatformService.getListBilanPositionnementByDate({type: 'jour', infotype:this.selectionjourPositionnement})
            .subscribe(
                data => {
                    this.getListeServiceBBS = data.datasbbs;
                    this.listedepotCompteBBS = data.datasbbs;
                    this.initialisation(data.message, this.selectionjourPositionnement, this.selectionjourPositionnement+" 23:59")
                },
                error => alert(error),
                () => {
                    this.loading_data = false;
                }
            );
    }

    initialisation(datas:any[], datedebut, datefin){
        let detailRecouvrements = {
            promesses:{type:"promesses", nbre:0, montant:0, list:[]},
            positionnes:{type:"positionnes", nbre:0, montant:0, list:[]},
            payes:{type:"payes", nbre:0, montant:0, list:[]},
            verses:{type:"verses", nbre:0,montant:0,list:[]},
        };
        let listeBilanCC:any[] = [];
        let bilanPositionnementCC:any[] = [];

        detailRecouvrements.promesses.nbre = datas.filter( opt => (opt.datedemande>=datedebut) && (opt.datedemande<=datefin) ).length;
        let listestatus = datas.map((type) => {
            detailRecouvrements.promesses.montant += ((type.datedemande>=datedebut) && (type.datedemande<=datefin))?Number(type.montant):0;

            if( (type.positionne_at>=datedebut) && (type.positionne_at<=datefin) ){ detailRecouvrements.positionnes.nbre ++;    }
            detailRecouvrements.positionnes.montant += ( (type.positionne_at>=datedebut) && (type.positionne_at<=datefin) )?Number(type.etatpositionnement):0;
            if((type.validpaye_at>=datedebut) && (type.validpaye_at<=datefin)){ detailRecouvrements.payes.nbre ++;  }
            detailRecouvrements.payes.montant += ((type.validpaye_at>=datedebut) && (type.validpaye_at<=datefin))?Number(type.etatpayement):0;
            if(((type.validverse_at>=datedebut) && (type.validverse_at<=datefin))){ detailRecouvrements.verses.nbre ++; }
            detailRecouvrements.verses.montant += ((type.validverse_at>=datedebut) && (type.validverse_at<=datefin))?Number(type.etatversement):0;

            let pointObjet = JSON.parse(type.point);
            let adressecomplet = (typeof pointObjet.adresse === 'object')?pointObjet.adresse:JSON.parse(pointObjet.adresse);
            let cc = type.cc?JSON.parse(type.cc).prenom+" "+JSON.parse(type.cc).nom:"alioune";

            if(!listeBilanCC.includes(cc)) { listeBilanCC.push(cc); }

            return {
                id: type.id,
                datedemande: type.datedemande,
                datedemande_jour:type.datedemande.split(' ')[0],
                datedemande_heure:type.datedemande.split(':')[0],
                positionne_at_jour:type.positionne_at?type.positionne_at.split(' ')[0]:null,
                positionne_at_heure:type.positionne_at?type.positionne_at.split(':')[0]:null,
                validpaye_at_jour:type.validpaye_at?type.validpaye_at.split(' ')[0]:null,
                validpaye_at_heure:type.validpaye_at?type.validpaye_at.split(':')[0]:null,
                validverse_at_jour:type.validverse_at?type.validverse_at.split(' ')[0]:null,
                validverse_at_heure:type.validverse_at?type.validverse_at.split(':')[0]:null,
                montant: Number(type.montant),
                point: pointObjet.prenom+" "+pointObjet.nom,
                telephone: pointObjet.telephone,
                adresse: adressecomplet.address+", "+adressecomplet.souszone+", "+adressecomplet.zone,
                cc: cc,
                recouvre_by: type.recouvre_by?( (type.recouvre_by!='pas besoin')?type.recouvre_by:type.modepayement ):"attente",
                etatpositionnement:type.etatpositionnement?type.etatpositionnement:0,
                positionne_at:type.positionne_at?type.positionne_at:"attente",
                etatpayement: type.etatpayement?type.etatpayement:0,
                validpaye_at:type.validpaye_at?type.validpaye_at:"attente",
                etatversement: type.etatversement?type.etatversement:0,
                validverse_at:type.validverse_at?type.validverse_at:"attente",
                modepayement:type.modepayement?"par "+type.modepayement:"",
                modedemande:type.modedemande?type.modedemande:"non defini",
                modeversement:type.modeversement?"par "+type.modeversement:"",
                dateeffectif: type.dateeffectif?type.dateeffectif:"attente"
            }
        });
        this.listebilanPositionnement = listestatus;
        detailRecouvrements.promesses.list = listestatus.filter( opt => (opt.datedemande>=datedebut) && (opt.datedemande<=datefin) );
        detailRecouvrements.positionnes.list = listestatus.filter( opt => (opt.positionne_at>=datedebut) && (opt.positionne_at<=datefin) );
        detailRecouvrements.payes.list = listestatus.filter( opt => (opt.validpaye_at>=datedebut) && (opt.validpaye_at<=datefin) );
        detailRecouvrements.verses.list = listestatus.filter( opt => (opt.validverse_at>=datedebut) && (opt.validverse_at<=datefin) );

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
                verses:{type:"verses", nbre:0,montant:0,list:[]},
            };
            detailRecouvrementsCC.promesses.nbre = liste.filter( opt => (opt.datedemande>=datedebut) && (opt.datedemande<=datefin) ).length;

            liste.forEach(optcc => {
                detailRecouvrementsCC.promesses.montant += ((optcc.datedemande>=datedebut) && (optcc.datedemande<=datefin))?Number(optcc.montant):0;
                if((optcc.positionne_at>=datedebut) && (optcc.positionne_at<=datefin)){ detailRecouvrementsCC.positionnes.nbre ++;    }
                detailRecouvrementsCC.positionnes.montant += ((optcc.positionne_at>=datedebut) && (optcc.positionne_at<=datefin))?Number(optcc.etatpositionnement):0;
                if((optcc.validpaye_at>=datedebut) && (optcc.validpaye_at<=datefin)){ detailRecouvrementsCC.payes.nbre ++;  }
                detailRecouvrementsCC.payes.montant += ((optcc.validpaye_at>=datedebut) && (optcc.validpaye_at<=datefin))?Number(optcc.etatpayement):0;
                if((optcc.validverse_at>=datedebut) && (optcc.validverse_at<=datefin)){ detailRecouvrementsCC.verses.nbre ++; }
                detailRecouvrementsCC.verses.montant += ((optcc.validverse_at>=datedebut) && (optcc.validverse_at<=datefin))?Number(optcc.etatversement):0;
            });
            detailRecouvrementsCC.promesses.list = liste.filter( opt => (opt.datedemande>=datedebut) && (opt.datedemande<=datefin) );
            detailRecouvrementsCC.positionnes.list = liste.filter( opt => (opt.positionne_at>=datedebut) && (opt.positionne_at<=datefin));
            detailRecouvrementsCC.payes.list = liste.filter( opt => (opt.validpaye_at>=datedebut) && (opt.validpaye_at<=datefin) );
            detailRecouvrementsCC.verses.list = liste.filter( opt => (opt.validverse_at>=datedebut) && (opt.validverse_at<=datefin) );

            bilanPositionnementCC.push({
                cc:type,
                type:type,
                detail:detailRecouvrementsCC,
                list:liste,
            })
        });
        this.listeBilanPositionnementCC=bilanPositionnementCC;
        this.detailRecouvrement = detailRecouvrements;

        this.suivionepointgraphe(datedebut, datefin);
    }

    clickPositionnement(datasGraphe){
        this.listebilanPositionnement = datasGraphe;
        this.suivionepointgraphe(this.datedebut, this.datefin);
    }


    public typeservice:string;
    public montanttypeservice:number;

    showModalDepotCompteBBS(content) {
        this.typeservice = undefined;
        this.montanttypeservice = undefined;
        this.modalRef = this.modalService.open(content);
    }

    showModaldepotCompteBBSDetail(content, item) {
        console.log(item);
        //this.modalRef = this.modalService.open(content);
    }

    getDepotCompteBBS(){
        this._suivipositionnementService.getDepotCompteBBS({type:this.type, infotype:this.infotypeDepotCompteBBS})
            .subscribe(
                data => {
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




    /***************************************************************************************
     ********************   PARTIE Restant reliquat   ****************************
     **************************************************************************************/

    public rowsOnPageSuiviRelequat = 25;
    public sortBySuiviRelequat = "point";
    public sortOrderSuiviRelequat = "asc";
    public filterQuerySuiviRelequat:any;
    public listesSuiviRelequat:any[] = [];

    public getListSuiviRelequat(): void {
        this.filterQuerySuiviRelequat = undefined;
        this._apiPlatformService.getListSuiviRelequat()
            .subscribe(
                data => {
                    let listestatus = data.message.map(function (type) {
                        let pointObjet = JSON.parse(type.point);
                        let cc = type.cc?JSON.parse(type.cc).prenom+" "+JSON.parse(type.cc).nom:"alioune";
                        let adressecomplet = (typeof pointObjet.adresse === 'object')?pointObjet.adresse:JSON.parse(pointObjet.adresse);
                        return {
                            pointbrut: type.point,
                            point: pointObjet.prenom+" "+pointObjet.nom,
                            telephone: pointObjet.telephone,
                            adresse: adressecomplet.address+", "+adressecomplet.souszone+", "+adressecomplet.zone,
                            cc: cc,
                            etatpositionnement:type.etatpositionnement?type.etatpositionnement:0,
                            etatpayement: type.etatpayement?type.etatpayement:0,
                            etatrestant: (type.etatpositionnement && type.etatpayement)?(type.etatpositionnement - type.etatpayement):type.etatpositionnement?type.etatpositionnement:0,
                        }
                    });
                    this.listesSuiviRelequat = listestatus.filter( opt => opt.etatrestant!=0 );
                    this.loading_data = false;
                },
                error => alert(error),
                () => {}
            );
    }

    public bilanPositionnementDetailPoint:any = {type:"", list:[]};
    showModalSuiviRelequatDetailPoint(content, item){
        this.bilanPositionnementDetailPoint = {type:"", list:[]};
        this._apiPlatformService.getListSuiviRelequatDetailPoint({point:item.pointbrut})
            .subscribe(
                data => {
                    this.bilanPositionnementDetailPoint.type = item.point;
                    let listestatus = data.message.map(function (type) {
                        let cc = type.cc?JSON.parse(type.cc).prenom+" "+JSON.parse(type.cc).nom:"alioune";
                        return {
                            datedemande:type.datedemande,
                            montant: Number(type.montant),
                            modedemande:type.modedemande?type.modedemande:"non defini",
                            cc: cc,
                            recouvre_by: (type.recouvre_by!="pas besoin")?type.recouvre_by:type.modepayement,

                            etatpositionnement:type.etatpositionnement?type.etatpositionnement:0,
                            positionne_at:type.positionne_at?type.positionne_at:"attente",

                            etatpayement: type.etatpayement?type.etatpayement:0,
                            validpaye_at:type.validpaye_at?type.validpaye_at:"attente",

                            etatversement: type.etatversement?type.etatversement:0,
                            validverse_at:type.validverse_at?type.validverse_at:"attente",

                            etatrestant: (type.etatpositionnement && type.etatpayement)?(type.etatpositionnement - type.etatpayement):type.etatpositionnement?type.etatpositionnement:0,
                            etatrestantpoint: (type.etatpositionnement && type.etatpayement)?(type.etatpositionnement - type.etatpayement):type.etatpositionnement?type.etatpositionnement:0,
                            etatrestantagent: (type.etatpayement && type.etatversement)?(type.etatpayement - type.etatversement):type.etatpayement?type.etatpayement:0,
                        }
                    });
                    this.bilanPositionnementDetailPoint.list = listestatus;
                    this.modalRef = this.modalService.open(content, {size: 'lg'});
                },
                error => alert(error),
                () => {}
            );

    }






}
