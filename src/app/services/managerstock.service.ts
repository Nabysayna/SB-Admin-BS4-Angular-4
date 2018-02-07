import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";


@Injectable()
export class ManagerstockService {

   //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
    private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://localhost/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "https://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";

    private headers:Headers;

    ventes = [
      {
          id:1,
          designation: 'mangue',
          description:'je suis une magues',
          prix: 9000,
          telephone: 77455455,
          point: 'champ de mangues',
          img: ''
       },
       {
          id:2,
          designation: 'banannes',
          description:'je suis une bannanes',
          prix: 9000,
          telephone: 77455455,
          point: 'champ bannanes',
          img: ''
       }
  ];
  attentes = [
      {
          id:1,
          designation: 'moutton',
          description:'je suis un mouton',
          prix: 9000,
          telephone: 77455455,
          point: 'Troupeau de mouton',
          img: ''
       },
       {
          id:2,
          designation: 'chévre',
          description:'je suis une chévre',
          prix: 9000,
          telephone: 77455455,
          point: 'Troupeau de chévres',
          img: ''
       }
  ];
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

    acticles(){
        let url = this.link+"/managerStock/acticles";
        return this._http.get(url)
            .map(res => res.json());
    }

    acticlesVitrine1(){
        let url = this.link+"/managerStock/acticlesVitrine1";
        return this._http.get(url)
            .map(res => res.json());
    }

    acticlesVitrine2(){
        let url = this.link+"/managerStock/acticlesVitrine2";
        return this._http.get(url)
            .map(res => res.json());
    }

    acticlesVitrine3(){
        let url = this.link+"/managerStock/acticlesVitrine3";
        return this._http.get(url)
            .map(res => res.json());
    }

    acticlesVitrine4(){
        let url = this.link+"/managerStock/acticlesVitrine4";
        return this._http.get(url)
            .map(res => res.json());
    }

    acticlesVitrine5(){
        let url = this.link+"/managerStock/acticlesVitrine5";
        return this._http.get(url)
            .map(res => res.json());
    }


    remplacerActicle(dataTable){
        let url = this.link+"/managerStock/remplacerArticle";
        let datas = JSON.stringify({articles:dataTable});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    setArticle(dataTable){
        let url = this.link+"/managerStock/setArticle";
        let datas = JSON.stringify({articles:dataTable});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    deleteArticle(dataTable){
        let url = this.link+"/managerStock/deleteArticle";
        let datas = JSON.stringify({articles:dataTable});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }
}
