import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Location }  from '@angular/common';
import {ApiPlatformService} from "../../../services/apiplateform.service";
import {ApiGeoLocService} from "../../../services/apigeolocalisation.service";


@Component({
    selector: 'app-cartographie',
    templateUrl: 'cartographie.component.html',
    styleUrls: ['cartographie.component.scss'],
    providers:[ApiPlatformService, ApiGeoLocService]
})
export class CartographieComponent implements OnInit, OnDestroy {

    public loading_data:boolean = true;
    public menuHead = {menuHead1:true, menuHead2:false};
    title: string;
    centercartelat: number = 14.497401;
    centercartelng: number = -14.452361999999994;
    bbslat: number = 14.7475347;
    bbslng: number = -17.4651933;
    centercartezoom: number = 7;
    private getSetInterval:any;
    listegeolocalises:any=[];

    constructor(private location: Location, private _apigeoService:ApiGeoLocService){}

    ngOnInit() {
        this._apigeoService.listpointssentool()
            .subscribe(
                data => {
                    this.listegeolocalises = data.message.map(function (type) {
                        let adresse_point = JSON.parse(type.adresse);
                        let infsup = JSON.parse(type.infosup);
                        return {
                            prenom_admin: type.admin_prenom,
                            nom_admin: type.admin_nom,
                            tel_admin: type.admin_telephone,
                            info_point: infsup,
                            last_depot: Number(type.caution.last_depot)!=0?Number(type.caution.last_depot):Number(type.caution.cautiondebase),
                            caution: Number(type.caution.caution),
                            cautiondebase: Number(type.caution.cautiondebase),
                            id:type.idUser,
                            nom_point:infsup.nometps,
                            geoposition:JSON.parse(adresse_point.geoposition),
                            fullname_gerant:type.prenom+" "+type.nom,
                            telephone_gerant:type.telephone,
                            region_point: adresse_point.region?adresse_point.region:"",
                            zone_point: adresse_point.zone?adresse_point.zone:"",
                            souszone_point: adresse_point.souszone?adresse_point.souszone:"",
                            adresse_point: adresse_point.address?adresse_point.address:"",
                            categorie: ((Number(type.caution.cautiondebase)==0) && (Number(type.caution.caution)==0) )?'blue':((Number(type.caution.cautiondebase)==0) && (Number(type.caution.caution)!=0) )?'yellow':((100*Number(type.caution.caution))/Number(type.caution.last_depot))<25?'red':((100*Number(type.caution.caution))/Number(type.caution.last_depot))>=25 && ((100*Number(type.caution.caution))/Number(type.caution.last_depot))<=50?'orange':'green',
                        }
                    });
                },
                error => alert(error),
                () => {
                    this.title = "BBS"
                    this.loading_data = false;
                }
            );


        /*this.getSetInterval = setInterval(() => {
            this.title = this.tocurrency(this.test++);
        }, 1000);*/
    }

    ngOnDestroy() {
//        clearInterval(this.getSetInterval)
    }

    tocurrency(number){
        return Number(number).toLocaleString();
    }

    goBack() {
        this.location.back();
    }

    public menuHeadClick(option: number){
        this.loading_data = true;
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.loading_data = false;
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.loading_data = false;
        }
    }



}
