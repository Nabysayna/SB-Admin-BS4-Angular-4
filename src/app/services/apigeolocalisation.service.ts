import { Injectable }    from '@angular/core';
import {Http, Response, Headers} from "@angular/http";


@Injectable()
export class ApiGeoLocService {



    //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
    private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://localhost/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";

    private headers = new Headers();
    private basetoken:any;

    constructor(private _http: Http){
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
    }

    listpointssentool(){
        let url = this.link+"/apicartographie/listpointssentool";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers}).map(res => res.json());
    }


}
