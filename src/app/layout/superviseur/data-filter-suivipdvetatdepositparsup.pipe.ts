import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterSuivipdvetatdepositparsup"
})
export class DataFilterSuivipdvetatdepositparsupPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (row.name_adminpdv.toLowerCase().indexOf(query.toLowerCase())>-1 || row.date_last_modif.toLowerCase().indexOf(query.toLowerCase())>-1 || row.telephone.toLocaleString().indexOf(query.toLowerCase())>-1 || row.cautiondebase.toLocaleString().indexOf(query.toLowerCase())>-1 || row.caution.toLocaleString().indexOf(query.toLowerCase())>-1 ) });
        }
        return array;
    }
}
