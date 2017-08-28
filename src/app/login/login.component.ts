import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthenticatService} from "../services/authenticat.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers:[AuthenticatService],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {

    private userName = ''  ;
    private userPwd  = '' ;
    private fakevalues : boolean ;
    private data:any;

    constructor(public router: Router, private _authenticatService: AuthenticatService) {
    }

    ngOnInit() {
        this.fakevalues = true;
        this._authenticatService.logout();
    }

    private wantLogin(){
        this._authenticatService.postLogin(this.userName, this.userPwd)
        .subscribe(
            data => {
                if(data.codeerror) {
                    sessionStorage.setItem('currentUser', JSON.stringify({ username: this.userName, basetoken: data.message.basetoken, accesslevel:data.message.accesslevel}));
                    this.accesslevel(data.message.accesslevel);
                }
                else {
                    this.fakevalues = false
                }
            },
            error => alert(error),
            () => console.log(this.data)
        );

    }

    private accesslevel(access: any){
        if ( !access){
            this.fakevalues = false;
        }
        else if ( access.match(5) ){
            this.router.navigate(['/dashboard']);
        }
        else if ( access.match(4) ){
            this.router.navigate(['/superviseur']);
        }
        else if ( access.match(6) ){
            this.router.navigate(['/administratif']);
        }
        else if ( access.match(2) ){
            this.router.navigate(['/adminadministratif']);
        }
        else if ( access.match(3) ){
            this.router.navigate(['/admincom']);
        }
        else {
            this.fakevalues = false;
            console.log(typeof access);
        }
    }

}
