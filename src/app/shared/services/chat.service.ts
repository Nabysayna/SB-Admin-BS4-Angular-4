import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { MsgComponent } from '../components/msg/msg.component';


@Injectable()
export class ChatService {

  
  private headers = new Headers();
  private msgObj = new MsgComponent;
  private link = 'http://localhost/backend-SB-Admin-BS4-Angular-4/index.php';
  constructor(private _http: Http) {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded'); 
  }


  getMsg (){
  	let url = this.link+"/chatroombbs/selectmsg";
  	  return this._http.get(url)
             .map((res:Response) => res.json()); 
  }

  
  setMsg(data:any){
        let url = this.link+"/chatroombbs/insertmsg";
        let datas = JSON.stringify({data:data,pseudo:"adama"});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers}).map(res => res.json());
    }

}
