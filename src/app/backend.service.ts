import { Injectable }    from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class BackendService {

  constructor(private _http: Http){}

  getListUsers(){
    return this._http.get("http://localhost/backoffice/controlleur.php")
      .map(res => res.json());
  }
  
  
}
