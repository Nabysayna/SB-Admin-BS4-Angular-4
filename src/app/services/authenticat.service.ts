/**
 * Created by PC on 21/08/2017.
 */
import { Injectable }    from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthenticatService {

    public baseToken: string;
    public email: string;
    public accessLevel: number;
    public authorizedApis: string;


    constructor(private _http: Http){}

    postLogin(login, pwd){
        let url = "http://localhost:8888/SB-Admin-BS4-Angular-4/authenticat/login";
        let datas = JSON.stringify({login:login, pwd:pwd});
        let params = 'params='+datas;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(url, params, {headers:headers})
            .map(res => res.json());
    }

    logout(): void {
        sessionStorage.removeItem('isLoggedin');
    }

}
