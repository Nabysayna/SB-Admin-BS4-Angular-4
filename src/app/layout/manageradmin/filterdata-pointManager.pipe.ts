/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterPointManager"
})
export class DataFilterPointManagerPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{
                return  (
                    row.date_ajout.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.region_point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.zone_point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.souszone_point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.adresse_point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase())>-1
                ) });
        }
        return array;
    }
}


