/**
 * Created by PC on 21/08/2017.
 */
import { Injectable }    from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UtilService {

    private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";
    private headers = new Headers();
    private basetoken:any;

    constructor(private _http: Http){
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
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


    getSouszoneByZone(zone:string){
        let url = this.link+"/util/souszone";
        let datas = JSON.stringify({zone:zone});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointBySouszone(souszone:string){
        let url = this.link+"/client/pointbysouszone";
        let datas = JSON.stringify({souszone:souszone});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getCommerciauxBySuperviseur(){
        let url = this.link+"/user/commercial";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getAdresseByPoint(data:any){
        let url = this.link+"/client/adressepdv";
        let datas = JSON.stringify(data);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getAllDataPoint(data:any){
        let url = this.link+"/client/alldata";
        let datas = JSON.stringify(data);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
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



}
