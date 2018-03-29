import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {NgbModal, NgbModalRef, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {ApiCommandeService} from "../../services/apicommande.service";


@Component({
    selector: 'app-adminecommerce',
    templateUrl: 'adminecommerce.component.html',
    styleUrls: ['adminecommerce.component.scss'],
    providers:[ApiCommandeService],
})

export class AdminecommerceComponent implements OnInit, OnDestroy {

    public regions:any[] = [];
    public zones:any[] = [];
    public souszones:any[] = [];

    public livreurs:any[] = [];
    public staticAlertClosedArticle: boolean = false;


    public menuHead = {menuHead1:true, menuHead2:false};
    public loading_data = true;
    public modalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        public router: Router,
        private _apiCommandeService:ApiCommandeService
    ){ }

  	ngOnInit(){
        this.loading_data = true;
        console.log("-------------------------------");
        this.histInitArticleARecuperer();
    }

    ngOnDestroy(){ }


    public menuHeadClick(option: number){
        this.loading_data = true;
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;

            console.log("menuHead1--------");
            this.histInitArticleARecuperer();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;

            console.log("menuHead2--------");
            this.histInitArticleALivrer();
        }
    }


    tocurrency(number){
        return Number(number).toLocaleString();
    }

    public showModal(content) {
        this.modalRef = this.modalService.open(content, {size: "lg"});
    }

    public closedModal(){
        this.modalRef.close('Close click');
    }


    /************************************************************************************
     ************************   PARTIE ARTICLE A RECUPERER   ****************************
     ***********************************************************************************/

    public cheickallArticleARecuperer:boolean=false;
    public selectionjourArticleARecuperer:string;
    public selectionintervalledateinitArticleARecuperer:string;
    public selectionintervalleddatefinalArticleARecuperer:string;

    public articlesARecuperer:any[] = [];
    public optionassignationsArticleARecuperer:any[] = [];

    public filtreRegionArticleARecuperer:string = "--Choix région--";
    public filtreZoneArticleARecuperer:string = "--Choix zone--";
    public filtreSousZoneArticleARecuperer:string = "--Choix sous zone--";
    public choixlivreurArticleARecuperer:string = "--Choix livreur--"
    public rowsOnPageArticleARecuperer = 10;
    public sortByArticleARecuperer = "datecommande";
    public sortOrderArticleARecuperer = "asc";


    public historiquejourArticleARecuperer(){
        this.initARecuperer();


        this.selectionintervalledateinitArticleARecuperer = undefined;
        this.selectionintervalleddatefinalArticleARecuperer = undefined;
        this._apiCommandeService.getListCommandeARecupererByDate({origine: 'actuel', type: 'jour', infotype:this.selectionjourArticleARecuperer})
            .subscribe(
                data => {
                    console.log("-------------------------------");
                    data.message.forEach(opt =>{
                        JSON.parse(opt.orderedArticles).forEach(type =>{
                            if(!this.regions.includes(type.region)) this.regions.push(type.region);
                            this.articlesARecuperer.push({
                                id:type.idarticle?type.idarticle:type.id,
                                idcommande: opt.id,
                                article:type,
                                datecommande: opt.dateCommande.date.split('.')[0],
                                designation:type.designation,
                                description:type.description,
                                adressecomplet:type.address+", "+type.souszone+", "+type.zone+", "+type.region,
                                address:type.address,
                                region:type.region,
                                zone:type.zone,
                                souszone:type.souszone,
                                qte:type.qte,
                                supplied:Number(type.supplied),
                                value:type.idarticle?type.idarticle:type.id,
                                checked:false
                            });
                        });
                    })
                    this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(opt => opt.supplied==0);
                },
                error => alert(error),
                () => {
                    this.finaleARecuperer();
                }
            );
    }

    public historiqueintervalleArticleARecuperer(){
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.initARecuperer();

        this.selectionjourArticleARecuperer = undefined;
        this._apiCommandeService.getListCommandeARecupererByDate({origine: 'actuel', type: 'intervalle', infotype:this.selectionintervalledateinitArticleARecuperer+" "+this.selectionintervalleddatefinalArticleARecuperer})
            .subscribe(
                data => {
                    console.log("-------------------------------");
                    data.message.forEach(opt =>{
                        JSON.parse(opt.orderedArticles).forEach(type =>{
                            if(!this.regions.includes(type.region)) this.regions.push(type.region);
                            this.articlesARecuperer.push({
                                id:type.idarticle?type.idarticle:type.id,
                                idcommande: opt.id,
                                datecommande: opt.dateCommande.date.split('.')[0],
                                article:type,
                                designation:type.designation,
                                description:type.description,
                                adressecomplet:type.address+", "+type.souszone+", "+type.zone+", "+type.region,
                                address:type.address,
                                region:type.region,
                                zone:type.zone,
                                souszone:type.souszone,
                                qte:type.qte,
                                supplied:Number(type.supplied),
                                value:type.idarticle?type.idarticle:type.id,
                                checked:false
                            });
                        });
                    })
                    this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(opt => opt.supplied==0);
                },
                error => alert(error),
                () => {
                    this.finaleARecuperer();
                }
            );
    }

    public histInitArticleARecuperer(){
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.initARecuperer();

        this.selectionintervalledateinitArticleARecuperer = undefined;
        this.selectionintervalleddatefinalArticleARecuperer = undefined;
        let datenow = ((new Date()).toJSON()).split("T",2)[0];
        this.selectionjourArticleARecuperer = datenow;
        this._apiCommandeService.getListCommandeARecupererByDate({origine: 'init', type: 'jour', infotype:this.selectionjourArticleARecuperer})
            .subscribe(
                data => {
                    this.livreurs = data.message.livreurs;
                    data.message.commandes.forEach(opt =>{
                        JSON.parse(opt.orderedArticles).forEach(type =>{
                            if(!this.regions.includes(type.region)) this.regions.push(type.region);
                            this.articlesARecuperer.push({
                                id:type.idarticle?type.idarticle:type.id,
                                idcommande: opt.id,
                                datecommande: opt.dateCommande.date.split('.')[0],
                                article:type,
                                designation:type.designation,
                                description:type.description,
                                adressecomplet:type.address+", "+type.souszone+", "+type.zone+", "+type.region,
                                address:type.address,
                                region:type.region,
                                zone:type.zone,
                                souszone:type.souszone,
                                qte:type.qte,
                                supplied:Number(type.supplied),
                                value:type.idarticle?type.idarticle:type.id,
                                checked:false
                            });
                        });
                    })
                    this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(opt => opt.supplied==0);
                },
                error => alert(error),
                () => {
                   this.finaleARecuperer();
                }
            );
    }

    public choixsuperviseurforcommercial(){
        console.log(this.livreurs.find(livreur => livreur.id ==this.choixlivreurArticleARecuperer));
    }

    public selectRegionArticleARecuperer(){
        this.zones = []
        this.souszones = []
        this.initCheickallArticleARecuperer();


        this.filtreZoneArticleARecuperer = "--Choix zone--";
        this.filtreSousZoneArticleARecuperer = "--Choix sous zone--";

        if(this.filtreRegionArticleARecuperer.toLocaleLowerCase() == '--Choix région--'.toLocaleLowerCase()){
            this.optionassignationsArticleARecuperer = this.articlesARecuperer;
        }
        else{
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(opt =>
                opt.region.toLocaleLowerCase() == this.filtreRegionArticleARecuperer.toLocaleLowerCase()
            );
            this.articlesARecuperer.filter(opt => opt.region.toLocaleLowerCase() == this.filtreRegionArticleARecuperer.toLocaleLowerCase()).forEach(opt => {
                if(!this.zones.includes(opt.zone)) this.zones.push(opt.zone);
            });
        }
    }

    public selectZoneArticleARecuperer(){
        this.souszones = [];
        this.initCheickallArticleARecuperer();


        this.filtreSousZoneArticleARecuperer = "--Choix sous zone--";
        if( this.filtreZoneArticleARecuperer.toLocaleLowerCase() == '--Choix zone--'.toLocaleLowerCase() ){
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(opt => opt.region.toLocaleLowerCase() == this.filtreRegionArticleARecuperer.toLocaleLowerCase());
        }
        else{
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(opt => opt.zone.toLocaleLowerCase() == this.filtreZoneArticleARecuperer.toLocaleLowerCase());
            this.articlesARecuperer.filter(opt => (opt.region.toLocaleLowerCase() == this.filtreRegionArticleARecuperer.toLocaleLowerCase()) && (opt.zone.toLocaleLowerCase() == this.filtreZoneArticleARecuperer.toLocaleLowerCase())).forEach(opt => {
                if(!this.souszones.includes(opt.souszone)) this.souszones.push(opt.souszone);
            });
        }
    }

    public selectSouszoneArticleARecuperer(){
        this.initCheickallArticleARecuperer();


        if( this.filtreSousZoneArticleARecuperer.toLocaleLowerCase() == '--Choix sous zone--'.toLocaleLowerCase() ){
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(opt =>
                (opt.region.toLocaleLowerCase() == this.filtreRegionArticleARecuperer.toLocaleLowerCase()) &&
                (opt.zone.toLocaleLowerCase() == this.filtreZoneArticleARecuperer.toLocaleLowerCase())
            );
        }
        else{
            this.optionassignationsArticleARecuperer = this.articlesARecuperer.filter(opt =>
                (opt.region.toLocaleLowerCase() == this.filtreRegionArticleARecuperer.toLocaleLowerCase()) &&
                (opt.zone.toLocaleLowerCase() == this.filtreZoneArticleARecuperer.toLocaleLowerCase()) &&
                (opt.souszone.toLocaleLowerCase() == this.filtreSousZoneArticleARecuperer.toLocaleLowerCase())
            );
        }
    }

    get selectedOptionsArticleARecuperer():any {
        return this.optionassignationsArticleARecuperer
            .filter(opt => opt.checked)
            .map(opt => opt.value);
    };

    public assignerlivreurArticleARecuperer(){
        if(confirm("Confirmer l'assignation")){
            console.log("je confirme")
            this.loading_data = true;

            let datenow = ((new Date()).toJSON()).split("T",2)[0];
            let coursier = this.livreurs.find(livreur => livreur.id ==this.choixlivreurArticleARecuperer);
            let optionassignations = this.optionassignationsArticleARecuperer.filter(opt => opt.checked).map(opt => {
                return ({
                    idcoursier: Number(coursier.id),
                    idcommande: opt.idcommande,
                    localisation:{address:opt.address, region:opt.region, zone:opt.zone, souszone:opt.souszone},
                    infosup:{dateassignation:datenow, coursier:coursier, article:opt.article},
                });
            });
            this._apiCommandeService.validerListCommandeAssigner({origine: 'recuperer', assignation:optionassignations})
                .subscribe(
                    data => {
                        this.historiqueintervalleArticleARecuperer();
                    },
                    error => alert(error),
                    () => {
                        this.staticAlertClosedArticle = true;
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    public onchangeCheickallArticleARecuperer(){
        for (let i = 0; i < this.optionassignationsArticleARecuperer.length; i++) {
            this.optionassignationsArticleARecuperer[i].checked = this.cheickallArticleARecuperer;
        }
    }

    public onchangeCheickoneArticleARecuperer(){
        if(this.optionassignationsArticleARecuperer.find(article => article.checked==false)){
            this.cheickallArticleARecuperer = false;
        }else{
            this.cheickallArticleARecuperer = true;
        }
    }

    public initCheickallArticleARecuperer(){
        this.cheickallArticleARecuperer = false;
        for (let i = 0; i < this.optionassignationsArticleARecuperer.length; i++) {
            this.optionassignationsArticleARecuperer[i].checked = this.cheickallArticleARecuperer;
        }
    }

    public initARecuperer(){
        this.loading_data = true;
        this.cheickallArticleARecuperer = false;
        this.choixlivreurArticleARecuperer = "--Choix livreur--";
        this.staticAlertClosedArticle = false;


        this.articlesARecuperer = [];
        this.optionassignationsArticleARecuperer = [];
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.souszones = [];
    }

    public finaleARecuperer(){
        this.filtreRegionArticleARecuperer = "--Choix région--";
        this.filtreZoneArticleARecuperer = "";
        this.filtreSousZoneArticleARecuperer = "-";
        this.choixlivreurArticleARecuperer = "--Choix livreur--";

        this.loading_data = false;
    }








    /************************************************************************************
     ***************************   PARTIE ARTICLE A LIVRER   ****************************
     ***********************************************************************************/

    public cheickallArticleALivrer:boolean=false;
    public selectionjourArticleALivrer:string;
    public selectionintervalledateinitArticleALivrer:string;
    public selectionintervalleddatefinalArticleALivrer:string;

    public articlesALivrer:any[] = [];
    public optionassignationsArticleALivrer:any[] = [];

    public filtreRegionArticleALivrer:string = "--Choix région--";
    public filtreZoneArticleALivrer:string = "--Choix zone--";
    public filtreSousZoneArticleALivrer:string = "--Choix sous zone--";
    public choixlivreurArticleALivrer:string = "--Choix livreur--"
    public rowsOnPageArticleALivrer = 10;
    public sortByArticleALivrer = "datecommande";
    public sortOrderArticleALivrer = "asc";

    historiquejourArticleALivrer(){
        this.initALivrer();


        this.selectionintervalledateinitArticleALivrer = undefined;
        this.selectionintervalleddatefinalArticleALivrer = undefined;
        this._apiCommandeService.getListCommandeALivrerByDate({origine: 'actuel', type: 'jour', infotype:this.selectionjourArticleALivrer})
            .subscribe(
                data => {
                    console.log("-------------------------------");
                    data.message.forEach(opt =>{
                        let pointrecup = JSON.parse(opt.pointderecuperation);
                        if(!this.regions.includes(pointrecup.region)) this.regions.push(pointrecup.region);
                        this.articlesALivrer.push({
                            id: opt.id,
                            datecommande: opt.dateCommande.date.split('.')[0],
                            attributcommande: "CD_"+opt.id+"."+opt.commanditaire+"."+JSON.parse(opt.orderedArticles).length,
                            articlescommande:JSON.parse(opt.orderedArticles).map(type =>{
                                return {
                                    id:type.idarticle?type.idarticle:type.id,
                                    designation:type.designation,
                                    description:type.description,
                                    montant:type.montant,
                                    imagelink:type.imagelink,
                                    adressecomplet:type.address+", "+type.souszone+", "+type.zone+", "+type.region,
                                    address:type.address,
                                    region:type.region,
                                    zone:type.zone,
                                    souszone:type.souszone,
                                    qte:type.qte,
                                    etat:type.supplied,
                                };
                            }),
                            idcommanditaire: opt.commanditaire,
                            adressecomplet:pointrecup.address+", "+pointrecup.souszone+", "+pointrecup.zone+", "+pointrecup.region,
                            address:pointrecup.address,
                            region:pointrecup.region,
                            zone:pointrecup.zone,
                            souszone:pointrecup.souszone,
                            value:opt.id,
                            checked:false
                        });
                    })
                    this.optionassignationsArticleALivrer = this.articlesALivrer;
                },
                error => alert(error),
                () => {
                    this.finaleALivrer();
                }
            );
    }

    historiqueintervalleArticleALivrer(){
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.initALivrer();

        this.selectionjourArticleALivrer = undefined;
        this._apiCommandeService.getListCommandeALivrerByDate({origine: 'actuel', type: 'intervalle', infotype:this.selectionintervalledateinitArticleALivrer+" "+this.selectionintervalleddatefinalArticleALivrer})
            .subscribe(
                data => {
                    console.log("-------------------------------");
                    data.message.forEach(opt =>{
                        let pointrecup = JSON.parse(opt.pointderecuperation);
                        if(!this.regions.includes(pointrecup.region)) this.regions.push(pointrecup.region);
                        this.articlesALivrer.push({
                            id: opt.id,
                            datecommande: opt.dateCommande.date.split('.')[0],
                            attributcommande: "CD_"+opt.id+"."+opt.commanditaire+"."+JSON.parse(opt.orderedArticles).length,
                            articlescommande:JSON.parse(opt.orderedArticles).map(type =>{
                                return {
                                    id:type.idarticle?type.idarticle:type.id,
                                    designation:type.designation,
                                    description:type.description,
                                    montant:type.montant,
                                    imagelink:type.imagelink,
                                    adressecomplet:type.address+", "+type.souszone+", "+type.zone+", "+type.region,
                                    address:type.address,
                                    region:type.region,
                                    zone:type.zone,
                                    souszone:type.souszone,
                                    qte:type.qte,
                                    etat:type.supplied,
                                };
                            }),
                            idcommanditaire: opt.commanditaire,
                            adressecomplet:pointrecup.address+", "+pointrecup.souszone+", "+pointrecup.zone+", "+pointrecup.region,
                            address:pointrecup.address,
                            region:pointrecup.region,
                            zone:pointrecup.zone,
                            souszone:pointrecup.souszone,
                            value:opt.id,
                            checked:false
                        });
                    })
                    this.optionassignationsArticleALivrer = this.articlesALivrer;
                },
                error => alert(error),
                () => {
                    this.finaleALivrer();
                }
            );
    }

    histInitArticleALivrer(){
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.initALivrer();

        this.selectionintervalledateinitArticleALivrer = undefined;
        this.selectionintervalleddatefinalArticleALivrer = undefined;
        let datenow = ((new Date()).toJSON()).split("T",2)[0];
        this.selectionjourArticleALivrer = datenow;
        this._apiCommandeService.getListCommandeALivrerByDate({origine: 'init', type: 'jour', infotype:this.selectionjourArticleALivrer})
            .subscribe(
                data => {
                    this.livreurs = data.message.livreurs;
                    data.message.commandes.forEach(opt =>{
                        let pointrecup = JSON.parse(opt.pointderecuperation);
                        if(!this.regions.includes(pointrecup.region)) this.regions.push(pointrecup.region);
                        this.articlesALivrer.push({
                            id: opt.id,
                            datecommande: opt.dateCommande.date.split('.')[0],
                            attributcommande: "CD_"+opt.id+"."+opt.commanditaire+"."+JSON.parse(opt.orderedArticles).length,
                            articlescommande:JSON.parse(opt.orderedArticles).map(type =>{
                                return {
                                    id:type.idarticle?type.idarticle:type.id,
                                    designation:type.designation,
                                    description:type.description,
                                    montant:type.montant,
                                    imagelink:type.imagelink,
                                    adressecomplet:type.address+", "+type.souszone+", "+type.zone+", "+type.region,
                                    address:type.address,
                                    region:type.region,
                                    zone:type.zone,
                                    souszone:type.souszone,
                                    qte:type.qte,
                                    etat:type.supplied,
                                };
                            }),
                            idcommanditaire: opt.commanditaire,
                            adressecomplet:pointrecup.address+", "+pointrecup.souszone+", "+pointrecup.zone+", "+pointrecup.region,
                            address:pointrecup.address,
                            region:pointrecup.region,
                            zone:pointrecup.zone,
                            souszone:pointrecup.souszone,
                            value:opt.id,
                            checked:false
                        });
                    })
                    this.optionassignationsArticleALivrer = this.articlesALivrer;
                },
                error => alert(error),
                () => {
                    this.finaleALivrer();
                }
            );
    }

    public selectRegionArticleALivrer(){
        this.zones = []
        this.souszones = []
        this.initCheickallArticleALivrer();


        this.filtreZoneArticleALivrer = "--Choix zone--";
        this.filtreSousZoneArticleALivrer = "--Choix sous zone--";

        if(this.filtreRegionArticleALivrer.toLocaleLowerCase() == '--Choix région--'.toLocaleLowerCase()){
            this.optionassignationsArticleALivrer = this.articlesALivrer;
        }
        else{
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(opt =>
                opt.region.toLocaleLowerCase() == this.filtreRegionArticleALivrer.toLocaleLowerCase()
            );
            this.articlesALivrer.filter(opt => opt.region.toLocaleLowerCase() == this.filtreRegionArticleALivrer.toLocaleLowerCase()).forEach(opt => {
                if(!this.zones.includes(opt.zone)) this.zones.push(opt.zone);
            });
        }
    }

    public selectZoneArticleALivrer(){
        this.souszones = [];
        this.initCheickallArticleALivrer();


        this.filtreSousZoneArticleALivrer = "--Choix sous zone--";
        if( this.filtreZoneArticleALivrer.toLocaleLowerCase() == '--Choix zone--'.toLocaleLowerCase() ){
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(opt => opt.region.toLocaleLowerCase() == this.filtreRegionArticleALivrer.toLocaleLowerCase());
        }
        else{
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(opt => opt.zone.toLocaleLowerCase() == this.filtreZoneArticleALivrer.toLocaleLowerCase());
            this.articlesALivrer.filter(opt => (opt.region.toLocaleLowerCase() == this.filtreRegionArticleALivrer.toLocaleLowerCase()) && (opt.zone.toLocaleLowerCase() == this.filtreZoneArticleALivrer.toLocaleLowerCase())).forEach(opt => {
                if(!this.souszones.includes(opt.souszone)) this.souszones.push(opt.souszone);
            });
        }
    }

    public selectSouszoneArticleALivrer(){
        this.initCheickallArticleALivrer();

        if( this.filtreSousZoneArticleALivrer.toLocaleLowerCase() == '--Choix sous zone--'.toLocaleLowerCase() ){
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(opt =>
                (opt.region.toLocaleLowerCase() == this.filtreRegionArticleALivrer.toLocaleLowerCase()) &&
                (opt.zone.toLocaleLowerCase() == this.filtreZoneArticleALivrer.toLocaleLowerCase())
            );
        }
        else{
            this.optionassignationsArticleALivrer = this.articlesALivrer.filter(opt =>
                (opt.region.toLocaleLowerCase() == this.filtreRegionArticleALivrer.toLocaleLowerCase()) &&
                (opt.zone.toLocaleLowerCase() == this.filtreZoneArticleALivrer.toLocaleLowerCase()) &&
                (opt.souszone.toLocaleLowerCase() == this.filtreSousZoneArticleALivrer.toLocaleLowerCase())
            );
        }
    }

    get selectedOptionsArticleALivrer():any {
        return this.optionassignationsArticleALivrer
            .filter(opt => opt.checked)
            .map(opt => opt.value);
    };

    public assignerlivreurArticleALivrer(){
        if(confirm("Confirmer l'assignation")){
            console.log("je confirme")
            this.loading_data = true;

            let datenow = ((new Date()).toJSON()).split("T",2)[0];
            let coursier = this.livreurs.find(livreur => livreur.id ==this.choixlivreurArticleALivrer);
            let optionassignations = this.optionassignationsArticleALivrer.filter(opt => opt.checked).map(opt => {
                return ({
                    idcoursier: Number(coursier.id),
                    idcommande: opt.id,
                    localisation:{address:opt.address, region:opt.region, zone:opt.zone, souszone:opt.souszone},
                    infosup:{dateassignation:datenow, coursier:coursier, articlescommande:opt.articlescommande},
                });
            });
            this._apiCommandeService.validerListCommandeAssigner({origine: 'livrer', assignation:optionassignations})
                .subscribe(
                    data => {
                        this.historiqueintervalleArticleALivrer();
                    },
                    error => alert(error),
                    () => {
                        this.staticAlertClosedArticle = true;
                    }
                );
        }
        else{
            console.log("Je ne confirme pas")
        }
    }

    public onchangeCheickallArticleALivrer(){
        for (let i = 0; i < this.optionassignationsArticleALivrer.length; i++) {
            this.optionassignationsArticleALivrer[i].checked = this.cheickallArticleALivrer;
        }
    }

    public onchangeCheickoneArticleALivrer(){
        if(this.optionassignationsArticleALivrer.find(article => article.checked==false)){
            this.cheickallArticleALivrer = false;
        }else{
            this.cheickallArticleALivrer = true;
        }
    }

    public initCheickallArticleALivrer(){
        this.cheickallArticleALivrer = false;
        for (let i = 0; i < this.optionassignationsArticleALivrer.length; i++) {
            this.optionassignationsArticleALivrer[i].checked = this.cheickallArticleALivrer;
        }
    }

    public initALivrer(){
        this.loading_data = true;
        this.cheickallArticleALivrer = false;
        this.choixlivreurArticleALivrer = "--Choix livreur--";
        this.staticAlertClosedArticle = false;

        this.articlesALivrer = [];
        this.optionassignationsArticleALivrer = [];
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.souszones = [];
    }

    public finaleALivrer(){
        this.filtreRegionArticleALivrer = "--Choix région--";
        this.filtreZoneArticleALivrer = "";
        this.filtreSousZoneArticleALivrer = "-";
        this.choixlivreurArticleALivrer = "--Choix livreur--";

        this.loading_data = false;
    }

    onecommandeAlivrer:any;
    closeResult: string;

    open(content, onecommandeAlivrer) {
        this.onecommandeAlivrer = onecommandeAlivrer;
        this.modalService.open(content, {size: 'lg'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    public getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }




}
