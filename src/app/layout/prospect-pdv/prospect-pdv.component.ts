import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";

import { Http, RequestOptions, Headers  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Router} from "@angular/router";


@Component({
    selector: 'app-prospect-pdv',
    templateUrl: './prospect-pdv.component.html',
    styleUrls: ['./prospect-pdv.component.scss'],
    animations: [routerTransition()],
    providers:[AssignationSuiviService]
})
export class ProspectPdvComponent implements OnInit {

    public staticAlertClosed: boolean = false;
    public isEnregistrerProspect: boolean = false;

    uploadFile: any;
    newImage : any ;
    uploadedFileType : string ;
    uploadfinished:boolean = true;

    reponsesProspect : string[] = [];
    allServices : any ;


    @Input() infoprospect: any;
    public point:any;
    public alldatapoint:any;
    public adresse_point:any;
    public adresse_proprietaire:any;
    public zonesactivites:{activites:any[],zones:any[]};
    public isSelect=true;
    public souszonespoints:any[];
    public souszonespropietaires:any[];

    isinfo = {isinfopoint:false, isinfoproprietaire:false, isinfocomplement:true};
    rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];
    public optionsActivite:any[] = [];

    public prospection: any = {
        id_assignation_origin:0,

        id_client:'',
        client:'',
        reponsesProspect : [],
        piecesFournies : [],

        noteprospect:0,
        niveau:1,

        datesuivi:{
            dateniveau1:'',
            dateniveau2:'',
            dateniveau3:'',
        },
    };


    constructor(private _utilService:UtilService, private _assignationsuiviService:AssignationSuiviService, private http: Http, public router: Router) { }

    ngOnInit() {
        this._utilService.getRegion()
            .subscribe(
                data => this.regions = data,
                error => alert(error),
                () => {
                    this._utilService.getZoneActivite()
                        .subscribe(
                            data => {
                                this.zonesactivites = data;
                            },
                            error => alert(error),
                            () => {
                                this._utilService.getAllDataPoint(this.infoprospect.id_point)
                                    .subscribe(
                                        data => {
                                            this.alldatapoint = data;
                                            this.avoter(this.alldatapoint.avis-1);
                                            this.adresse_point = JSON.parse(this.alldatapoint.adresse_point);
                                            this.adresse_proprietaire = JSON.parse(this.alldatapoint.adresse_proprietaire);
                                            let letactivites = JSON.parse(this.alldatapoint.activites);
                                            this.optionsActivite = this.zonesactivites.activites.map(function(type) {
                                                if (letactivites.includes(type.activite)){
                                                    return {name:type.activite, value:type.id, checked:true};
                                                }
                                                else{
                                                    return {name:type.activite, value:type.id, checked:false};
                                                }
                                            });
                                            this.adresse_point = {
                                                regionpoint:this.adresse_point.regionpoint?this.adresse_point.regionpoint:'',
                                                zonepoint:this.adresse_point.zonepoint?this.adresse_point.zonepoint:undefined,
                                                souszonepoint:this.adresse_point.souszonepoint?this.adresse_point.souszonepoint:undefined,
                                                adressepoint:this.adresse_point.adressepoint?this.adresse_point.adressepoint:undefined,
                                                codepostalpoint:this.adresse_point.codepostalpoint?this.adresse_point.codepostalpoint:0,
                                                geospatialpoint:this.adresse_point.geospatialpoint?this.adresse_point.geospatialpoint:{latitude:0, longitude:0}
                                            }
                                            //console.log(this.adresse_point);
                                        },
                                        error => alert(error),
                                        () => {
                                            this._utilService.getZoneByRegion(this.adresse_point.regionpoint)
                                                .subscribe(
                                                    data => this.zonespoints = data,
                                                    error => console.log(error),
                                                    () => {
                                                        this.selectZonePoint();
                                                    }
                                                );
                                        }
                                    );
                            }
                        );

                }
            );

    }

    public getZoneActivite(){
        this._utilService.getZoneActivite()
            .subscribe(
                data => {
                    this.zonesactivites = data;
                },
                error => alert(error),
                () => console.log('')
            );
    }

    public getAllServices(){
        this._utilService.getServices()
            .subscribe(
                data => this.allServices = data,
                error => alert(error),
                () => {
                        this.isSelect = !this.isSelect;
                        for(let i=0 ; i<this.allServices.length ; i++){
                            this.reponsesProspect.push("") ;
                        }
                      }
            );
    }

    public regions:any[];
    public zonespoints:any[];
    getRegion(){
        this._utilService.getRegion()
            .subscribe(
                data => {
                    this.regions = data;
                },
                error => alert(error),
                () => console.log('')
            );
    }
    selectRegionPoint(){
        this.adresse_point.zonepoint = '--Choix zone--';
        this.adresse_point.souszonepoint = '--Choix sous zone--';
        this.souszonespoints= [];
        this._utilService.getZoneByRegion(this.adresse_point.regionpoint)
            .subscribe(
                data => this.zonespoints = data,
                error => alert(error),
                () => console.log('')
            );
    }

    public selectZonePoint(){
        this._utilService.getSouszoneByZone(this.adresse_point.zonepoint)
            .subscribe(
                data => this.souszonespoints = data,
                error => alert(error),
                () => console.log('')
            );
    }

    public selectZoneProprietaire(){
        this._utilService.getSouszoneByZone(this.adresse_proprietaire.zoneproprietaire)
            .subscribe(
                data => this.souszonespropietaires = data,
                error => alert(error),
                () => console.log('')
            );
    }

    coordonneesgeospatiales(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                this.adresse_point.geospatialpoint.longitude = position.coords.longitude;
                this.adresse_point.geospatialpoint.latitude = position.coords.latitude;
            });
        }
    }

    public avoter(index:number): void{
        if(  ( index + 1 == this.rating.length ) && ( this.rating[index].checked == true) ) {
            this.rating[index].checked = false;
        }
        else {
            for (var i = 0; i<this.rating.length; i++) {
                if(i < index) {
                    this.rating[i].checked = true;
                }
                else if(i == index) {
                    if( (this.rating[i].checked == true) && (this.rating[i+1].checked == false) ){
                        this.rating[i].checked = false;
                    }
                    else {
                        this.rating[i].checked = true;
                    }
                }
                else {
                    this.rating[i].checked = false;
                }
            }
        }
        let arrayRating = this.rating.filter(opt => opt.checked);
        this.prospection.noteprospect = arrayRating.length;
    }

    get selectedoptionsActivite() {
        return this.optionsActivite
        .filter(opt => opt.checked)
        .map(opt => opt.value)
    };

    public updateCheckedoptionsActivite(): void{
        let activites = this.zonesactivites.activites;
        this.alldatapoint.activites = this.selectedoptionsActivite.map(function(option) {
          return activites[Number(option)-1].activite;
        });
    }

    public enregistrerProspect(){

        this.alldatapoint.adresse_point = this.adresse_point;
        this.alldatapoint.adresse_proprietaire = this.adresse_proprietaire

        this.prospection.id_assignation_origin = this.infoprospect.id;
        this.prospection.id_client = this.infoprospect.id_point;
        this.prospection.client = this.alldatapoint;
        this.prospection.infosup = this.infoprospect.infosup;

        for(let i = 0 ; i<this.allServices.length ; i++){
            this.prospection.reponsesProspect.push( this.allServices[i].nom+"#"+this.reponsesProspect[i] ) ;
        }
        //console.log(this.prospection);
        this._assignationsuiviService.modifPoint(this.prospection)
            .subscribe(
                data => {
                    //console.log(data);
                    this.isEnregistrerProspect = true;
                    this.router.navigate(['/dashboard']);
                },
                error => alert(error),
                () => console.log('')
            );
    }

apiEndPoint = 'http://abonnement.bbstvnet.com/crmbbs/server-backend-upload/index.php' ;

  fileChange(event) {
      this.uploadfinished = false;
      let fileList: FileList = event.target.files;
      if(fileList.length > 0) {
          let file: File = fileList[0];
          let formData:FormData = new FormData();
          formData.append('file', file, file.name);
          let headers = new Headers();

          headers.append('Accept', 'application/json');
          let options = new RequestOptions({ headers: headers });

          this.http.post(`${this.apiEndPoint}`, formData, options)
              .map(res => res.json())
              .catch(error => Observable.throw(error))
              .subscribe(
                  data => {
                      //console.log("Retour uploader "+data.generatedName) ;
                           let newData = data;
                           this.uploadFile = newData;
                           this.newImage = this.uploadFile.generatedName ;
                           this.prospection.piecesFournies.push(this.uploadedFileType+"#"+this.newImage) ;
                        },
                  error => console.log(error),
                  () => {
                      this.uploadfinished = true;
                  }
              )
      }
  }


  validDonnees(){

  }

    public possibleAnswers = [
      {
        "reponse": "A Déjà Souscri"
      },
      {
        "reponse": "Souscrire Maintenant"
      },
      {
        "reponse": "Intéressé"
      },
      {
        "reponse": "Pas Pour le Moment"
      },
      {
        "reponse": "Impossible"
      },

    ];


}
