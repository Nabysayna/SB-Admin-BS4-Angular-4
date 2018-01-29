/**
 * Created by PC on 21/08/2017.
 */
import { Injectable }    from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AssignationSuiviService {

   //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
    private link = "http://localhost/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";

    
    private headers = new Headers();
    private basetoken:any;

    constructor(private _http: Http){
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
    }

    assignationsuperviseur(data:any){
        let url = this.link+"/assignation/superviseur";
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

    assignationcommercial(data:any){
        let url = this.link+"/assignation/commercial";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getAssignationsBySuperviseur(){
        let url = this.link+"/assignation/getassignersuperviseur";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getAssignationsByCommercial(){
        let url = this.link+"/assignation/getassignercommercial";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    listsuiviforsuperviseur(){
        let url = this.link+"/suivi/listsuiviforsuperviseur";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    listsuiviarelancerforsuperviseur(){
        let url = this.link+"/suivi/listsuiviarelancerforsuperviseur";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    ajoutsuivifromsuperviseur(data:any){
        let url = this.link+"/suivi/ajoutsuivifromsuperviseur";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getSuperviseursForPerformance(){
        let url = this.link+"/suivi/getsuperviseursforperformance";
        let datas = JSON.stringify({token:this.basetoken});

        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getSuperviseursForPerformancetest(){
        let url = this.link+"/suivi/getsuperviseursforperformancetest";
        let datas = JSON.stringify({token:this.basetoken});

        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getCommerciauxForPerformance(){
        let url = this.link+"/suivi/getcommerciauxforperformance";
        let datas = JSON.stringify({token:this.basetoken});

        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }


}
