import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";
import {NewclientService} from "../../services/newclient.service";

@Component({
    selector: 'app-prospect-pdv',
    templateUrl: './prospect-pdv.component.html',
    styleUrls: ['./prospect-pdv.component.scss'],
    animations: [routerTransition()],
    providers:[NewclientService]
})
export class ProspectPdvComponent implements OnInit {

    @Input() infoprospect: any;
    private point:any;
    private alldatapoint:any;
    private adresse_point:any;
    private adresse_proprietaire:any;
    private activites:any;
    private zonesactivites:{activites:any[],zones:any[]};
    private isSelect=true;
    private souszonespoints:any[];
    private souszonespropietaires:any[];

    private client: any = {
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
    };

    isinfo = {isinfopoint:true, isinfoproprietaire:false, isinfocomplement:false};
    rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];
    private options:any[] = [];


    constructor(private _newclientservice: NewclientService, private _utilService:UtilService) { }

    ngOnInit() {
        this.point = JSON.parse(this.infoprospect.point);
        console.log(this.infoprospect);

        this._utilService.getAllDataPoint(this.infoprospect.id_point)
            .subscribe(
                data => {
                    this.alldatapoint = data;
                    this.avoter(this.alldatapoint.avis-1);
                    this.adresse_point = JSON.parse(this.alldatapoint.adresse_point);
                    this.adresse_proprietaire = JSON.parse(this.alldatapoint.adresse_proprietaire);
                    this.activites = JSON.parse(this.alldatapoint.activites);
                },
                error => alert(error),
                () => {
                    console.log(this.alldatapoint);
                    console.log(this.adresse_point);
                    console.log(this.adresse_proprietaire);
                    console.log(this.activites);
                }
            );

        this.getZoneActivite();
    }


    private selectZonePoint(){
        this._utilService.getSouszoneByZone(this.client.adressecompletpoint.zonepoint)
            .subscribe(
                data => this.souszonespoints = data,
                error => alert(error),
                () => console.log(this.souszonespoints)
            );
    }

    private selectZoneProprietaire(){
        this._utilService.getSouszoneByZone(this.client.adressecompletproprietaire.zoneproprietaire)
            .subscribe(
                data => this.souszonespropietaires = data,
                error => alert(error),
                () => console.log(this.souszonespropietaires)
            );
    }

    private avoter(index:number): void{
        if(  ( index + 1 == this.rating.length ) && ( this.rating[index].checked == true) ) {
            this.rating[index].checked = false;
            this.alldatapoint.avis = index;
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
            this.alldatapoint.avis = index + 1;
        }
    }

    public asurvoler(index: number){
        console.log(index);
    }

    get selectedOptions() {
        return this.options
        .filter(opt => opt.checked)
        .map(opt => opt.value)
    };

    private updateCheckedOptions(): void{
        console.log(this.selectedOptions);
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


    private enregistrerProspect(){
        console.log('enregistrerProspect');
        /*this._newclientservice.modifPoint(this.client)
         .subscribe(
         data => console.log(data),
         error => alert(error),
         () => console.log('insertPoint')
         ); */
    }


 }
