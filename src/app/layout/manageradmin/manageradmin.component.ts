import { Component, OnInit, OnDestroy } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import {Color} from "ng2-charts";

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
        }, 60000);

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
                () => {
                    this.getAdmincomsuiviPP();
                }
            );
    }





    /************************************************************************************
     **********************************   PARTIE AFFECTATION COMMERCIAL   ****************************
     ***********************************************************************************/

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




    /************************************************************************************
     **********************************   PARTIE SUIVI COM   ****************************
     ***********************************************************************************/

    public doughnutChartLabelsPP: string[] = ['Aucun', 'SenTool', 'Wafa', 'BBS'];
    public doughnutChartDataPP: number[] = [1, 3, 2, 4];
    public colorsEmptyObject: Array<Color> = [{ backgroundColor: ["blue", "orange", "yellow", "green"] }];


    getAdmincomsuiviPP() {
        this._utilService.getAdmincomsuiviPP()
            .subscribe(
                data => {
                    console.log(data.message);
                    if(data.errorCode){
                        this.doughnutChartDataPP = [
                            data.message.filter(opt => opt.service_sentool==0 && opt.service_wafacash==0).length,
                            data.message.filter(opt => opt.service_sentool==1 && opt.service_wafacash==0).length,
                            data.message.filter(opt => opt.service_sentool==0 && opt.service_wafacash==1).length,
                            data.message.filter(opt => opt.service_sentool==1 && opt.service_wafacash==1).length
                        ];
                    }
                    else{
                        this.router.navigate(['/login']);
                    }
                },
                error => alert(error),
                () => { }
            );
    }




}
