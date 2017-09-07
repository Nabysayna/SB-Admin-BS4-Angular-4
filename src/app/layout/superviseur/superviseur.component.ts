import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";

@Component({
    selector: 'app-superviseur',
    templateUrl: './superviseur.component.html',
    styleUrls: ['./superviseur.component.scss'],
    providers:[UtilService, AssignationSuiviService],
})
export class SuperviseurComponent implements OnInit {

    private staticAlertClosed: boolean = false;
    private isEnregistrerAssignation: boolean = false;

    private filterQuery:string = "";
    private filtreZone:string = "--Choix zone--";
    private filtreSousZone:string = "--Choix sous zone--";
    private choixcommercial:string = "--Choix commercial--"
    private objetifcommercial:number = 0;

    currentPointDocs : any ;
    reponsesPointAuProspect : any ;

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
    private datasuivi:any[] = [];

    private menuHead = {menuHead1:true, menuHead2:false, menuHead3:false};

    constructor(private modalService: NgbModal, private _utilService:UtilService, private _assignationsuiviService:AssignationSuiviService) { }

    ngOnInit() {
        this._assignationsuiviService.getAssignationsBySuperviseur()
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
                () => {
                    console.log(this.data);
                    this._assignationsuiviService.listsuiviforsuperviseur()
                        .subscribe(
                            data => {
                                console.log(data);
                                this.datasuivi = data.map(function(type) {
                                    let client = JSON.parse(type.client);
                                    console.log(client);
                                    return {
                                        id:type.id,
                                        libellepoint:client.nom_point,
                                        fullname:client.prenom_gerant+" "+client.nom_gerant,
                                        telephone:client.telephone_gerant,
                                        adresse:client.adresse_point.adressepoint,
                                        note:type.note,
                                        dates_suivi:type.dates_suivi,
                                        reponse:client.services,
                                        qualification:"--Choisir une action--",
                                        client:client,
                                    };
                                });
                            },
                            error => alert(error),
                            () => console.log(this.datasuivi)
                        );
                }
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
        this._utilService.getCommerciauxBySuperviseur()
            .subscribe(
                data => {
                    this.commercials = data
                    if(data.errorCode) this.commercials = data.message;
                },
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
            this._assignationsuiviService.assignationcommercial(assignations)
                .subscribe(
                    data => {
                        console.log(data);
                        this.isEnregistrerAssignation = true;
                        this.filtreZone = "--Choix zone--";
                        this.selectZone();
                    },
                    error => alert(error),
                    () => console.log('assignationcommercial')
                );
        }
    }

    getLibellePiece(item){
        return item.split("#")[0] ;
    }

    getNomFichier(item){
        return item.split("#")[1] ;
    }



    showModal(content, i) {
        this.currentPointDocs = JSON.parse(this.datasuivi[i].client.fichiers) ;
        console.log( this.currentPointDocs ) ;
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }

    showModalDetail(content, i) {
        this.reponsesPointAuProspect = JSON.parse(this.datasuivi[i].client.services) ;
        console.log( this.reponsesPointAuProspect ) ;
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }

    private validersuivisuperviseur(suivi:any){
        let suivisuperviseur = {
            id:suivi.id,
            dates_suivi:JSON.parse(suivi.dates_suivi),
            reponse:suivi.reponse,
            qualification:suivi.qualification,
        };
        //console.log(suivisuperviseur);
        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(
                data => console.log(data),
                error => alert(error),
                () => console.log('ajoutsuivifromsuperviseur')
            );
    }

}
