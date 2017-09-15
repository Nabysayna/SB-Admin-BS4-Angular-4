import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "souszonesFilter"
})
export class SousZonesFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return row.sous_zone.toLowerCase().indexOf(query.toLowerCase())>-1 });
        }
        return array;
    }
}