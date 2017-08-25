/**
 * Created by PC on 22/08/2017.
 */
import { Injectable }    from '@angular/core';
import { Http, Response } from "@angular/http";
import {Observable} from 'rxjs/Observable';



@Injectable()
export class NewclientService {

    private link = "http://localhost:8888/backend-SB-Admin-BS4-Angular-4";

    constructor(private _http: Http){}

    getZoneActivite(){
        let url = this.link+"/util/zone-activite";
        return this._http.get(url)
            .map(res => res.json());
    }


}
