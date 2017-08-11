import { Injectable }    from '@angular/core';
import { Http, Response } from "@angular/http";
import {Observable} from 'rxjs/Observable';



@Injectable()
export class BackendService {

  constructor(private _http: Http){}

  getListUsers(){
    return this._http.get("http://localhost/backoffice/controlleur.php")
      .map(res => res.json());
  }
  
  getObservableUsers(): Observable<any>{
    return this._http
      .get("http://localhost/backoffice/controlleur.php")
      .map((response: Response) => <any> response.json())
      .do(data => console.log(data));
  }
  
}
