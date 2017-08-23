import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-progressionby',
  templateUrl: './progressionby.component.html',
  styleUrls: ['./progressionby.component.scss']
})

export class ProgressionbyComponent implements OnInit  {

  	@Input() max: number;
  	@Input() dynamic: number;
  	@Input() type: string;
 	
 	dynamicLength : string ;

  	public constructor() {}

  	ngOnInit() {
  	 	let type;
	    if (this.dynamic > 75) {
	      type = 'success';
	    } else if (this.dynamic > 50) {
	      type = 'info';
	    } else if (this.dynamic > 25) {
	      type = 'warning';
	    } else {
	      type = 'danger';
	    }
	    this.type = type;

	    this.dynamicLength = (this.dynamic*100).toString()+'%' ;
  	}

}