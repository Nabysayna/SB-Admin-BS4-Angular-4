import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from '../../services/chat.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    currentUsername:any;

    constructor(private translate: TranslateService, public router: Router,private chatService: ChatService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.currentUsername = JSON.parse(sessionStorage.getItem('currentUser')).username;
        console.log(this.currentUsername);
        this.msgsRe.length = 0;
        this.allUsers();
        this.myInfo();
        this.chating();
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }



  //variables d'envoi de de reception de données
    public msg    : string;
    public msgsRe: any = {};
    public users  : any;
    public usersAl: any;
    public him    : any;
    public my     : any;
    private boo = true;
    public  windowsTab :any = [];

    public rigth : any =  15;
    public  chatWindows : any = new Array();

    sendMsgPress(keyCode){
        if(keyCode == 13){
           this.sendMsg();
        }
    }


    sendMsg(){
         this.chatService.setMsg({message:this.msg,id: this.him.id}).subscribe(data =>  {console.log(data)});
         this.msg = '';
    }

    chatShow (){
        $('.panel-default').toggleClass('chat-hidden').toggleClass('chat-visible');
        return false;
    }

    chatShowThisWindow(event){
          let target = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
          let b:boolean = false;

          let id:string    = (target.querySelector('div:first-child')).id;
          let obj  = JSON.parse('{'+ id +'}');
          (this.chatWindows).splice(this.chatWindows.indexOf(obj),1);
          return false;
    }
    usersShow(){
        $('.onlineUser-body').toggleClass('chat-hidden').toggleClass('chat-visible');
    }

    recive(){

        this.chatService.getMsg().subscribe(data =>  {
           let  panel = document.getElementById('panel-body');
           let  b :boolean = false;

           if(this.msgsRe.length != data[0].length )
                this.boo = !this.boo;
           else
                this.boo = this.boo = false;

            for (let i:number = 0; i  <  data[0].length; i++) {
                 let recep : any;
                 let obj   : any;

                 data[0][i].recepteurs = JSON.parse( data[0][i].recepteurs);
                 data[0][i].expediteur = JSON.parse( data[0][i].expediteur);
            }

            if(this.boo){
              this.msgsRe.messages =  data[0];
              this.msgsRe.length   =  data[0].length;
              this.mySoNiceSound('../../.../assets/beep.mp3');
            }



        });
    }

    allUsers(){
         this.chatService.getUsers().subscribe(data =>  {
             this.users   = data;
             this.usersAl = this.users;
         });
    }

    userIdFunc (event){
        let b:boolean           = false;
        let className:string    = (event.target as Element).className;
        let elementclass:string = '{'+ className +'}';
        let obj:any             = JSON.parse(elementclass);
       //obj.rigth = this.rigth + 15;
        this.him = obj;
        let j:number = 0;
        for( ; j < (this.chatWindows).length ; j++){
            if(this.chatWindows[j].id == obj.id ) b = true;
        }

        if(!b) {
          if(this.chatWindows.length == 3)
                 this.chatWindows.splice(0,1);
          this.chatWindows.push(obj);
        }
        else  this.chatWindows.splice(j,1);

        return false;
    }

    myInfo (){
           this.chatService.getMyInfo().subscribe(data =>  {this.my = data});
    }
    // Bip a la reçeption d'un message



   findUsers(event){

        this.users = [];
        let text = event.target.value;
        for(let user of this.usersAl){
           if((user.prenom).toLowerCase().indexOf(text.toLowerCase()) == 0)
           {
               this.users.push(user);
           }
        }

        if(text.length == 0)
             this.users = this.usersAl;
   }


    mySoNiceSound(s){
        let e=document.createElement('audio');
        e.setAttribute('src',s);
        e.play();
    }

    positionDroite(){
        this.rigth += 20;
   }
 
    chating (){
        setInterval( () => {
            console.log('intervalle')
            this.recive();
         },
        2000);

   }

   focussed(event){
       let target = event.target;
       alert(target.id);
       target.querySelector('#chatEdit').focus();
   }

}
