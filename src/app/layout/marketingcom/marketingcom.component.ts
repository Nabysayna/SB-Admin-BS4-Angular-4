import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ApiPlatformService} from "../../services/apiplateform.service";

@Component({
    selector: 'app-marketingcom',
    templateUrl: 'marketingcom.component.html',
    styleUrls: ['marketingcom.component.scss'],
    providers:[UtilService, ApiPlatformService]
})
export class MarketingcomComponent implements OnInit {

    public rowsOnPageModifAdressePts = 10;
    public sortByModifAdressePts = "nom_point";
    public sortOrderModifAdressePts = "asc";
    public filterQueryModifAdressePts:any;

    public listepointsdepoye:any[] = [];
    public pointsdepoye:any;

    public regions:any[] = [];
    public zones:any[] = [];
    public iszones:boolean;
    public souszones:any[] = [];
    public issouszones:boolean;

    public modalRef: NgbModalRef;

    public menuHead = {menuHead1:true, menuHead2:false, menuHead3:false, menuHead4:false, menuHead5:false};

    constructor(private modalService: NgbModal, private _utilService:UtilService, private _apiPlatformService:ApiPlatformService) { }

    ngOnInit() {
        console.log('welcome');
        this.getPointsdeploye();
    }

    public menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.getPointsdeploye();
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

    public getPointsdeploye(): void {
        this._apiPlatformService.getPointsdeployeModifyAdresse()
            .subscribe(
                data => {
                    console.log(data.message);
                    this.listepointsdepoye = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adressecomplet);
                        return {
                            date_ajout: type.date_ajout,
                            nom_point: type.nomentreprise,
                            login: type.email,
                            fullname_gerant: type.prenom + " " + type.nom,
                            telephone_gerant: type.telephone,
                            adressecomplet: adresse_point,
                            adresse_point: adresse_point.adresse?adresse_point.adresse+',':'' + " " + adresse_point.souszone + ", " + adresse_point.zone,
                            fullname_commercial: type.prenom_commercial + " " + type.nom_commercial
                        }
                    });
                    this.getRegion();
                },
                error => alert(error),
                () => console.log('getPointsdeploye')
            );
    }

    public openModifyAdressePoints(pts: any, content){
        this.pointsdepoye = pts;
        this.selectRegion();
        this.showModal(content);
    }

    public showModal(content) {
        this.modalRef = this.modalService.open(content);
    }

    public closedModal(){
        this.modalRef.close('Close click');
    }

    getRegion(){
        this._utilService.getRegion()
            .subscribe(
                data => {
                    this.regions = data;
                },
                error => alert(error),
                () => console.log('getRegion')
            );
    }

    selectRegion(){
        this.iszones = false;
        this.pointsdepoye.adressecomplet.zone = '--Choix zone--';
        this.pointsdepoye.adressecomplet.souszone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.pointsdepoye.adressecomplet.region)
            .subscribe(
                data => {
                    this.zones = data;
                    this.iszones = true;
                },
                error => alert(error),
                () => console.log('getZoneByRegion')
            );
    }

    selectZone(){
        this.issouszones = false;
        this._utilService.getSouszoneByZoneByRegion({region:this.pointsdepoye.adressecomplet.region, zone: this.pointsdepoye.adressecomplet.zone})
            .subscribe(
                data => {
                    this.souszones = data;
                    this.issouszones = true;
                },
                error => alert(error),
                () => console.log('getSouszoneByZoneByRegion')
            );
    }

    validmodifyadressepoints(){
        this._apiPlatformService.validModifyAdressePoint(this.pointsdepoye)
            .subscribe(
                data => {
                    console.log(data);
                },
                error => alert(error),
                () => console.log('validModifyAdressePoint')
            );
        this.closedModal();
        this.listepointsdepoye = this.listepointsdepoye.filter( opt => !(opt.telephone_gerant==this.pointsdepoye.telephone_gerant && opt.login==this.pointsdepoye.login) );
        this.pointsdepoye = undefined;
    }




}
