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

    ngOnInit() {}

    coordonneesgeospatiales(){
        if(navigator.geolocation){
            console.log("YES!") ;
            navigator.geolocation.getCurrentPosition(function(position){
                console.log("Latitude "+position.coords.latitude);
                console.log("Longitude "+position.coords.longitude);
                sessionStorage.setItem('position',JSON.stringify(position)) ;
            }) ;
        }
    }


    enregistrerProspect(){}
}
