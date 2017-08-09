import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

  
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "libellepoint";
    public sortOrder = "asc";

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        // this.http.get("http://localhost/data.json")
        //     .subscribe((data)=> {
        //         setTimeout(()=> {
        //             this.data = data.json();
        //             console.log(this.data);
        //         }, 1000);
        //     });
        console.log(this.data);
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.adresse.length;
    }
  

    public data = [
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "tellus.eu.augue@arcu.com",
		    "dateajout": "2016-01-09 14:48:34",
		    "adresse": "Paglieta",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "sed.dictum@Donec.org",
		    "dateajout": "2017-01-23T20:09:52-08:00",
		    "adresse": "Bear",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "mauris@Craslorem.ca",
		    "dateajout": "2015-11-19T19:11:33-08:00",
		    "adresse": "Bruderheim",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "mi.Aliquam@Phasellus.net",
		    "dateajout": "2015-11-02T07:59:34-08:00",
		    "adresse": "Andenne",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "ligula@acorciUt.edu",
		    "dateajout": "2017-02-25T15:42:17-08:00",
		    "adresse": "HomprŽ",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "Nunc.commodo@justo.org",
		    "dateajout": "2016-03-07T03:47:55-08:00",
		    "adresse": "Ried im Innkreis",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "augue@penatibuset.net",
		    "dateajout": "2017-02-27T20:03:50-08:00",
		    "adresse": "Cwmbran",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "sagittis.augue@taciti.edu",
		    "dateajout": "2016-03-02T03:59:17-08:00",
		    "adresse": "Maranguape",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "nascetur@mipedenonummy.edu",
		    "dateajout": "2016-11-07T20:48:43-08:00",
		    "adresse": "Gibbons",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "morbi.tristique.senectus@enim.ca",
		    "dateajout": "2016-02-11T22:14:36-08:00",
		    "adresse": "Guardia Perticara",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "turpis.non.enim@fringillami.com",
		    "dateajout": "2015-04-23T12:29:39-07:00",
		    "adresse": "Aylmer",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "lacinia.orci.consectetuer@dolorFuscefeugiat.ca",
		    "dateajout": "2016-08-18T12:06:56-07:00",
		    "adresse": "Halkirk",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "pede.Cras@a.edu",
		    "dateajout": "2016-12-24T00:53:04-08:00",
		    "adresse": "Palermo",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "ornare.In@duilectus.co.uk",
		    "dateajout": "2015-03-31T11:45:57-07:00",
		    "adresse": "Bellevue",
		  },
		  {
		    "libellepoint": "Wing",
		    "prenom": "Wing",
		    "nom": "Wing",
		    "tel": "Wing",
		    "email": "Donec.nibh@Vivamusmolestie.ca",
		    "dateajout": "2015-06-24T14:38:07-07:00",
		    "adresse": "Kobbegem",
		  }
		];



}