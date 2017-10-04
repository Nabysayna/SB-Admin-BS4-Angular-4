import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Http} from "@angular/http";
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";


import {AssignationSuiviService} from "../../services/assignation-suivi.service";

@Component({
    selector: 'app-mescontacts',
    templateUrl: './mescontacts.component.html',
    styleUrls: ['./mescontacts.component.scss'],
    animations: [routerTransition()],
    providers:[UtilService, AssignationSuiviService]
})
export class MesContactsComponent implements OnInit {

    public filterQuery:any;
    public rowsOnPage = 10;
    public sortBy = "note";
    public sortOrder = "desc";
    public sortByWordLength = (a: any) => { return a.adresse.length; }

    public points:any[] = [];
    public point:any;


    constructor(private modalService: NgbModal, private _utilService:UtilService) { }

    ngOnInit() {
        this.getPointByCommercial();
    }

    getPointByCommercial(){
        this._utilService.getPointByCommercial()
            .subscribe(
                data => {
                    console.log(data);
                    this.points = data.message.map(function(type) {
                        let adresse = JSON.parse(type.adresse_point)
                        return {
                            id: type.id,
                            libellepoint: type.nom_point,
                            fullname_gerant: type.prenom_gerant +' '+ type.nom_gerant,
                            fullname_proprietaire: type.prenom_proprietaire +' '+ type.nom_proprietaire,

                            region:adresse.regionpoint?adresse.regionpoint:'Dakar',
                            zone:adresse.zonepoint, sous_zone:adresse.souszonepoint,
                            adresse: adresse.adressepoint,

                            activites: JSON.parse(type.activites),
                            services: JSON.parse(type.services),
                            fichiers: JSON.parse(type.fichiers),
                            note: type.avis,

                            prenom_gerant: type.prenom_gerant,
                            nom_gerant: type.nom_gerant,
                            telephone_gerant: type.telephone_gerant,
                            email_gerant: type.email_gerant,

                            prenom_proprietaire: type.prenom_proprietaire,
                            nom_proprietaire: type.prenom_proprietaire,
                            telephone_proprietaire:type.telephone_gerant,

                            id_gerant_point:type.id_gerant_point,
                            id_proprietaire_point:type.id_proprietaire_point,
                            id_commercial:type.id_commercial,
                        };
                    });
                },
                error => alert(error),
                () => {
                    console.log(this.points);
                }
            );
    }
    public toInt(num: string) { return +num; }

    showModalModifPoint(content, point) {
        this.point = point;
        this.modalService.open(content, {size: 'lg'}).result.then( (result) => {
        }, (reason) => {} );
    }



}
