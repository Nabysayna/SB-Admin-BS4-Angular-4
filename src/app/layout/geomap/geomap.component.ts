import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.css']
})
export class GeomapComponent implements OnInit {

  @Input() macarte: any;

  title: string = 'My first AGM project';
  lat: number = 14.762589983648722;
  lng: number = -17.44974915234375;
  zoom: number = 12;

  constructor() { }

  ngOnInit() {
    // console.log(this.macarte)
    this.title = this.macarte.libellepoint;
    this.lat = this.macarte.latitude;
    this.lng = this.macarte.longitude;
  }
  
}
