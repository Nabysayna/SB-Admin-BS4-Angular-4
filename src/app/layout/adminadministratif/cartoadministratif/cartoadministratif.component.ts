import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {UtilService} from "../../../services/util.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ApiPlatformService} from "../../../services/apiplateform.service";


@Component({
    selector: 'app-cartoadministratif',
    templateUrl: 'cartoadministratif.component.html',
    styleUrls: ['cartoadministratif.component.scss'],
    providers:[UtilService, ApiPlatformService]
})
export class CartoadministratifComponent implements OnInit {

    public loading_data:boolean = true;
    public menuHead = {menuHead1:true, menuHead2:false};
    title: string = '12';
    test:number = 100000;
    centercartelat: number = 14.497401;
    centercartelng: number = -14.452361999999994;
    //lat: number = 14.762589983648722;
    //lng: number = -17.44974915234375;
    centercartezoom: number = 7;

    constructor(private _apiPlatformService:ApiPlatformService, private modalService: NgbModal,){}

    ngOnInit() {
        this.loading_data = false;
        setInterval(() => {
            this.title = this.tocurrency(this.test++);
        }, 1000);
    }

    ngOnDestroy() {   }

    tocurrency(number){
        return Number(number).toLocaleString();
    }

    public menuHeadClick(option: number){
        this.loading_data = true;
        if(option == 1){
            this.menuHead.menuHead1 = true;
            this.menuHead.menuHead2 = false;
            this.loading_data = false;
        }
        if(option == 2){
            this.menuHead.menuHead1 = false;
            this.menuHead.menuHead2 = true;
            this.loading_data = false;
        }
    }



}
