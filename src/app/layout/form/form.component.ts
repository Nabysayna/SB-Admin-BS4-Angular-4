import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import { Http, RequestOptions, RequestMethod, Headers  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Location} from '@angular/common';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers: [UtilService, AssignationSuiviService]
})
export class FormComponent implements OnInit {
	fakevalues = true ;
	public isAdresseproprio=true;
	public isAdressepoint=true;
	public isUploadfile=true;

    public rowsOnPage = 5;
    public sortBy = "service";
    public sortOrder = "asc";
    allServices : any ;
    reponsesProspect : string[] = [];
    uploadedFileType : string ;

    zonesactivites:{activites:any[],zones:any[]};
	public isSelect=true;

    souszonespoints:any[];
    souszonespropietaires:any[];

    client: any = {
        nompoint:'',
        adressecompletpoint:{
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
        telephonegerant:'',
        emailgerant:'',


        nomproprietaire:'',
        prenomproprietaire:'',
        telephoneproprietaire:'',
        emailproprietaire:'',
        adressecompletproprietaire:{
            zoneproprietaire:'--Choix zone--',
            souszoneproprietaire:'--Choix sous zone--',
            adresseproprietaire:'',
            codepostalproprietaire:0,
            geospatialproprietaire:{latitude:0,longitude:0},
        },
        reponsesProspect : [],
        piecesFournies : []
    };

    rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];

    options:any[] = [];

    uploadFile: any;
    newImage : any ;


    constructor(private _location: Location, private _utilService: UtilService, private _assignationsuiviService:AssignationSuiviService, private http: Http) { }

    ngOnInit() {
        this.getZoneActivite();
    }

    selectZonePoint(){
        this._utilService.getSouszoneByZone(this.client.adressecompletpoint.zonepoint)
            .subscribe(
                data => this.souszonespoints = data,
                error => alert(error),
                () => console.log(this.souszonespoints)
            );
    }

    selectZoneProprietaire(){
        this._utilService.getSouszoneByZone(this.client.adressecompletproprietaire.zoneproprietaire)
            .subscribe(
                data => this.souszonespropietaires = data,
                error => alert(error),
                () => console.log(this.souszonespropietaires)
            );
    }

    getAllServices(){
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

    getZoneActivite(){
        this._utilService.getZoneActivite()
            .subscribe(
                data => {
                    this.zonesactivites = data;
                    this.options = this.zonesactivites.activites.map(function(type) {
                        return {name:type.activite, value:type.id, checked:false};
                    });
                },
                error => alert(error),
                () => console.log(this.zonesactivites)
            );
    }

    avoter(index:number): void{
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
        this.client.avissurpoint = arrayRating.length;
    }

    coordonneesgeospatialespoint(){
        if(navigator.geolocation){
            console.log("YES!") ;
            let geospatialpoint = {latitude:0,longitude:0};
            navigator.geolocation.getCurrentPosition(function(position){
                geospatialpoint.longitude = position.coords.longitude;
                geospatialpoint.latitude = position.coords.latitude;
                sessionStorage.setItem('positionpoint',JSON.stringify(geospatialpoint)) ;
            }) ;
        }
    }

    coordonneesgeospatialesproprietaire(){
        if(navigator.geolocation){
            console.log("YES!") ;
            let geospatialproprietaire = {latitude:0,longitude:0};
            navigator.geolocation.getCurrentPosition(function(position){
                geospatialproprietaire.longitude = position.coords.longitude;
                geospatialproprietaire.latitude = position.coords.latitude;
                sessionStorage.setItem('positionproprietaire',JSON.stringify(geospatialproprietaire)) ;
            }) ;
        }
    }

    get selectedOptions() {
        return this.options
            .filter(opt => opt.checked)
            .map(opt => opt.value)
    };

    updateCheckedOptions(): void{
        let activites = this.zonesactivites.activites;
        this.client.typeactivite = this.selectedOptions.map(function(option) {
            return activites[Number(option)-1].activite;
        });
    }

    validernewclient(){
        this.client.adressecompletpoint.geospatialpoint = JSON.parse(sessionStorage.getItem('positionpoint'));
        this.client.adressecompletproprietaire.geospatialproprietaire = JSON.parse(sessionStorage.getItem('positionproprietaire'));

        for(let i = 0 ; i<this.allServices.length ; i++){
            this.client.reponsesProspect.push( this.allServices[i].nom+"#"+this.reponsesProspect[i] ) ;
        }

        this._utilService.insertPoint(this.client)
            .subscribe(
                data => {
                    console.log(data);
                    location.reload();
                },
                error => alert(error),
                () => console.log('insertPoint')
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
                           this.client.piecesFournies.push(this.uploadedFileType+"#"+this.newImage) ;
                        },
                  error => console.log(error)
              )
      }
  }



    public possibleAnswers = [
      {
        "reponse": "A Déjà Souscri"
      },
      {
        "reponse": "Souscrit Maintenant"
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
