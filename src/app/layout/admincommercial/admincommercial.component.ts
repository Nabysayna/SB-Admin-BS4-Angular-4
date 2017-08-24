import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../services/util.service";

@Component({
  selector: 'app-admincommercial',
  templateUrl: './admincommercial.component.html',
  styleUrls: ['./admincommercial.component.scss'],
  providers:[UtilService ],

})

export class AdmincommercialComponent implements OnInit {

  	public filtreZone = "--Choix zone--";
    public filtreSousZone = "--Choix sous zone--";
    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";
    private choixsuperviseur = "--Choix superviseur--"
    private zones:any[] = [];
    private souszones:any[] = [];
    private superviseurs:any[] = [];
    private pdvs:any[] = [];
    private optionsChoix:any[] = [];
    public sortByWordLength = (a: any) => { return a.adresse.length; }

    menuHead = {menuHead1:true, menuHead2:false};
	rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];

	constructor(private _utilService:UtilService) { }

  	ngOnInit() {
	    this.getZones();
        this.getSuperviseurs();
    }

  	public menuHeadClick(option: number){
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

    public getZones(): void {
        this._utilService.getZones()
            .subscribe(
                data => this.zones = data,
                error => alert(error),
                () => console.log("Finish")
            );
    }

    public getSuperviseurs(): void {
        this._utilService.getSuperviseurs()
            .subscribe(
                data => this.superviseurs = data,
                error => alert(error),
                () => console.log(this.superviseurs)
            );
    }

    public selectZone(){
        this._utilService.getSouszoneByZone(this.filtreZone.toString())
            .subscribe(
                data => this.souszones = data,
                error => alert(error),
                () => console.log(this.souszones)
            );
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
