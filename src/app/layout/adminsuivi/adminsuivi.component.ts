import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-adminsuivi',
  templateUrl: './adminsuivi.component.html',
  styleUrls: ['./adminsuivi.component.scss']
})

export class AdminsuiviComponent implements OnInit {

  	public filtreZone = "";
    public filtreSousZone = "";
    public filterQuery = "";
    
    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";
    private zones:any[] = [];
    private souszones:any[] = [];
  	sousmenuHead = {menuHead1:false, menuHead2:false, menuHead3:true};
	
	constructor() { }

  	ngOnInit() { this.getZones(); }

  	sousmenuHeadClick(option: number){
  		if(option == 1){
  			this.sousmenuHead.menuHead1 = true;
  			this.sousmenuHead.menuHead2 = false;
  			this.sousmenuHead.menuHead3 = false;
  		}
  		else if(option == 2){
  			this.sousmenuHead.menuHead1 = false;
  			this.sousmenuHead.menuHead2 = true;
  			this.sousmenuHead.menuHead3 = false;
  		}
  		else {
  			this.sousmenuHead.menuHead1 = false;
  			this.sousmenuHead.menuHead2 = false;
  			this.sousmenuHead.menuHead3 = true;
  		}
  	}

    public toInt(num: string) { return +num; }

    public sortByWordLength = (a: any) => { return a.adresse.length; }
  
  	public getZones(): void {
  		for (let i = 0; i < this.data.length; i++) {
  			if(!this.zones.includes(this.data[i].zone)) this.zones.push(this.data[i].zone);
  		} 
  	}

  	sousZonesOfCurrentZone(){
  		let souszones : any[] =  [] ;  		
    	for (let i = 0; i < this.data.length; i++) {
  			if( this.data[i].zone==this.filtreZone ){ 
  				if( !souszones.includes(this.data[i].sous_zone) ){
	  				souszones.push(this.data[i].sous_zone);
  				}
  			}
  		} 
  		return souszones ;
  	}


  	// bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['Awa Diagne', 'Michelle Sall', 'Bintou Touré', 'Oumou Dia'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Objectifs fixés' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Objectifs atteints' }
    ];
    // Doughnut
    public doughnutChartLabels: string[] = ['Objectifs Atteint', 'Objetcy=tifs non atteint'];
    public doughnutChartData: number[] = [50, 45];
    public doughnutChartType: string = 'doughnut';
    
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    



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

	public data = [
	  {
	    "libellepoint": "nn",
	    "prenom": "Naby",
	    "nom": "NDIAYE",
	    "tel": "11",
	    "adresse": "Paglieta",
	    "zone": "Dakar centre",
	    "sous_zone": "colobane",
	    "note": 3,
	    "commentaire": "3",
	  },
	  {
	    "libellepoint": "bg",
	    "prenom": "Bamba",
	    "nom": "GNING",
	    "tel": "12",
	    "email": "sed.dictum@Donec.org",
	    "adresse": "Bear",
	    "zone": "Dakar plateau",
	    "sous_zone": "plateau",
	    "note": 3,
	    "commentaire": "3",
	  },
	  {
	    "libellepoint": "ak",
	    "prenom": "Assane",
	    "nom": "KA",
	    "tel": "123",
	    "adresse": "Bruderheim",
	    "zone": "Dakar centre",
	    "sous_zone": "colobane",
	    "note": 1,
	    "commentaire": "3",
	  },
	  {
	    "libellepoint": "Wing",
	    "prenom": "Khady",
	    "nom": "Ndiaye",
	    "tel": "134",
	    "adresse": "Andenne",
	    "zone": "Dakar centre",
	    "sous_zone": "ville",
	    "note": 1,
	    "commentaire": "3",
	  },
	  {
	    "libellepoint": "abdb",
	    "prenom": "Abda",
	    "nom": "Barry",
	    "tel": "145",
	    "adresse": "HomprŽ",
	    "zone": "Dakar centre",
	    "sous_zone": "ville",
	    "note": 2,
	    "commentaire": "3",
	  },
	  {
	    "libellepoint": "ob",
	    "prenom": "Oumy",
	    "nom": "Barry",
	    "tel": "23",
	    "adresse": "Ried im Innkreis",
	    "zone": "Dakar banlieue",
	    "sous_zone": "Pikine rue 10",
	    "note": 3,
	    "commentaire": "3",
	  },
	  {
	    "libellepoint": "ad",
	    "prenom": "Awa",
	    "nom": "Diagne",
	    "tel": "24",
	    "adresse": "Cwmbran",
	    "zone": "Rufisque",
	    "sous_zone": "Mbour",
	    "note": 4,
	    "commentaire": "3",
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
	    "note": 2,
	    "commentaire": "3",
	  },
	  {
	    "libellepoint": "bd",
	    "prenom": "Binta",
	    "nom": "Diouf",
	    "tel": "56",
	    "adresse": "Gibbons",
	    "zone": "Rufisque",
	    "sous_zone": "Rufisque ville",
	    "note": 3,
	    "commentaire": "3",
	  },
	  {
	    "libellepoint": "ss",
	    "prenom": "Seydou",
	    "nom": "Samb",
	    "tel": "63",
	    "adresse": "Bellevue",
	    "zone": "Rufisque",
	    "sous_zone": "Saly",
	    "note": 5,
	    "commentaire": "3",
	  },
	  {
	    "libellepoint": "td",
	    "prenom": "Tapha",
	    "nom": "Diouf",
	    "tel": "98",
	    "adresse": "Kobbegem",
	    "zone": "Dakar banlieue",
	    "sous_zone": "Pikine rue 10",
	    "note": 5,
	    "commentaire": "3",
	  }
	];


}