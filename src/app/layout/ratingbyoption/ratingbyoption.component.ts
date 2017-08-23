import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-ratingbyoption',
  templateUrl: './ratingbyoption.component.html',
  styleUrls: ['./ratingbyoption.component.scss']
})

export class RatingbyoptionComponent implements OnInit  {

    @Input() rate:number = 1;
  	@Input() ratingstatic: boolean = true;
  	rating = [
        {indice:0, checked:false},
        {indice:1, checked:false},
        {indice:2, checked:false},
        {indice:3, checked:false},
        {indice:4, checked:false},
    ];

    public constructor() {}

  	ngOnInit() {
  		this.avoter(this.rate)
  	}


    private avoter(index:number): void{

        for (var i = 0; i<this.rating.length; i++) {
            if(i <= index) {
                this.rating[i].checked = true;
            }
            else {
                this.rating[i].checked = false;
            }
        }
    }

}
