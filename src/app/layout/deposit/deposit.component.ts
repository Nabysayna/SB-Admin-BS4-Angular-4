import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {UtilService} from "../../services/util.service";
import {Router} from "@angular/router";
import {ApiPlatformService} from "../../services/apiplateform.service";

@Component({
    selector: 'app-deposit',
    templateUrl: 'deposit.component.html',
    styleUrls: ['deposit.component.scss'],
    animations: [routerTransition()],
    providers: [UtilService, ApiPlatformService]
})

export class DepositComponent{
	//public deposits=[{'client':'naby','montant':'100000'},{'client':'ndiago','montant':'52000000'}];
	public deposits:any;
	public err=false;
	public resul=false;
	constructor(private _utilService:UtilService){this.listDeposit();}
	
	listDeposit(){
        
        this._utilService.getlistsDeposit()
            .subscribe(
                data => {
                    console.log(data);
                    if(data==''){
                     this.err=true;
                    }
                    else{
						this.deposits=data;
						this.resul=true;
					}
                },
                error => alert(error),
                () => console.log('souscrireSentool')
            );
    }
}
