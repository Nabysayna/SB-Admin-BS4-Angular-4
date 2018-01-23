import {Component, OnInit} from '@angular/core';
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

    public rowsOnPageReclamationsnonresolu = 10;
    public sortByReclamationsnonresolu = "date_reclamation";
    public sortOrderReclamationsnonresolu = "asc";
    public filterQueryReclamationsnonresolu:any;

    public listepointsdepoye:any[] = [];
    public listereclamationsnonresolu:any[] = [];
    public pointsdepoye:any;

    public regions:any[] = [];
    public zones:any[] = [];
    public iszones:boolean;
    public souszones:any[] = [];
    public issouszones:boolean;

    public modalRef: NgbModalRef;

    public menuHead = {menuHead1:true, menuHead2:false, menuHead3:false};

    constructor(private modalService: NgbModal, private _utilService:UtilService, private _apiPlatformService:ApiPlatformService){}

    ngOnInit() {
        this.getPointsdeployeModifyAdresse();
    }

    public menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.getPointsdeployeModifyAdresse();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.getReclamationsNonResolu();
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
        }
    }

    public getPointsdeployeModifyAdresse(): void {
        this._apiPlatformService.getPointsdeployeModifyAdresse()
            .subscribe(
                data => {
                    if(data.errorCode==0){
                        this.listepointsdepoye = data.message.map(function (type) {
                            let adresse_point = JSON.parse(type.adresse);
                            return {
                                idUser: type.idUser,
                                nom_point: JSON.parse(type.infosup).nometps,
                                nom_boutique: JSON.parse(type.infosup).nomshop,
                                login: type.login,
                                fullname_gerant: type.prenom + " " + type.nom,
                                telephone_gerant: type.telephone,
                                adressecomplet: adresse_point,
                                adresse_point: adresse_point.address+", " + adresse_point.souszone + ", " + adresse_point.zone,
                            }
                        });
                        console.log(this.listepointsdepoye);
                        this.getRegion();
                    }
                },
                error => alert(error),
                () => console.log('getPointsdeploye')
            );
    }

    public getReclamationsNonResolu(): void {
        this._apiPlatformService.getReclamationsNonResolu()
            .subscribe(
                data => {
                    if(data.errorCode==0){
                        this.listereclamationsnonresolu = data.message.map(function (type) {
                            return {
                                id_reclamation: type.id,
                                date_reclamation: type.dateajout.date.split('.')[0],
                                nom_point: JSON.parse(type.infosup).nometps,
                                name_caissier: type.name_caissier,
                                telephone: type.telephone.split('221')[1],
                                nomservice: type.nomservice,
                                sujet: type.sujet,
                                message: type.message,
                            }
                        });
                        console.log(this.listereclamationsnonresolu);
                    }
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
        console.log(this.pointsdepoye);
        this._apiPlatformService.validModifyAdressePoint(this.pointsdepoye)
            .subscribe(
                data => {
                    console.log(data);
                    this.closedModal();
                },
                error => alert(error),
                () => {
                    this.listepointsdepoye = this.listepointsdepoye.filter( opt => !(opt.telephone_gerant==this.pointsdepoye.telephone_gerant && opt.login==this.pointsdepoye.login) );
                    this.pointsdepoye = undefined;
                }
            );

    }

    validresolutionreclamation(reclamation){
        this._apiPlatformService.validReclamationsNonResolu(reclamation)
            .subscribe(
                data => {
                    console.log('');
                },
                error => alert(error),
                () => console.log('validReclamationsNonResolu')
            );
        this.listereclamationsnonresolu = this.listereclamationsnonresolu.filter( opt => opt.id_reclamation!=reclamation.id_reclamation );
    }


}
