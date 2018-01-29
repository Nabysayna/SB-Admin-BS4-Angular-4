import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterSuiviAssignCom"
})
export class DataFilterSuiviAssignComPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (row.libellepoint.toLowerCase().indexOf(query.toLowerCase())>-1 || row.fullname.toLowerCase().indexOf(query.toLowerCase())>-1 || row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1 || row.telephone.toLocaleString().indexOf(query.toLowerCase())>-1 ) });
        }
        return array;
    }
}
