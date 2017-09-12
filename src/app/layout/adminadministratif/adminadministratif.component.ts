import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-adminadministratif',
  templateUrl: './adminadministratif.component.html',
  styleUrls: ['./adminadministratif.component.scss']
})

export class AdminadministratifComponent implements OnInit {

    public filterQuerysuivi = "";
    public filterQueryassignation = "";
    public choixadministratif = "--Choix administratif--"
    public sortBysuperviseur = "superviseur";
    public sortByadministratif = "superviseur";
    public rowsOnPage = 5;
    public sortOrder = "desc";

    menuHead = {menuHead1:true, menuHead2:false};


    closeResult: string;
    constructor(private modalService: NgbModal) { }

  	ngOnInit() { }

  	menuHeadClick(option: number){
  		if(option == 1){
  			this.menuHead.menuHead1 = true;
  			this.menuHead.menuHead2 = false;
  		}
  		else{
  			this.menuHead.menuHead1 = false;
  			this.menuHead.menuHead2 = true;
  		}
  	}

    open(content, client) {
  		console.log(client);
    	this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      		this.closeResult = `Closed with: ${result}`;
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

    public toInt(num: string) { return +num; }

    public sortByWordLength = (a: any) => { return a.adresse.length; }


	public dataadministratif = [
	  {
	    "administratif": "Naby NDIAYE",
	    "tel": "11",
	    "dateassignation": "2016-01-09 14:48:34",
	    "adresse": "Paglieta",
	    "service": "Dakar centre",
	    "objectif": 10,
	    "realisation": 6,
	  },
	  {
	    "administratif": "Khady Ndiaye",
	    "tel": "134",
	    "dateassignation": "2015-11-02T07:59:34-08:00",
	    "adresse": "Andenne",
	    "service": "Dakar centre",
	    "objectif": 7,
	    "realisation": 5,
	  },
	  {
	    "administratif": "Abda Barry",
	    "tel": "145",
	    "dateassignation": "2017-02-25T15:42:17-08:00",
	    "adresse": "HomprŽ",
	    "service": "Dakar centre",
	    "objectif": 9,
	    "realisation": 2,
	  }
	];



    public data = [
	  {
	    "superviseur": "Naby NDIAYE",
	    "tel": "11",
	    "dateajout": "2016-01-09 14:48:34",
	    "adresse": "Paglieta",
	    "service": "Dakar centre",
	  },
	  {
	    "superviseur": "Bamba GNING",
	    "tel": "12",
	    "dateajout": "2017-01-23T20:09:52-08:00",
	    "adresse": "Bear",
	    "service": "Dakar plateau",
	  },
	  {
	    "superviseur": "Assane KA",
	    "tel": "123",
	    "dateajout": "2015-11-19T19:11:33-08:00",
	    "adresse": "Bruderheim",
	    "service": "Dakar centre",
	  },
	  {
	    "superviseur": "Khady Ndiaye",
	    "tel": "134",
	    "dateajout": "2015-11-02T07:59:34-08:00",
	    "adresse": "Andenne",
	    "service": "Dakar centre",
	  },
	  {
	    "superviseur": "Abda Barry",
	    "tel": "145",
	    "dateajout": "2017-02-25T15:42:17-08:00",
	    "adresse": "HomprŽ",
	    "service": "Dakar centre",
	  },
	  {
	    "superviseur": "Oumy Barry",
	    "tel": "23567",
	    "dateajout": "2016-03-07T03:47:55-08:00",
	    "adresse": "Ried im Innkreis",
	    "service": "Dakar banlieue",
	  },
	  {
	    "superviseur": "Awa Diagne",
	    "tel": "24",
	    "dateajout": "2017-02-27T20:03:50-08:00",
	    "adresse": "Cwmbran",
	    "service": "Rufisque",
	  },
	  {
	    "superviseur": "Ablaye Barry",
	    "tel": "245",
	    "dateajout": "2016-03-02T03:59:17-08:00",
	    "adresse": "Maranguape",
	    "service": "Rufisque",
	  },
	  {
	    "superviseur": "Binta Diouf",
	    "tel": "56",
	    "dateajout": "2016-11-07T20:48:43-08:00",
	    "adresse": "Gibbons",
	    "service": "Rufisque",
	  },
	  {
	    "superviseur": "Seydou Samb",
	    "tel": "63",
	    "dateajout": "2015-03-31T11:45:57-07:00",
	    "adresse": "Bellevue",
	    "service": "Rufisque",
	  },
	  {
	    "superviseur": "Tapha Diouf",
	    "tel": "98",
	    "dateajout": "2015-06-24T14:38:07-07:00",
	    "adresse": "Kobbegem",
	    "service": "Dakar banlieue",
	  }
	];


}
