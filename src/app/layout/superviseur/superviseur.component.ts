import { Component, OnInit, Input } from '@angular/core';
import {Http} from "@angular/http";
import { routerTransition } from '../../router.animations';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-superviseur',
  templateUrl: './superviseur.component.html',
  styleUrls: ['./superviseur.component.scss']
})
export class SuperviseurComponent implements OnInit {
	fakevalues = true ;
    selection = "" ;
    public isSuivi=true;
    public isAssignation=true;
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "nom";
    public sortOrder = "asc";
    commercial : string ;
    commerciaux = ["Modou Seye", "Matar Fall", "Rokhaya Diaw", "Ramatoulaye Fall"] ;
    public filtreZone = "";
    public filtreSousZone = "";

    private zones:any[] = [];
    private souszones:any[] = [];

  rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];

  constructor(private http: Http, private modalService: NgbModal) { }

  ngOnInit() {
  	this.getZones();
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
        }
    }

    public getZones(): void {
  		for (let i = 0; i < this.data.length; i++) {
  			if(!this.zones.includes(this.data[i].zone)) this.zones.push(this.data[i].zone);
  		}
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

    public data = [
		  {
		    "nom": "NDIAYE",
		    "prenom": "naby",
		    "nomcl": "FALL",
		    "prenomcl": "Fallou",
		    "telephone": "778888888",
		    "telephonecl": "771111111",
		    "reponse": "intéressé",
		    "zone": "Parcelles",
		    "sous_zone": "unité 24",
		    "notept":"**",
		    "adressecl":"cité fadia",
		    "service":"wafacash",
		  },
		  {
		    "nom": "KA",
		    "prenom": "assane",
		    "nomcl": "NDOUR",
		    "prenomcl": "Moussa",
		    "telephonecl": "771111111",
		    "telephone": "772222222",
		    "reponse": "pas maintenant",
		    "zone": "Rufisque",
		    "notept":"*",
		    "sous_zone": "Keur Mbaye fall",
		    "adressecl":"hlm grand medine",
		    "service":"tigocash",
		  },
		  {
		    "nom": "NDIAYE",
		    "prenom": "khady",
		    "nomcl": "NDIAYE",
		    "prenomcl": "khady",
		    "telephonecl": "771111111",
		    "telephone": "773333333",
		    "reponse": "impossible",
		    "zone": "Parcelles",
		    "notept":"*****",
		    "sous_zone": "unité 19",
		    "adressecl":"diamalaye 2 villa 188E",
		    "service":"postcash",
		  }
		];

		extraire(){}

		assigner(){}

    showModal(content) {
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }


}
