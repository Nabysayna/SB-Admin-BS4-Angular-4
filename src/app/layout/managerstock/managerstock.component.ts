import { Component, OnInit,TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ManagerstockService } from 'app/services/managerstock.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

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
     providers: [UtilService,
                 AssignationSuiviService,
                 ManagerstockService,
                 { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
                ],
})
export class ManagerstockComponent implements OnInit {

    public data:any[] = [];
    modalRef: BsModalRef;
    public listearticlesselectionner:any;

    src = 'http://51.254.200.129/backendprod/EsquisseBackEnd/server-backend-upload/';
    public percentDone:number = 0;
    progressBar:any;

    // inbformation sur
    modifier:any  = [];
    remplacer:any= [];
    supprimer:any =  [];
    rejetter:any  = [];
    valider:any   = [];
    remplacerBool = false;
    toutChanger = false;
    cursor ={ventes:4, attentes:0}
    ventes = [];
    attentes = [];
    requestInload = {ventes: true, attentes:true };
    vitrineTarget = 'vitrine1'
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

    vitrine = {enVentes:[],enAttentes:[]};
    vitrine1 = {enVentes:[],enAttentes:[]};
    vitrine2 = {enVentes: [],enAttentes: []};
    vitrine3 = {enVentes: [],enAttentes: []};
    vitrine4 = {enVentes: [],enAttentes: []};
    slide1 = [
            {id:1,imgLink:'../../../assets/images/linux.jpg',designation: 'mangue',description: 'je suis dans un champ de mangue',prix:50,categorie: 'fruits' },
            {id:2,imgLink:'../../../assets/images/verte.jpg',designation: 'mangue',description: 'je suis dans un champ de mangue',prix:50,categorie: 'fruits' },
            {id:3,imgLink:'../../../assets/images/arbre.jpg',designation: 'mangue',description: 'je suis dans un champ de mangue',prix:50,categorie: 'fruits' },
    ];

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



        this.articles(this.vitrineTarget);

        // this.vitrine.enVentes = this.ventes;
        // this.vitrine.enAttentes = this.attentes;

    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template,{class: 'modal-lg'});
    }

    openModalSlide(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template,{class: 'modal-lg'});
    }

    openModalRejetter(template: TemplateRef<any>){
          this.modalRef.hide();
          this.modalRef = this.modalService.show(template,{class: 'modal-lg'});
    }

    public menustockClick(option: number){
        this.menustock = this.menustock.map( x => false );
        this.menustock[option] = true;
        switch(option){
            case 0:
                  this.ongletCliked('vitrine1');
                  break;
            case 1:
                  this.ongletCliked ('vitrine2');
                  break;
            case 2:
                  this.ongletCliked ("vitrine3");
                  break;
            case 3:
                  this.ongletCliked ("vitrine4");
                  break;
            case 4:
                  this.ongletCliked ("slide1");
                  break;
            case 5:
                  this.ongletCliked ("slide2");
                  break;
        }
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
          obj,
          img,
          prix,
          image,
          point,
          table,
          categorie,
          designation,
          description;

          let target = event.target;
          let bodyModal = target.parentElement.parentElement.parentElement.parentElement;
          obj = JSON.parse('{'+ target.id +'}');
          categorie  = bodyModal.querySelector('#categorie').value;
          obj.categorie.categorie = categorie;
          console.log(obj);

          id         = obj.id;
          img      =   (bodyModal.querySelector('#image').src).split('/');
          designation= bodyModal.querySelector('#designation').value;
          description= bodyModal.querySelector('#description').value;
          prix       = bodyModal.querySelector('#prix').value;
          categorie  = JSON.stringify(obj.categorie);
          table      = obj.table;

          image = img[img.length - 1];

          this.modifier.push({id: id, designation: designation, description: description, prix: prix,  categorie: categorie, image: image,table: table});
          console.log('Modification------------------------------------------------------------[OK]')
          console.log(this.modifier);

          if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
               this.toutChanger = true;
           else
               this.toutChanger = false;

          this.modalRef.hide()
    }

    rejetterArticle(event,messageRejet){
          let
          id,
          obj,
          idUser,
          message,
          target,
          designation;

          target = event.target;

          obj = JSON.parse('{'+ target.id +'}');


          id       = obj.id;
          idUser   = obj.idUser;
          message  = messageRejet.value;
          designation = obj.designation;

          for(let i = 0 ; i < this.rejetter.length; i++){
                if( (this.rejetter[i]).id == obj.id )
                     (this.rejetter).splice(i,1);
          }

          this.rejetter.push({id: id, idUser: idUser,message:message ,designation:designation});

          console.log(obj);
          console.log('Rejet------------------------------------------------------------[add]')
          console.log(this.rejetter);

          if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
               this.toutChanger = true;
           else
               this.toutChanger = false;

          this.modalRef.hide()
    }

    validerArticle(event){
          let
          obj,
          target;

          target = event.target;

          obj = JSON.parse('{'+ target.id +'}');

          for(let i = 0 ; i < this.valider.length; i++){
                if( (this.valider[i]).id == obj.id )
                     (this.valider).splice(i,1);
          }

          this.valider.push(obj);
          console.log(obj);
          console.log('Valider article------------------------------------------------------------[add]')
          console.log(this.valider);



          if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
               this.toutChanger = true;
           else
               this.toutChanger = false;

          this.modalRef.hide()
    }

    validerRemplacementActicle(event): void{
        if(this.remplacer != null){
            let target:any= event.target;
            let size =  this.remplacer.length;
            (this.remplacer)[size-1].vaRemplacer = JSON.parse('{'+ target.id +'}');
           this.permuterArticle(this.vitrine.enVentes,this.vitrine.enAttentes,(this.remplacer)[size-1].aRemplacer,(this.remplacer)[size-1].vaRemplacer);

           if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
                this.toutChanger = true;
            else
                this.toutChanger = false;

           console.log(this.remplacer);
           console.log('rempacement------------------------------------------------------------[OK]');
          this.remplacerBool =  false;
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

        console.log('rempacement------------------------------------------------------------[load]');

    }

    // annuler le remplacement des article
    annulerRemplacement($event): void{
        this.remplacer.splice();
        this.remplacerBool = false;

        if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
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
            console.log('permutation------------------------------------------------------------[add]');
    }

    // Suppréssion d'articles
    supprimerArticle($event) :void{
        let target:any= event.target;
        let obj =  JSON.parse('{'+ target.id +'}');
        this.supprimer.push(obj);

        if(this.remplacer.length != 0 || this.supprimer.length != 0 || this.modifier.length != 0 || this.rejetter.length != 0 || this.valider.length != 0)
            this.toutChanger = true;
        else
            this.toutChanger = false;

        console.log(this.supprimer);
        this.modalRef.hide()

    }

    toutChangerFunc (){
       let reponse = false;

        if(this.remplacer.length != 0)
            this.managerservice.remplacerArticles(this.remplacer).subscribe(
              data => {
                    if(data.response.Remplacer == 'true'){
                           alert('Remplacer avec success');
                           this.articles(this.vitrineTarget);
                    }

              });
        if(this.supprimer.length != 0)
            this.managerservice.supprimerArticles(this.supprimer).subscribe(
            data => {
                    if(data.response.Supprimer == 'true'){
                           alert('Supprimer avec success');
                           this.articles(this.vitrineTarget);
                    }

        });
        if(this.modifier.length != 0)
            this.managerservice.modifierArticles(this.modifier).subscribe(
            data => {
                      if(data.response.Modifier == 'true'){
                             alert('Modifier avec success');
                             this.articles(this.vitrineTarget);
                      }

        });

        if(this.rejetter.length != 0)
            this.managerservice.rejetterArticles(this.rejetter).subscribe(
             data => {
                      console.log(data );
                      if(data.response.Rejetter == 'true'){
                             alert('Rejetter avec success');
                             this.articles(this.vitrineTarget);
                      }
        });

        if(this.valider.length != 0)
            this.managerservice.validerArticles(this.valider).subscribe(
             data => {
                      if(data.response.Valider == 'true'){
                             alert('Valider avec success');
                             this.articles(this.vitrineTarget);
                      }
        });

        this.remplacer = [];
        this.supprimer = [];
        this.modifier  = [];
        this.valider   = [];
        this.rejetter  = [];

        this.toutChanger = false;
    }

    toutAnnulerFunc(){
        this.remplacer = [];
        this.supprimer = [];
        this.modifier  = [];

        this.vitrine.enVentes = this.ventes;

        this.vitrine.enAttentes   = this.attentes;

        this.toutChanger = false;
    }

    ongletCliked (menu){
        let id = menu;
        this.articles(id);
        this.vitrineTarget = id;
    }

    ventesSuivant(){

        this.vitrine.enVentes = [];

        if((this.ventes).length == this.cursor.ventes){
              this.requestInload.ventes   = true;
            let idVentes = parseInt((this.ventes)[this.cursor.ventes - 1].id);
            let idAttentes = parseInt((this.attentes)[this.cursor.attentes - 1].id);
            this.managerservice.acticles(this.vitrineTarget,{idVentes:idVentes, idAttentes:idAttentes}).subscribe(
                data => {
                      this.requestInload.ventes   = false;
                      if((data.response.pageprincipal).length != 0){
                          for(let i = 0; i <  (data.response.pageprincipal).length; i++){
                              let categorie = (data.response.pageprincipal)[0].categorie;
                              (data.response.pageprincipal)[0].categ =   (JSON.parse(categorie)).categorie;
                          }

                          for(let i = 0; i <  (data.response.touslesarticles).length; i++){
                              let categorie = (data.response.touslesarticles)[0].categorie;
                              (data.response.touslesarticles)[0].categ =  (JSON.parse(categorie)).categorie;
                          }

                          this.ventes = this.ventes.concat(data.response.pageprincipal);
                          this.attentes = this.attentes.concat(data.response.touslesarticles);

                          if((this.cursor.ventes + 4)> this.ventes.length ){
                              for(let i = this.cursor.ventes; i < this.ventes.length; i++)
                                  (this.vitrine.enVentes).push(this.ventes[i]);
                              this.cursor.ventes = this.ventes.length;
                          }

                          else{
                              for(let i = this.cursor.ventes; i < (this.cursor.ventes + 4); i++)
                                  (this.vitrine.enVentes).push(this.ventes[i]);
                              this.cursor.ventes += 4;
                          }
                    }
                }

            );
        }

        if((this.ventes).length < 4){
            this.vitrine.enVentes = this.ventes;
            this.cursor.ventes = (this.ventes).length;
        }
        else if((this.cursor.ventes + 4)> this.ventes.length ){
            for(let i = this.cursor.ventes; i < this.ventes.length; i++)
                (this.vitrine.enVentes).push(this.ventes[i]);
            this.cursor.ventes = this.ventes.length;
        }

        else{
            for(let i = this.cursor.ventes; i < (this.cursor.ventes + 4); i++)
                (this.vitrine.enVentes).push(this.ventes[i]);
            this.cursor.ventes += 4;
        }
    }

    ventesPrecedant(){
        this.vitrine.enVentes = [];
        if((this.ventes).length < 4){
            this.vitrine.enVentes = this.ventes;
            this.cursor.ventes = (this.ventes).length;
        }
        else if((this.cursor.ventes - 4) < 0 ){
            for(let i = 0 ; i < 4; i++)
                (this.vitrine.enVentes).push(this.ventes[i]);
            this.cursor.ventes = 4;
        }
        else{
            for(let i = this.cursor.ventes - 4; i < (this.cursor.ventes); i++)
                (this.vitrine.enVentes).push(this.ventes[i]);
            this.cursor.ventes -= 4;
        }
    }

    attentesSuivant(){
        this.vitrine.enAttentes = [];
        if((this.attentes).length == this.cursor.attentes){
            this.requestInload.attentes = true;
            let idVentes = (this.ventes)[this.ventes.length - 1].id;
            let idAttentes = (this.attentes)[this.attentes.length - 1].id;
            this.managerservice.acticles(this.vitrineTarget,{idVentes:idVentes, idAttentes:idAttentes}).subscribe(
                data => {
                      this.requestInload.attentes = false;
                      if((data.response.touslesarticles).length != 0){
                          for(let i = 0; i <  (data.response.pageprincipal).length; i++){
                              let categorie = (data.response.pageprincipal)[0].categorie;
                              (data.response.pageprincipal)[0].categ =   (JSON.parse(categorie)).categorie;
                          }

                          for(let i = 0; i <  (data.response.touslesarticles).length; i++){
                              let categorie = (data.response.touslesarticles)[0].categorie;
                              (data.response.touslesarticles)[0].categ =  (JSON.parse(categorie)).categorie;
                          }
                          this.ventes = this.ventes.concat(data.response.pageprincipal);
                          this.attentes = this.attentes.concat(data.response.touslesarticles);

                          if(this.cursor.attentes + 6 > this.attentes.length ){
                              for(let i = this.cursor.attentes; i < this.attentes.length; i++)
                                  (this.vitrine.enAttentes).push(this.attentes[i]);
                              this.cursor.attentes = this.attentes.length;
                          }

                          else{
                              for(let i = this.cursor.attentes; i < (this.cursor.attentes + 6); i++)
                                  (this.vitrine.enAttentes).push(this.attentes[i]);
                              this.cursor.attentes += 6;
                          }

                          console.log(data);
                    }
                }

            );
        }

        else if((this.attentes).length < 6){
            this.vitrine.enAttentes= this.attentes;
            this.cursor.attentes = (this.attentes).length;
        }
        else if(this.cursor.attentes + 6 > this.attentes.length ){
            for(let i = this.cursor.attentes; i < this.attentes.length; i++)
                (this.vitrine.enAttentes).push(this.attentes[i]);
            this.cursor.attentes = this.attentes.length;
        }

        else{
            for(let i = this.cursor.attentes; i < (this.cursor.attentes + 6); i++)
                (this.vitrine.enAttentes).push(this.attentes[i]);
            this.cursor.attentes += 6;
        }
    }

    attentesPrecedant(){
        this.vitrine.enAttentes = [];
        if((this.attentes).length < 6){
            this.vitrine.enAttentes= this.attentes;
            this.cursor.attentes = (this.attentes).length;
        }
        else if((this.cursor.attentes - 6) < 0 ){
            for(let i = 0 ; i < 6; i++)
                (this.vitrine.enAttentes).push(this.attentes[i]);
            this.cursor.attentes = 6;
        }
        else{
            for(let i = this.cursor.attentes - 6; i < (this.cursor.attentes); i++)
                (this.vitrine.enAttentes).push(this.attentes[i]);
            this.cursor.attentes -= 6;
        }
    }

    articles (vitrine){
          this.cursor.ventes = 0;
          this.cursor.attentes = 0;
          this.ventes = [];
          this.attentes = [];
          this.vitrine.enVentes  = [];
          this.vitrine.enAttentes =  [];
          this.requestInload.attentes = true;
          this.requestInload.ventes   = true;
          this.managerservice.acticles(vitrine,{idVentes:0, idAttentes:0}).subscribe(
              data => {
                  this.requestInload.attentes = false;
                  this.requestInload.ventes   = false;
                  for(let i = 0; i <  (data.response.pageprincipal).length; i++){
                      let categorie = (data.response.pageprincipal)[0].categorie;
                      (data.response.pageprincipal)[0].categ =   (JSON.parse(categorie)).categorie;
                  }

                  for(let i = 0; i <  (data.response.touslesarticles).length; i++){
                      let categorie = (data.response.touslesarticles)[0].categorie;
                      (data.response.touslesarticles)[0].categ =  (JSON.parse(categorie)).categorie;
                  }

                  this.ventes = this.ventes.concat(data.response.pageprincipal);
                  this.attentes = this.attentes.concat(data.response.touslesarticles);

                  this.vitrine.enVentes  = [];
                  this.vitrine.enAttentes =  [];

                  if((this.ventes).length < 4){
                      this.vitrine.enVentes = this.ventes;
                      this.cursor.ventes = (this.vitrine.enVentes).length;
                  }
                  else{
                      for(let i = this.cursor.attentes; i < (this.cursor.attentes + 4); i++)
                          (this.vitrine.enVentes).push(this.ventes[i]);
                      this.cursor.ventes += 4;
                  }

                  if((this.attentes).length < 6){
                      this.vitrine.enAttentes = this.attentes;
                      this.cursor.attentes = (this.vitrine.enAttentes).length;
                  }
                  else{
                      for(let i = this.cursor.attentes; i < (this.cursor.attentes + 6); i++)
                          (this.vitrine.enAttentes).push(this.attentes[i]);
                      this.cursor.attentes += 6;
                  }

                  console.log(data);
              },
              error => {

              }
          );
    }
    lastId(table) :number{
        return table[table.length - 1]['id'];
    }
}
