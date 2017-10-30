import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {Router} from "@angular/router";
import {NewclientService} from "../../services/newclient.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-admincommercial',
  templateUrl: './admincommercial.component.html',
  styleUrls: ['./admincommercial.component.scss'],
  providers:[UtilService, AssignationSuiviService, NewclientService],

})

export class AdmincommercialComponent implements OnInit {

    public staticAlertClosed: boolean = false;
    public isEnregistrerAssignation: boolean = false;

    public readyforassination:boolean=true;
    public isclickforassination:boolean=false;

    public menuHead = {menuHead1:true, menuHead2:false, menuHead3:false, menuHead4:false, menuHead5:false, menuHead6:false};

    public modalRef: NgbModalRef;

    constructor(private modalService: NgbModal, public router: Router, private _utilService:UtilService, private _assignationsuiviService:AssignationSuiviService, private _newclientService:NewclientService) { }

  	ngOnInit() {
        this.getRegionsSuperviseurs();
    }

    public menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getRegionsSuperviseurs();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getComSuperviseurs();
        }
        if(option == 4){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.menuHead.menuHead5 = false;
            this.getNouveauxpoints();

        }
        if(option == 5){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
            this.getPointsdeploye();
        }

  	}

    public toInt(num: string) { return +num; }

    public getRegionsSuperviseurs(): void {
        this._utilService.getRegionsSuperviseurs()
            .subscribe(
                data => {
                    console.log(data)
                    this.superviseurs = data.superviseurs
                    this.regions = data.regions
                },
                error => alert(error),
                () => console.log('getRegionsSuperviseurs')
            );
    }

    choixsuperviseurforcommercial(id_superviseur){
        console.log(id_superviseur);
    }

    public selectRegion(){
        this.optionassignations = [];
        this.filtreSousZone = "--Choix sous zone--";
        this._utilService.getZoneByRegion(this.filtreRegion.toString())
            .subscribe(
                data => {
                    console.log(data);
                    this.zones = data
                },
                error => alert(error),
                () => console.log(this.zones)
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
        this.optionassignations = [];
        this._utilService.getSouszoneByZoneByRegion({region: this.filtreRegion.toString(), zone: this.filtreZone.toString()})
            .subscribe(
                data => this.souszones = data,
                error => alert(error),
                () => console.log(this.souszones)
            );
    }

    public selectSouszone(){
        this._newclientService.getPointBySouszoneByZone({zone:this.filtreZone, souszone:this.filtreSousZone})
            .subscribe(
                data => {
                    console.log(data);
                    this.optionassignations = data.map(function(type) {
                        return {
                            id:type.id,
                            libellepoint:type.libellepoint,
                            prenom:type.prenom,
                            nom:type.nom,
                            fullname:type.fullname,
                            telephone:type.telephone,
                            adresse:type.adresse,
                            note:type.note,
                            commentaire:'',
                            value:type.id,
                            checked:false
                        };
                    });
                },
                error => alert(error),
                () => console.log(this.optionassignations)
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
            console.log(this.filtreZone+'-'+this.filtreSousZone+'-'+this.choixsuperviseur+'-'+this.objetifsuperviseur);
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
                        console.log(data);
                        this.isEnregistrerAssignation = true;
                        this.filtreZone = "--Choix zone--";
                        this.selectZone();
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
                    console.log(data);
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

    reaffectercommercial(item){
        console.log(item);
        this._utilService.affectationCommercial(item)
            .subscribe(
                data => {
                    console.log(data);
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
                    console.log(this.listenewpoints);
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
                            fullname_gerant: type.prenom + " " + type.nom,
                            telephone_gerant: type.telephone,
                            adresse_point: adresse_point.adresse?adresse_point.adresse+',':'' + " " + adresse_point.souszone + ", " + adresse_point.zone,
                            fullname_commercial: type.prenom_commercial + " " + type.nom_commercial
                        }
                    });
                    console.log(this.listepointsdepoye);
                },
                error => alert(error),
                () => console.log('getPointsdeploye')
            );
    }



    /************************************************************************************
     ********************   PARTIE ETAT DEPOSIT   ****************************
     ***********************************************************************************/




}
