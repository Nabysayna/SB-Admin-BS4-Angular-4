import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";

@Component({
  selector: 'app-admincommercial',
  templateUrl: './admincommercial.component.html',
  styleUrls: ['./admincommercial.component.scss'],
  providers:[UtilService, AssignationSuiviService],

})

export class AdmincommercialComponent implements OnInit {

    public staticAlertClosed: boolean = false;
    public isEnregistrerAssignation: boolean = false;

    public filtreRegion:string = "--Choix région--";
    public filtreZone:string = "--Choix zone--";
    public filtreSousZone:string = "--Choix sous zone--";
    public choixsuperviseur:string = "--Choix superviseur--"
    public objetifsuperviseur:number = 0;

    public readyforassination:boolean=true;
    public isclickforassination:boolean=false;

    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";
    public sortByWordLength = (a: any) => { return a.adresse.length; }

    public rowsOnPageCom = 10;
    sortByCom = "fullname";
    public sortOrderCom = "asc";
    filterQueryCommercial:any;

    public commercials:any[] = [];
    public listenewpoints:any[] = [];

    public regions:any[] = [];
    public zones:any[] = [];
    public souszones:any[] = [];
    public superviseurs:any[] = [];
    public optionassignations:any[] = [];

    public menuHead = {menuHead1:true, menuHead2:false, menuHead3:false, menuHead4:false, menuHead5:false};


    constructor(private _utilService:UtilService, private _assignationsuiviService:AssignationSuiviService) { }

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
            this.getCommerciaux();
            this.getRegionsSuperviseurs();
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
            this.getCommerciaux();
            this.getRegionsSuperviseurs();
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

    public getCommerciaux(): void {
        this._utilService.getCommerciaux()
            .subscribe(
                data => {
                    this.commercials = data
                    if(data.errorCode) this.commercials = data.message;
                },
                error => alert(error),
                () => console.log(this.commercials)
            );
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

    public selectZone(){
        this.optionassignations = [];
        this._utilService.getSouszoneByZone(this.filtreZone.toString())
            .subscribe(
                data => this.souszones = data,
                error => alert(error),
                () => console.log(this.souszones)
            );
    }

    public selectSouszone(){
        this._utilService.getPointBySouszone(this.filtreSousZone)
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







    public filterQueryNewPts = "";
    public filtreRegionNewPts = "";
    public filtreZoneNewPts = "";
    public filtreSousZoneNewPts = "";
    public rowsOnPageNewPts = 5;
    public sortByNewPts = "libellepoint";
    public sortOrderNewPts = "asc";
    adresseNewPts:any[] = [];
    regionsNewPts:any[] = [];
    zonesNewPts:any[] = [];
    souszonesNewPts:any[] = [];
    dataNewPts:any[] = [];

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
                            adresse_point: adresse_point.adressepoint+" "+adresse_point.souszonepoint,
                            fullname_commercial:type.prenom_commercial+" "+type.nom_commercial
                        }
                    });
                    console.log(this.listenewpoints);

                    //this.adresseNewPts = data.message.map(function (type) {
                    //    return JSON.parse(type.adresse_point)
                    //});
                    //console.log(this.adresseNewPts);


                    //for (let i = 0; i < this.dataNewPts.length; i++) {
                      //  if(!this.regionsNewPts.includes(this.dataNewPts[i].region)) this.regionsNewPts.push(this.dataNewPts[i].region);
                    //}

                },
                error => alert(error),
                () => console.log('getNouveauxpoints')
            );
    }



    public toIntNewPts(num: string) {
        return +num;
    }

    public sortByWordLengthNewPts = (a: any) => {
        return a.adresse.length;
    }

    public selectRegionNewPts() {
        this.zonesNewPts =  [] ;
        for (let i = 0; i < this.dataNewPts.length; i++) {
            if( this.dataNewPts[i].region==this.filtreRegionNewPts ){
                if( !this.zonesNewPts.includes(this.dataNewPts[i].zone) )
                    this.zonesNewPts.push(this.dataNewPts[i].zone);
            }
        }
        console.log(this.zones);
    }

    sousZonesOfCurrentZoneNewPts(){
        let souszonesNewPts : any[] =  [] ;
        for (let i = 0; i < this.dataNewPts.length; i++) {
            if( this.dataNewPts[i].zone==this.filtreZone ){
                if( !souszonesNewPts.includes(this.dataNewPts[i].sous_zone) )
                    souszonesNewPts.push(this.dataNewPts[i].sous_zone);
            }
        }
        return souszonesNewPts ;
    }



}
