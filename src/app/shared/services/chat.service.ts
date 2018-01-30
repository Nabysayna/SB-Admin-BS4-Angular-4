import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { MsgComponent } from '../components/msg/msg.component';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ChatService {

  
  private headers = new Headers();
  private msgObj = new MsgComponent;
  private link = 'http://localhost/backend-SB-Admin-BS4-Angular-4/index.php';
  private basetoken:any; //info sur l'user courant 

  constructor(private _http: Http) {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded'); 
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
  }


  getMsg (){
  	    let url = this.link+"/chatroombbs/selectmsg";
  	    let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers}).map(res => res.json());
  }

  
  setMsg(data){
        let url = this.link+"/chatroombbs/insertmsg";
        let datas = JSON.stringify({data:data,token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers}).map(res => res.json());
    }

  getUsers(){
      let url = this.link+"/chatroombbs/selectUsers";
      return this._http.get(url)
            .map(res => res.json());
  }

  getMyInfo(){
      let url = this.link+"/chatroombbs/selectMyinfo";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers}).map(res => res.json());
  }

}
