import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-prospect-pdv',
    templateUrl: './prospect-pdv.component.html',
    styleUrls: ['./prospect-pdv.component.scss'],
    animations: [routerTransition()]
})
export class ProspectPdvComponent implements OnInit {
	
    @Input() infoprospect: any;

	private isinfo:any = {isinfopoint:Boolean, isinfoproprietaire:Boolean, isinfocomplement:Boolean};
    constructor() { }

    ngOnInit() {
        this.isinfo.isinfopoint=true;
        this.isinfo.isinfoproprietaire=false;
        this.isinfo.isinfocomplement=false;
    }


    enregistrerProspect(){}

    options = [
        {name:"Transfert d'argent", value:'1', checked:false},
        {name:"Vente cosmetique", value:'2', checked:false},
        {name:"Maintenance", value:'3', checked:false}
    ];

    get selectedOptions() {
        return this.options
        .filter(opt => opt.checked)
        .map(opt => opt.value)
    };

    private updateCheckedOptions(): void{
        console.log(this.selectedOptions);
    }

    public x: number = 5;
    public y: number = 2; 
    public ratingStates: any = [
        {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
        {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart'},
        {stateOff: 'glyphicon-off'}
    ];

    public max: number = 10;
  public rate: number = 7;
  public isReadonly: boolean = true;


}
