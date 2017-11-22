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

    public killsetinterval:any;
    public menuHead = {menuHead1:true, menuHead2:false, menuHead3:false, menuHead4:false, menuHead5:false};

    constructor(private modalService: NgbModal, private _utilService:UtilService, private _apiPlatformService:ApiPlatformService){}

    ngOnInit() {
        this.getListBilanDeposit();
        this.killsetinterval = setInterval(() => {
            this.getListBilanDeposit();
        }, 20000);
    }

    ngOnDestroy() {
        clearInterval(this.killsetinterval);
    }

    tocurrency(number){
        return Number(number).toLocaleString();
    }



    public menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getListBilanDeposit();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
        }
        if(option == 4){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.menuHead.menuHead5 = false;
        }
        if(option == 5){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
        }
    }





    /************************************************************************************
     **********************************   PARTIE BILAN DEPOSIT   ****************************
     ***********************************************************************************/

    public rowsOnPageBilanDeposit = 10;
    public sortByBilanDeposit = "date_update";
    public sortOrderBilanDeposit = "desc";
    public filterQueryBilanDeposit:any;
    public listebilandeposit:any[] = [];
    public getListBilanDeposit(): void {
        this._apiPlatformService.getListBilanDeposit()
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
                () => console.log('getListBilanDeposit')
            );
    }




}
