/**
 * Created by PC on 22/08/2017.
 */
import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import {Observable} from 'rxjs/Observable';



@Injectable()
export class NewclientService {


    private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4-1/index.php";
    //private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";
    private headers = new Headers();
    private basetoken:any;

    constructor(private _http: Http){
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
    }

    getZoneActivite(){
        let url = this.link+"/util/zone-activite";
        return this._http.get(url)
            .map(res => res.json());
    }

    insertPoint(data:any){
        let url = this.link+"/client/insertpoint";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    modifPoint(data:any){
        let url = this.link+"/suivi/modifpointandajoutsuivi";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }



}
