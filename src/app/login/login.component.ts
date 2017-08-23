import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    name="";
    password="";
    infos = true;
    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    onLoggedin() {

        console.log("name : "+this.name) ;

        if(this.name=="directeur" && this.password=="directeur"){
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('titre', 'Directeur');
            this.router.navigate(['/dashboard']);
        }else

        if(this.name=="diretu" && this.password=="diretu"){
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('titre', 'Directeur des études');
            this.router.navigate(['/dashboard']);
        }else

        if(this.name=="daf" && this.password=="daf"){
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('titre', 'Directeur Adm. et Fin.');
            this.router.navigate(['/dashboard']);
        }else

        if(this.name=="csi" && this.password=="csi"){
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('titre', 'Chargée de la Sco. et des Ins.');
            this.router.navigate(['/dashboard']);
        }else

        if(this.name=="compta" && this.password=="compta"){
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('titre', 'Comptable');
            this.router.navigate(['/dashboard']);
        }else
            this.infos = false ;
    }

}
