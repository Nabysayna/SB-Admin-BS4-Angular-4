/**
 * Created by PC on 22/08/2017.
 */
import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import {Observable} from 'rxjs/Observable';



@Injectable()
export class NewclientService {

    private link = "http://localhost:8888/SB-Admin-BS4-Angular-4";


    constructor(private _http: Http){}

    getZoneActivite(){
        let url = this.link+"/util/zone-activite";
        return this._http.get(url)
            .map(res => res.json());
    }

    insertPoint(data:any){
        let url = this.link+"/client/insertpoint";
        let datas = JSON.stringify(data);
        let params = 'params='+datas;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(url, params, {headers:headers})
            .map(res => res.json());
    }



}
