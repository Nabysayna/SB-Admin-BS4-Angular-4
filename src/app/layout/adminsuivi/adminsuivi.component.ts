import { Component, OnInit } from '@angular/core';
import {AssignationSuiviService} from "../../services/assignation-suivi.service";



@Component({
  selector: 'app-adminsuivi',
  templateUrl: './adminsuivi.component.html',
  styleUrls: ['./adminsuivi.component.scss']
})

export class AdminsuiviComponent implements OnInit {


    public datasuperviseur: any[];
    public datacommercial: any[];
    public data:any[];

    public filtreZone = "";
    public filtreSousZone = "";
    public filterQuery = "";

    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";
    private zones:any[] = [];
    private souszones:any[] = [];
  	sousmenuHead = {menuHead1:false, menuHead2:false, menuHead3:true};

	constructor(private _assignationsuiviService:AssignationSuiviService) { }

  	ngOnInit() { }

  	sousmenuHeadClick(option: number){
  		if(option == 1){
  			this.sousmenuHead.menuHead1 = true;
  			this.sousmenuHead.menuHead2 = false;
  			this.sousmenuHead.menuHead3 = false;
            this._assignationsuiviService.getSuperviseursForPerformance()
                .subscribe(
                    data => {
                        console.log(data);
                        if(data.errorCode){
                            this.datasuperviseur = data.message.map(function(type) {
                                return {
                                    id_superviseur:type.id_superviseur,
                                    fullname:type.prenom +" "+type.nom,
                                    telephone:type.telephone,
                                    zone:type.zone,
                                    sous_zone:type.sous_zone,
                                    objectif:type.objectif,
                                    atteint:type.atteint,
                                    id_objectifassigne:type.id,
                                    dateassignation:"De "+type.date_assigner+" à "+type.date_update,
                                };
                            });
                            this.data = this.datasuperviseur;
                        }
                    },
                    error => alert(error),
                    () => this.getZones()
        );
  		}
  		else if(option == 2){
  			this.sousmenuHead.menuHead1 = false;
  			this.sousmenuHead.menuHead2 = true;
  			this.sousmenuHead.menuHead3 = false;
            this._assignationsuiviService.getCommerciauxForPerformance()
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.datacommercial = data.message.map(function(type) {
                                return {
                                    fullname_commercial:type.fullname_commercial,
                                    fullname_superviseur:type.fullname_superviseur,
                                    telephone:type.telephone,
                                    zone:type.zone,
                                    sous_zone:type.sous_zone,
                                    objectif:type.objectif,
                                    atteint:type.atteint,
                                    dateassignation:"De "+type.date_assigner+" à "+type.date_update,
                                };
                            });
                            this.data = this.datacommercial;                        }
                    },
                    error => alert(error),
                    () => this.getZones()
        );
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





}
