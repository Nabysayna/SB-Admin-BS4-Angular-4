import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {UtilService} from "../../services/util.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ApiPlatformService} from "../../services/apiplateform.service";
import {BaseChartDirective} from 'ng2-charts/ng2-charts';


@Component({
    selector: 'app-suivionepoint',
    templateUrl: 'suivionepoint.component.html',
    styleUrls: ['suivionepoint.component.scss'],
    providers:[UtilService, ApiPlatformService]
})
export class SuivionepointComponent implements OnInit {

    public loading_data:boolean = true;
    public menuHead = {menuHead1:true, menuHead2:false};

    constructor(private _apiPlatformService:ApiPlatformService, private modalService: NgbModal,){}

    ngOnInit() {
        this.getListPointsbysuperviseur();
    }

    ngOnDestroy() {   }

    tocurrency(number){
        return Number(number).toLocaleString();
    }

    showModalVoirTousLesDepots(content) {
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }

    public menuHeadClick(option: number){
        this.loading_data = true;
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.getListPointsbysuperviseur();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.lineChartData = [];
            this.lineChartLabels = [];

            this.getOnePointSuivicc();
        }
    }


    /************************************************************************************
     *********************************   PARTIE SUIVI LIST POINT   ****************************
     ***********************************************************************************/

    public sortOrderpointsbycc = "desc";
    public filterQuerypointsbycc:any;
    public sortBypointsbycc = "date_ajout";
    public rowsOnPage = 12;
    public categorie:string = 'Tous';

    public listepointsbycc:any[] = [];
    public gardeListepointsbycc:any[] = [];

    getListPointsbysuperviseur(){
        this._apiPlatformService.getListPointsbysuperviseur()
            .subscribe(
                data => {
                    this.loading_data = false;
                    if(data.errorCode){
                        this.listepointsbycc = data.message.map(function(type){
                            return {
                                date_ajout: type.dateCreation.date.split('.')[0],
                                date_last_depot: type.date_last_modif.date.split('.')[0],
                                nom_point: JSON.parse(type.infosup).nometps,
                                info_point: JSON.parse(type.infosup),
                                gerant: type.name_adminpdv,
                                email: type.login,
                                last_depot: type.last_depot,
                                tel: type.telephone,
                                adressecomplet: JSON.parse(type.adresse),
                                adresse: JSON.parse(type.adresse).zone+", "+JSON.parse(type.adresse).souszone+", "+JSON.parse(type.adresse).address,
                                idcommercial: type.idcommercial,
                                caution: type.caution,
                                cautiondebase: type.cautiondebase,
                                id_point: type.id_point,
                                categorie: (type.cautiondebase==0)?'pas':((100*type.caution)/type.cautiondebase)<25?'faible':((100*type.caution)/type.cautiondebase)>=25 && ((100*type.caution)/type.cautiondebase)<=50?'passable':'bien',
                            }
                        });
                        this.gardeListepointsbycc = this.listepointsbycc;
                    }
                    console.log(this.listepointsbycc);
                },
                error => alert(error),
                () => console.log('')
            );
    }

    getCategorie(categorie: string){
        console.log(categorie)
        if(categorie=='Tous'){
            this.categorie = 'Tous';
            this.listepointsbycc = this.gardeListepointsbycc;
        }
        if(categorie=='Pas de depot'){
            this.categorie = 'Pas de depot';
            this.listepointsbycc = this.gardeListepointsbycc.filter(type => type.categorie=='pas');
        }
        if(categorie=='Faible'){
            this.categorie = 'Faible';
            this.listepointsbycc = this.gardeListepointsbycc.filter(type => type.categorie=='faible');
        }
        if(categorie=='Passable'){
            this.categorie = 'Passable';
            this.listepointsbycc = this.gardeListepointsbycc.filter(type => type.categorie=='passable');
        }
        if(categorie=='Bien'){
            this.categorie = 'Bien';
            this.listepointsbycc = this.gardeListepointsbycc.filter(type => type.categorie=='bien');
        }
    }

    /************************************************************************************
     *********************************   PARTIE SUIVI ONE POINT   ****************************
     ***********************************************************************************/

    public pointcc:any;
    public datapointrecup:any;
    public montanttotaldepot:number = 0;
    public touslesdepots:any[] = [];
    public affichelesdepots:any = {jours:[], montant:[]};
    public touslesgerants:any[] = [];
    public suivionepointSelectionintervalledateinit:string;
    public suivionepointSelectionintervalledatefinal:string;

    getOnePointSuivicc(){
        this._apiPlatformService.getOnePointSuivicc(this.pointcc)
            .subscribe(
                data => {
                    this.id_gerant_selectionne = -1;
                    if(data.errorCode){
                        this.datapointrecup = data.message;
                        this.suivionepointSelectionintervalledateinit = data.dateinitial;
                        this.suivionepointSelectionintervalledatefinal = data.dateifinale;

                        this.datapointrecup.infopoint.depots.forEach(type => { this.montanttotaldepot += Number(JSON.parse(type.infosup).montant); });

                        this.suivionepointSelectionDepot();

                        this.touslesgerants = this.datapointrecup.infopoint.gerants.map(function(type){ return { id_gerant: type.id_gerant, nom_gerant: type.nom_gerant, telephone: type.telephone, last_connection: type.last_connection.date.split('.')[0], }  });
                        this.touslescommissions = this.datapointrecup.infopoint.commissions.map(function(type){
                            return {
                                id_gerant: type.idUser,
                                dateop: type.dateoperation.date.split('.')[0],
                                dateop_jour: type.dateoperation.date.split('.')[0].split(' ')[0],
                                montant: type.montant,
                                commission: type.commissionpdv,
                                service: type.nomservice,
                                produit: type.libelleoperation,
                            }
                        });
                    }
                },
                error => alert(error),
                () => {
                    this.suivionepointSelectionGerant(-1);
                }
            );
    }
    suivrepoint(pdv:any){
        this.pointcc = pdv;
        this.menuHeadClick(2);
    }
//*********** DEPOT SUIVI ONE POINT *****************
    @ViewChild("baseChart2")  chart2: BaseChartDirective;
    public suivionepointSelectionDepot(){
        this.touslesdepots = this.datapointrecup.infopoint.depots.map(function(type){
            return {
                date_depot: type.daterenflu.date.split('.')[0],
                date_depot_jour: type.daterenflu.date.split('.')[0].split(' ')[0],
                montant_depot: JSON.parse(type.infosup).montant,
            }
        });
        console.log(this.touslesdepots)

        let depotjours = this.touslesdepots.map(type => type.date_depot_jour);
        depotjours.sort();
        console.log(depotjours)

        let tabjours:string[] = [];
        let jour:string = depotjours[0];
        tabjours.push(jour);
        depotjours.forEach(type => { if(type!=jour){
                tabjours.push(type);
                jour = type;
        }});

        let tabjoursmontant:number[] = [];
        tabjours.forEach(date => {
            let montant:number = 0
            this.touslesdepots.forEach( type=> { if(type.date_depot_jour==date){ montant  += Number(type.montant_depot); } });
            tabjoursmontant.push(montant);
        });
        this.affichelesdepots.jours = tabjours;
        this.affichelesdepots.montant = tabjoursmontant;

        this.barChartLabels = tabjours;
        if(this.chart2 !== undefined){
            this.chart2.chart.config.data.labels = this.barChartLabels;
        }

        this. barChartData = [{data: tabjoursmontant, label: 'Dépots'}];
    }
//************************DEPOT DIAGRAM*************************
    public barChartOptions:any = { scaleShowVerticalLines: false, responsive: true };
    public barChartLabels:string[] = [];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
    public barChartData:any[] = [];


//*********** DETAIL SUIVI ONE POINT *****************
    @ViewChild("baseChart1")  chart1: BaseChartDirective;
    public suivionepointIntervalle(){
        this.touslescommissions = [];
        this.loading_data = true;
        this._apiPlatformService.getDetailOnePointSuivicc({id_point:this.pointcc.id_point,intervalle:this.suivionepointSelectionintervalledateinit+" "+this.suivionepointSelectionintervalledatefinal})
            .subscribe(
                data => {
                    this.id_gerant_selectionne = -1;
                    if(data.errorCode){
                        this.touslescommissions = data.message.map(function(type){
                            return {
                                id_gerant: type.idUser,
                                dateop: type.dateoperation.date.split('.')[0],
                                dateop_jour: type.dateoperation.date.split('.')[0].split(' ')[0],
                                montant: type.montant,
                                commission: type.commissionpdv,
                                service: type.nomservice,
                                produit: type.libelleoperation,
                            }
                        });
                    }
                },
                error => alert(error),
                () => {
                    this.suivionepointSelectionGerant(-1);
                    this.loading_data = false;
                }
            );
    }

    public touslescommissions:any[] = [];
    public touslesjours:any[] = [];
    public touslescommissionsbyGerant:any[] = [];
    public bilantouslescommissionsbyGerant:any[] = [];
    public touslescommissionsbyGerantbyservice:any[] = [];
    public id_gerant_selectionne:number=-1;

    public suivionepointSelectionGerant(indice: number){
        this.loading_data = false;
        this.lineChartData = [];
        this.lineChartLabels = [];
        this.touslesjours = [];

        this.id_gerant_selectionne = indice;
        if(this.id_gerant_selectionne==-1){ this.touslescommissionsbyGerant = this.touslescommissions;  }
        else {  this.touslescommissionsbyGerant = this.touslescommissions.filter( opt => opt.id_gerant==this.id_gerant_selectionne); }

        this.suivionepointgraphe();
        this.suivionepointdetail();

    }

    public lineChartData:Array<any> = [];
    public lineChartLabels:Array<any> = [];
    public lineChartOptions:any = { responsive: true };
    public lineChartType:string = 'line';
    public lineChartLegend:boolean = true;

    public suivionepointgraphe(){
        this.touslesjours = this.touslescommissions.map( type => type.dateop_jour);
        this.touslesjours.sort();
        let tabjours:string[] = [];
        let jour:string = this.touslesjours[0];
        tabjours.push(jour);
        this.lineChartLabels.push(jour);
        this.touslesjours.forEach(type => {
            if(type!=jour){
                tabjours.push(type);
                this.lineChartLabels.push(type);
                jour = type;
            }
        });

        if(this.chart1 !== undefined){
            this.chart1.chart.config.data.labels = this.lineChartLabels;
        }

        let nbrebyjourom:number[] = [];
        let nbrebyjourtnt:number[] = [];
        let nbrebyjourpost:number[] = [];
        let nbrebyjourwizall:number[] = [];
        tabjours.forEach(type => {
            let nbrebyjouromSom:number = 0;
            let nbrebyjourtntSom:number = 0;
            let nbrebyjourpostSom:number = 0;
            let nbrebyjourwizallSom:number = 0;

            this.touslescommissionsbyGerant.forEach( opt => { if(opt.dateop_jour==type && opt.service=='orangemoney'){ nbrebyjouromSom += Number(opt.montant); } }); nbrebyjourom.push( nbrebyjouromSom );
            this.touslescommissionsbyGerant.forEach( opt => { if(opt.dateop_jour==type && opt.service=='TNT'){ nbrebyjourtntSom += Number(opt.montant); } }); nbrebyjourtnt.push( nbrebyjourtntSom );
            this.touslescommissionsbyGerant.forEach( opt => { if(opt.dateop_jour==type && opt.service=='POSTCASH'){ nbrebyjourpostSom += Number(opt.montant); } }); nbrebyjourpost.push( nbrebyjourpostSom );
            this.touslescommissionsbyGerant.forEach( opt => { if(opt.dateop_jour==type && opt.service=='WIZALL'){ nbrebyjourwizallSom += Number(opt.montant); } }); nbrebyjourwizall.push( nbrebyjourwizallSom );
        });


        this.lineChartData = [
            {data: nbrebyjourom, label: 'OM'},
            {data: nbrebyjourtnt, label: 'TNT'},
            {data: nbrebyjourpost, label: 'POSTECASH'},
            {data: nbrebyjourwizall, label: 'WIZALL'},
        ];
    }

    public suivionepointdetail(){
        this.bilantouslescommissionsbyGerant = [
            {service:'tnt', cashin:0, cashout:0, commission:0, liste:[]},
            {service:'postcash', cashin:0, cashout:0, commission:0, liste:[]},
            {service:'wizall', cashin:0, cashout:0, commission:0, liste:[]},
            {service:'orangemoney', cashin:0, cashout:0, commission:0, liste:[]},
            {service:'Total', cashin:0, cashout:0, commission:0, liste:[]},
        ];
        this.touslescommissionsbyGerant.forEach(type => {
            this.bilantouslescommissionsbyGerant[4].liste.push(type);
            this.bilantouslescommissionsbyGerant[4].commission+=type.commission;
            if(type.service == 'TNT'){
                this.bilantouslescommissionsbyGerant[0].liste.push(type);
                this.bilantouslescommissionsbyGerant[0].cashin+=Number(type.montant);
                this.bilantouslescommissionsbyGerant[0].commission+=type.commission;
                this.bilantouslescommissionsbyGerant[4].cashin+=Number(type.montant);
            }
            if(type.service == 'POSTCASH'){
                this.bilantouslescommissionsbyGerant[1].liste.push(type);
                this.bilantouslescommissionsbyGerant[1].cashin+=Number(type.montant);
                this.bilantouslescommissionsbyGerant[1].commission+=type.commission;
                this.bilantouslescommissionsbyGerant[4].cashin+=Number(type.montant);
            }
            if(type.service == 'WIZALL'){
                this.bilantouslescommissionsbyGerant[2].liste.push(type);
                this.bilantouslescommissionsbyGerant[2].cashin+=Number(type.montant);
                this.bilantouslescommissionsbyGerant[2].commission+=type.commission;
                this.bilantouslescommissionsbyGerant[4].cashin+=Number(type.montant);
            }
            if(type.service == 'orangemoney'){
                if(type.produit == 'depot'){
                    this.bilantouslescommissionsbyGerant[3].cashin+=Number(type.montant);
                    this.bilantouslescommissionsbyGerant[4].cashin+=Number(type.montant);
                }
                else{
                    this.bilantouslescommissionsbyGerant[3].cashout+=Number(type.montant);
                    this.bilantouslescommissionsbyGerant[4].cashout+=Number(type.montant);
                }
                this.bilantouslescommissionsbyGerant[3].liste.push(type);
                this.bilantouslescommissionsbyGerant[3].commission+=type.commission;
            }
        });
        console.log(this.bilantouslescommissionsbyGerant);
    }

    public showModalVoirDetailtouslescommissionsbyGerant(content:any, indice:number) {
        this.touslescommissionsbyGerantbyservice = this.bilantouslescommissionsbyGerant[indice].liste;
        this.modalService.open(content, {size: "lg"}).result.then( (result) => {
        }, (reason) => {} );
    }




}
