import { Component, OnInit, Input } from '@angular/core';
import {UtilService} from "../../services/util.service";

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.css'],
  providers:[UtilService]
})
export class GeomapComponent implements OnInit {

  @Input() macarte: any;

  title: string = 'BBS INVEST first AGM project';
  lat: number = 14.762589983648722;
  lng: number = -17.44974915234375;
  zoom: number = 13;
  adresse_point:any = {zonepoint:'',souszonepoint:'',adressepoint:'',codepostalpoint:14,geospatialpoint:{latitude:14.7625731,longitude:-17.4497353}};
  adresse_proprietaire:any = {zoneproprietaire:"Grand Dakar",souszoneproprietaire:"Colobane",adresseproprietaire:"KLHLKG",codepostalproprietaire:29089,geospatialproprietaire:{latitude:14.7625731,longitude:-17.4497353}};

  constructor(private _utilService: UtilService) { }

  ngOnInit() {
      this._utilService.getAdresseByPoint(this.macarte.id_point)
          .subscribe(
              data => {
                  console.log(data);
                  this.adresse_point = JSON.parse(data.adresse_point);
                  this.adresse_proprietaire = JSON.parse(data.adresse_proprietaire);
              },
              error => alert(error),
              () => console.log("adresse point data")
          );
  }

}
