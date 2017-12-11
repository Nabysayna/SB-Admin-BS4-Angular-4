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

	constructor(public router: Router, private http: Http, private modalService: NgbModal, private _utilService: UtilService, private _assignationsuiviService:AssignationSuiviService, private _suivipositionnementService:SuivipositionnementService) {}

    ngOnInit(): void {
        this.getDemandeDepotForCom();
        this.killsetinterval = setInterval(() => {
            this.getDemandeDepotForCom();
            console.log('step');
        }, 60000);
    }


    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////

    public listedeposits:any[] = [];
    killsetinterval:any;


    ngOnDestroy() {
        clearInterval(this.killsetinterval);
    }

    getDemandeDepotForCom(){
        console.log('test');
        this._suivipositionnementService.getDemandeDepotForCom()
            .subscribe(
                data => {
                    console.log(data);
                    if(data.errorCode==0){
                        this.listedeposits = data.message.map(function(type){
                            return {
                                datedemande: type.datedemande,
                                adressecomplet: JSON.parse(type.initiateur.adresse).address+", "+JSON.parse(type.initiateur.adresse).souszone+", "+JSON.parse(type.initiateur.adresse).zone,
                                montantdemande: type.montantdemande,
                                telephone: type.initiateur.telephone,
                                initiateur: type.initiateur.prenom+' '+type.initiateur.nom,
                                infosup: type.infosup,
                                etatdemande: type.etatdemande,
                                tokencom: type.tokencom,
                            }
                        });
                    }
                },
                error => alert(error),
                () => console.log(this.listedeposits)
            );
    }

    validerRecuDepotCom(item){
        console.log('validerRecuDepotCom');
        console.log('--------------------------');
        clearInterval(this.killsetinterval);
        this._suivipositionnementService.validerRecuDepotCom({montantdemande: item.montantdemande, tokencom: item.tokencom})
            .subscribe(
                data => {
                    console.log(data);
                    this.getDemandeDepotForCom();
                },
                error => alert(error),
                () => {
                    this.killsetinterval = setInterval(() => {
                        this.getDemandeDepotForCom();
                        console.log('step');
                    }, 60000);
                }
            );
    }

    confirmerAffectationDepotCom(item){
        console.log('confirmerAffectationDepotCom');
        console.log('--------------------------');
        clearInterval(this.killsetinterval);
        this._suivipositionnementService.confirmerAffectationDepotCom({datedemande: item.datedemande, montantdemande: item.montantdemande, tokencom: item.tokencom})
            .subscribe(
                data => {
                    console.log(data);
                    this.getDemandeDepotForCom();
                },
                error => alert(error),
                () => {
                    this.killsetinterval = setInterval(() => {
                        this.getDemandeDepotForCom();
                        console.log('step');
                    }, 60000);
                }
            );
    }

    tocurrency(number){
        return Number(number).toLocaleString();

    }




}
