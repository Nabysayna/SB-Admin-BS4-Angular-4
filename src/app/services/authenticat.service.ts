/**
 * Created by PC on 21/08/2017.
 */
import { Injectable }    from '@angular/core';
import {Http, Headers} from "@angular/http";


@Injectable()
export class AuthenticatService {


      //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
    private link = "http://localhost/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";

    private headers:Headers;

    constructor(private _http: Http){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }


    postLogin(login, pwd){
        let url = this.link+"/authenticat/login";
        let datas = JSON.stringify({login:login, pwd:pwd});
        let params = 'params='+datas;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(url, params, {headers:headers})
            .map(res => res.json());
    }

    logout(): void {
        sessionStorage.removeItem('isLoggedin');
        sessionStorage.removeItem('currentUser');
    }

}
