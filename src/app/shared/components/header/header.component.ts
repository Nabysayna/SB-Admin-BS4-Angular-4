import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from '../../services/Chat.Service';

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
        //this.chatInitVar();
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
    public msg   : string;
    public msgsRe: any;


    sendMsgPress(keyCode){
        if(keyCode == 13){
           this.sendMsg()
        }
    }


    sendMsg(){
         this.chatService.setMsg(this.msg).subscribe(data => console.log(data));
         this.msg = '';
    }

    chatShow (){
        $('.panel-default').toggleClass('chat-hidden').toggleClass('chat-visible');    
    }
    
    recive(){
        //alert('salut');
        this.chatService.getMsg().subscribe(data => this.msgsRe =  data);   

    }

   
    // Bip a la reçeption d'un message

   mySoNiceSound(s){
        let e=document.createElement('audio');
        e.setAttribute('src',s);
        e.play();
   }
/*
 
    nouveauMsgFunction(){

           if(this.nouveauMsgNumTitle == 1)
                this.nouveauMsgNumTitle = 0;
            else
                this.nouveauMsgNumTitle++;
          document.title = this.nouveauMsgTitles[this.nouveauMsgNumTitle];
    }
*/
    chating (){
        setInterval( () => {
            console.log('intervalle')
            this.recive();
         },
        2000);  
       
    }

}
