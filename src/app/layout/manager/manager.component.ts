import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})

export class ManagerComponent implements OnInit {

    
    constructor() { }

  	ngOnInit() { }

	public datamanager = [
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
	    "dateassignation": "2015-11-02 07:59:34-08:00",
	    "adresse": "Andenne",
	    "service": "Dakar centre",
	    "objectif": 7,
	    "realisation": 5,
	  },
	  {
	    "administratif": "Abda Barry",
	    "tel": "145",
	    "dateassignation": "2017-02-25 15:42:17-08:00",
	    "adresse": "HomprŽ",
	    "service": "Dakar centre",
	    "objectif": 9,
	    "realisation": 2,
	  }
	];



  public doughnutChartLabels:string[] = ['Objectifs non atteints', 'Objectifs atteints'];
  public doughnutChartData:number[] = [350, 650];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  	


}