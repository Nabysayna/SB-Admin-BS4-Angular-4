import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()],
    providers:[UtilService, AssignationSuiviService]
})
export class TablesComponent implements OnInit {

    public filterQuery = "";
    public filtreRegion = "";
    public filtreZone = "";
    public filtreSousZone = "";

    public rowsOnPage = 5;
    public sortBy = "libellepoint";
    public sortOrder = "asc";

    regions:any[] = [];
    zones:any[] = [];
    souszones:any[] = [];
    data:any[] = [];

    client:any;

    closeResult: string;
	constructor(public router: Router, private http: Http, private modalService: NgbModal, private _utilService: UtilService, private _assignationsuiviService:AssignationSuiviService) {}

    ngOnInit(): void {
        this._assignationsuiviService.getAssignationsByCommercial()
            .subscribe(
                data => {
                    this.data = data.message.map(function(type) {
                        return {
                            id:type.id,
                            id_point:type.id_client,
                            point:type.client,
                            libellepoint:JSON.parse(type.client).libellepoint,
                            prenom:JSON.parse(type.client).prenom,
                            nom:JSON.parse(type.client).nom,
                            fullname:JSON.parse(type.client).fullname,
                            telephone:JSON.parse(type.client).telephone,
                            adresse:JSON.parse(type.client).adresse,
                            note:JSON.parse(type.client).note,
                            region:type.region?type.region:'Dakar', zone:type.zone, sous_zone:type.sous_zone,
                            commentaire:type.commentaire,
                            infosup:JSON.parse(type.infosup),
                            value:type.id,
                            checked:false,
                            id_superviseur:type.id_superviseur,
                            superviseur:JSON.parse(type.superviseur),
                            id_commercial:type.id_commercial,
                            commercial:JSON.parse(type.commercial)
                        };
                    });
                    for (let i = 0; i < this.data.length; i++) {
                        if(!this.regions.includes(this.data[i].region)) this.regions.push(this.data[i].region);
                    }
                },
                error => alert(error),
                () => console.log('getAssignationsByCommercial')
            );
    }

  	open(content, client) {
  		this.client = client;
    	this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      		this.closeResult = `Closed with: ${result}`;
            this.router.navigate(['/dashboard']);
        }, (reason) => {
      		this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    	});
  	}

  	public getDismissReason(reason: any): string {
    	if (reason === ModalDismissReasons.ESC) {
      		return 'by pressing ESC';
    	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      		return 'by clicking on a backdrop';
    	} else {
      		return  `with: ${reason}`;
    	}
  	}

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.adresse.length;
    }

    public selectRegion() {
        this.zones =  [] ;
        for (let i = 0; i < this.data.length; i++) {
            if( this.data[i].region==this.filtreRegion ){
                if( !this.zones.includes(this.data[i].zone) )
                    this.zones.push(this.data[i].zone);
            }
        }
        console.log(this.zones);
    }

    sousZonesOfCurrentZone(){
        let souszones : any[] =  [] ;
        for (let i = 0; i < this.data.length; i++) {
            if( this.data[i].zone==this.filtreZone ){
                if( !souszones.includes(this.data[i].sous_zone) )
                    souszones.push(this.data[i].sous_zone);
            }
        }
        return souszones ;
    }


}
