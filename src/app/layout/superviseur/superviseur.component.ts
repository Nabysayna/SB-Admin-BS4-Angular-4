import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from "../../services/util.service";
import { NgForm } from '@angular/forms';
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {ApiPlatformService} from "../../services/apiplateform.service";
import {Color} from "ng2-charts";
import {Router} from "@angular/router";

@Component({
    selector: 'app-superviseur',
    templateUrl: './superviseur.component.html',
    styleUrls: ['./superviseur.component.scss'],
    providers:[UtilService, AssignationSuiviService,ApiPlatformService],
})
export class SuperviseurComponent implements OnInit {
    public form:any;
    public staticAlertClosed: boolean = false;
    public isEnregistrerAssignation: boolean = false;
    public rep1:any;
    public rep2:any;
    public filterQuery:string = "";
    public filtreRegion:string = "--Choix région--";
    public filtreZone:string = "--Choix zone--";
    public filtreSousZone:string = "--Choix sous zone--";
    public choixcommercial:string = "--Choix commercial--";
    public objetifcommercial:number = 0;
    reponse1:boolean;
    public prenom='';
   public nom='';
   public email='';
   public region='';
   public szone='';
   public tel='';
   public adresse='';
   public entreprise='';
   public boutique='';
   public zne='';
    currentPointDocs : any ;
    reponsesPointAuProspect : any ;

    public readyforassination:boolean=true;
    public isclickforassination:boolean=false;

    rowsOnPage = 12;
    sortBy = "note";
    public sortOrder = "desc";
    public sortByWordLength = (a: any) => { return a.adresse.length; }

    public regions:any[] = [];
    public zones:any[] = [];
    public iszones:boolean;
    public souszones:any[] = [];
    public issouszones:boolean;

    public commercials:any[] = [];
    public prospects:any=[];
    public data:any[] = [];
    public optionassignations:any[] = [];
    public datasuivi:any[] = [];
    public datasuiviarelancer:any[] = [];
    public datasuivivalider:any[] = [];
    client: any = {
        nomboutique:'',
        nompoint:'',
        adressecompletpoint:{
            regionpoint:'--Choix région--',
            zonepoint:'--Choix zone--',
            souszonepoint:'--Choix sous zone--',
            adressepoint:'',
            codepostalpoint:0,
            geospatialpoint:{latitude:0, longitude:0},
        },
        typeactivite:[],
        avissurpoint:0,


        nomgerant:'',
        prenomgerant:'',
        telephonegerant:'779013878',
        emailgerant:'',


        nomproprietaire:'',
        prenomproprietaire:'',
        telephoneproprietaire:'',
        emailproprietaire:'',
        adressecompletproprietaire:{
            regionproprietaire:'--Choix région--',
            zoneproprietaire:'--Choix zone--',
            souszoneproprietaire:'--Choix sous zone--',
            adresseproprietaire:'',
            codepostalproprietaire:0,
            geospatialproprietaire:{latitude:0,longitude:0},
        },
        reponsesProspect : [],
        piecesFournies : []
    };

    zone:any[];
    souszone:any[];
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

    public menuHead = {menuHead1:true, menuHead2:false, menuHead3:false, menuHead4:false, menuHead5:false, menuHead6:false, menuHead7:false, menuHead8:false, menuHead9:false};


    public modalRef: NgbModalRef;

    constructor(public router: Router, private _apiplatform: ApiPlatformService, private modalService: NgbModal, private _utilService:UtilService, private _assignationsuiviService:AssignationSuiviService) {this.reponse1=false;}

    ngOnInit() {
        this.getAssignationsBySuperviseur();
        //setInterval(()=>this.alertdeposit(),50000);
    }

    public menuHeadClick(option: number){
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
            this.getAssignationsBySuperviseur();
            this.filtreRegion = "--Choix région--";
            this.filtreZone = "--Choix zone--";
            this.filtreSousZone = "--Choix sous zone--";
            this.choixcommercial = "--Choix commercial--";

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
            this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(
                    data => {
                        this.datasuivi = data.map(function(type) {
                            let client = JSON.parse(type.client);
                            if (!type.qualification){
                                return {
                                    id:type.id,
                                    libellepoint:client.nom_point,
                                    fullname:client.prenom_gerant+" "+client.nom_gerant,
                                    telephone:client.telephone_gerant,
                                    adresse:client.adresse_point.adressepoint!=undefined?client.adresse_point.adressepoint+" "+client.adresse_point.souszonepoint+" "+client.adresse_point.zonepoint:JSON.parse(client.adresse_point).adressepoint+" "+JSON.parse(client.adresse_point).souszonepoint+" "+JSON.parse(client.adresse_point).zonepoint,
                                    note:type.note,
                                    id_assigner:type.id_assigner,
                                    id_commercial:type.id_commercial,
                                    dates_suivi:type.dates_suivi,
                                    reponse:type.reponse,
                                    qualification:"--Choisir une action--",
                                    client:client
                                }
                            }
                        });
                        this.datasuivi = this.datasuivi.filter(opt => opt)
                    },
                    error => alert(error),
                    () => {
                        console.log('listsuiviforsuperviseur');
                    }
                );
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
            this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(
                    data => {
                        this.datasuiviarelancer = data.map(function(type) {
                            let client = JSON.parse(type.client);
                            if (type.qualification){
                                return {
                                    id:type.id,
                                    libellepoint:client.nom_point,
                                    fullname:client.prenom_gerant+" "+client.nom_gerant,
                                    telephone:client.telephone_gerant,
                                    adresse:client.adresse_point.adressepoint!=undefined?client.adresse_point.adressepoint+" "+client.adresse_point.souszonepoint+" "+client.adresse_point.zonepoint:JSON.parse(client.adresse_point).adressepoint+" "+JSON.parse(client.adresse_point).souszonepoint+" "+JSON.parse(client.adresse_point).zonepoint,
                                    note:type.note,
                                    id_assigner:type.id_assigner,
                                    id_commercial:type.id_commercial,
                                    dates_suivi:type.dates_suivi,
                                    reponse:type.reponse,
                                    qualification:"--Choisir une action--",
                                    client:client
                                }
                            }
                        });
                        this.datasuiviarelancer = this.datasuiviarelancer.filter(opt => opt)
                    },
                    error => alert(error),
                    () => {
                        console.log(this.datasuivi);
                    }
                );
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

            this.datasetsPPV = [{
                data: this.doughnutChartDataPPV,
                backgroundColor: ["red", "yellow", "orange", "green"]
            }];
            this.datasetsAP = [{
                data: this.doughnutChartDataAP,
                backgroundColor: ["blue", "red", "orange", "green"]
            }];

            this.estcheckPerformancePPV('journee');
            this.etatDepositAP();
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
            this.getCommerciaux();
            console.log(this.commercials);
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
            this.getProspect();
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
            this.getClient();
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

            this.getdeposit();


        }
    }

    public toInt(num: string) { return +num; }
    /*public getCommerciaux(): void {
        this._utilService.getCommerciauxBySuperviseur()
            .subscribe(
                data => {
                    this.commercials = data
                    if(data.errorCode) this.commercials = data.message;
                },
                error => alert(error),
                () => console.log(this.commercials)
            );
    }*/
    /*public getProspect(){
       this._utilService.getProspectValide()
            .subscribe(
                data => {
                    this.prospects = data;
                    console.log(this.prospects);
                    this.prospects = data.map(function(type){
						let client = JSON.parse(type.client);
						let commercial = JSON.parse(type.commercial);
						return {
                                    id:type.id,
                                    libellepoint:client.nom_point,
                                    fullname:client.prenom_gerant+" "+client.nom_gerant,
                                    telephone:client.telephone_gerant,
                                    adresse:client.adresse_point.adressepoint,
                                    email:client.email_gerant,
                                    note:type.note,
                                    id_assigner:type.id_assigner,
                                    id_commercial:type.id_commercial,
                                    dates_suivi:type.dates_suivi,
                                    reponse:type.reponse,
                                    qualification:"--Choisir une action--",
                                   // client:client,
                                    region:client.region,
                                    zone:client.adresse_point.zonepoint,
                                    szone:client.adresse_point.souszonepoint,
                                    nomcommercial:commercial.prenom+" "+commercial.prenom
                                }
                    });

            this.datasetsPPV = [{
                data: this.doughnutChartDataPPV,
                backgroundColor: ["red", "yellow", "orange", "green"]
            }];
            this.datasetsAP = [{
                data: this.doughnutChartDataAP,
                backgroundColor: ["blue", "red", "orange", "green"]
            }];

            this.estcheckPerformancePPV('journee');
            this.etatDepositAP();
        }

    }
*/

    /*public getClient(){
        this._utilService.getClients()
            .subscribe(
                data => {
                    this.clients = data;
                    console.log(this.clients);
                    this.clients = data.map(function (type, data) {

                        // let tel = data.json.tel;
                        //let nom = data.json.nom_point;
                        // let gerant = data.json.gerant;
                        let client = JSON.parse(type.adresse);
                        return {
                            adresse: client.adress,
                            gerant: type.gerant + " " + type.gerantnom,
                            tel: type.tel,
                            nom_point: type.nom_point,


                        }

                    });
                });
    }
*/
    public closedModal(){
        this.modalRef.close('Close click');
    }

    SelectRegion(){
        this.clientsentool.adresse.zone = '--Choix zone--';
        this.clientsentool.adresse.souszone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.clientsentool.adresse.region)
            .subscribe(
                data => this.zones = data,
                error => alert(error),
                () => console.log(this.zones)
            );
    }

     clear(){
         this.prenom='';
         this.nom='';
         this.email='';
         this.region='';
         this.zne='';
         this.szone='';
         this.entreprise='';
         this.boutique='';
         this.adresse='';
         this.tel='';

  }
/*
  remplissage(p){
        var full=p.fullname.split(' ');
        var ng=full.length;
        var prenom=full[0];
        for(var i=1;i<=ng-2;i++){
           prenom+=" "+full[i];
        }
        this.prenom=prenom;
        this.nom=full[ng-1];
        this.email=p.email;
        this.tel=p.telephone;
        this.adresse=p.adresse;
        this.entreprise=p.libellepoint;
        this.zne=p.zone;
        this.szone=p.szone;
        this.region=p.region;
  }
  validernewclientsentool(form:NgForm){
       var cli=form.value;
       this.clsentool.nom=cli.nom;
       this.clsentool.prenom=cli.prenom;
       this.clsentool.email=cli.email;
       this.clsentool.telephone=cli.tel;
       this.clsentool.nometps= cli.entreprise;
       this.clsentool.nomshop= cli.boutique;
       this.clsentool.adresse.region=cli.region;
       this.clsentool.adresse.zone=cli.zne;
       this.clsentool.adresse.souszone=cli.szone;
       this.clsentool.adresse.address=cli.adresse;
        this._apiplatform.souscrireSentool(this.clsentool)
            .subscribe(
                data => {
                    //console.log(data);
                    if(data.message && data.message =='dejainscrit'){
                        console.log('deja incrit');
                    }
                    else{
                        this.rep1=true;
                    }
                },
                error => alert(error),
                () => console.log('souscrireSentool')
            );
    }
*/

    getgerant(p){
        //return p.split("#")[0] ;
        return p.nom_point;
    }


    getLibellePiece(item){
        return item.split("#")[0] ;
    }


    /************************************************************************************
     *********************************   PARTIE ASSIGNATION   ****************************
     ***********************************************************************************/

    getAssignationsBySuperviseur() {
        this._assignationsuiviService.getAssignationsBySuperviseur()
            .subscribe(
                data => {
                    console.log('--------')
                    console.log(data)
                    this.data = data.map(function(type) {
                        return {
                            id:type.id,
                            libellepoint:JSON.parse(type.client).libellepoint,
                            prenom:JSON.parse(type.client).prenom,
                            nom:JSON.parse(type.client).nom,
                            fullname:JSON.parse(type.client).fullname,
                            telephone:JSON.parse(type.client).telephone,
                            adresse:JSON.parse(type.client).adresse?JSON.parse(type.client).adresse:'-',
                            note:JSON.parse(type.client).note,
                            region:type.region?type.region:'Dakar', zone:type.zone, sous_zone:type.sous_zone,
                            commentaire:type.commentaire,
                            infosup:JSON.parse(type.infosup),
                            value:type.id, checked:false
                        };
                    });
                    for (let i = 0; i < this.data.length; i++) {
                        if(!this.regions.includes(this.data[i].region)) this.regions.push(this.data[i].region);
                    }
                    console.log(this.regions);
                },
                error => alert(error),
                () => {
                    console.log('getAssignationsBySuperviseur');
                }
            );
    }

    public assignercommercial(){
        this.isclickforassination = true;
        if( this.filtreZone == "--Choix zone--" ||
            this.filtreRegion == "--Choix région--" ||
            this.filtreSousZone == "--Choix sous zone--" ||
            this.choixcommercial == "--Choix commercial--" ||
            this.objetifcommercial == 0 ){
            console.log(this.filtreZone+'-'+this.filtreSousZone+'-'+this.choixcommercial+'-'+this.objetifcommercial);
            this.readyforassination = false;
        }
        else {
            let optionassignations = this.optionassignations;
            let assignes:any = this.selectedOptions.map(function(option) {
                return optionassignations.find( (assigne) => assigne.id == Number(option));
            });
            let assignations:any = {
                commercial:this.commercials.find( (commercial) => commercial.id ==this.choixcommercial),
                assignes:assignes,
                infosup:{
                    date_assignationsuperviser:'',
                    objectifsuperviseur:'',
                    commentaireforsuperviseur:'',
                    date_assignationcommercial:'',
                    objectifcommercial:this.objetifcommercial,
                    commentaireforcommercial:''
                }
            };
            console.log(assignations);
            this._assignationsuiviService.assignationcommercial(assignations)
                .subscribe(
                    data => {
                        console.log(data);
                        this.isEnregistrerAssignation = true;
                        this.regions = [];
                        this.filtreRegion = "--Choix région--";
                        this.objetifcommercial = 0;
                        this.getAssignationsBySuperviseur();
                        this.selectRegion();
                    },
                    error => alert(error),
                    () => {
                        console.log('assignationcommercial')
                    }
                );
        }
    }

    public selectRegion() {
        this.filtreSousZone = "--Choix sous zone--";
        this.optionassignations = [];
        console.log(this.filtreRegion);
        this.zones =  [] ;
        for (let i = 0; i < this.data.length; i++) {
            if( this.data[i].region==this.filtreRegion ){
                if( !this.zones.includes(this.data[i].zone) )
                    this.zones.push(this.data[i].zone);
            }
        }
        console.log(this.zones);
    }
    public selectZone() {
        this.optionassignations = [];
    }
    public selectSouszone(){
        this.getCommerciaux();
        this.optionassignations = this.data
            .filter(data => (data.zone==this.filtreZone && data.sous_zone==this.filtreSousZone) );
    }
    sousZonesOfCurrentZone(){
        let souszones : any[] =  [] ;
        for (let i = 0; i < this.data.length; i++) {
            if( this.data[i].zone==this.filtreZone ){
                if( !souszones.includes(this.data[i].sous_zone) )
                    souszones.push(this.data[i].sous_zone);
            }
        }
        return souszones ;
    }
    get selectedOptions():any {
        return this.optionassignations
            .filter(opt => opt.checked)
            .map(opt => opt.value);
    };
    public updateCheckedOptions(): void{
        console.log(this.selectedOptions);
    }


    /************************************************************************************
     *********************************   PARTIE SUIVI ASSIGNATION  et RELANCE ****************************
     ***********************************************************************************/

    validersuivisuperviseur(suivi:any){
        let suivisuperviseur = {
            id:suivi.id,
            dates_suivi:JSON.parse(suivi.dates_suivi),
            reponse:suivi.reponse,
            qualification:suivi.qualification,
            id_assigner:suivi.id_assigner,
            id_commercial:suivi.id_commercial,
        };
        this.datasuivi = this.datasuivi.filter(opt => opt!=suivi);
        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(
                data => {
                    console.log(data)
                },
                error => alert(error),
                () => {
                    console.log('ajoutsuivifromsuperviseur')
                }
            );
    }

    public validersuiviarelancersuperviseur(suivi:any){
        let suivisuperviseur = {
            id:suivi.id,
            dates_suivi:JSON.parse(suivi.dates_suivi),
            reponse:suivi.reponse,
            qualification:suivi.qualification,
            id_assigner:suivi.id_assigner,
            id_commercial:suivi.id_commercial,
        };
        this.datasuiviarelancer = this.datasuiviarelancer.filter(opt => opt!=suivi);

        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(
                data => {
                    console.log(data)
                },
                error => alert(error),
                () => {
                    console.log('ajoutsuivifromsuperviseur')
                }
            );
    }

    getNomFichier(item){
        return item.split("#")[1] ;
    }

    showModal(content, i) {
        this.currentPointDocs = JSON.parse(this.datasuivi[i].client.fichiers) ;
        console.log( this.currentPointDocs ) ;
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }

    showModalDetail(content, item) {
        this.reponsesPointAuProspect = JSON.parse(item.reponse) ;
        console.log( this.reponsesPointAuProspect ) ;
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }




    /************************************************************************************
     *********************************   PARTIE COMMERCIAL   ****************************
     ***********************************************************************************/

    public commercialNew: any;
    confirmpwdcom:string;
    sortByCom = "fullname";
    public sortOrderCom = "asc";
    public filterQueryCom:any;
    userexist:boolean = false;

    public isEnregistrerCommercial: boolean = false;

    showModalCommercial(content, commercial:any) {
        this.commercialNew = commercial?commercial:{access:'com', type:'Nouveau commercial', prenom:'', nom:'', login:'', pwd:'', telephone:77}
        this.showModalTop(content);
    }

    public getCommerciaux(): void {
        this._utilService.getCommerciauxBySuperviseur()
            .subscribe(
                data => {
                    this.commercials = data
                    if(data.errorCode) this.commercials = data.message;
                },
                error => alert(error),
                () => console.log(this.commercials)
            );
    }

    enregisternouvcom(){
        this._utilService.ajoutCommercial(this.commercialNew)
            .subscribe(
                data => {
                    if(data.errorCode){
                        if(data.message =='exist'){
                            this.userexist = true;
                        }
                        else{
                            this.closedModal();
                            this.getCommerciaux();
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
     ********************   PARTIE DEPLOIEMENT POINTS SUIVI   ****************************
     ***********************************************************************************/

    public reponsesouscripdejaexit: boolean = false;
    public clsentool: any = {
        nom:'', prenom:'', telephone:'', email:'',
        nometps:'', nomshop:'',
        type:'superviseur', idcommercial:0,
        adresse:{
            region:'--Choix région--',
            zone:'--Choix zone--',
            souszone:'--Choix sous zone--',
            address:'',
        },
    };

    public showModalTop(content) {
        this.modalRef = this.modalService.open(content, {size: "lg"});
    }
    public getProspect(){
        this._utilService.getProspectValide()
            .subscribe(
                data => {
                    this.prospects = data;
                    this.prospects = data.map(function(type){
                        let client = JSON.parse(type.client);
                        let commercial = JSON.parse(type.commercial);
                        return {
                            id:type.id,
                            libellepoint:client.nom_point,
                            fullname:client.prenom_gerant+" "+client.nom_gerant,
                            telephone:client.telephone_gerant,
                            adresse:client.adresse_point.adressepoint,
                            email:client.email_gerant,
                            note:type.note,
                            id_assigner:type.id_assigner,
                            id_commercial:type.id_commercial,
                            dates_suivi:type.dates_suivi,
                            reponse:type.reponse,
                            qualification:"--Choisir une action--",
                            client:client,
                            zone:client.adresse_point.zonepoint,
                            szone:client.adresse_point.souszonepoint,
                            nomcommercial:commercial.prenom+" "+commercial.prenom
                        }
                    });
                    console.log(this.prospects)
                    //if(data.errorCode) this.prospects = data;
                },
                error => alert(error),
                () => console.log(this.commercials)
            );
    }

    public modalAjout(content,p){
        this.reponsesouscripdejaexit = false;
        this.iszones = false;
        this.issouszones = false;
        this.clsentool.idcommercial = p.id_commercial;
        this.remplissage(p);
        this.getRegionSouscritSentool();
        this.showModalTop(content);
    }

    remplissage(p){
        var full=p.fullname.split(' ');
        var ng=full.length;
        var prenom=full[0];
        for(var i=1;i<=ng-2;i++){
            prenom+=" "+full[i];
        }
        this.prenom=prenom;
        this.nom=full[ng-1];
        this.email=p.email;
        this.tel=p.telephone;
        this.adresse=p.adresse;
        this.entreprise=p.libellepoint;
        this.zne=p.zone;
        this.szone=p.szone;
    }

    validernewclientsentool(form:NgForm){
        let cli=form.value;
        this.clsentool.nom=cli.nomSouscritSentool;
        this.clsentool.prenom=cli.prenomSouscritSentool;
        this.clsentool.email=cli.emailSouscritSentool;
        this.clsentool.telephone=cli.telSouscritSentool;
        this.clsentool.nometps= cli.entrepriseSouscritSentool;
        this.clsentool.nomshop= cli.boutiqueSouscritSentool;
        this.clsentool.adresse.region=cli.regionSouscritSentool;
        this.clsentool.adresse.zone=cli.zneSouscritSentool;
        this.clsentool.adresse.souszone=cli.szoneSouscritSentool;
        this.clsentool.adresse.address=cli.adresseSouscritSentool;
        this._apiplatform.souscrireSentool(this.clsentool)
            .subscribe(
                data => {
                    if(data.errorCode){
                        if(data.message =='dejainscrit'){ this.reponsesouscripdejaexit = true; }
                        else { this.closedModal(); }
                    }
                    else { this.router.navigate(['/login']); }
                },
                error => alert(error),
                () => console.log('souscrireSentool')
            );
    }

    getRegionSouscritSentool(){
        this._utilService.getRegion()
            .subscribe(
                data => {
                    this.regions = data;
                },
                error => alert(error),
                () => console.log('getRegion')
            );
    }
    selectRegionSouscritSentool(){
        this.iszones = false;
        this.zne = '--Choix zone--';
        this.szone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.region)
            .subscribe(
                data => {
                    this.zones = data;
                    this.iszones = true;
                },
                error => alert(error),
                () => console.log('getZoneByRegion')
            );
    }
    selectZoneSouscritSentool(){
        this.issouszones = false;
        this._utilService.getSouszoneByZoneByRegion({region:this.region, zone: this.zne})
            .subscribe(
                data => {
                    this.souszones = data;
                    this.issouszones = true;
                },
                error => alert(error),
                () => console.log('getSouszoneByZoneByRegion')
            );
    }



    /************************************************************************************
     ********************   PARTIE PORTEFUILLE   ****************************
     ***********************************************************************************/

    public sortOrderCli = "desc";
    public filterQueryCli:any;
    public clients:any=[];

    public getClient(){
        this._utilService.getClients()
            .subscribe(
                data => {
                    this.clients = data.message.map(function(type){
                        let client = JSON.parse(type.adresse);
                        return {
                            adresse:client.address,
                            gerant:type.gerant+" "+type.gerantnom,
                            date_ajout:type.date_ajout,
                            tel:type.tel,
                            nom_point:type.nom_point,
                            commercial:type.commercial,
                        }
                    });
                },
                error => alert(error),
                () => console.log(this.clients)
            );
    }



    /**********************************************************************************
    ****************************     PARTIE SUIVI POINTS   ****************************
    ***********************************************************************************/

    public doughnutChartLabelsPPV: string[] = ['Faible', 'Passable', 'Assez-bien', 'Bien'];
    public doughnutChartDataPPV: number[] = [150, 100, 50, 25];
    public colorsEmptyObject: Array<Color> = [{}];
    public datasetsPPV: any[];
    public typeperformancePPV:string = " dans la journée";
    public checkPerformancePPV:any = {journee: true, semaine: false, mois: false};
    public performancesadminpdv:any;
    public performancesadminpdvbyadmin:any;
    public typedateperformancesadminpdv:string;
    public lotperformancesadminpdv:string;
    public rowsOnPagePPV = 12;
    public sortByPPV = "recette";
    public sortOrderPPV = "desc";
    public filterQueryPPV:any;

    public chartClickedPPV(e:any):void {
        if (e.active[0]){
            this.estdetailPerformancePPV(e.active[0]._model.label);
        }
    }
    public showModalPPV(content) {
        this.modalService.open(content, {size: "lg"}).result.then( (result) => { }, (reason) => {} );
    }
    public performancessupperviseurclasserbydate(type:string):void {
        this.performancesadminpdv = undefined;
        this._apiplatform.getperformancessupperviseurclasserbydate(type)
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.datasetsPPV = [{
                            data: data.message.nbrepoints,
                            backgroundColor: ["red", "yellow", "orange", "green"]
                        }];
                    }
                },
                error => alert(error),
                () => {
                    console.log('getperformancessupperviseurclasserbydate');
                    console.log('------------------------------------');
                }
            );
    }
    public estcheckPerformancePPV(type: string){
        if(type == 'journee'){
            this.checkPerformancePPV.journee = true;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.typeperformancePPV = "dans la journée";
        }
        else if(type == 'semaine'){
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = true;
            this.checkPerformancePPV.mois = false;
            this.typeperformancePPV = "dans la semaine";
        }
        else if(type == 'mois'){
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = true;
            this.typeperformancePPV = "dans le mois";
        }
        this.typedateperformancesadminpdv = type;
        this.performancessupperviseurclasserbydate(type);
    }
    public estdetailPerformancePPV(lot:string){
        let type:string="";
        if (this.checkPerformancePPV.journee) {
            type = "journee";
        }
        if (this.checkPerformancePPV.semaine) {
            type = "semaine";
        }
        if (this.checkPerformancePPV.mois) {
            type = "mois";
        }
        console.log(type+' '+lot);
        this.typedateperformancesadminpdv = type;
        this.lotperformancesadminpdv = lot;
        this._apiplatform.getperformancessupperviseurclasserbydatebylot({lot:lot, typedate:type})
            .subscribe(
                data => {
                    console.log(data)
                    if(data.errorCode){
                        this.performancesadminpdv = data.message;
                    }
                },
                error => alert(error),
                () => {
                    console.log('getperformancessupperviseurclasserbydatebylot')
                }
            );
    }
    public detailperformancesadminclasserbydateandlot(adminpdv: any, content){
        console.log(adminpdv);
        this.performancesadminpdvbyadmin = undefined;
        this._apiplatform.getperformancessupperviseurclasserbydatebySup({adminpdv:adminpdv, typedate:this.typedateperformancesadminpdv})
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.performancesadminpdvbyadmin = data.message;
                        console.log(this.performancesadminpdvbyadmin);
                    }
                },
                error => alert(error),
                () => {
                    console.log('getperformancessupperviseurclasserbydatebySup')
                }
            );
       this.showModalPPV(content);
    }


    public doughnutChartLabelsAP: string[] = ['Pas deposit', 'Faible', 'Passable', 'Bien'];
    public doughnutChartDataAP: number[] = [150, 100, 50, 25];
    public datasetsAP: any[];
    public etatdepositlot:any;
    public lotetatdeposit:any;
    public rowsOnPageAP = 12;
    public sortByAP = "depositactuel";
    public sortOrderAP = "desc";
    public filterQueryAP:any;

    public etatDepositAP(){
        this._apiplatform.getEtatdepositbylotbysup()
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.datasetsAP = [{
                            data: data.message.nbrepoints,
                            backgroundColor: ["blue", "red", "orange", "green"]
                        }];
                    }
                },
                error => alert(error),
                () => {
                    console.log('getEtatdepositbylotbysup');
                }
            );

    }
    public detailEtatDepositAP(lot:string){
        console.log(lot);
        this.etatdepositlot = undefined;
        this._apiplatform.getDetailEtatdepositbylotbysup({lot:lot})
            .subscribe(
                data => {
                    console.log(data);
                    if(data.errorCode){
                        this.etatdepositlot = data.message;
                    }
                },
                error => alert(error),
                () => {
                    console.log('getDetailEtatdepositbylotbysup');
                }
            )

    }
    public chartClickedAP(e:any):void {
        if (e.active[0]){
            this.lotetatdeposit = e.active[0]._model.label;
            this.detailEtatDepositAP(this.lotetatdeposit);
        }
    }



    /************************************************************************************
     *********************************   PARTIE DEPOSIT   ****************************
     ***********************************************************************************/

    public deposits=[];
    public audio=false;
    getdeposit(){
        this.audio=true;
        this.deposits=[
            {'entreprise':'al makhtoum','superviseur':'maguette','commercial':'naby','montant':'1000000'},
            {'entreprise':'bbs','superviseur':'khady','commercial':'magor','montant':'1000000'}
        ];
        /*this._utilService.getlistsDepositcc()
            .subscribe(
                data => {
                    this.deposits=data;
                    if(data==''){
                    }
                    else{
                        this.deposits=data;
                    }
                },
                error => alert(error),
                () => console.log('souscrireSentool')
            );*/
    }
    arreterson(){
        //this.audio=false;
    }
    alertdeposit(){
        /*this._utilService.alertdepositcc()
            .subscribe(
                data => {

                    if(data.reponse=="ok"){
                        this.audio=true;
                    }

                },
                error => alert(error),
                () => console.log('souscrireSentool')
            );*/

    }
    validerDepositcc(){

        /*this._utilService.validerDepositcc()
            .subscribe(
                data => {
                    this.deposits=data;
                    // var plays=document.querySelector("#audio");
                    //plays.play();
                    if(data==''){
                    }
                    else{
                        this.deposits=data;
                    }
                },
                error => alert(error),
                () => console.log('souscrireSentool')
            );*/
    }
    tocurrency(number){
        return Number(number).toLocaleString();

    }






}
