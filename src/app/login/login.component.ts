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

    public userName = ''  ;
    public userPwd  = '' ;
    public fakevalues : boolean ;
    public data:any;

    constructor(public router: Router, private _authenticatService: AuthenticatService) {
    }

    ngOnInit() {
        this.fakevalues = true;
        this._authenticatService.logout();
    }

    public wantLogin(){
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
            () => console.log('access')
        );

    }

    public accesslevel(access: any){
        if ( !access){
            this.fakevalues = false;
        }
        else if ( access.match(12) ){
            this.router.navigate(['/livreur']);
        }
        else if ( access.match(11) ){
            this.router.navigate(['/adminsupport']);
        }
        else if ( access.match(10) ){
            this.router.navigate(['/comptable']);
        }
        else if ( access.match(9) ){
            this.router.navigate(['/marketingcom']);
        }
        else if ( access.match(8) ){
            this.router.navigate(['/managerstock']);
        }
        else if ( access.match(7) ){
            this.router.navigate(['/adminecom']);
        }
        else if ( access.match(6) ){
            this.router.navigate(['/administratif']);
        }
        else if ( access.match(5) ){
            this.router.navigate(['/dashboard']);
        }
        else if ( access.match(4) ){
            this.router.navigate(['/superviseur']);
        }
        else if ( access.match(3) ){
            this.router.navigate(['/admincom']);
        }
        else if ( access.match(2) ){
            this.router.navigate(['/adminadministratif']);
        }
        else if ( access.match(1) ){
            this.router.navigate(['/manager']);
        }
        else {
            this.fakevalues = false;
        }
    }

}
