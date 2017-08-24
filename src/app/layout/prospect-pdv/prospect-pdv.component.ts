import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BackendService } from '../../backend.service';


@Component({
    selector: 'app-prospect-pdv',
    templateUrl: './prospect-pdv.component.html',
    styleUrls: ['./prospect-pdv.component.scss'],
    animations: [routerTransition()],
    providers:[BackendService]
})
export class ProspectPdvComponent implements OnInit {

    isSelect = true ;
	
    @Input() infoprospect: any;

    constructor(private _backendService: BackendService) { }

    ngOnInit() {
        // this._backendService.getListUsers()
        //     .subscribe(
        //         data => console.log(data),
        //         error => alert(error),
        //         () => console.log("Finished")
        //     );
    }


    isinfo = {isinfopoint:true, isinfoproprietaire:false, isinfocomplement:false};
    rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];
    options = [
        {name:"Transfert d'argent", value:'1', checked:false},
        {name:"Vente cosmetique", value:'2', checked:false},
        {name:"Maintenance", value:'3', checked:false}
    ];

    private avoter(index:number): void{
        if(  ( index + 1 == this.rating.length ) && ( this.rating[index].checked == true) ) {
            this.rating[index].checked = false;
        }
        else {
            for (var i = 0; i<this.rating.length; i++) {
                if(i < index) {
                    this.rating[i].checked = true;
                }
                else if(i == index) {
                    if(this.rating[i].checked == true){ 
                        this.rating[i].checked = false;
                    }
                    else {
                        this.rating[i].checked = true;
                    }
                }
                else {
                    this.rating[i].checked = false;
                }
            }
        }
    }

    public asurvoler(index: number){
        console.log(index);
    }

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
