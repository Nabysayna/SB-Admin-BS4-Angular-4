import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";

@Component({
  selector: 'app-admincommercial',
  templateUrl: './admincommercial.component.html',
  styleUrls: ['./admincommercial.component.scss'],
  providers:[UtilService, AssignationSuiviService],

})

export class AdmincommercialComponent implements OnInit {

    public staticAlertClosed: boolean = false;
    public isEnregistrerAssignation: boolean = false;

    public filtreZone:string = "--Choix zone--";
    public filtreSousZone:string = "--Choix sous zone--";
    public choixsuperviseur:string = "--Choix superviseur--"
    public objetifsuperviseur:number = 0;

    public readyforassination:boolean=true;
    public isclickforassination:boolean=false;

    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";
    public sortByWordLength = (a: any) => { return a.adresse.length; }

    public zones:any[] = [];
    public souszones:any[] = [];
    public superviseurs:any[] = [];
    public optionassignations:any[] = [];

    public menuHead = {menuHead1:true, menuHead2:false};
    public rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];

	constructor(private _utilService:UtilService, private _assignationsuiviService:AssignationSuiviService) { }

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

    public getSuperviseurs(): void {
        this._utilService.getSuperviseurs()
            .subscribe(
                data => this.superviseurs = data,
                error => alert(error),
                () => console.log(this.superviseurs)
            );
    }

    public getZones(): void {
        this._utilService.getZones()
            .subscribe(
                data => this.zones = data,
                error => alert(error),
                () => console.log("Finish")
            );
    }

    public selectZone(){
        this.optionassignations = [];
        this._utilService.getSouszoneByZone(this.filtreZone.toString())
            .subscribe(
                data => this.souszones = data,
                error => alert(error),
                () => console.log(this.souszones)
            );
    }


    public selectSouszone(){
        this._utilService.getPointBySouszone(this.filtreSousZone)
            .subscribe(
                data => {
                    console.log(data);
                    this.optionassignations = data.map(function(type) {
                        return {
                            id:type.id,
                            libellepoint:type.libellepoint,
                            prenom:type.prenom,
                            nom:type.nom,
                            fullname:type.fullname,
                            telephone:type.telephone,
                            adresse:type.adresse,
                            note:type.note,
                            commentaire:'',
                            value:type.id,
                            checked:false
                        };
                    });
                },
                error => alert(error),
                () => console.log(this.optionassignations)
            );
    }

    get selectedOptions():any {
        return this.optionassignations
            .filter(opt => opt.checked)
            .map(opt => opt.value);
    };

    public updateCheckedOptions(): void{
        //let activites = this.zonesactivites.activites;
        //this.client.typeactivite = this.selectedOptions.map(function(option) {
          //  return activites[Number(option)-1].activite;
        //});
        console.log(this.selectedOptions);
    }

    public assignersuperviseur(){
        //let assignations =
        this.isclickforassination = true;
        if( this.filtreZone == "--Choix zone--" ||
            this.filtreSousZone == "--Choix sous zone--" ||
            this.choixsuperviseur == "--Choix superviseur--" ||
            this.objetifsuperviseur == 0 ){
            console.log(this.filtreZone+'-'+this.filtreSousZone+'-'+this.choixsuperviseur+'-'+this.objetifsuperviseur);
            this.readyforassination = false;
        }
        else {
            let optionassignations = this.optionassignations;
            let assignes:any = this.selectedOptions.map(function(option) {
                return optionassignations.find( (assigne) => assigne.id == Number(option));
            });
            let assignations:any = {
                zone:this.filtreZone,
                souszone:this.filtreSousZone,
                superviseur:this.superviseurs.find( (superviseur) => superviseur.id ==this.choixsuperviseur),
                objectifsuperviseur:this.objetifsuperviseur,
                assignes:assignes,
                infosup:{
                    date_assignationsuperviser:'',
                    objectifsuperviseur:this.objetifsuperviseur,
                    commentaireforsuperviseur:'',
                    date_assignationcommercial:'',
                    objectifcommercial:'',
                    commentaireforcommercial:''
                }
            };
            console.log(assignations);
            this._assignationsuiviService.assignationsuperviseur(assignations)
                .subscribe(
                    data => {
                        console.log(data);
                        this.isEnregistrerAssignation = true;
                        this.filtreZone = "--Choix zone--";
                        this.selectZone();
                    },
                    error => alert(error),
                    () => console.log('assignationsuperviseur')
                );
        }
    }


}
