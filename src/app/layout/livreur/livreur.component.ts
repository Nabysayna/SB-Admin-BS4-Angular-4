import { Component, OnInit, OnDestroy  } from '@angular/core';


@Component({
  selector: 'app-livreur',
  templateUrl: 'livreur.component.html',
  styleUrls: ['livreur.component.scss']

})

export class LivreurComponent implements OnInit, OnDestroy {

    public staticAlertClosed: boolean = false;
    public loading_data = true;

    public menuHead = {menuHead1:true, menuHead2:false};



    constructor(){ }

  	ngOnInit(){ }

    ngOnDestroy(){ }


    public menuHeadClick(option: number){
        this.loading_data = true;
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
        }
    }


}
