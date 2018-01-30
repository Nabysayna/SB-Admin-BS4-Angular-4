import { Component, OnInit, OnDestroy } from '@angular/core';
import {Http} from "@angular/http";
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {Router} from "@angular/router";


import {ApiPlatformService} from "../../services/apiplateform.service";
import {SuivipositionnementService} from "../../services/suivipositionnement.service";


@Component({
    selector: 'demandedepot-tables',
    templateUrl: 'demandedepot.component.html',
    styleUrls: ['demandedepot.component.scss'],
    animations: [routerTransition()],
    providers:[UtilService, AssignationSuiviService, SuivipositionnementService]
})
export class DemandedepotComponent implements OnInit {

    public loading_data:boolean = true;

    constructor(public router: Router, private http: Http, private modalService: NgbModal, private _utilService: UtilService, private _assignationsuiviService:AssignationSuiviService, private _suivipositionnementService:SuivipositionnementService) {}

    ngOnInit(): void {
        this.loading_data = true;

        this.getDemandeDepotForCom();
        this.killsetinterval = setInterval(() => {
            this.getDemandeDepotEncoursForCom();
            console.log('step init');
        }, 20000);
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////

    public listedeposits:any[] = [];
    public listedepositsencours:any[] = [];
    public listedepositsvalide:any[] = [];
    killsetinterval:any;


    ngOnDestroy() {
        clearInterval(this.killsetinterval);
    }

    getDemandeDepotForCom(){
        console.log('getDemandeDepotForCom');
        this._suivipositionnementService.getDemandeDepotForCom()
            .subscribe(
                data => {
                    if(data.errorCode==0){
                        this.listedeposits = data.message.map(function(type){
                            return {
                                datedemande: type.datedemande,
                                adressecomplet: JSON.parse(type.initiateur.adresse).address+", "+JSON.parse(type.initiateur.adresse).souszone+", "+JSON.parse(type.initiateur.adresse).zone,
                                montantdemande: type.montantdemande,
                                cc: JSON.parse(type.validateur).prenom+" "+JSON.parse(type.validateur).nom,
                                telephone: type.initiateur.telephone,
                                initiateur: type.initiateur.prenom+' '+type.initiateur.nom,
                                infosup: type.infosup,
                                etatdemande: type.etatdemande,
                                tokencom: type.tokencom,
                            }
                        });
                        this.listedepositsencours = this.listedeposits.filter(opt => opt.etatdemande!=3);
                        this.listedepositsvalide = this.listedeposits.filter(opt => opt.etatdemande==3);
                    }
                },
                error => alert(error),
                () => this.loading_data = false
            );
    }

    getDemandeDepotEncoursForCom(){
        console.log('getDemandeDepotEncoursForCom');
        this._suivipositionnementService.getDemandeDepotEncoursForCom()
            .subscribe(
                data => {
                    if(data.errorCode==0){
                        this.listedeposits = data.message.map(function(type){
                            return {
                                datedemande: type.datedemande,
                                adressecomplet: JSON.parse(type.initiateur.adresse).address+", "+JSON.parse(type.initiateur.adresse).souszone+", "+JSON.parse(type.initiateur.adresse).zone,
                                montantdemande: type.montantdemande,
                                telephone: type.initiateur.telephone,
                                initiateur: type.initiateur.prenom+' '+type.initiateur.nom,
                                infosup: type.infosup,
                                cc: JSON.parse(type.validateur).prenom+" "+JSON.parse(type.validateur).nom,
                                etatdemande: type.etatdemande,
                                tokencom: type.tokencom,
                            }
                        });
                        this.listedepositsencours = this.listedeposits.filter(opt => opt.etatdemande!=3);
                    }
                },
                error => alert(error),
                () => this.loading_data = false
            );
    }

    validerRecuDepotCom(item){
        if(confirm("Confirmer l'affectation")){
            console.log("je confirme")
            this.loading_data = true;
            clearInterval(this.killsetinterval);
            this._suivipositionnementService.validerRecuDepotCom({montantdemande: item.montantdemande, tokencom: item.tokencom})
                .subscribe(
                    data => {
                        this.listedepositsencours = this.listedeposits.filter(opt => opt.etatdemande!=3 && opt.tokencom!=item.tokencom);
                        this.getDemandeDepotForCom();
                    },
                    error => alert(error),
                    () => {
                        this.killsetinterval = setInterval(() => {
                            this.getDemandeDepotEncoursForCom();
                            console.log('step valide');
                        }, 20000);
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    confirmerAffectationDepotCom(item){
        if(confirm("Confirmer l'affectation")){
            console.log("je confirme")
            this.loading_data = true;
            clearInterval(this.killsetinterval);
            this._suivipositionnementService.confirmerAffectationDepotCom({datedemande: item.datedemande, montantdemande: item.montantdemande, tokencom: item.tokencom})
                .subscribe(
                    data => {
                        this.getDemandeDepotEncoursForCom();
                    },
                    error => alert(error),
                    () => {
                        this.killsetinterval = setInterval(() => {
                            this.getDemandeDepotEncoursForCom();
                            console.log('step confirm affectation');
                        }, 20000);
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

    public showModalVoirplusdedemande(content) {
        this.modalService.open(content, {size: "lg"}).result.then( (result) => { }, (reason) => {} );
    }






}
