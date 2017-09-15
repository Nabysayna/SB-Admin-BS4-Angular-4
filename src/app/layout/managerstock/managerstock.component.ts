import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UtilService} from "../../services/util.service";
import {AssignationSuiviService} from "../../services/assignation-suivi.service";

@Component({
    selector: 'app-managerstock',
    templateUrl: 'managerstock.component.html',
    styleUrls: ['managerstock.component.scss'],
    providers:[UtilService, AssignationSuiviService],
})
export class ManagerstockComponent implements OnInit {

    public data:any[] = [];

    public listearticlesselectionner:any;

    public listarticlesvuweb = [
        {id: 1, designation:'web 1', nomImg: 'bb.jpg'},
        {id: 2, designation:'web 2', nomImg: 'mc.jpg'},
        {id: 3, designation:'web 3', nomImg: 'bbb.jpg'},
        {id: 4, designation:'web 4', nomImg: 'fs.jpg'},
        {id: 5, designation:'web 5', nomImg: 'bbb.jpg'},
    ];
    public listarticlesfrompv = [
        {id: 1, designation:'as', description:'test 1', nomImg: 'bfa.jpg'},
        {id: 2, designation:'az', description:'test 1', nomImg: 'hs.jpg'},
        {id: 3, designation:'ae', description:'test 1', nomImg: 'nf.jpg'},
        {id: 4, designation:'ar', description:'test 1', nomImg: 'n.jpg'},
        {id: 5, designation:'at', description:'test 1', nomImg: 'bea.jpg'},
        {id: 6, designation:'ay', description:'test 1', nomImg: 'bha.jpg'},
    ];


    public menustock = [true, false, false, false, false];
    public arrivals = [true, false, false];
    public featured = [true, false, false];
    public femme = [true, false, false];
    public homme = [true, false, false];
    public elctronique = [true, false, false, false];

    constructor() { }

    ngOnInit() {
        this.listearticlesselectionner = {
            vuweb: this.listarticlesvuweb, frompv: this.listarticlesfrompv
        };

    }

    public menustockClick(option: number){
        this.menustock = this.menustock.map( x => false );
        this.menustock[option] = true;
    }

    public menu1stockClick(menu1: number, menu2: number){
        if(menu1 == 0){
            this.arrivals = this.arrivals.map( x => false );
            this.arrivals[menu2] = true;
        }
        if(menu1 == 1){
            this.featured = this.featured.map( x => false );
            this.featured[menu2] = true;
        }
        if(menu1 == 2){
            this.femme = this.femme.map( x => false );
            this.femme[menu2] = true;
        }
        if(menu1 == 4){
            this.homme = this.homme.map( x => false );
            this.homme[menu2] = true;
        }
        if(menu1 == 5){
            this.elctronique = this.elctronique.map( x => false );
            this.elctronique[menu2] = true;
        }
    }




}
