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

    constructor(private _apiPlatformService:ApiPlatformService, public router: Router, private http: Http, private modalService: NgbModal, private _utilService: UtilService, private _assignationsuiviService:AssignationSuiviService, private _suivipositionnementService:SuivipositionnementService) {}

    ngOnInit(): void {
        this.loading_data = true
        this.getListStatusDeposition();
        this.killsetinterval = setInterval(() => {
            this.getListStatusDeposition();
            console.log('step init');
        }, 60000);
    }

    ngOnDestroy() {
        clearInterval(this.killsetinterval);
    }


    public rowsOnPageStatusDeposition = 25;
    public sortByStatusDeposition = "datedemande";
    public sortOrderStatusDeposition = "asc";
    public filterQueryStatusDeposition:any;
    public listestatusdeposition:any[] = [];
    public statusdoneeposition:any;
    public montantpayement:number;
    public montantpositionnement:number;
    public montantversement:number;
    public moderecouvrement:number;
    public modeversement:number;
    public recouvreur:any;
    public recouvreurs:any[] = [];

    public filterQueryStatusDepositionHistorique:any;
    public listestatusdepositionHistorique:any[] = [];

    public modalRef: NgbModalRef;

    public closedModal(){
        this.modalRef.close('Close click');
    }

    showModalValideDemandeDepot(content) {
        this.modalRef = this.modalService.open(content);
    }
    showModalRecouvrementDepot(content, item) {
        this.moderecouvrement = undefined;
        this.recouvreur = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
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
    showModalVersementDepot(content, item) {
        this.modeversement = undefined;
        this.montantversement = undefined;
        this.statusdoneeposition = item;
        this.modalRef = this.modalService.open(content);
    }
    showModalHistoriqueFaireUnDepot(content) {
        this.modalRef = this.modalService.open(content, {size: "lg"});
    }

    public getPersonForRecouvrement(): void {
        this._utilService.getPersonForRecouvrement()
            .subscribe(
                data => {
                    if(data.errorCode) {
                        this.recouvreurs = data.message;
                    }
                    this.loading_data = false;

                },
                error => alert(error),
                () => console.log('')
            );
    }

    public getListStatusDeposition(): void {
        this._apiPlatformService.getListStatusDeposition()
            .subscribe(
                data => {
                    let listestatus = data.message.map(function (type) {
                        let pointObjet = JSON.parse(type.point);
                        let adressecomplet = (typeof pointObjet.adresse === 'object')?pointObjet.adresse:JSON.parse(pointObjet.adresse);
                        return {
                            id: type.id,
                            datedemande: type.datedemande.split(" ")[0],
                            montantdemande: Number(type.montant),
                            point: pointObjet.prenom+" "+pointObjet.nom,
                            telephone: pointObjet.telephone,
                            adresse: adressecomplet.address+", "+adressecomplet.souszone+", "+adressecomplet.zone,
                            cc: type.cc?JSON.parse(type.cc).prenom+" "+JSON.parse(type.cc).nom:"alioune",
                            recouvre_by: type.recouvre_by?type.recouvre_by:"attente",
                            etatpositionnement:type.etatpositionnement?type.etatpositionnement:0,
                            etatpayement: type.etatpayement?type.etatpayement:0,
                            etatversement: type.etatversement?type.etatversement:0,
                            dateeffectif: type.dateeffectif?type.dateeffectif:"attente",
                        }
                    });
                    this.listestatusdeposition = listestatus.filter(opt => opt.datedemande && (opt.etatversement==0 || opt.etatpayement==0 || opt.etatpositionnement==0));
                    this.listestatusdepositionHistorique = listestatus.filter(opt => (opt.datedemande && Number(opt.etatversement)!=0 && Number(opt.etatpayement)!=0 && Number(opt.etatpositionnement)!=0) );
                    this.loading_data = false;
                },
                error => alert(error),
                () => {
                    if(this.recouvreurs.length==0){
                        this.getPersonForRecouvrement();
                    }
                }
            );
    }

    public valideRecouvrementDepot(){
        if(this.moderecouvrement.toLocaleString() != 'Direct') this.recouvreur="pas besoin";
        if(confirm("Confirmer la validation du Positionnement dépot")){
            clearInterval(this.killsetinterval);
            console.log("je confirme")
            this.loading_data = true;
            this._suivipositionnementService.valideRecouvrementDepot({id:this.statusdoneeposition.id, moderecouvrement:this.moderecouvrement, recouvreur:this.recouvreur})
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


    tocurrency(number){
        return Number(number).toLocaleString();
    }

}
