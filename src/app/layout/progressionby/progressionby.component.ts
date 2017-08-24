import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-progressionby',
  templateUrl: './progressionby.component.html',
  styleUrls: ['./progressionby.component.scss']
})

export class ProgressionbyComponent implements OnInit  {

    @Input() max: number;
    @Input() dynamic: number;
    
    private notes: number;
 
    public constructor() {}

    ngOnInit() {
      this.notes = (this.dynamic * 100) / this.max;
    }

}