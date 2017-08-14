import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { routerTransition } from '../../router.animations';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-administratif',
  templateUrl: './administratif.component.html',
  styleUrls: ['./administratif.component.scss']
})

export class AdministratifComponent implements OnInit {

    public filterQuery = "";
    public actionQuery= "--Choix action--"
    public rowsOnPage = 5;
    public sortBy = "libellepoint";
    public sortOrder = "asc";
    private zones:any[] = [];
    private souszones:any[] = [];

    private client:any;

    closeResult: string;
	constructor(private http: Http, private modalService: NgbModal) {}

    ngOnInit(): void { }

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

    public sortByWordLength = (a: any) => {
        return a.adresse.length;
    }

    actionadministratifforpdv(item: any){
    	console.log(item);
    }
    
    public data = [
		  {
		    "pdv": "Naby NDIAYE",
		    "tel": "11",
		    "dateajout": "2016-01-09 14:48:34",
		    "adresse": "Paglieta",
		    "service": "Dakar centre",
		  },
		  {
		    "pdv": "Bamba GNING",
		    "tel": "12",
		    "dateajout": "2017-01-23T20:09:52-08:00",
		    "adresse": "Bear",
		    "service": "Dakar plateau",
		  },
		  {
		    "pdv": "Assane KA",
		    "tel": "123",
		    "dateajout": "2015-11-19T19:11:33-08:00",
		    "adresse": "Bruderheim",
		    "service": "Dakar centre",
		  },
		  {
		    "pdv": "Khady Ndiaye",
		    "tel": "134",
		    "dateajout": "2015-11-02T07:59:34-08:00",
		    "adresse": "Andenne",
		    "service": "Dakar centre",
		  },
		  {
		    "pdv": "Abda Barry",
		    "tel": "145",
		    "dateajout": "2017-02-25T15:42:17-08:00",
		    "adresse": "HomprŽ",
		    "service": "Dakar centre",
		  },
		  {
		    "pdv": "Oumy Barry",
		    "tel": "23567",
		    "dateajout": "2016-03-07T03:47:55-08:00",
		    "adresse": "Ried im Innkreis",
		    "service": "Dakar banlieue",
		  },
		  {
		    "pdv": "Awa Diagne",
		    "tel": "24",
		    "dateajout": "2017-02-27T20:03:50-08:00",
		    "adresse": "Cwmbran",
		    "service": "Rufisque",
		  },
		  {
		    "pdv": "Ablaye Barry",
		    "tel": "245",
		    "dateajout": "2016-03-02T03:59:17-08:00",
		    "adresse": "Maranguape",
		    "service": "Rufisque",
		  },
		  {
		    "pdv": "Binta Diouf",
		    "tel": "56",
		    "dateajout": "2016-11-07T20:48:43-08:00",
		    "adresse": "Gibbons",
		    "service": "Rufisque",
		  },
		  {
		    "pdv": "Seydou Samb",
		    "tel": "63",
		    "dateajout": "2015-03-31T11:45:57-07:00",
		    "adresse": "Bellevue",
		    "service": "Rufisque",
		  },
		  {
		    "pdv": "Tapha Diouf",
		    "tel": "98",
		    "dateajout": "2015-06-24T14:38:07-07:00",
		    "adresse": "Kobbegem",
		    "service": "Dakar banlieue",
		  }
		];



}