import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataAdminAdministratifSuiviFilter"
})
export class DataAdminAdministratifSuiviFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (row.administratif.toLowerCase().indexOf(query.toLowerCase())>-1 ) });
        }
        return array;
    }
}