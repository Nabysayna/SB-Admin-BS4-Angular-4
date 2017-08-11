import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admincommercial',
  templateUrl: './admincommercial.component.html',
  styleUrls: ['./admincommercial.component.scss']
})

export class AdmincommercialComponent implements OnInit {

  	public filtreZone = "--Choix zone--";
    public filtreSousZone = "--Choix sous zone--";

    public suivifilterQuery = "";
  	public suisfiltreZone = "";
    public fsuisiltreSousZone = "";
    
    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";
    private zones:any[] = [];
    private souszones:any[] = [];
    private optionsChoix:any[] = [];

    menuHead = {menuHead1:true, menuHead2:false};
  	sousmenuHead = {menuHead1:false, menuHead2:false, menuHead3:true};
	rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];
    ratings:any[] = [];

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

  	updateOnChangeSouszone(){
  		for (let i = 0; i < this.data.length; i++) {
  			if(this.data[i].note == 0) this.ratings.push([
			        {indice:0, checked:false},
			        {indice:1, checked:false},
			        {indice:2, checked:false},
			        {indice:3, checked:false},
			        {indice:4, checked:false},
			    ])
  			else if(this.data[i].note == 1) this.ratings.push([
			        {indice:0, checked:true},
			        {indice:1, checked:false},
			        {indice:2, checked:false},
			        {indice:3, checked:false},
			        {indice:4, checked:false},
			    ])
  			else if(this.data[i].note == 2) this.ratings.push([
			        {indice:0, checked:true},
			        {indice:1, checked:true},
			        {indice:2, checked:false},
			        {indice:3, checked:false},
			        {indice:4, checked:false},
			    ])
  			else if(this.data[i].note == 3) this.ratings.push([
			        {indice:0, checked:true},
			        {indice:1, checked:true},
			        {indice:2, checked:true},
			        {indice:3, checked:false},
			        {indice:4, checked:false},
			    ])
  			else if(this.data[i].note == 4) this.ratings.push([
			        {indice:0, checked:true},
			        {indice:1, checked:true},
			        {indice:2, checked:true},
			        {indice:3, checked:true},
			        {indice:4, checked:false},
			    ])
  			else if(this.data[i].note == 5) this.ratings.push([
			        {indice:0, checked:true},
			        {indice:1, checked:true},
			        {indice:2, checked:true},
			        {indice:3, checked:true},
			        {indice:4, checked:true},
			    ]);
  			
  		}
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