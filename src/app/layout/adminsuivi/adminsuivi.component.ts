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

    // bar chart
    public barChartOptions: any = { scaleShowVerticalLines: false, responsive: true };
    public barChartData: any[] = [];
    public barChartLabels: string[] = [];

    constructor(private _assignationsuiviService:AssignationSuiviService) { }

  	ngOnInit() {
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
                        let dataobjectiffixe:number[] = this.datacommercial.map(function(type) {
                            return type.objectif;
                        });
                        let dataobjectifatteint:number[] = this.datacommercial.map(function(type) {
                            return type.atteint;
                        });
                        this.barChartData = [
                            { data: dataobjectiffixe, label: 'Objectifs fixés' },
                            { data: dataobjectifatteint, label: 'Objectifs atteints' }
                        ];
                        this.barChartLabels = this.datacommercial.map(function(type) {
                            return type.fullname_commercial;
                        });
                        this.data = this.datacommercial;
                    }
                },
                error => alert(error),
                () => this.getZones()
            );
    }

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



    // Doughnut
    public doughnutChartLabels: string[] = ['Objectifs Atteint', 'Objetcy=tifs non atteint'];
    public doughnutChartData: number[] = [50, 45];
    public doughnutChartType: string = 'doughnut';



}
