import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from "../../services/util.service";
import { NgForm } from '@angular/forms';
import {AssignationSuiviService} from "../../services/assignation-suivi.service";
import {ApiPlatformService} from "../../services/apiplateform.service";

@Component({
    selector: 'app-superviseur',
    templateUrl: './superviseur.component.html',
    styleUrls: ['./superviseur.component.scss'],
    providers:[UtilService, AssignationSuiviService,ApiPlatformService],
})
export class SuperviseurComponent implements OnInit {
    public form:any;
    public staticAlertClosed: boolean = false;
    public isEnregistrerAssignation: boolean = false;
    public rep1:any;
    public rep2:any;
    public filterQuery:string = "";
    public filtreRegion:string = "--Choix région--";
    public filtreZone:string = "--Choix zone--";
    public filtreSousZone:string = "--Choix sous zone--";
    public choixcommercial:string = "--Choix commercial--";
    public objetifcommercial:number = 0;
    reponse1:boolean;
    public prenom='';
   public nom='';
   public email='';
   public region='';
   public szone='';
   public tel='';
   public adresse='';
   public entreprise='';
   public boutique='';
   public zne='';
   public clsentool: any = {
        nom:'', prenom:'', telephone:'', email:'',
        nometps:'', nomshop:'',
        adresse:{
            region:'--Choix région--',
            zone:'--Choix zone--',
            souszone:'--Choix sous zone--',
            address:'',
        },
    };

    currentPointDocs : any ;
    reponsesPointAuProspect : any ;

    public readyforassination:boolean=true;
    public isclickforassination:boolean=false;

    rowsOnPage = 12;
    sortBy = "note";
    public sortOrder = "desc";
    sortByCom = "fullname";
    public sortOrderCom = "asc";
    public sortByWordLength = (a: any) => { return a.adresse.length; }

    public regions:any[] = [];
    public zones:any[] = [];
    public souszones:any[] = [];
    public commercials:any[] = [];
    public commercial:{type:string, prenom:string, nom:string, login:string, pwd:string, telephone:number};
    public prospects:any=[];
    public clients:any=[];
    public data:any[] = [];
    public optionassignations:any[] = [];
    public datasuivi:any[] = [];
    public datasuiviarelancer:any[] = [];
    public datasuivivalider:any[] = [];
    client: any = {
        nomboutique:'',
        nompoint:'',
        adressecompletpoint:{
            regionpoint:'--Choix région--',
            zonepoint:'--Choix zone--',
            souszonepoint:'--Choix sous zone--',
            adressepoint:'',
            codepostalpoint:0,
            geospatialpoint:{latitude:0, longitude:0},
        },
        typeactivite:[],
        avissurpoint:0,


        nomgerant:'',
        prenomgerant:'',
        telephonegerant:'779013878',
        emailgerant:'',


        nomproprietaire:'',
        prenomproprietaire:'',
        telephoneproprietaire:'',
        emailproprietaire:'',
        adressecompletproprietaire:{
            regionproprietaire:'--Choix région--',
            zoneproprietaire:'--Choix zone--',
            souszoneproprietaire:'--Choix sous zone--',
            adresseproprietaire:'',
            codepostalproprietaire:0,
            geospatialproprietaire:{latitude:0,longitude:0},
        },
        reponsesProspect : [],
        piecesFournies : []
    };
    
    regionsactivites:{activites:any[],regions:any[]};
    zone:any[];
    souszone:any[];
    public clientsentool: any = {
        nom:'', prenom:'', telephone:'', email:'',
        nometps:'', nomshop:'',
        adresse:{
            region:'--Choix région--',
            zone:'--Choix zone--',
            souszone:'--Choix sous zone--',
            address:'',
        },
    };

    public menuHead = {menuHead1:true, menuHead2:false, menuHead3:false, menuHead4:false, menuHead5:false, menuHead6:false, menuHead7:false, menuHead8:false};

    constructor(private _apiplatform: ApiPlatformService,private modalService: NgbModal, private _utilService:UtilService, private _assignationsuiviService:AssignationSuiviService) {this.reponse1=false;}

    ngOnInit() {
        this.getAssignationsBySuperviseur();
    }

    getAssignationsBySuperviseur() {
        this._assignationsuiviService.getAssignationsBySuperviseur()
            .subscribe(
                data => {
                    this.data = data.map(function(type) {
                        return {
                            id:type.id,
                            libellepoint:JSON.parse(type.client).libellepoint,
                            prenom:JSON.parse(type.client).prenom,
                            nom:JSON.parse(type.client).nom,
                            fullname:JSON.parse(type.client).fullname,
                            telephone:JSON.parse(type.client).telephone,
                            adresse:JSON.parse(type.client).adresse,
                            note:JSON.parse(type.client).note,
                            region:type.region?type.region:'Dakar', zone:type.zone, sous_zone:type.sous_zone,
                            commentaire:type.commentaire,
                            infosup:JSON.parse(type.infosup),
                            value:type.id, checked:false
                        };
                    });
                    for (let i = 0; i < this.data.length; i++) {
                        if(!this.regions.includes(this.data[i].region)) this.regions.push(this.data[i].region);
                    }
                },
                error => alert(error),
                () => {
                    console.log('getAssignationsBySuperviseur');
                }
            );
    }

    public menuHeadClick(option: number){
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.getAssignationsBySuperviseur();
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(
                    data => {
                        this.datasuivi = data.map(function(type) {
                            let client = JSON.parse(type.client);
                            if (!type.qualification){
                                return {
                                    id:type.id,
                                    libellepoint:client.nom_point,
                                    fullname:client.prenom_gerant+" "+client.nom_gerant,
                                    telephone:client.telephone_gerant,
                                    adresse:client.adresse_point.adressepoint,
                                    note:type.note,
                                    id_assigner:type.id_assigner,
                                    id_commercial:type.id_commercial,
                                    dates_suivi:type.dates_suivi,
                                    reponse:type.reponse,
                                    qualification:"--Choisir une action--",
                                    client:client
                                }
                            }
                        });
                        this.datasuivi = this.datasuivi.filter(opt => opt)
                    },
                    error => alert(error),
                    () => {
                        console.log(this.datasuivi);
                    }
                );
        }
        if(option == 3){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = true;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
        }
        if(option == 4){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = true;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(
                    data => {
                        this.datasuiviarelancer = data.map(function(type) {
                            let client = JSON.parse(type.client);
                            if (type.qualification){
                                return {
                                    id:type.id,
                                    libellepoint:client.nom_point,
                                    fullname:client.prenom_gerant+" "+client.nom_gerant,
                                    telephone:client.telephone_gerant,
                                    adresse:client.adresse_point.adressepoint,
                                    note:type.note,
                                    id_assigner:type.id_assigner,
                                    id_commercial:type.id_commercial,
                                    dates_suivi:type.dates_suivi,
                                    reponse:type.reponse,
                                    qualification:"--Choisir une action--",
                                    client:client
                                }
                            }
                        });
                        this.datasuiviarelancer = this.datasuiviarelancer.filter(opt => opt)
                    },
                    error => alert(error),
                    () => {
                        console.log(this.datasuivi);
                    }
                );
        }
        if(option == 5){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = true;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this._assignationsuiviService.listsuiviforsuperviseur()
                .subscribe(
                    data => {
                        this.datasuivivalider = this.datasuivi.filter(opt => opt)
                    },
                    error => alert(error),
                    () => {
                        console.log(this.datasuivi);
                    }
                );
        }
        if(option == 6){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = true;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = false;
            this.getCommerciaux();
            console.log(this.commercials);
        }
        if(option == 7){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = true;
            this.menuHead.menuHead8 = false;
            this.getProspect();

        }
        if(option == 8){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = false;
            this.menuHead.menuHead3 = false;
            this.menuHead.menuHead4 = false;
            this.menuHead.menuHead5 = false;
            this.menuHead.menuHead6 = false;
            this.menuHead.menuHead7 = false;
            this.menuHead.menuHead8 = true;
            this.getClient();

        }
    }

    public toInt(num: string) { return +num; }

    public getCommerciaux(): void {
        this._utilService.getCommerciauxBySuperviseur()
            .subscribe(
                data => {
                    this.commercials = data
                    if(data.errorCode) this.commercials = data.message;
                },
                error => alert(error),
                () => console.log(this.commercials)
            );
    }
    public getProspect(){
       this._utilService.getProspectValide()
            .subscribe(
                data => {
                    this.prospects = data;
                    console.log(this.prospects);
                    this.prospects = data.map(function(type){
						let client = JSON.parse(type.client);
						let commercial = JSON.parse(type.commercial);
						return {
                                    id:type.id,
                                    libellepoint:client.nom_point,
                                    fullname:client.prenom_gerant+" "+client.nom_gerant,
                                    telephone:client.telephone_gerant,
                                    adresse:client.adresse_point.adressepoint,
                                    email:client.email_gerant,
                                    note:type.note,
                                    id_assigner:type.id_assigner,
                                    id_commercial:type.id_commercial,
                                    dates_suivi:type.dates_suivi,
                                    reponse:type.reponse,
                                    qualification:"--Choisir une action--",
                                    client:client,
                                    zone:client.adresse_point.zonepoint,
                                    szone:client.adresse_point.souszonepoint,
                                    nomcommercial:commercial.prenom+" "+commercial.prenom
                                }
                    });

                    if(data.errorCode) this.prospects = data;
                },
                error => alert(error),
                () => console.log(this.commercials)
            );
    }

    public getClient(){
         this._utilService.getClients()
            .subscribe(
                data => {
                    this.clients = data;
                    console.log(this.clients);
                    this.clients = data.map(function(type,data){
					
					// let tel = data.json.tel;
					 //let nom = data.json.nom_point;
					// let gerant = data.json.gerant;
					 let client = JSON.parse(type.adresse);
						return { 
                                    adresse:client.adressepoint,
                                    gerant:type.gerant+" "+type.gerantnom,
                                    tel:type.tel,
                                    nom_point:type.nom_point,
                                    commercial:type.commercial,
                                                                         
                                }
                    });

                    if(data.errorCode) this.clients = data;
                },
                error => alert(error),
                () => console.log(this.clients)
            );
    }
    public ajout(content,p){
      
       this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
        this.remplissage(p);
    }
    //select region
    SelectRegion(){
        this.clientsentool.adresse.zone = '--Choix zone--';
        this.clientsentool.adresse.souszone = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.clientsentool.adresse.region)
            .subscribe(
                data => this.zones = data,
                error => alert(error),
                () => console.log(this.zones)
            );
    }
     clear(){
         this.prenom='';
         this.nom='';
         this.email='';
         this.region='';
         this.zne='';
         this.szone='';
         this.entreprise='';
         this.boutique='';
         this.adresse='';
         this.tel='';
     
  }
  remplissage(p){
        var full=p.fullname.split(' ');
        var ng=full.length;
        var prenom=full[0];
        for(var i=1;i<=ng-2;i++){
           prenom+=" "+full[i];
        }
        this.prenom=prenom;
        this.nom=full[ng-1];
        this.email=p.email;
        this.tel=p.telephone;
        this.adresse=p.adresse;
        this.entreprise=p.libellepoint;
        this.zne=p.zone;
        this.szone=p.szone;
  }
  validernewclientsentool(form:NgForm){
       var cli=form.value;
       this.clsentool.nom=cli.nom;
       this.clsentool.prenom=cli.prenom;
       this.clsentool.email=cli.email;
       this.clsentool.telephone=cli.tel;
       this.clsentool.nometps="";
       this.clsentool.adresse.region=cli.region;
       this.clsentool.adresse.zone=cli.zone;
       this.clsentool.adresse.souszone=cli.szone;
       this.clsentool.adresse.adress=cli.adresse;
       
        console.log(JSON.stringify(this.clsentool));
        this._apiplatform.souscrireSentool(this.clsentool)
            .subscribe(                                                   
                data => {
                    //console.log(data);
                    if(data.message && data.message =='dejainscrit'){
                        console.log('deja incrit');
                    }
                    else{
                        this.rep1=true;
                    }
                },
                error => alert(error),
                () => console.log('souscrireSentool')
            );
    }
    
   /* inscription(f:NgForm){
      var m=f.value;
      m.region="region";
      m.zone="zone";
      this.client.adressecompletpoint.regionpoint="Dakar";
      this.client.adressecompletpoint.zonepoint="Dakar";
      this.client.adressecompletpoint.souszonepoint="Alamadie";
      this.client.adressecompletpoint.adressepoint="si biir dakar";
      this.client.nomproprietaire=m.nom;
      this.client.nomboutique=m.boutique;
      this.client.nompoint=m.entreprise;
      this.client.prenomproprietaire=m.prenom;
      this.client.telephoneproprietaire=m.tel;
      this.client.emailproprietaire=m.email;
      this._utilService.insertPoint(this.client)
            .subscribe(
                data => {
                      console.log(data);
                      this.reponse1=true;
                    if(data.errorCode=='true'){
                         this.reponse1=true;
                         this.clear();
        
                       }
                    if(data.errorCode=='false'){
                        // this.reponse2=true;
                      }
                },
                error => alert(error),
                () => console.log('insertPoint')
        );
      
      
    }*/
    getgerant(p){
        //return p.split("#")[0] ;
        return p.nom_point;
    }
    getRegionActivite(){
        this._utilService.getRegionActivite()
            .subscribe(
                data => {
                    console.log(data);
                    this.regionsactivites = data;
                },
                error => alert(error),
                () => console.log(this.regionsactivites)
            );
    }

    public selectRegion() {
        this.filtreSousZone = "--Choix sous zone--";
        this.optionassignations = [];
        console.log(this.filtreRegion);
        this.zones =  [] ;
        for (let i = 0; i < this.data.length; i++) {
            if( this.data[i].region==this.filtreRegion ){
                if( !this.zones.includes(this.data[i].zone) )
                    this.zones.push(this.data[i].zone);
            }
        }
        console.log(this.zones);
    }

    public selectZone() {
        this.optionassignations = [];
    }

    public selectSouszone(){
        this.getCommerciaux();
        this.optionassignations = this.data
            .filter(data => (data.zone==this.filtreZone && data.sous_zone==this.filtreSousZone) );
    }

    sousZonesOfCurrentZone(){
        let souszones : any[] =  [] ;
        for (let i = 0; i < this.data.length; i++) {
            if( this.data[i].zone==this.filtreZone ){
                if( !souszones.includes(this.data[i].sous_zone) )
                    souszones.push(this.data[i].sous_zone);
            }
        }
        return souszones ;
    }

    get selectedOptions():any {
        return this.optionassignations
            .filter(opt => opt.checked)
            .map(opt => opt.value);
    };

    public updateCheckedOptions(): void{
        console.log(this.selectedOptions);
    }

    public assignercommercial(){
        this.isclickforassination = true;
        if( this.filtreZone == "--Choix zone--" ||
            this.filtreRegion == "--Choix région--" ||
            this.filtreSousZone == "--Choix sous zone--" ||
            this.choixcommercial == "--Choix commercial--" ||
            this.objetifcommercial == 0 ){
            console.log(this.filtreZone+'-'+this.filtreSousZone+'-'+this.choixcommercial+'-'+this.objetifcommercial);
            this.readyforassination = false;
        }
        else {
            let optionassignations = this.optionassignations;
            let assignes:any = this.selectedOptions.map(function(option) {
                return optionassignations.find( (assigne) => assigne.id == Number(option));
            });
            let assignations:any = {
                commercial:this.commercials.find( (commercial) => commercial.id ==this.choixcommercial),
                assignes:assignes,
                infosup:{
                    date_assignationsuperviser:'',
                    objectifsuperviseur:'',
                    commentaireforsuperviseur:'',
                    date_assignationcommercial:'',
                    objectifcommercial:this.objetifcommercial,
                    commentaireforcommercial:''
                }
            };
            console.log(assignations);
            this._assignationsuiviService.assignationcommercial(assignations)
                .subscribe(
                    data => {
                        console.log(data);
                        this.isEnregistrerAssignation = true;
                        this.regions = [];
                        this.filtreRegion = "--Choix région--";
                        this.objetifcommercial = 0;
                        this.getAssignationsBySuperviseur();
                        this.selectRegion();
                    },
                    error => alert(error),
                    () => {
                        console.log('assignationcommercial')
                    }
                );
        }
    }

    getLibellePiece(item){
        return item.split("#")[0] ;
    }

    getNomFichier(item){
        return item.split("#")[1] ;
    }

    showModal(content, i) {
        this.currentPointDocs = JSON.parse(this.datasuivi[i].client.fichiers) ;
        console.log( this.currentPointDocs ) ;
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }

    showModalCommercial(content, commercial:any) {
        this.commercial = commercial?commercial:{type:'Nouveau commercial', prenom:'', nom:'', login:'', pwd:'', telephone:77}
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }

    showModalDetail(content, item) {
        this.reponsesPointAuProspect = JSON.parse(item.reponse) ;
        console.log( this.reponsesPointAuProspect ) ;
        this.modalService.open(content).result.then( (result) => {
        }, (reason) => {} );
    }

    validersuivisuperviseur(suivi:any){
        let suivisuperviseur = {
            id:suivi.id,
            dates_suivi:JSON.parse(suivi.dates_suivi),
            reponse:suivi.reponse,
            qualification:suivi.qualification,
            id_assigner:suivi.id_assigner,
            id_commercial:suivi.id_commercial,
        };
        this.datasuivi = this.datasuivi.filter(opt => opt!=suivi);
        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(
                data => {
                    console.log(data)
                },
                error => alert(error),
                () => {
                     console.log('ajoutsuivifromsuperviseur')
                }
            );
    }

    public validersuiviarelancersuperviseur(suivi:any){
        let suivisuperviseur = {
            id:suivi.id,
            dates_suivi:JSON.parse(suivi.dates_suivi),
            reponse:suivi.reponse,
            qualification:suivi.qualification,
            id_assigner:suivi.id_assigner,
            id_commercial:suivi.id_commercial,
        };
        this.datasuiviarelancer = this.datasuiviarelancer.filter(opt => opt!=suivi);

        this._assignationsuiviService.ajoutsuivifromsuperviseur(suivisuperviseur)
            .subscribe(
                data => {
                    console.log(data)
                },
                error => alert(error),
                () => {
                    console.log('ajoutsuivifromsuperviseur')
                }
            );
    }

}
