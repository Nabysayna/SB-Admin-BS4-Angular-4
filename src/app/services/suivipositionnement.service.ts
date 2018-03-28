/**
 * Created by PC on 21/08/2017.
 */
import { Injectable }    from '@angular/core';
import {Http, Response, Headers} from "@angular/http";


@Injectable()
export class SuivipositionnementService {



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

    getComSuperviseurs(){
        let url = this.link+"/util/commercial-superviseur";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getDemandeDepotForCC(){
        let url = this.link+"/apifromsentool/listedemndedepositforcc";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getDemandeDepotEncoursForCC(){
        let url = this.link+"/apifromsentool/listedemndedepositencoursforcc";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getAllDemandeDepotEncours(){
        let url = this.link+"/apifromsentool/listealldemndedepositencours";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getDemandeDepotForCom(){
        let url = this.link+"/apifromsentool/listedemndedepositforcom";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getDemandeDepotEncoursForCom(){
        let url = this.link+"/apifromsentool/listedemndedepositencoursforcom";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    listcreditsuperviseur(){
        let url = this.link+"/apifromsentool/listcreditsuperviseur";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    affecterComForDepotForCC(data){
        let url = this.link+"/apifromsentool/affectercomfordepositforcc";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    confirmerAffectationDepotCom(data){
        let url = this.link+"/apifromsentool/confirmeraffectationdepotcom";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    validerRecuDepotCom(data){
        let url = this.link+"/apifromsentool/validerrecudepotcom";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    validerComForDepotCC(data){
        let url = this.link+"/apifromsentool/validercomfordepotcc";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    valideFaireUnDepotByCC(data){
        let url = this.link+"/apifromsentool/validefaireundepotbycc";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    valideFaireUnDepot(data){
        let url = this.link+"/apifromsentool/validefaireundepot";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    valideRecouvrementDepot(data){
        let url = this.link+"/apifromsentool/validerecouvrementdepot";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    validePositionnementDepot(data){
        let url = this.link+"/apifromsentool/validepositionnementdepot";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    validePayementDepot(data){
        let url = this.link+"/apifromsentool/validepayementdepot";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    valideVersementDepot(data){
        let url = this.link+"/apifromsentool/valideversementdepot";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    annulerDemandeDepot(data){
        let url = this.link+"/apifromsentool/annulerdemandedepot";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }


}
