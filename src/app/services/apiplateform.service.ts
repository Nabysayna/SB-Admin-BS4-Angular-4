/**
 * Created by PC on 21/08/2017.
 */
import { Injectable }    from '@angular/core';
import {Http, Headers} from "@angular/http";


@Injectable()
export class ApiPlatformService {



    //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
    private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";

    private headers = new Headers();
    private basetoken:any;

    constructor(private _http: Http){
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
    }

    souscrireSentool(data:any){
        let url = this.link+"/apiplatform/souscriresentool";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getperformancessupperviseurclasserbydate(data:any){
        let url = this.link+"/apiplatform/getperformanceadminpdvbydate";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getperformancessupperviseurclasserbydatebySup(data:any){
        let url = this.link+"/apiplatform/getperformanceadminpdvbydatebyadmin";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getperformancessupperviseurclasserbydatebylot(data:any){
        let url = this.link+"/apiplatform/getperformanceadminpdvbydatebylot";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointsdeployeModifyAdresse(){
        let url = this.link+"/apiplatform/getpointsdeployemodifyadresse";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    validModifyAdressePoint(data:any){
        let url = this.link+"/apiplatform/validmodifyadressepoint";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getReclamationsNonResolu(){
        let url = this.link+"/apiplatform/getreclamationsnonresolu";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    validReclamationsNonResolu(data:any){
        let url = this.link+"/apiplatform/validreclamationsnonresolu";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getEtatdepositbylotbysup(){
        let url = this.link+"/apiplatform/etatdepositbylotbysup";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getDetailEtatdepositbylotbysup(data:any){
        let url = this.link+"/apiplatform/detailetatdepositbylotbysup";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }



}
