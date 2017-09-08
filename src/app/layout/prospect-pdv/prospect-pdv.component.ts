import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";

import { Http, RequestOptions, RequestMethod, Headers  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


@Component({
    selector: 'app-prospect-pdv',
    templateUrl: './prospect-pdv.component.html',
    styleUrls: ['./prospect-pdv.component.scss'],
    animations: [routerTransition()],
    providers:[AssignationSuiviService]
})
export class ProspectPdvComponent implements OnInit {

    private staticAlertClosed: boolean = false;
    private isEnregistrerProspect: boolean = false;

    uploadFile: any;
    newImage : any ;
    uploadedFileType : string ;

    reponsesProspect : string[] = [];
    allServices : any ;


    @Input() infoprospect: any;
    private point:any;
    private alldatapoint:any;
    private adresse_point:any;
    private adresse_proprietaire:any;
    private zonesactivites:{activites:any[],zones:any[]};
    private isSelect=true;
    private souszonespoints:any[];
    private souszonespropietaires:any[];

    isinfo = {isinfopoint:false, isinfoproprietaire:false, isinfocomplement:true};
    rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];
    private optionsActivite:any[] = [];

    private prospection: any = {
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


    constructor(private _utilService:UtilService, private _assignationsuiviService:AssignationSuiviService, private http: Http) { }

    ngOnInit() {
        this.point = JSON.parse(this.infoprospect.point);
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
                                console.log(typeof this.zonesactivites);
                                let letactivites = JSON.parse(this.alldatapoint.activites);
                                this.optionsActivite = this.zonesactivites.activites.map(function(type) {
                                    if (letactivites.includes(type.activite)){
                                        return {name:type.activite, value:type.id, checked:true};
                                    }
                                    else{
                                        return {name:type.activite, value:type.id, checked:false};
                                    }
                                });
                            },
                            error => alert(error),
                            () => {
                                this.selectZonePoint();
                                this.selectZoneProprietaire();
                            }
                        );
                }
            );

    }


    private getAllServices(){
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

    private selectZonePoint(){
        this._utilService.getSouszoneByZone(this.adresse_point.zonepoint)
            .subscribe(
                data => this.souszonespoints = data,
                error => alert(error),
                () => console.log(this.souszonespoints)
            );
    }

    private selectZoneProprietaire(){
        this._utilService.getSouszoneByZone(this.adresse_proprietaire.zoneproprietaire)
            .subscribe(
                data => this.souszonespropietaires = data,
                error => alert(error),
                () => console.log(this.souszonespropietaires)
            );
    }

    private avoter(index:number): void{
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

    private updateCheckedoptionsActivite(): void{
        console.log(this.selectedoptionsActivite);
        let activites = this.zonesactivites.activites;
        this.alldatapoint.activites = this.selectedoptionsActivite.map(function(option) {
          return activites[Number(option)-1].activite;
        });
    }

    private getZoneActivite(){
        this._utilService.getZoneActivite()
            .subscribe(
                data => {
                    this.zonesactivites = data;
                },
                error => alert(error),
                () => console.log(this.zonesactivites)
            );
    }


    private enregistrerProspect(){

        this.alldatapoint.adresse_point = this.adresse_point;
        this.alldatapoint.adresse_proprietaire = this.adresse_proprietaire

        this.prospection.id_assignation_origin = this.infoprospect.id;
        this.prospection.id_client = this.infoprospect.id_point;
        this.prospection.client = this.alldatapoint;
        this.prospection.infosup = this.infoprospect.infosup;

        for(let i = 0 ; i<this.allServices.length ; i++){
            this.prospection.reponsesProspect.push( this.allServices[i].nom+"#"+this.reponsesProspect[i] ) ;
        }

        this._assignationsuiviService.modifPoint(this.prospection)
            .subscribe(
                data => {
                    console.log(data);
                    this.isEnregistrerProspect = true;
                },
                error => alert(error),
                () => console.log('')
            );
    }

apiEndPoint = 'http://abonnement.bbstvnet.com/crmbbs/server-backend-upload/index.php' ;

  fileChange(event) {
      let fileList: FileList = event.target.files;
      if(fileList.length > 0) {
          let file: File = fileList[0];
          let formData:FormData = new FormData();
          formData.append('file', file, file.name);
          let headers = new Headers();

          headers.append('Accept', 'application/json');
          let options = new RequestOptions({
                              headers: headers
                            });

          this.http.post(`${this.apiEndPoint}`, formData, options)
              .map(res => res.json())
              .catch(error => Observable.throw(error))
              .subscribe(
                  data => { console.log("Retour uploader "+data.generatedName) ;
                           let newData = data;
                           this.uploadFile = newData;
                           this.newImage = this.uploadFile.generatedName ;
                           this.prospection.piecesFournies.push(this.uploadedFileType+"#"+this.newImage) ;
                        },
                  error => console.log(error)
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
