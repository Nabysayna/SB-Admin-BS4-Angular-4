import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from "../../services/util.service";

@Component({
    selector: 'app-superviseur',
    templateUrl: './superviseur.component.html',
    styleUrls: ['./superviseur.component.scss'],
    providers:[UtilService ],
})

export class SuperviseurComponent implements OnInit {


    private filterQuery:string = "";
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
    private data:any[] = [];
    private optionassignations:any[] = [];

    private menuHead = {menuHead1:true, menuHead2:false, menuHead3:false};

    constructor(private modalService: NgbModal, private _utilService:UtilService) { }

    ngOnInit() {
        let datatoken = {token:"1234567889"};
        this._utilService.getAssignationsBySuperviseur(datatoken)
            .subscribe(
                data => {
                    console.log(data);
                    this.data = data.map(function(type) {
                        return {
                            id:type.id,
                            libellepoint:JSON.parse(type.client).libellepoint,
                            prenom:JSON.parse(type.client).prenom,
                            nom:JSON.parse(type.client).nom,
                            fullname:JSON.parse(type.client).fullname,
                            telephone:JSON.parse(type.client).telephone,
                            adresse:JSON.parse(type.client).adresse,
                            note:JSON.parse(type.client).note,
                            zone:type.zone, sous_zone:type.sous_zone,
                            commentaire:'',
                            infosup:JSON.parse(type.infosup),
                            value:type.id, checked:false
                        };
                    });
                    for (let i = 0; i < this.data.length; i++) {
                        if(!this.zones.includes(this.data[i].zone)) this.zones.push(this.data[i].zone);
                    }
                    console.log(this.zones);
                },
                error => alert(error),
                () => console.log(this.data)
            );
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

    sousZonesOfCurrentZone(){
        let souszones : any[] =  [] ;
        for (let i = 0; i < this.data.length; i++) {
            if( this.data[i].zone==this.filtreZone ){
                if( !souszones.includes(this.data[i].sous_zone) )
                    souszones.push(this.data[i].sous_zone);
            }
        }
        return souszones ;
    }

    private selectZone() {
        this.optionassignations = [];
    }

    private selectSouszone(){
        this.getCommerciaux();
        this.optionassignations = this.data
            .filter(data => (data.zone==this.filtreZone && data.sous_zone==this.filtreSousZone) );
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

    showModal(content) {
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }



}
