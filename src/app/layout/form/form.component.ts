import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import { Http, RequestOptions, RequestMethod, Headers  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Location} from '@angular/common';
import {Router} from "@angular/router";

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
    allServices : any[] = [] ;
    reponsesProspect : string[] = [];
    uploadedFileType : string ;

    regionsactivites:{activites:any[],regions:any[]};
	public isSelect=true;

    zonespoints:any[];
    zonespropietaires:any[];
    souszonespoints:any[];
    souszonespropietaires:any[];

    client: any = {
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
        telephonegerant:'',
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


    constructor(public router: Router, private _location: Location, private _utilService: UtilService, private _assignationsuiviService:AssignationSuiviService, private http: Http) { }

    ngOnInit() {
        this.getRegionActivite();
    }

    getRegionActivite(){
        this._utilService.getRegionActivite()
            .subscribe(
                data => {
                    console.log(data);
                    this.regionsactivites = data;
                    this.options = this.regionsactivites.activites.map(function(type) {
                        return {name:type.activite, value:type.id, checked:false};
                    });
                },
                error => alert(error),
                () => console.log(this.regionsactivites)
            );
    }

    selectRegionPoint(){
        this.client.adressecompletpoint.zonepoint = '--Choix zone--';
        this.client.adressecompletpoint.souszonepoint = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.client.adressecompletpoint.regionpoint)
            .subscribe(
                data => this.zonespoints = data,
                error => alert(error),
                () => console.log(this.zonespoints)
            );
    }

    selectRegionProprietaire(){
        this.client.adressecompletproprietaire.zoneproprietaire = '--Choix zone--';
        this.client.adressecompletproprietaire.souszoneproprietaire = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.client.adressecompletproprietaire.regionproprietaire)
            .subscribe(
                data => this.zonespropietaires = data,
                error => alert(error),
                () => console.log(this.zonespropietaires)
            );
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
            navigator.geolocation.getCurrentPosition(position => {
                this.client.adressecompletpoint.geospatialpoint.longitude = position.coords.longitude;
                this.client.adressecompletpoint.geospatialpoint.latitude = position.coords.latitude;
                console.log('test 1');
                console.log(this.client.adressecompletpoint.geospatialpoint);
            });
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
        let activites = this.regionsactivites.activites;
        this.client.typeactivite = this.selectedOptions.map(function(option) {
            return activites[Number(option)-1].activite;
        });
        console.log(this.client.typeactivite);
    }

    validernewclient(){
        this.client.adressecompletproprietaire.geospatialproprietaire = JSON.parse(sessionStorage.getItem('positionproprietaire'));

        for(let i = 0 ; i<this.allServices.length ; i++){
            this.client.reponsesProspect.push( this.allServices[i].nom+"#"+this.reponsesProspect[i] ) ;
        }
        console.log(this.client);

        this._utilService.insertPoint(this.client)
            .subscribe(
                data => {
                    console.log(data);
                    this.router.navigate(['/dashboard']);
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
