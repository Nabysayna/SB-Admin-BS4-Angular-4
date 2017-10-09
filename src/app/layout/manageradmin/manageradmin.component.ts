import { Component, OnInit, OnDestroy } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admincommercial',
  templateUrl: 'manageradmin.component.html',
  styleUrls: ['manageradmin.component.scss'],
  providers:[UtilService],
})

export class ManageradminComponent implements OnInit,OnDestroy  {

    public staticAlertClosed: boolean = false;

    public rowsOnPage = 5;
    public sortBy = "note";
    public sortOrder = "desc";

    public rowsOnPageCom = 10;
    sortByCom = "fullname";
    public sortOrderCom = "asc";
    filterQueryCommercial:any;

    public commerciaux:any[] = [];
    public superviseurs:any[] = [];
    public dashboardNbres:any;

    public menuHead = {menuHead1:true, menuHead3:false};
    killsetinterval:any;

    constructor(public router: Router, private _utilService: UtilService) {}

    ngOnInit() {
        this.getDashboardNbres();
        this.killsetinterval = setInterval(() => {
            this.getDashboardNbres();
        }, 30000);

    }

    ngOnDestroy() {
        clearInterval(this.killsetinterval);
    }

    public menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead3 = false;
            this.getDashboardNbres();
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead3 = true;
            this.getComSuperviseurs();
        }

  	}

    public toInt(num: string) { return +num; }

    public getDashboardNbres(): void {
        this._utilService.getDashboardNbres()
            .subscribe(
                data => {

                    if(data.errorCode){
                        this.dashboardNbres = data.message;
                        console.log(this.dashboardNbres);
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => console.log('getDashboardNbres')
            );
    }

    public getComSuperviseurs(): void {
        this._utilService.getComSuperviseurs()
            .subscribe(
                data => {
                    console.log(data);
                    if(data.errorCode){
                        this.superviseurs = data.message.superviseurs;
                        this.commerciaux = data.message.commerciaux;
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => console.log('getComSuperviseurs')
            );
    }

    public getRegionsSuperviseurs(): void {
        this._utilService.getRegionsSuperviseurs()
            .subscribe(
                data => {
                    console.log(data)
                    this.superviseurs = data.superviseurs
                },
                error => alert(error),
                () => console.log('getRegionsSuperviseurs')
            );
    }

    choixsuperviseurforcommercial(id_superviseur){
        console.log(id_superviseur);
    }

    reaffectercommercial(item){
        console.log(item);
        this._utilService.affectationCommercial(item)
            .subscribe(
                data => {
                    console.log(data);
                },
                error => alert(error),
                () => console.log('affectationCommercial')
            );
    }

}
