import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from "../../services/util.service";

@Component({
    selector: 'app-superviseurtest',
    templateUrl: './superviseurtest.component.html',
    styleUrls: ['./superviseurtest.component.scss'],
    providers:[UtilService ],
})

export class SuperviseurtestComponent implements OnInit {


    private filtreZone:string = "--Choix zone--";
    private filtreSousZone:string = "--Choix sous zone--";
    private choixcommercial:string = "--Choix commercial--"
    private objetifcommercial:number = 0;

    private readyforassination:boolean=true;
    private isclickforassination:boolean=false;

    private rowsOnPage = 5;
    private sortBy = "note";
    private sortOrder = "desc";
    private sortByWordLength = (a: any) => { return a.adresse.length; }

    private zones:any[] = [];
    private souszones:any[] = [];
    private commercials:any[] = [];
    private optionassignations:any[] = [];

    private menuHead = {menuHead1:true, menuHead2:false, menuHead3:false};

    constructor(private modalService: NgbModal, private _utilService:UtilService) { }

    ngOnInit() {
        this.getZones();
        this.getCommerciaux();
    }

    private menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
        }
    }

    private toInt(num: string) { return +num; }

    private getCommerciaux(): void {
        let data = {token:"1234567889"};
        this._utilService.getCommerciauxBySuperviseur(data)
            .subscribe(
                data => this.commercials = data,
                error => alert(error),
                () => console.log(this.commercials)
            );
    }

    private getZones(): void {
        this._utilService.getZones()
            .subscribe(
                data => this.zones = data,
                error => alert(error),
                () => console.log("Finish")
            );
    }

    private selectZone(){
        this.optionassignations = [];
        this._utilService.getSouszoneByZone(this.filtreZone.toString())
            .subscribe(
                data => this.souszones = data,
                error => alert(error),
                () => console.log(this.souszones)
            );
    }


    private selectSouszone(){
        let data = {token:"1234567889"};
        this._utilService.getAssignationsBySuperviseur(data)
            .subscribe(
                data => {
                    console.log(data);
                    this.optionassignations = data.map(function(type) {
                        return {
                            id:type.id,
                            libellepoint:JSON.parse(type.client).libellepoint,
                            prenom:JSON.parse(type.client).prenom,
                            nom:JSON.parse(type.client).nom,
                            fullname:JSON.parse(type.client).fullname,
                            telephone:JSON.parse(type.client).telephone,
                            adresse:JSON.parse(type.client).adresse,
                            note:JSON.parse(type.client).note,
                            commentaire:'',
                            infosup:JSON.parse(type.infosup),
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

    private updateCheckedOptions(): void{
        console.log(this.selectedOptions);
    }

    private assignercommercial(){

        this.isclickforassination = true;
        if( this.filtreZone == "--Choix zone--" ||
            this.filtreSousZone == "--Choix sous zone--" ||
            this.choixcommercial == "--Choix commercial--" ||
            this.objetifcommercial == 0 ){
            console.log(this.filtreZone+'-'+this.filtreSousZone+'-'+this.choixcommercial+'-'+this.objetifcommercial);
            this.readyforassination = false;
        }
        else {
            let optionassignations = this.optionassignations;
            let assignes:any = this.selectedOptions.map(function(option) {
                return optionassignations.find( (assigne) => assigne.id == Number(option));
            });
            let assignations:any = {
                commercial:this.commercials.find( (commercial) => commercial.id ==this.choixcommercial),
                assignes:assignes,
                infosup:{
                    date_assignationsuperviser:'',
                    objectifsuperviseur:'',
                    commentaireforsuperviseur:'',
                    date_assignationcommercial:'',
                    objectifcommercial:this.objetifcommercial,
                    commentaireforcommercial:''
                }
            };
            console.log(assignations);
            this._utilService.assignationcommercial(assignations)
                .subscribe(
                    data => console.log(data),
                    error => alert(error),
                    () => console.log('assignationcommercial')
                );
        }
    }


}
