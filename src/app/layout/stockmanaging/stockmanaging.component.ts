import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-stockmanaging',
    templateUrl: 'stockmanaging.component.html',
    styleUrls: ['stockmanaging.component.scss'],
    animations: [routerTransition()],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockmanagingComponent implements OnInit {

    @Input() listeacrticles: any;
    public listarticlesvuweb:any[] = [];
    public listarticlesfrompv:any[] = [];
    public listarticlesretirer:any[] = [];
    public listarticlesrajouter:any[] = [];
    public listarticlescomparer:any[] = [];

    public article:any;
    closeResult: string;

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
        this.listarticlesvuweb = this.listeacrticles.vuweb.map(function(type) {
            return { id:type.id, designation:type.designation, nomImg:type.nomImg, value:type.id, checked:false };
        });
        this.listarticlesfrompv = this.listeacrticles.frompv.map(function(type) {
            return { id:type.id, designation:type.designation, description:type.description,
                nomImg:type.nomImg, value:type.id, checked:false
            };
        });
        this.listarticlescomparer = this.listarticlesfrompv;
    }

    get selectedOptionsvuweb():any {
        return this.listarticlesvuweb.filter(opt => opt.checked).map(opt => opt.value);
    };
    public updateCheckedOptionsvuweb(): void{
        this.listarticlesretirer = this.listarticlesvuweb.filter(opt => opt.checked);
    }

    get selectedOptionsfrompv():any {
        return this.listarticlesfrompv.filter(opt => opt.checked).map(opt => opt.value);
    };
    public updateCheckedOptionsfrompv(): void{
        this.listarticlesrajouter = this.listarticlesfrompv.filter(opt => opt.checked);
        this.listarticlescomparer = this.listarticlesfrompv.filter(opt => !opt.checked);
    }

    open(content, article) {
        this.article = article;
        this.modalService.open(content, {size: 'lg'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    public getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    public validmodifarticle(){
        console.log('validmodifarticle');
    }

    public validarcticleafficher(){
        console.log('validarcticleafficher');
    }
}
