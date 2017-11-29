import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";

import { Http, RequestOptions, Headers  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Router} from "@angular/router";


@Component({
    selector: 'app-modif-pdv',
    templateUrl: 'modif-pdv.component.html',
    styleUrls: ['modif-pdv.component.scss'],
    animations: [routerTransition()],
    providers:[AssignationSuiviService]
})
export class ModifPdvComponent implements OnInit {

    public staticAlertClosed: boolean = false;
    public isEnregistrerProspect: boolean = false;

    uploadFile: any;
    newImage : any ;
    uploadedFileType : string ;
    uploadfinished:boolean = true;

    reponsesProspect : string[] = [];
    allServices : any ;

    compteur:number = 0;


    @Input() infoprospect: any;
    public alldatapoint:any;
    public adresse_point:{regionpoint:string, zonepoint:string, souszonepoint:string, adressepoint:string, codepostalpoint:number, geospatialpoint:any} = {regionpoint:'', zonepoint:'', souszonepoint:'', adressepoint:'', codepostalpoint:0, geospatialpoint:''};
    public regionszonesactivites:{activites:any[], zones:any[], regions:any[]};
    public isSelect=true;
    public zonespoints:any[];
    public souszonespoints:any[];

    isinfocomplement:boolean = false;
    rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];
    public optionsActivite:any[] = [];


    constructor(private _utilService:UtilService, private _assignationsuiviService:AssignationSuiviService, private http: Http, public router: Router) { }

    ngOnInit() {
        this._utilService.getRegionZoneActivite()
            .subscribe(
                data => {
                    this.regionszonesactivites = data;
                    let geospatialpoint = {latitude:0,longitude:0};
                    navigator.geolocation.getCurrentPosition(function(position){
                        geospatialpoint.longitude = position.coords.longitude;
                        geospatialpoint.latitude = position.coords.latitude;
                        sessionStorage.setItem('positionpoint',JSON.stringify(geospatialpoint)) ;
                    }) ;
                },
                error => alert(error),
                () => {
                    this._utilService.getAllDataPoint(this.infoprospect.id)
                        .subscribe(
                            data => {
                                this.alldatapoint = data;
                                this.avoter(this.alldatapoint.avis-1);
                                this.adresse_point = JSON.parse(this.alldatapoint.adresse_point);
                                this.adresse_point.regionpoint = JSON.parse(this.alldatapoint.adresse_point).regionpoint?JSON.parse(this.alldatapoint.adresse_point).regionpoint:'Dakar';
                                this.adresse_point.zonepoint = JSON.parse(this.alldatapoint.adresse_point).zonepoint;
                                this.adresse_point.souszonepoint = JSON.parse(this.alldatapoint.adresse_point).souszonepoint;
                                this.adresse_point.codepostalpoint = JSON.parse(this.alldatapoint.adresse_point).codepostalpoint;
                                this.adresse_point.geospatialpoint = JSON.parse(this.alldatapoint.adresse_point).geospatialpoint;
                                let letactivites = JSON.parse(this.alldatapoint.activites);
                                this.optionsActivite = this.regionszonesactivites.activites.map(function(type) {
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
                                this.selectRegionPoint();
                                this.selectZonePoint();
                                this.adresse_point.geospatialpoint = JSON.parse(sessionStorage.getItem('positionpoint'));
                            }
                        );
                }
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

    selectRegionPoint(){
        this.adresse_point.zonepoint = '--Choix zone--';
        this.adresse_point.souszonepoint = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.adresse_point.regionpoint)
            .subscribe(
                data => this.zonespoints = data,
                error => alert(error),
                () => console.log('')
            );
    }

    selectZonePoint(){
        this._utilService.getSouszoneByZone(this.adresse_point.zonepoint)
            .subscribe(
                data => this.souszonespoints = data,
                error => alert(error),
                () => console.log('')
            );
    }

    coordonneesgeospatiales(){
        if(navigator.geolocation){
            let geospatialpoint = {latitude:0,longitude:0};
            navigator.geolocation.getCurrentPosition(function(position){
                geospatialpoint.longitude = position.coords.longitude;
                geospatialpoint.latitude = position.coords.latitude;
                sessionStorage.setItem('positionpoint',JSON.stringify(geospatialpoint)) ;
            }) ;
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
    }

    get selectedoptionsActivite() {
        return this.optionsActivite
            .filter(opt => opt.checked)
            .map(opt => opt.value)
    };

    public updateCheckedoptionsActivite(): void{
        let activites = this.regionszonesactivites.activites;
        this.alldatapoint.activites = this.selectedoptionsActivite.map(function(option) {
            return activites[Number(option)-1].activite;
        });
    }

    public enregistrerModif(){
        this.adresse_point.geospatialpoint = JSON.parse(sessionStorage.getItem('positionpoint'));
        this.alldatapoint.adresse_point = this.adresse_point;
        this.alldatapoint.activites = typeof this.alldatapoint.activites === 'string'?JSON.parse(this.alldatapoint.activites):this.alldatapoint.activites;

        this._utilService.modifPoint(this.alldatapoint)
            .subscribe(
                data => {
                    this.isEnregistrerProspect = true;
                },
                error => alert(error),
                () => console.log('modifPoint')
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
            let options = new RequestOptions({
                headers: headers
            });

            this.http.post(`${this.apiEndPoint}`, formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => {
                        let newData = data;
                        this.uploadFile = newData;
                        this.newImage = this.uploadFile.generatedName ;
                    },
                    error => console.log(error),
                    () => {
                        this.uploadfinished = true;
                    }
                )
        }
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
