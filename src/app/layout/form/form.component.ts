import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {NewclientService} from "../../services/newclient.service";
import {UtilService} from "../../services/util.service";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers: [NewclientService, UtilService]
})
export class FormComponent implements OnInit {
	private fakevalues = true ;
	public isAdresseproprio=true;
	public isAdressepoint=true;
	public isUploadfile=true;

    private zonesactivites:{activites:any[],zones:any[]};
	public isSelect=true;

    private souszonespoints:any[];
    private souszonespropietaires:any[];

    private client: any = {
        nompoint:'',
        zonepoint:'--Choix zone--',
        souszonepoint:'--Choix sous zone--',
        adressepoint:'',
        codepostalpoint:0,
        geospatialpoint:{latitude:0, longitude:0},

        nomgerant:'',
        prenomgerant:'',
        telephonegerant:'',
        emailgerant:'',

        nomproprietaire:'',
        prenomproprietaire:'',
        telephoneproprietaire:'',
        emailproprietaire:'',
        zoneproprietaire:'--Choix zone--',
        souszoneproprietaire:'--Choix sous zone--',
        adresseproprietaire:'',
        codepostalproprietaire:0,
        geospatialproprietaire:{latitude:0,longitude:0},

        typeactivite:[],

        avissurpoint:0,
    };

    private rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];

    private options:any[] = [];

    constructor(private _newclientservice: NewclientService, private _utilService: UtilService) { }

    ngOnInit() {
        this.getZoneActivite();
    }

    private selectZonePoint(){
        this._utilService.getSouszoneByZone(this.client.zonepoint)
            .subscribe(
                data => this.souszonespoints = data,
                error => alert(error),
                () => console.log(this.souszonespoints)
            );
    }

    private selectZoneProprietaire(){
        this._utilService.getSouszoneByZone(this.client.zoneproprietaire)
            .subscribe(
                data => this.souszonespropietaires = data,
                error => alert(error),
                () => console.log(this.souszonespropietaires)
            );
    }

    private getZoneActivite(){
        this._newclientservice.getZoneActivite()
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

    private avoter(index:number): void{
        if(  ( index + 1 == this.rating.length ) && ( this.rating[index].checked == true) ) {
            this.rating[index].checked = false;
            this.client.avissurpoint = index;
        }
        else {
            for (var i = 0; i<this.rating.length; i++) {
                if(i < index) {
                    this.rating[i].checked = true;
                }
                else if(i == index) {
                    if(this.rating[i].checked == true){
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
            this.client.avissurpoint = index + 1;
        }
    }

    private coordonneesgeospatialespoint(){
        if(navigator.geolocation){
            console.log("YES!") ;
            let client = this.client;
            navigator.geolocation.getCurrentPosition(function(position){
                client.geospatialpoint.longitude = position.coords.longitude;
                client.geospatialpoint.latitude = position.coords.latitude;
                sessionStorage.setItem('positionpoint',JSON.stringify(client.geospatialpoint)) ;
            }) ;
        }
    }

    private coordonneesgeospatialesproprietaire(){
        if(navigator.geolocation){
            console.log("YES!") ;
            let client = this.client;
            navigator.geolocation.getCurrentPosition(function(position){
                client.geospatialproprietaire.longitude = position.coords.longitude;
                client.geospatialproprietaire.latitude = position.coords.latitude;
                sessionStorage.setItem('positionproprietaire',JSON.stringify(client.geospatialproprietaire)) ;
            }) ;
        }
    }

    private enregistercoordonneesgeospatialespoint(){
        this.client.geospatialpoint = JSON.parse(sessionStorage.getItem('positionpoint'));
        console.log(this.client.geospatialpoint);
    }

    private enregistercoordonneesgeospatialesproprietaire(){
        this.client.geospatialpoint = JSON.parse(sessionStorage.getItem('positionproprietaire'));
        console.log(this.client.geospatialpoint);
    }

    get selectedOptions() {
        return this.options
            .filter(opt => opt.checked)
            .map(opt => opt.value)
    };

    private updateCheckedOptions(): void{
        let activites = this.zonesactivites.activites;
        this.client.typeactivite = this.selectedOptions.map(function(option) {
            return activites[Number(option)-1].activite;
        });
    }

    enregistrerProspect(){}

    validernewclient(){
        console.log(this.client);
    }

}
