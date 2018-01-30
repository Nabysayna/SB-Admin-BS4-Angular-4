import {Component, OnInit, OnDestroy} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ApiPlatformService} from "../../services/apiplateform.service";

@Component({
    selector: 'app-comptable',
    templateUrl: 'comptable.component.html',
    styleUrls: ['comptable.component.scss'],
    providers:[UtilService, ApiPlatformService]
})
export class ComptableComponent implements OnInit {

    public menuHead = {menuHead1:true, menuHead2:false};

    constructor(private modalService: NgbModal, private _utilService:UtilService, private _apiPlatformService:ApiPlatformService){}

    ngOnInit() {
        this.getEtatDeposit();
    }

    ngOnDestroy() {   }

    tocurrency(number){
        return Number(number).toLocaleString();
    }

    public menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.getEtatDeposit();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            //this.getListBilanDeposit();
            this.histDepositCautionInit();
        }
    }





    /************************************************************************************
     **********************************   PARTIE ETAT DEPOSIT   ****************************
     ***********************************************************************************/

    public rowsOnPageEtatDeposit = 10;
    public sortByEtatDeposit = "date_update";
    public sortOrderEtatDeposit = "desc";
    public filterQueryEtatDeposit:any;
    public listeetatdeposit:any[] = [];
    public getEtatDeposit(): void {
        this._apiPlatformService.getEtatDeposit()
            .subscribe(
                data => {
                    this.listeetatdeposit = data.message.map(function (type) {
                        return {
                            date_update:type.updater.date.split('.')[0],
                            montantactuel:type.caution,
                            last_deposit:type.cautiondebase,
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: type.infopoint?JSON.parse(type.infopoint).nometps:'-',
                        }
                    });
                },
                error => alert(error),
                () => console.log('getEtatDeposit')
            );
    }



    /************************************************************************************
     **********************************   PARTIE HISTORIQUE DEPOSIT   ****************************
     ***********************************************************************************/

    public rowsOnPageBilanDeposit = 10;
    public sortByBilanDeposit = "date_update";
    public sortOrderBilanDeposit = "desc";
    public filterQueryBilanDeposit:any;
    public listebilandeposit:any[] = [];
    public totaldeposit:number = 0;

    public selectionjour:string;
    public selectionintervalledateinit:string;
    public selectionintervalleddatefinal:string;

    historiquejourDepositCaution(){
        this.selectionintervalledateinit = undefined;
        this.selectionintervalleddatefinal = undefined;
        this._apiPlatformService.getListBilanDepositByDate({type: 'jour', infotype:this.selectionjour})
            .subscribe(
                data => {
                    this.listebilandeposit = data.message.map(function (type) {
                        return {
                            date_update:type.daterenflu.date.split('.')[0],
                            maj_by:JSON.parse(type.updater).prenom +" "+JSON.parse(type.updater).nom,
                            montant:JSON.parse(type.infotrace).montant,
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: JSON.parse(type.infopoint).nometps,
                        }
                    });
                },
                error => alert(error),
                () => {
                    this.listebilandeposit.forEach(type => {
                        this.totaldeposit += Number(type.montant);
                    });
                }
            );
    }

    historiqueintervalleDepositCaution(){
        this.selectionjour = undefined;
        this._apiPlatformService.getListBilanDepositByDate({type: 'intervalle', infotype:this.selectionintervalledateinit+" "+this.selectionintervalleddatefinal})
            .subscribe(
                data => {
                    this.listebilandeposit = data.message.map(function (type) {
                        return {
                            date_update:type.daterenflu.date.split('.')[0],
                            maj_by:JSON.parse(type.updater).prenom +" "+JSON.parse(type.updater).nom,
                            montant:JSON.parse(type.infotrace).montant,
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: JSON.parse(type.infopoint).nometps,
                        }
                    });
                },
                error => alert(error),
                () => {
                    this.listebilandeposit.forEach(type => {
                        this.totaldeposit += Number(type.montant);
                    });
                }
            );
    }

    histDepositCautionInit(){
        this.selectionintervalledateinit = undefined;
        this.selectionintervalleddatefinal = undefined;
        let datenow = ((new Date()).toJSON()).split("T",2)[0];
        this.selectionjour = datenow;
        this._apiPlatformService.getListBilanDepositByDate({type: 'jour', infotype:this.selectionjour})
            .subscribe(
                data => {
                    this.listebilandeposit = data.message.map(function (type) {
                        return {
                            date_update:type.daterenflu.date.split('.')[0],
                            maj_by:JSON.parse(type.updater).prenom +" "+JSON.parse(type.updater).nom,
                            montant:JSON.parse(type.infotrace).montant,
                            superviseur:type.superviseur,
                            telephone:type.telephone,
                            point: JSON.parse(type.infopoint).nometps,
                        }
                    });
                },
                error => alert(error),
                () => {
                    this.listebilandeposit.forEach(type => {
                        this.totaldeposit += Number(type.montant);
                    });
                }
            );
    }






}
