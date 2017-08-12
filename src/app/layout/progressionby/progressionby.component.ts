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
 
  	public constructor() {}

  	ngOnInit() {
  	 	let type;
	    if (this.dynamic < 25) {
	      type = 'success';
	    } else if (this.dynamic < 50) {
	      type = 'info';
	    } else if (this.dynamic < 75) {
	      type = 'warning';
	    } else {
	      type = 'danger';
	    }
	    this.type = type;
  	}

}