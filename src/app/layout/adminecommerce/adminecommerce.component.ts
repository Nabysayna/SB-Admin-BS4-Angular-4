import { Component, OnInit, OnDestroy  } from '@angular/core';
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {UtilService} from "../../services/util.service";
import {NewclientService} from "../../services/newclient.service";
import {Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ApiCommandeService} from "../../services/apicommande.service";


@Component({
    selector: 'app-adminecommerce',
    templateUrl: 'adminecommerce.component.html',
    styleUrls: ['adminecommerce.component.scss'],
    providers:[UtilService, AssignationSuiviService, NewclientService, ApiCommandeService],
})

export class AdminecommerceComponent implements OnInit, OnDestroy {

    public staticAlertClosed: boolean = false;
    public loading_data = true;
    public isEnregistrerAssignation: boolean = false;
    public readyforassination:boolean=true;
    public isclickforassination:boolean=false;


    public menuHead = {menuHead1:true, menuHead2:false};
    public modalRef: NgbModalRef;



    constructor(
        private modalService: NgbModal,
        public router: Router,
        private _utilService:UtilService,
        private _assignationsuiviService:AssignationSuiviService,
        private _newclientService:NewclientService,
        private _apiCommandeService:ApiCommandeService
    ){ }

  	ngOnInit(){
        this.loading_data = true;
        console.log("-------------------------------");
        this.histInitArticleARecuperer();
    }

    ngOnDestroy(){ }


    public menuHeadClick(option: number){
        this.loading_data = true;
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;

            console.log("-------------------------------");
            this.histInitArticleARecuperer();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;

            this.loading_data = false;
        }
    }


    tocurrency(number){
        return Number(number).toLocaleString();
    }


    public toInt(num: string) { return +num; }



    /************************************************************************************
     ************************   PARTIE ARTICLE A RECUPERER   ****************************
     ***********************************************************************************/

    public selectionjourArticleARecuperer:string;
    public selectionintervalledateinitArticleARecuperer:string;
    public selectionintervalleddatefinalArticleARecuperer:string;

    historiquejourArticleARecuperer(){
        this.selectionintervalledateinitArticleARecuperer = undefined;
        this.selectionintervalleddatefinalArticleARecuperer = undefined;
        console.log(this.selectionjourArticleARecuperer);
        this._apiCommandeService.getListCommandeARecupererByDate({type: 'jour', infotype:this.selectionjourArticleARecuperer})
            .subscribe(
                data => {
                    console.log("-------------------------------");
                    console.log(data.message);

                },
                error => alert(error),
                () => {
                    this.filtreRegion = "--Choix région--";
                    this.filtreZone = "";
                    this.filtreSousZone = "-";
                    this.choixsuperviseur = "--Choix superviseur--";
                    this.objetifsuperviseur = 0;

                    this.loading_data = false;
                }
            );
    }

    historiqueintervalleArticleARecuperer(){
        this.selectionjourArticleARecuperer = undefined;
        console.log(this.selectionintervalledateinitArticleARecuperer+" "+this.selectionintervalleddatefinalArticleARecuperer);

        this._apiCommandeService.getListCommandeARecupererByDate({type: 'intervalle', infotype:this.selectionintervalledateinitArticleARecuperer+" "+this.selectionintervalleddatefinalArticleARecuperer})
            .subscribe(
                data => {
                    console.log("-------------------------------");
                    console.log(data.message);

                },
                error => alert(error),
                () => {
                    this.filtreRegion = "--Choix région--";
                    this.filtreZone = "";
                    this.filtreSousZone = "-";
                    this.choixsuperviseur = "--Choix superviseur--";
                    this.objetifsuperviseur = 0;

                    this.loading_data = false;
                }
            );
    }

    histInitArticleARecuperer(){
        this.selectionintervalledateinitArticleARecuperer = undefined;
        this.selectionintervalleddatefinalArticleARecuperer = undefined;

        let datenow = ((new Date()).toJSON()).split("T",2)[0];
        this.selectionjourArticleARecuperer = datenow;

        console.log(this.selectionjourArticleARecuperer);

        this._apiCommandeService.getListCommandeARecupererByDate({type: 'jour', infotype:this.selectionjourArticleARecuperer})
            .subscribe(
                data => {
                    console.log("-------------------------------");
                    console.log(data.message);

                },
                error => alert(error),
                () => {
                    this.filtreRegion = "--Choix région--";
                    this.filtreZone = "";
                    this.filtreSousZone = "-";
                    this.choixsuperviseur = "--Choix superviseur--";
                    this.objetifsuperviseur = 0;

                    this.getRegionsSuperviseurs();

                    this.loading_data = false;
                }
            );
    }



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
     ***************************   PARTIE ARTICLE A LIVRER   ****************************
     ***********************************************************************************/






}
