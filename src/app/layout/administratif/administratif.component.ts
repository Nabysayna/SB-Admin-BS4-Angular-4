import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administratif',
  templateUrl: './administratif.component.html',
  styleUrls: ['./administratif.component.scss']
})

export class AdministratifComponent implements OnInit {

    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";
    
	constructor() { }

  	ngOnInit() { }

    public toInt(num: string) { return +num; }

    public sortByWordLength = (a: any) => { return a.adresse.length; }
  
  	public datasuperviseur = [
	  {
	    "dateassignation": "Naby",
	    "prenom": "Naby",
	    "nom": "NDIAYE",
	    "tel": "11",
	    "zone": "Dakar centre",
	    "objectif": 3,
	    "note": 3,
	  },
	  {
	    "dateassignation": "bg",
	    "prenom": "Bamba",
	    "nom": "GNING",
	    "tel": "12",
	    "zone": "Dakar plateau",
	    "objectif": 5,
	    "note": 3,
	  },
	  {
	    "dateassignation": "ak",
	    "prenom": "Assane",
	    "nom": "KA",
	    "tel": "123",
	    "zone": "Dakar centre",
	    "objectif": 2,
	    "note": 1,
	  },
	  {
	    "dateassignation": "Wing",
	    "prenom": "Khady",
	    "nom": "Ndiaye",
	    "tel": "134",
	    "zone": "Dakar centre",
	    "objectif": 8,
	    "note": 7,
	  },
	  {
	    "dateassignation": "abdb",
	    "prenom": "Abda",
	    "nom": "Barry",
	    "tel": "145",
	    "zone": "Dakar centre",
	    "objectif": 3,
	    "note": 2,
	  }
	];

	
}