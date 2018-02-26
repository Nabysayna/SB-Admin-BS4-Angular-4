import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";


@Injectable()

export class ManagerstockService {

   //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
    private link = "http://localhost/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "https://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";

    private headers:Headers;

    constructor(private _http: Http) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    getTest(){
      let url = this.link+"/managerStock/test";
      let datas = JSON.stringify({login:'login', pwd:'pwd'});
      let params = 'params='+datas;
      return this._http.post(url, params, {headers:this.headers})
          .map(res => res.json());
    }

    acticles(methode:string , params: any){

        if(methode === "vitrine1")
                return this.acticlesVitrine1(params);
        if(methode === "vitrine2")
                 return this.acticlesVitrine2(params);
        if(methode === "vitrine3")
                 return this.acticlesVitrine3(params);
        if(methode === "vitrine4")
                 return this.acticlesVitrine4(params);
        if(methode === "slide1")
                 return this.acticlesVitrine1(params);
        if(methode === "slide2")
                return this.acticlesVitrine1(params);
    }

    acticlesVitrine1(ids:any){

        let url = this.link+"/managerStock/acticlesVitrine1";
        let datas = JSON.stringify(ids);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    acticlesVitrine2(ids:any){
        let url = this.link+"/managerStock/acticlesVitrine2";
        let datas = JSON.stringify(ids);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    acticlesVitrine3(ids:any){
        let url = this.link+"/managerStock/acticlesVitrine3";
        let datas = JSON.stringify(ids);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    acticlesVitrine4(ids:any){
        let url = this.link+"/managerStock/acticlesVitrine4";
        let datas = JSON.stringify(ids);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    slide1 (){
        let url = this.link+"/managerStock/acticlesSlide1";
        let datas = JSON.stringify({});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json())
    }
    slide2 (){
        let url = this.link+"/managerStock/acticlesSlide1";
        let datas = JSON.stringify({});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json())
    }
    remplacerArticles(dataTable){
        let url = this.link+"/managerStock/remplacerArticles";
        let datas = JSON.stringify(dataTable);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    modifierArticles(dataTable){
        let url = this.link+"/managerStock/modifierArticles";
        let datas = JSON.stringify(dataTable);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    supprimerArticles(dataTable){
        let url = this.link+"/managerStock/supprimerArticles";
        let datas = JSON.stringify(dataTable);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }
}
