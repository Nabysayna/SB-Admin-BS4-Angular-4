import { Component, OnInit, OnDestroy } from '@angular/core';
import {Http} from "@angular/http";
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";


import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {Router} from "@angular/router";


import {ApiPlatformService} from "../../services/apiplateform.service";
import {SuivipositionnementService} from "../../services/suivipositionnement.service";


@Component({
    selector: 'recouvrement-demandedepot',
    templateUrl: 'recouvrement-demandedepot.component.html',
    styleUrls: ['recouvrement-demandedepot.component.scss'],
    animations: [routerTransition()],
    providers:[UtilService, AssignationSuiviService, SuivipositionnementService]
})
export class RecouvrementDemandedepotComponent implements OnInit,OnDestroy {

    public loading_data:boolean = true;
    public killsetinterval:any;

    constructor(private _apiPlatformService:ApiPlatformService, public router: Router, private modalService: NgbModal, private _utilService: UtilService, private _assignationsuiviService:AssignationSuiviService, private _suivipositionnementService:SuivipositionnementService) {}

    ngOnInit(): void {
        this.loading_data = true
        this.getListStatusDeposition();
        this.killsetinterval = setInterval(() => {
            this.getListStatusDeposition();
            console.log('step init');
        }, 60000);
    }

    public choixrecouvreur:number;
    public onchangeChoixrecouvreur(){
        this.recouvreur = this.recouvreurs.find(recouvreur => recouvreur.id ==this.choixrecouvreur);
        this.phonerecouvreur = Number(this.recouvreur.telephone);
    }

    ngOnDestroy() {
        clearInterval(this.killsetinterval);
    }

    public rowsOnPageStatusDeposition = 25;
    public sortByStatusDeposition = "datedemande";
    public sortOrderStatusDeposition = "desc";
    public filterQueryStatusDeposition:any;
    public listestatusdeposition:any[] = [];
    public statusdoneeposition:any;
    public montantpayement:number;
    public montantpositionnement:number;
    public montantversement:number;
    public moderecouvrement:number;
    public modeversement:number;
    public recouvreur:any;
    public phonerecouvreur:number;
    public inforecouvrement:string;
    public recouvreurs:any[] = [];
    public montantcompleterpayement:number;
    public montantcompleterversement:number;

    public modalRef: NgbModalRef;

    public closedModal(){
        this.modalRef.close('Close click');
    }

    showModalRecouvrementDepot(content, item) {
        clearInterval(this.killsetinterval);
        this.moderecouvrement = undefined;
        this.phonerecouvreur = undefined;
        this.recouvreur = undefined;
        this.inforecouvrement = undefined;
        this.choixrecouvreur = undefined;
        this.statusdoneeposition = item;
        this.modalService.open(content).result.then((result) => {
            this.getListStatusDeposition();
            this.killsetinterval = setInterval(() => {
                this.getListStatusDeposition();
                console.log('step init');
            }, 60000);
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            this.getListStatusDeposition();
            this.killsetinterval = setInterval(() => {
                this.getListStatusDeposition();
                console.log('step init');
            }, 60000);
            if (reason === ModalDismissReasons.ESC) {
                console.log('by pressing ESC');
            } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
                console.log('by clicking on a backdrop');
            } else {
                if(reason=='valideRecouvrementDepot'){
                    this.valideRecouvrementDepot();
                }
                console.log( `with: ${reason}`);
            }
        });;
    }

    showModalPositionnementDepot(content, item) {
        this.montantpositionnement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    }

    showModalPayementDepot(content, item) {
        this.montantpayement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    }

    showModalCompleterPayementDepot(content, item) {
        this.montantcompleterpayement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    }

    showModalCompleterVersementDepot(content, item) {
        this.montantcompleterversement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    }

    showModalVersementDepot(content, item) {
        this.modeversement = undefined;
        this.montantversement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    }

    public getPersonForRecouvrement(): void {
        this._suivipositionnementService.listeRecouvreurs()
            .subscribe(
                data => {
                    this.recouvreurs = data.message.map(function (type) {
                        return {
                            id: type.id,
                            fullname: type.fullname,
                            email: type.email,
                            prenom: type.prenom,
                            nom: type.nom,
                            telephone: type.telephone,
                            recouvrement_zones: JSON.parse(type.infosup).recouvrir_zone,
                        }
                    })
                },
                error => alert(error),
                () => console.log('')
            );
    }

    public iam:number
    public getListStatusDeposition(): void {
        this._apiPlatformService.getListStatusDeposition()
            .subscribe(
                data => {
                    this.iam = data.iam.match("dev")?10:data.iam.match("khady")?9:data.iam.match("alioune")?8:data.iam.match("bbsadmin")?7:0;
                    this.listestatusdeposition = data.message.map(function (type) {
                        let pointObjet = JSON.parse(type.point);
                        let adressecomplet = (typeof pointObjet.adresse === 'object')?pointObjet.adresse:JSON.parse(pointObjet.adresse);
                        let recouvre_by = type.recouvre_by?( (type.recouvre_by!='pas besoin')?(type.recouvre_by.match('{')?(JSON.parse(type.recouvre_by).prenom+" "+JSON.parse(type.recouvre_by).nom):type.recouvre_by):type.modepayement ):"attente";
                        return {
                            id: type.id,
                            datedemande: type.datedemande,
                            montantdemande: Number(type.montant),
                            point: pointObjet.prenom+" "+pointObjet.nom,
                            telephone: pointObjet.telephone,
                            adresse: adressecomplet.address+", "+adressecomplet.souszone,
                            adressefull: adressecomplet.address+", "+adressecomplet.souszone+", "+adressecomplet.zone,
                            adresseonly: adressecomplet.address+", "+adressecomplet.souszone,
                            cc: type.cc?JSON.parse(type.cc).prenom+" "+JSON.parse(type.cc).nom:"alioune",
                            recouvre_by: recouvre_by,
                            etatpositionnement:Number(type.etatpositionnement)?Number(type.etatpositionnement):0,
                            etatpayement:Number(type.etatpayement)?Number(type.etatpayement):0,
                            etatversement:Number(type.etatversement)?Number(type.etatversement):0,
                            dateeffectif: type.dateeffectif?type.dateeffectif:"attente",
                            autoriserpositionnement: type.autoriserpositionnement?Number(type.autoriserpositionnement):0,
                        }
                    });
                    this.loading_data = false;
                },
                error => alert(error),
                () => {
                    this.getPersonForRecouvrement();
                }
            );
    }

    public valideRecouvrementDepot(){
        if(this.moderecouvrement.toLocaleString() != 'Direct') this.recouvreur="pas besoin";
        if(confirm("Confirmer la validation du Positionnement dépot")){
            clearInterval(this.killsetinterval);
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.valideRecouvrementDepot({id:this.statusdoneeposition.id, moderecouvrement:this.moderecouvrement, recouvreur:this.recouvreur, phonerecouvreur:this.phonerecouvreur, inforecouvrement:this.inforecouvrement, montantrecouvrement:this.statusdoneeposition.montantdemande, adresserecouvrement:this.statusdoneeposition.adresseonly, pointrecouvrement:this.statusdoneeposition.point, pointphonerecouvrement:this.statusdoneeposition.telephone})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.loading_data = false;
                        }
                    },
                    error => alert(error),
                    () => {
                        this.getListStatusDeposition();
                        this.killsetinterval = setInterval(() => {
                            this.getListStatusDeposition();
                            console.log('step');
                        }, 60000);
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    public validePositionnementDepot(){
        if(confirm("Confirmer la validation du Positionnement dépot")){
            clearInterval(this.killsetinterval);
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.validePositionnementDepot({id:this.statusdoneeposition.id, montantpositionnement:this.montantpositionnement})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.closedModal();
                            this.loading_data = false;
                        }
                    },
                    error => alert(error),
                    () => {
                        console.log("------------------------------------")
                        this.getListStatusDeposition();
                        this.killsetinterval = setInterval(() => {
                            this.getListStatusDeposition();
                            console.log('step');
                        }, 60000);
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    public valideCompleterPayementDepot(){
        if(confirm("Confirmer la validation Reste Payement dépot")){
            clearInterval(this.killsetinterval);
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.valideCompleterPayementDepot({id:this.statusdoneeposition.id, montantcompleterpayement:this.montantcompleterpayement})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.closedModal();
                            this.loading_data = false;
                        }
                    },
                    error => alert(error),
                    () => {
                        console.log("------------------------------------")
                        this.getListStatusDeposition();
                        this.killsetinterval = setInterval(() => {
                            this.getListStatusDeposition();
                            console.log('step');
                        }, 60000);
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    public valideCompleterVersementDepot(){
        if(confirm("Confirmer la validation Reste Versement dépot")){
            clearInterval(this.killsetinterval);
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.valideCompleterVersementDepot({id:this.statusdoneeposition.id, montantcompleterversement:this.montantcompleterversement})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.closedModal();
                            this.loading_data = false;
                        }
                    },
                    error => alert(error),
                    () => {
                        console.log("------------------------------------")
                        this.getListStatusDeposition();
                        this.killsetinterval = setInterval(() => {
                            this.getListStatusDeposition();
                            console.log('step');
                        }, 60000);
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    public validePayementDepot(){
        if(confirm("Confirmer la validation du payement dépot")){
            clearInterval(this.killsetinterval);
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.validePayementDepot({id:this.statusdoneeposition.id, montantpayement:this.montantpayement})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.closedModal();
                            this.loading_data = false;
                        }
                    },
                    error => alert(error),
                    () => {
                        this.getListStatusDeposition();
                        this.killsetinterval = setInterval(() => {
                            this.getListStatusDeposition();
                            console.log('step');
                        }, 60000);
                    }
                );
        }
        else{   console.log("Je ne confirme pas")   }
    }

    public valideVersementDepot(){
        clearInterval(this.killsetinterval);
        if(confirm("Confirmer la validation du versement dépot")){
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.valideVersementDepot({id:this.statusdoneeposition.id, montantversement:this.montantversement, modeversement:this.modeversement})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.closedModal();
                            this.loading_data = false;
                        }
                    },
                    error => alert(error),
                    () => {
                        this.getListStatusDeposition();
                        this.killsetinterval = setInterval(() => {
                            this.getListStatusDeposition();
                            console.log('step');
                        }, 60000);
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    public annulerDemandeDepot(id){
        clearInterval(this.killsetinterval);
        if(confirm("Confirmer annulation dépot")){
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.annulerDemandeDepot({id:id})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.loading_data = false;
                        }
                    },
                    error => alert(error),
                    () => {
                        this.getListStatusDeposition();
                        this.killsetinterval = setInterval(() => {
                            this.getListStatusDeposition();
                            console.log('step');
                        }, 60000);
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    public autoriserPositionnement(id){
        clearInterval(this.killsetinterval);
        if(confirm("Confirmer autorisation dépot avec reliquat")){
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.autoriserPositionnement({id:id})
                .subscribe(
                    data => {
                        if(data.errorCode){
                            this.loading_data = false;
                        }
                    },
                    error => alert(error),
                    () => {
                        this.getListStatusDeposition();
                        this.killsetinterval = setInterval(() => {
                            this.getListStatusDeposition();
                            console.log('step');
                        }, 60000);
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    public tocurrency(number){
        return Number(number).toLocaleString();
    }

}
