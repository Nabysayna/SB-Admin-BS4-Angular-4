import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from "../../services/util.service";
import { NgForm } from '@angular/forms';
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {ApiPlatformService} from "../../services/apiplateform.service";
import {Color} from "ng2-charts";
import {Router} from "@angular/router";
import {SuivipositionnementService} from "../../services/suivipositionnement.service";

@Component({
    selector: 'app-superviseur',
    templateUrl: './superviseur.component.html',
    styleUrls: ['./superviseur.component.scss'],
    providers:[UtilService, AssignationSuiviService,ApiPlatformService, SuivipositionnementService],
})
export class SuperviseurComponent implements OnInit {
    public form:any;
    public staticAlertClosed: boolean = false;
    public isEnregistrerAssignation: boolean = false;
    public rep1:any;
    public filterQuery:string = "";
    public filtreRegion:string = "--Choix région--";
    public filtreZone:string = "--Choix zone--";
    public filtreSousZone:string = "--Choix sous zone--";
    public choixcommercial:string = "--Choix commercial--";
    public objetifcommercial:number = 0;
    public reponse1:boolean;
    public prenom='';
    public nom='';
    public email='';
    public region='';
    public szone='';
    public tel='';
    public id_client_sentool=-1;
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
    killsetinterval:any;

    constructor(
        public router: Router,
        private _apiplatform: ApiPlatformService,
        private modalService: NgbModal,
        private _utilService:UtilService,
        private _assignationsuiviService:AssignationSuiviService,
        private _suivipositionnementService:SuivipositionnementService
    ) {this.reponse1=false;}

    ngOnInit() {
        this.getAssignationsBySuperviseur();
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
                                    libellepoint:type.p_nom_point,
                                    fullname:type.p_prenom+" "+type.p_nom,
                                    telephone:type.p_telephone,
                                    adresse:JSON.parse(type.p_adresse_point).adressepoint+", "+JSON.parse(type.p_adresse_point).souszonepoint+", "+JSON.parse(type.p_adresse_point).zonepoint,
                                    note:type.note,
                                    id_assigner:type.id_assigner,
                                    id_commercial:type.id_commercial,
                                    dates_suivi:type.dates_suivi,
                                    reponse:type.reponse,
                                    qualification:"--Choisir une action--",
                                    ischoixvalide:false,
                                    choixsouscrit:"SenTool",
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
            this.getPointsdeployeByCC();
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
                                    libellepoint:type.p_nom_point,
                                    fullname:type.p_prenom+" "+type.p_nom,
                                    telephone:type.p_telephone,
                                    adresse:JSON.parse(type.p_adresse_point).adressepoint+", "+JSON.parse(type.p_adresse_point).souszonepoint+", "+JSON.parse(type.p_adresse_point).zonepoint,
                                    note:type.note,
                                    id_assigner:type.id_assigner,
                                    id_commercial:type.id_commercial,
                                    dates_suivi:type.dates_suivi,
                                    reponse:type.reponse,
                                    qualification:"--Choisir une action--",
                                    ischoixvalide:false,
                                    choixsouscrit:"SenTool",
                                    client:client
                                }
                            }
                        });
                        this.datasuiviarelancer = this.datasuiviarelancer.filter(opt => opt)
                    },
                    error => alert(error),
                    () => {
                        console.log('');
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
            console.log('');
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
            this.errovalidation = false;
            this.getDemandeDepotForCC();
            console.log('step - 2');
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.menuHead.menuHead9 = true;

            this.listcreditsuperviseur();
            this.killsetinterval = setInterval(() => {
                this.getDemandeDepotForCC();
                console.log('step - 1');

            }, 10000);
        }
    }

    public toInt(num: string) { return +num; }
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
                () => console.log('')
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
         this.id_client_sentool=-1;

  }

    getgerant(p){
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
                    this.data = data.map(function(type) {
                        return {
                            id:type.id,
                            libellepoint:JSON.parse(type.client).libellepoint,
                            prenom:JSON.parse(type.client).prenom,
                            nom:JSON.parse(type.client).nom,
                            fullname:type.p_prenom+" "+type.p_nom,
                            telephone:type.p_telephone,
                            adresse:JSON.parse(type.p_adresse_point).adressepoint?JSON.parse(type.p_adresse_point).adressepoint:'-',
                            note:JSON.parse(type.client).note,
                            region:JSON.parse(type.p_adresse_point).regionpoint?JSON.parse(type.p_adresse_point).regionpoint:'Dakar',
                            zone:JSON.parse(type.p_adresse_point).zonepoint,
                            sous_zone:JSON.parse(type.p_adresse_point).souszonepoint,
                            commentaire:type.commentaire,
                            infosup:JSON.parse(type.infosup),
                            value:type.id, checked:false
                        };
                    });
                    for (let i = 0; i < this.data.length; i++) {
                        if(!this.regions.includes(this.data[i].region)) this.regions.push(this.data[i].region);
                    }
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
            this._assignationsuiviService.assignationcommercial(assignations)
                .subscribe(
                    data => {
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
        this.zones =  [] ;
        for (let i = 0; i < this.data.length; i++) {
            if( this.data[i].region==this.filtreRegion ){
                if( !this.zones.includes(this.data[i].zone) )
                    this.zones.push(this.data[i].zone);
            }
        }
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
        //console.log(this.selectedOptions);
    }




    /************************************************************************************
     *********************************   PARTIE SUIVI ASSIGNATION  et RELANCE ****************************
     ***********************************************************************************/

    choixqualification(item: any){
        if(item.qualification == "Valider") item.ischoixvalide = true
        else item.ischoixvalide = false;
    }

    choixsouscription(item: string){
        console.log('choixsouscription');
    }

    validersuivisuperviseur(suivi:any){
        let suivisuperviseur = {
            id:suivi.id,
            dates_suivi:JSON.parse(suivi.dates_suivi),
            reponse:suivi.reponse,
            qualification:suivi.qualification,
            id_assigner:suivi.id_assigner,
            choixsouscrit: suivi.choixsouscrit,
            client:suivi.client,
            id_commercial:suivi.id_commercial,
        };
        this.datasuivi = this.datasuivi.filter(opt => opt!=suivi);
        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(
                data => {
                    console.log('')
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
            client:suivi.client,
            choixsouscrit: suivi.choixsouscrit,
            id_commercial:suivi.id_commercial,
        };
        this.datasuiviarelancer = this.datasuiviarelancer.filter(opt => opt!=suivi);

        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(
                data => {
                    console.log('')
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
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }

    showModalDetail(content, item) {
        this.reponsesPointAuProspect = JSON.parse(item.reponse) ;
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
                () => console.log('')
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
        nom:'', prenom:'', telephone:'',
        email:'', nometps:'', nomshop:'',
        type:'superviseur', idcommercial:0, id_client_sentool:-1,
        adresse:{
            region:'--Choix région--',
            zone:'--Choix zone--',
            souszone:'--Choix sous zone--',
            address:'',
        },
    };

    public showModalTop(content) { this.modalRef = this.modalService.open(content, {size: "lg"}); }
    public getProspect(){
        this._utilService.getProspectValide()
            .subscribe(
                data => {
                    this.prospects = data;
                    this.prospects = data.map(function(type){
                        return {
                            id:type.id,
                            nom_point:type.nom_point,
                            commercial:JSON.parse(type.commercial).prenom+" "+JSON.parse(type.commercial).nom,
                            p_prenom:type.p_prenom,
                            p_nom:type.p_nom,
                            email:type.email,
                            id_commercial:type.id_commercial,
                            telephone:type.telephone,
                            adresse_point:JSON.parse(type.adresse_point),
                        }
                    });
                    this.getRegionSouscritSentool();
                },
                error => alert(error),
                () => console.log('getProspectValide')
            );
    }

    public modalAjout(content,p){
        this.reponsesouscripdejaexit = false;

        this.iszones = false;
        this.issouszones = false;
        this.clsentool.nom = p.p_nom;
        this.clsentool.prenom = p.p_prenom;
        this.clsentool.telephone = p.telephone;
        this.clsentool.email = p.email;
        this.clsentool.nometps = p.nom_point;
        this.clsentool.nomshop = p.nom_point;
        this.clsentool.idcommercial = p.id_commercial;
        this.clsentool.id_client_sentool = p.id;
        this.clsentool.adresse.region = p.adresse_point.regionpoint?p.adresse_point.regionpoint:'--Choix région--';
        this.clsentool.adresse.zone = p.adresse_point.zonepoint;
        this.clsentool.adresse.souszone = p.adresse_point.souszonepoint;
        this.clsentool.adresse.address = p.adresse_point.adressepoint;

        this._utilService.getZoneByRegion(this.clsentool.adresse.region)
            .subscribe(
                data => {
                    this.zones = data;
                    if(this.zones.length!=0) this.iszones = true;
                },
                error => alert(error),
                () => {

                }
            );
        this.selectZoneSouscritSentool();


        this.showModalTop(content);
    }

    validernewclientsentool(){
        this._apiplatform.souscrireSentool(this.clsentool)
            .subscribe(
                data => {
                    if(data.errorCode){
                        if(data.message =='dejainscrit'){ this.reponsesouscripdejaexit = true; }
                        else {
                            this.closedModal();
                            this.getProspect();
                        }
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
        this.clsentool.adresse.zone = '--Choix zone--';
        this.clsentool.adresse.souszone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.clsentool.adresse.region)
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
        this._utilService.getSouszoneByZoneByRegion({region:this.clsentool.adresse.region, zone: this.clsentool.adresse.zone})
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
                            adresse:client.adressepoint +", "+client.regionpoint,
                            gerant:type.gerant,
                            date_ajout:type.date_ajout,
                            tel:type.tel,
                            id_client_sentool:type.id_client_sentool,
                            nom_point:type.nom_point,
                            commercial:type.commercial,
                            infosup:JSON.parse(type.infosup),
                        }
                    });
                },
                error => alert(error),
                () => console.log('')
            );
    }




    /**********************************************************************************
    ****************************     PARTIE SUIVI POINTS   ****************************
    ***********************************************************************************/

    public doughnutChartLabelsPPV: string[] = ['Faible', 'Passable', 'Assez-bien', 'Bien'];
    public doughnutChartDataPPV: number[] = [0, 0, 0, 0];
    public colorsEmptyObject: Array<Color> = [{}];
    public datasetsPPV: any[];
    public typeperformancePPV:string = " dans la journée";
    public checkPerformancePPV:any = {journee: true, semaine: false, mois: false, annee: false, tout: false};
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
                    console.log('------------------------------------');
                }
            );
    }
    public estcheckPerformancePPV(type: string){
        if(type == 'journee'){
            this.checkPerformancePPV.journee = true;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans la journée";
        }
        else if(type == 'semaine'){
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = true;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans la semaine";
        }
        else if(type == 'mois'){
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = true;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans le mois";
        }
        else if(type == 'annee'){
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = true;
            this.checkPerformancePPV.tout = false;
            this.typeperformancePPV = "dans l'année";
        }
        else if(type == 'tout'){
            this.checkPerformancePPV.journee = false;
            this.checkPerformancePPV.semaine = false;
            this.checkPerformancePPV.mois = false;
            this.checkPerformancePPV.annee = false;
            this.checkPerformancePPV.tout = true;
            this.typeperformancePPV = "dans l'ensemble";
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
        if (this.checkPerformancePPV.annee) {
            type = "annee";
        }
        if (this.checkPerformancePPV.tout) {
            type = "tout";
        }
        //console.log(type+' '+lot);
        this.typedateperformancesadminpdv = type;
        this.lotperformancesadminpdv = lot;
        this._apiplatform.getperformancessupperviseurclasserbydatebylot({lot:lot, typedate:type})
            .subscribe(
                data => {
                    //console.log(data)
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
        this.performancesadminpdvbyadmin = undefined;
        this._apiplatform.getperformancessupperviseurclasserbydatebySup({idadminpdv:adminpdv.dependsOn, typedate:this.typedateperformancesadminpdv})
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.performancesadminpdvbyadmin = data.message.map(function (op) {
                            return {
                                dateoperation: op.dateoperation.date.split('.')[0],
                                name_caissier: op.name_caissier,
                                montanttotal: op.montanttotal,
                                operateur: op.operateur,
                                telephone: op.telephone,
                                traitement: op.traitement,
                            }
                        });
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
        this.etatdepositlot = undefined;
        this._apiplatform.getDetailEtatdepositbylotbysup({lot:lot})
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.etatdepositlot = data.message.map(function (opt) {
                            return {
                                caution:opt.caution,
                                cautiondebase:opt.cautiondebase,
                                telephone:opt.telephone,
                                date_last_modif:opt.date_last_modif.date.split(' ')[0],
                                name_adminpdv:opt.name_adminpdv,
                            }
                        });
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




    /***************************************************************************************
     *********************************   PARTIE POINT SENTOOL   ****************************
     **************************************************************************************/

    public rowsOnPageSentoolByCC = 10;
    public sortBySentoolByCC = "date_ajout";
    public filterQuerySentoolByCC:any;
    public sortOrderSentoolByCC = "desc";
    public listepointsdepoyebycc:any[] = [];

    public getPointsdeployeByCC(): void {
        this._utilService.getPointsdeployeByCC()
            .subscribe(
                data => {
                    this.listepointsdepoyebycc = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adressecomplet);
                        return {
                            date_ajout: type.date_ajout,
                            nom_point: type.nomentreprise,
                            nom_boutique: type.nomboutique,
                            fullname: type.prenom + " " + type.nom,
                            telephone: type.telephone,
                            adresse: adresse_point.adresse?adresse_point.adresse+',':'' + " " + adresse_point.souszone + ", " + adresse_point.zone,
                            fullname_commercial: type.prenom_commercial + " " + type.nom_commercial
                        }
                    });
                    console.log('');
                },
                error => alert(error),
                () => console.log('getPointsdeploye')
            );
    }



    /************************************************************************************
     *********************************   PARTIE DEPOSIT   ****************************
     ***********************************************************************************/

    public listedeposits:any[] = [];
    public listedepositsvalide:any[] = [];
    public listedepositsencours:any[] = [];
    public mescredits:any[] = [];
    public errovalidation:boolean = false;
    public showModalVoirplusdedemande(content) {
        this.modalService.open(content, {size: "lg"}).result.then( (result) => { }, (reason) => {} );
    }

    public showModalVoirDetailCredit(content) {
        this.modalService.open(content).result.then( (result) => { }, (reason) => {} );
    }

    getDemandeDepotForCC(){
        this._suivipositionnementService.getDemandeDepotForCC()
            .subscribe(
                data => {
                    if(data.errorCode==0){
                        this.listedeposits = data.message.map(function(type){
                            return {
                                id_accepteur: -1,
                                niveau_avancement: (type.etatdemande==0 && type.accepteur=='attente')?-4:(type.etatdemande==0 && type.accepteur!='attente')?-3:type.etatdemande==1?-2:type.etatdemande==2?-1:0,
                                datedemande: type.datedemande,
                                adressecomplet: JSON.parse(type.initiateur.adresse).address+", "+JSON.parse(type.initiateur.adresse).souszone+", "+JSON.parse(type.initiateur.adresse).zone,
                                montantdemande: type.montantdemande,
                                telephone: type.initiateur.telephone,
                                point: type.initiateur,
                                initiateur: type.initiateur.prenom+' '+type.initiateur.nom,
                                accepteur: type.accepteur=='attente'?type.accepteur:JSON.parse(type.accepteur).prenom+" "+JSON.parse(type.accepteur).nom,
                                infosup: type.infosup,
                                etatdemande: type.etatdemande,
                                tokencc: type.tokencc,
                            }
                        });
                        this.listedepositsencours = this.listedeposits.filter(opt => opt.etatdemande!=3);
                        this.listedepositsvalide = this.listedeposits.filter(opt => opt.etatdemande==3);
                        this.getCommerciaux();
                    }
                },
                error => alert(error),
                () => console.log('')
            );
    }

    affecterComForDepot(item){
        clearInterval(this.killsetinterval);
        let dataaffecte = {
            accepteur: this.commercials.find(opt => opt.id= item.id_accepteur),
            datedemande: item.datedemande,
            montantdemande: item.montantdemande,
            tokencc: item.tokencc,
        };
        this._suivipositionnementService.affecterComForDepotForCC(dataaffecte)
            .subscribe(
                data => {
                    this.getDemandeDepotForCC();
                },
                error => alert(error),
                () => {
                    this.killsetinterval = setInterval(() => {
                        this.getDemandeDepotForCC();
                        console.log('step');
                    }, 10000);
                }
            );
    }

    validerComForDepotCC(item){
        console.log('validerComForDepotCC');

        clearInterval(this.killsetinterval);
        this._suivipositionnementService.validerComForDepotCC({montantdemande: item.montantdemande, tokencc: item.tokencc, point: item.point, agentcom: item.accepteur})
            .subscribe(
                data => {
                    if(data.errorCode){
                        if(data.messageError=='ok'){
                            this.listcreditsuperviseur();
                        }
                        else{
                            this.errovalidation = true;
                        }
                    }
                },
                error => alert(error),
                () => {
                    this.getDemandeDepotForCC();
                    this.killsetinterval = setInterval(() => {
                        this.getDemandeDepotForCC();
                        console.log('step');
                    }, 10000);
                }
            );
    }

    tocurrency(number){
        return Number(number).toLocaleString();
    }

    listcreditsuperviseur(){
        this._suivipositionnementService.listcreditsuperviseur()
            .subscribe(
                data => {
                    if(data.errorCode){
                        this.mescredits = data.message;
                    }
                },
                error => alert(error),
                () => console.log('listcreditsuperviseur')
            );
    }



}
