/**
 * Created by PC on 21/08/2017.
 */
import { Injectable }    from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UtilService {

    private link = "http://localhost/backend-SB-Admin-BS4-Angular-4";
    constructor(private _http: Http){}

    getAdmincommerciaux(){
        let url = this.link+"/user/admincommercial";
        return this._http.get(url)
            .map(res => res.json());
    }

    getAdminadministratifs(){
        let url = this.link+"/user/adminadministratif";
        return this._http.get(url)
            .map(res => res.json());
    }

    getAdministratifs(){
        let url = this.link+"/user/administratif";
        return this._http.get(url)
            .map(res => res.json());
    }

    getSuperviseurs(){
        let url = this.link+"/user/superviseur";
        return this._http.get(url)
            .map(res => res.json());
    }

    getCommerciaux(){
        let url = this.link+"/user/commercial";
        return this._http.get(url)
            .map(res => res.json());
    }

    getZones(){
        let url = this.link+"/util/zone";
        return this._http.get(url)
            .map(res => res.json());
    }

    getSouszones(){
        let url = this.link+"/util/souszone";
        return this._http.get(url)
            .map(res => res.json());
    }

    getSouszoneByZone(zone:string){
        let url = this.link+"/util/souszone";
        let datas = JSON.stringify({zone:zone});
        let params = 'params='+datas;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(url, params, {headers:headers})
            .map(res => res.json());
    }

    getServices(){
        let url = this.link+"/util/service";
        return this._http.get(url)
            .map(res => res.json());
    }

    getActivites(){
        let url = this.link+"/util/activite";
        return this._http.get(url)
            .map(res => res.json());
    }





}
