import { Component, OnInit } from '@angular/core';
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {Router} from "@angular/router";



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
    public toInt(num: string) { return +num; }
    public sortByWordLength = (a: any) => { return a.adresse.length; }

    public zones:any[] = [];
    public souszones:any[] = [];
  	sousmenuHead = {menuHead1:false, menuHead2:false, menuHead3:true};

    // bar chart
    public barChartOptions: any = { scaleShowVerticalLines: false, responsive: true };
    public barChartData: any[] = [];
    public barChartLabels: string[] = [];
    public barChartDataSuperviseur: any[] = [];
    public barChartLabelsSuperviseur: string[] = [];

    // Doughnut
    public doughnutChartLabels: string[] = ['Objectifs Atteint', 'Objetifs non atteint'];
    public doughnutChartData: number[] = [50, 50];
    public doughnutChartType: string = 'doughnut';

    date_for_suivi = new Date();


    constructor(private _assignationsuiviService:AssignationSuiviService, private router: Router) { }

  	ngOnInit() {
        this._assignationsuiviService.getCommerciauxForPerformance()
            .subscribe(
                data => {
                    if(data.errorCode){
                        console.log(data.message);

                        let dataobjectiffixe:number[] = data.message.map(function(type) {
                            return type.objectif;
                        });
                        let dataobjectifatteint:number[] = data.message.map(function(type) {
                            return type.atteint;
                        });
                        this.barChartData = [
                            { data: dataobjectiffixe, label: 'Objectifs fixés' },
                            { data: dataobjectifatteint, label: 'Objectifs atteints' }
                        ];
                        this.barChartLabels = data.message.map(function(type) {
                            return type.fullname_commercial;
                        });
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => {
                    this._assignationsuiviService.getSuperviseursForPerformancetest()
                        .subscribe(
                            data => {
                                console.log(data.message);
                                this.data = data.message;
                                if(data.errorCode){

                                    let supervisorDataAll = this.data;
                                    console.log(supervisorDataAll);

                                    let dataobjectiffixe:number[] = data.message.map(function(type) {
                                        return type.objectif;
                                    });
                                    let dataobjectifatteint:number[] = data.message.map(function(type) {
                                        return type.atteint;
                                    });
                                    this.barChartDataSuperviseur = [
                                        { data: dataobjectiffixe, label: 'Objectifs fixés' },
                                        { data: dataobjectifatteint, label: 'Objectifs atteints' }
                                    ];
                                    this.barChartLabelsSuperviseur = data.message.map(function(type) {
                                        return type.prenom+' '+type.nom;
                                    });



                                    let compteuratteint = 0;
                                    let compteurtotalobjectif = 0;
                                    for(let element of data.message){
                                        compteurtotalobjectif = compteurtotalobjectif  + Number(element.objectif);
                                        compteuratteint = compteuratteint +Number(element.atteint);
                                    }
                                    this.doughnutChartData = [compteuratteint, compteurtotalobjectif - compteuratteint];
                                }
                                else{
                                    this.router.navigate(['/login']);
                                }
                            },
                            error => alert(error),
                            () => {
                                console.log('cool');
                            }
                        );
                }
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
                                    dateassignation:type.date_assigner,
                                };
                            });
                            this.data = this.datasuperviseur;
                        }
                        else{
                            this.router.navigate(['/login']);
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
                        console.log(data)
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
                                    dateassignation:type.date_assigner,
                                };
                            });
                            this.data = this.datacommercial;
                        }
                        else{
                            this.router.navigate(['/login']);
                        }
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

}
