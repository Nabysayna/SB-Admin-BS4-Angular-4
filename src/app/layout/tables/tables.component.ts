import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { routerTransition } from '../../router.animations';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    public filterQuery = "";
    public filterZone = "";
    public filterSousZone = "";
    public rowsOnPage = 5;
    public sortBy = "libellepoint";
    public sortOrder = "asc";
    private zones:any[] = [];
    private souszones:any[] = [];

    private client:any;

    closeResult: string;
	constructor(private http: Http, private modalService: NgbModal) {}

    ngOnInit(): void {
        this.getZones()
    }

  	open(content, client) {
  		this.client = client;
    	this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      		this.closeResult = `Closed with: ${result}`;
    	}, (reason) => {
      		this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    	});
  	}
  	
  	private getDismissReason(reason: any): string {
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

    public onChangeZone(event: any){
    	this.getSousZones(event);
    }

    public sortByWordLength = (a: any) => {
        return a.adresse.length;
    }
  
  	public getZones(): void {
  		for (let i = 0; i < this.data.length; i++) {
  			if(!this.zones.includes(this.data[i].zone)) this.zones.push(this.data[i].zone);
  		} 
  	}

    public getSousZones(event: string): void {
    	console.log(event);
    	for (let i = 0; i < this.data.length; i++) {
  			if( this.data[i].zone.match(event) && !this.souszones.includes(this.data[i].sous_zone)) this.souszones.push(this.data[i].sous_zone);
  		} 
  		console.log(this.souszones);
  	}

    public data = [
		  {
		    "libellepoint": "nn",
		    "prenom": "Naby",
		    "nom": "NDIAYE",
		    "tel": "11",
		    "email": "tellus.eu.augue@arcu.com",
		    "dateajout": "2016-01-09 14:48:34",
		    "adresse": "Paglieta",
		    "zone": "Dakar centre",
		    "sous_zone": "colobane",
		    "latitude": 14.702589983648722,
		    "longitude": -17.04974915234375,
		  },
		  {
		    "libellepoint": "bg",
		    "prenom": "Bamba",
		    "nom": "GNING",
		    "tel": "12",
		    "email": "sed.dictum@Donec.org",
		    "dateajout": "2017-01-23T20:09:52-08:00",
		    "adresse": "Bear",
		    "zone": "Dakar plateau",
		    "sous_zone": "plateau",
		    "latitude": 14.762589983648722,
		    "longitude": -17.14974915234375,
		  },
		  {
		    "libellepoint": "ak",
		    "prenom": "Assane",
		    "nom": "KA",
		    "tel": "123",
		    "email": "mauris@Craslorem.ca",
		    "dateajout": "2015-11-19T19:11:33-08:00",
		    "adresse": "Bruderheim",
		    "zone": "Dakar centre",
		    "sous_zone": "colobane",
		    "latitude": 14.462589983648722,
		    "longitude": -17.44974915234375,
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Khady",
		    "nom": "Ndiaye",
		    "tel": "134",
		    "email": "mi.Aliquam@Phasellus.net",
		    "dateajout": "2015-11-02T07:59:34-08:00",
		    "adresse": "Andenne",
		    "zone": "Dakar centre",
		    "sous_zone": "ville",
		    "latitude": 14.662589983648722,
		    "longitude": -17.34974915234375,
		  },
		  {
		    "libellepoint": "abdb",
		    "prenom": "Abda",
		    "nom": "Barry",
		    "tel": "145",
		    "email": "ligula@acorciUt.edu",
		    "dateajout": "2017-02-25T15:42:17-08:00",
		    "adresse": "HomprŽ",
		    "zone": "Dakar centre",
		    "sous_zone": "ville",
		    "latitude": 14.462589983648722,
		    "longitude": -17.44974915234375,
		  },
		  {
		    "libellepoint": "ob",
		    "prenom": "Oumy",
		    "nom": "Barry",
		    "tel": "23",
		    "email": "Nunc.commodo@justo.org",
		    "dateajout": "2016-03-07T03:47:55-08:00",
		    "adresse": "Ried im Innkreis",
		    "zone": "Dakar banlieue",
		    "sous_zone": "Pikine rue 10",
		    "latitude": 14.562589983648722,
		    "longitude": -17.44974915234375,
		  },
		  {
		    "libellepoint": "ad",
		    "prenom": "Awa",
		    "nom": "Diagne",
		    "tel": "24",
		    "email": "augue@penatibuset.net",
		    "dateajout": "2017-02-27T20:03:50-08:00",
		    "adresse": "Cwmbran",
		    "zone": "Rufisque",
		    "sous_zone": "Mbour",
		    "latitude": 14.762589983648722,
		    "longitude": -17.14974915234375,
		  },
		  {
		    "libellepoint": "abl",
		    "prenom": "Ablaye",
		    "nom": "Barry",
		    "tel": "245",
		    "email": "sagittis.augue@taciti.edu",
		    "dateajout": "2016-03-02T03:59:17-08:00",
		    "adresse": "Maranguape",
		    "zone": "Rufisque",
		    "sous_zone": "Saly",
		    "latitude": 14.762589983648722,
		    "longitude": -17.04974915234375,
		  },
		  {
		    "libellepoint": "bd",
		    "prenom": "Binta",
		    "nom": "Diouf",
		    "tel": "56",
		    "email": "nascetur@mipedenonummy.edu",
		    "dateajout": "2016-11-07T20:48:43-08:00",
		    "adresse": "Gibbons",
		    "zone": "Rufisque",
		    "sous_zone": "Rufisque ville",
		    "latitude": 14.662589983648722,
		    "longitude": -17.04974915234375,
		  },
		  {
		    "libellepoint": "ss",
		    "prenom": "Seydou",
		    "nom": "Samb",
		    "tel": "63",
		    "email": "ornare.In@duilectus.co.uk",
		    "dateajout": "2015-03-31T11:45:57-07:00",
		    "adresse": "Bellevue",
		    "zone": "Rufisque",
		    "sous_zone": "Saly",
		    "latitude": 14.562589983648722,
		    "longitude": -17.04974915234375,
		  },
		  {
		    "libellepoint": "td",
		    "prenom": "Tapha",
		    "nom": "Diouf",
		    "tel": "98",
		    "email": "Donec.nibh@Vivamusmolestie.ca",
		    "dateajout": "2015-06-24T14:38:07-07:00",
		    "adresse": "Kobbegem",
		    "zone": "Dakar banlieue",
		    "sous_zone": "Pikine rue 10",
		    "latitude": 14.462589983648722,
		    "longitude": -16.94974915234375,
		  }
		];



}