/**
 * Created by PC on 21/08/2017.
 */
import { Injectable }    from '@angular/core';
import {Http, Headers} from "@angular/http";


@Injectable()
export class ApiCommandeService {



    //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
    private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://localhost/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "https://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";



    private headers = new Headers();
    private basetoken:any;

    constructor(private _http: Http){
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
    }


    getListCommandeALivrerByDate(data:any){
        let url = this.link+"/apicommande/getlistcommandealivrerbydate";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getListCommandeARecupererByDate(data:any){
        let url = this.link+"/apicommande/getlistcommandearecupererbydate";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    validerListCommandeAssigner(data:any){
        let url = this.link+"/apicommande/validerlistcommandeassigner";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }






}
