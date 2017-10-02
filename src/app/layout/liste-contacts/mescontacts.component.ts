import { Component, OnInit } from '@angular/core';
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


    constructor(private _utilService:UtilService) { }

    ngOnInit() {
        this._utilService.getPointByCommercial()
            .subscribe(
                data => {
                    console.log(data);
                    this.points = data.message.map(function(type) {
                        let adresse = JSON.parse(type.adresse_point)
                        return {
                            id:type.id,
                            libellepoint:type.nom_point,
                            fullname:type.prenom_gerant +' '+ type.nom_gerant,
                            fullname_proprietaire:type.prenom_proprietaire +' '+ type.nom_proprietaire,
                            telephone:type.telephone_gerant,
                            adresse:adresse.adressepoint,
                            note:type.avis,
                        };
                    });
                },
                error => alert(error),
                () => console.log(this.points)
            );
    }

    public toInt(num: string) { return +num; }


}
