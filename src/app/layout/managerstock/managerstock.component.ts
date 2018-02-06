import { Component, OnInit,TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ManagerstockService } from 'app/services/managerstock.service';


/*HttpClient */
import {
    HttpClient,
    HttpRequest,
    HttpEventType,
    HttpResponse
  } from '@angular/common/http';

@Component({
    selector: 'app-managerstock',
    templateUrl: 'managerstock.component.html',
    styleUrls: ['managerstock.component.scss'],
     providers:[UtilService, AssignationSuiviService, ManagerstockService],
})
export class ManagerstockComponent implements OnInit {

    public data:any[] = [];
    modalRef: BsModalRef;
    public listearticlesselectionner:any;
    
    src = 'http://localhost/server-backend-upload/';
    public percentDone:number = 0;
    progressBar:any;
    
    // inbformation sur 
    modifier  = [];
    remplacer:any= [];
    supprimer:any =  [];
    remplacerBool = false;
    toutChanger = false;
    cursor ={ventes:4, attentes:6}
    ventes = [];
    attentes = [];

    public listarticlesvuweb = [
        {id: 1, designation:'web 1', nomImg: 'bb.jpg'},
        {id: 2, designation:'web 2', nomImg: 'mc.jpg'},
        {id: 3, designation:'web 3', nomImg: 'bbb.jpg'},
        {id: 4, designation:'web 4', nomImg: 'fs.jpg'},
        {id: 5, designation:'web 5', nomImg: 'bbb.jpg'},
    ];
    public listarticlesfrompv = [
        {id: 1, designation:'as', description:'test 1', nomImg: 'bfa.jpg'},
        {id: 2, designation:'az', description:'test 1', nomImg: 'hs.jpg'},
        {id: 3, designation:'ae', description:'test 1', nomImg: 'nf.jpg'},
        {id: 4, designation:'ar', description:'test 1', nomImg: 'n.jpg'},
        {id: 5, designation:'at', description:'test 1', nomImg: 'bea.jpg'},
        {id: 6, designation:'ay', description:'test 1', nomImg: 'bha.jpg'},
    ];

    vitrine1 = {enVentes:null,enAttentes:null}
    vitrine2 = {enVentes:null,enAttentes:null}
    vitrine3 = {enVentes:null,enAttentes:null}
    vitrine4 = {enVentes:null,enAttentes:null}
    slide1 = {enVentes:null,enAttentes:null}



    
    public menustock = [true, false, false, false, false];
    public arrivals = [true, false, false];
    public featured = [true, false, false];
    public femme = [true, false, false];
    public homme = [true, false, false];
    public elctronique = [true, false, false, false];

    constructor(private modalService: BsModalService,private managerservice:ManagerstockService,private http:HttpClient) {
            
    }

    ngOnInit() {
        this.listearticlesselectionner = {
            vuweb: this.listarticlesvuweb, frompv: this.listarticlesfrompv
        };

        this.managerservice.setArticle([1,1,1,1,1]).subscribe(
            data=>{  console.log('deleteArticle:'+ data)}
        );

        this.managerservice.deleteArticle([1,1,1,1,1]).subscribe(
            data=>{  console.log('deleteArticle:'+ data)}
        );

        this.managerservice.remplacerActicle([1,1,1,1,1]).subscribe(
            data=>{  console.log('remplacerActicle:'+ data)}
        );

        this.managerservice.acticlesVitrine1().subscribe(
            data => {
                this.ventes = data.response.pageprincipal;
                this.attentes   = data.response.touslesarticles;
                this.vitrine1.enVentes  = this.ventes;
                this.vitrine1.enAttentes =  this.attentes;
                for(let i = 0; i <  (this.ventes).length; i++){
                    let categorie = (this.ventes)[0].categorie;
                    (this.ventes)[0].categ =   (JSON.parse(categorie)).categorie;
                }

                for(let i = 0; i <  this.attentes.length; i++){
                    let categorie = (this.attentes)[0].categorie;
                    (this.attentes)[0].categ =  (JSON.parse(categorie)).categorie;
                }

                console.log(data);
            },
            error => {

            }
        );

        // this.vitrine1.enVentes = this.ventes;
        // this.vitrine1.enAttentes = this.attentes;
       
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template,{class: 'modal-lg'});
    }

    public menustockClick(option: number){
        this.menustock = this.menustock.map( x => false );
        this.menustock[option] = true;
    }

    public menu1stockClick(menu1: number, menu2: number){
        if(menu1 == 0){
            this.arrivals = this.arrivals.map( x => false );
            this.arrivals[menu2] = true;
        }
        if(menu1 == 1){
            this.featured = this.featured.map( x => false );
            this.featured[menu2] = true;
        }
        if(menu1 == 2){
            this.femme = this.femme.map( x => false );
            this.femme[menu2] = true;
        }
        if(menu1 == 4){
            this.homme = this.homme.map( x => false );
            this.homme[menu2] = true;
        }
        if(menu1 == 5){
            this.elctronique = this.elctronique.map( x => false );
            this.elctronique[menu2] = true;
        }
    }
    
    // Réccuprer le fichier
    uploadFile(event) {
        //fichier
        let fileList: FileList = event.target.files;
        //bar de progression
        this.progressBar = event.target.parentElement.parentElement.querySelector('.progress-bar');
        // Balise image de l'article
        let imgArticle = event.target.parentElement.parentElement.parentElement.parentElement.querySelector('img');
        // balise <a> pour le lien de téléchargement 
        let aTelecharger = event.target.parentElement.parentElement.parentElement.parentElement.querySelector('#telecharger');
        //si le fichier est choisie
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('file', file, file.name);
            this.upload(formData,imgArticle,aTelecharger);
        }
    }
      // upload du fichier 
    upload(file:any,img:any,tel){
        let url = this.src + 'index.php';
        const req = new HttpRequest('POST', url, file, {
            reportProgress: true,
        });
        
        this.http.request(req).subscribe(event => {
            // envoie de la requete et ecouter l'évenement télécharment 
            if (event.type === HttpEventType.UploadProgress) {
                // calcule du pourcentage de téléchargement 
                this.percentDone = Math.round(100 * event.loaded / event.total);
                console.log(`File is ${this.percentDone}% uploaded.`);
                //mise a jour de la bar de progréssion 
                this.progressBar.style.width= `${this.percentDone}%`;
            } else if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
                let data = event.body;
                let imgName = data['generatedName'];
                img.src= tel.href =  this.src + 'uploads/'+ imgName;
            }
           
        });
    }

    modifierArticle(event){
          let
          id,
          prix,
          image,
          point,
          categorie,
          designation,
          description;

          let target = event.target;
          let bodyModal = target.parentElement.parentElement.parentElement.parentElement;
          
          id         = (JSON.parse('{'+ target.id +'}')).id;
          image      = bodyModal.querySelector('#image').src;
          designation= bodyModal.querySelector('#designation').value;
          description= bodyModal.querySelector('#description').value;
          prix       = bodyModal.querySelector('#prix').value;
          categorie  = bodyModal.querySelector('#categorie').value;
    
        
          this.modifier.push({id: id, designation: designation, description: description, prix: prix,  categorie: categorie, image: image});
          console.log('Modification------------------------------------------------------------[OK]')
          console.log(this.modifier);

          this.modalRef.hide()
    }

    
   
    validerRemplacementActicle(event): void{
        if(this.remplacer != null){
            let target:any= event.target;
            let size =  this.remplacer.length;
            (this.remplacer)[size-1].vaRemplacer = JSON.parse('{'+ target.id +'}');
           this.permuterArticle(this.vitrine1.enVentes,this.vitrine1.enAttentes,(this.remplacer)[size-1].aRemplacer,(this.remplacer)[size-1].vaRemplacer);

           if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0)
                this.toutChanger = true;
            else
                this.toutChanger = false;

           console.log('rempacement------------------------------------------------------------[OK]');
           this.remplacerBool = false;
        }
    }

    remplacerArticle(event): void{

        let target = event.target;
        let size   =  this.remplacer.length;
        let obj    =  JSON.parse('{'+ target.id +'}');

        this.remplacer.push({aRemplacer: null , vaRemplacer: null});
        (this.remplacer)[size].aRemplacer = obj;
        this.remplacerBool = true;

        for(let i = 0 ; i < size ; i++)
            if((((this.remplacer)[i]).vaRemplacer).id == obj.id)
                 (this.remplacer).splice(i,1); 

        if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0)
            this.toutChanger = true;
        else
            this.toutChanger = false;

        console.log('rempacement------------------------------------------------------------[load]');
       
    }

    // annuler le remplacement des article
    annulerRemplacement($event): void{
        this.remplacer.splice();
        this.remplacerBool = false;
        
        if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0)
            this.toutChanger = true;
        else
            this.toutChanger = false;

            console.log('annulation------------------------------------------------------------[OK]');

    }

    // permiter deux articles
    permuterArticle (tableauArticle1:any, tableauArticle2:any, article1:any, article2:any) :void {
            
            let  pos1,pos2,size1,size2;

            size1  = tableauArticle1.length;
            size2  = tableauArticle2.length;

            for(let i = 0 ; i < size1 ; i++)
                    if(tableauArticle1[i].id == article1.id)
                        pos1 = i;
                        
            for(let i = 0 ; i < size2 ; i++)          
                    if(tableauArticle2[i].id == article2.id)
                        pos2 = i;   
                
            let inter =  tableauArticle1[pos1];
            tableauArticle1[pos1] = tableauArticle2[pos2];
            tableauArticle2[pos2] = inter;
            console.log('permutation------------------------------------------------------------[OK]');
    }

    // Suppréssion d'articles
    supprimerArticle($event) :void{
        let target:any= event.target;
        let obj =  JSON.parse('{'+ target.id +'}');
        this.supprimer.push(obj);
        
        if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0)
            this.toutChanger = true;
        else
            this.toutChanger = false;
        
        this.modalRef.hide()

    }

    toutChangerFunc (){
        // if(this.modifier.length != 0)
        //      //appel du service
        // if(this.supprimer.length != 0)
        //     //appel du service
        // if(this.remplacer.length != 0)
        //      //appel du service
        //     let service;

        
         
        this.remplacer = [];
        this.supprimer = [];
        this.modifier  = [];
    }

    toutAnnulerFunc(){
        this.remplacer = [];
        this.supprimer = [];
        this.modifier  = [];

        let vente = this.vitrine1.enVentes;
        let attentes = this.vitrine1.enAttentes;

        this.vitrine1.enVentes     = null;
        this.vitrine1.enAttentes   = null;
     
        this.vitrine1.enVentes = vente;
        this.vitrine1.enAttentes   = attentes;

        this.toutChanger = false;
    }

    ventesSuivant(){

    }

    ventesPrecedant(){
        
    }

    attentesSuivant(){
        
    }

    attentesPrecedant(){
        
    }
}
