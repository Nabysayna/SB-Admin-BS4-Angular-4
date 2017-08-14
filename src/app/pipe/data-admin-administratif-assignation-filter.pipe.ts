import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataAdminAdministratifAssignationFilter"
})
export class DataAdminAdministratifAssignationFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (row.superviseur.toLowerCase().indexOf(query.toLowerCase())>-1 ) });
        }
        return array;
    }
}