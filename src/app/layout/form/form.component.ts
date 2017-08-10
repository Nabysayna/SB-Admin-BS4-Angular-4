import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
	fakevalues = true ;
	public isAdresseproprio=true;
	public isAdressepoint=true;
	public isUploadfile=true;
	public isSelect=true;

	public rating: any[];
    constructor() { }
    ngOnInit() {
    	this.rating.push({indice:0, checked:false});
    	this.rating.push({indice:1, checked:false});
    	this.rating.push({indice:2, checked:false});
    	this.rating.push({indice:3, checked:false});
    	this.rating.push({indice:4, checked:false});
    }


    enregistrerProspect(){}
}
