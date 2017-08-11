import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "souszonesAdminFilter"
})
export class SousZonesAdminFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return row.sous_zone.toLowerCase().indexOf(query.toLowerCase())>-1 });
        }
        return array;
    }
}