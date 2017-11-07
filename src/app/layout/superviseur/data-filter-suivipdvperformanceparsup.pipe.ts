import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterSuivipdvperformanceparsup"
})
export class DataFilterSuivipdvperformanceparsupPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (row.adminpdv.toLowerCase().indexOf(query.toLowerCase())>-1 || row.telephone.toLocaleString().indexOf(query.toLowerCase())>-1 || row.recette.toLocaleString().indexOf(query.toLowerCase())>-1 ) });
        }
        return array;
    }
}
