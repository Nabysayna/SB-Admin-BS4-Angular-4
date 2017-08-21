/**
 * Created by PC on 21/08/2017.
 */
import { Injectable }    from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UtilService {


    constructor(private _http: Http){}

    getZones(){
        let url = "http://localhost/backend-SB-Admin-BS4-Angular-4/util/zone";
        return this._http.get(url)
            .map(res => res.json());
    }

    getSouszones(){
        let url = "http://localhost/backend-SB-Admin-BS4-Angular-4/util/souszone";
        return this._http.get(url)
            .map(res => res.json());
    }

    getSouszoneByZone(zone:string){
        let url = "http://localhost/backend-SB-Admin-BS4-Angular-4/util/souszone";
        let datas = JSON.stringify({zone:zone});
        let params = 'params='+datas;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(url, params, {headers:headers})
            .map(res => res.json());
    }

}
