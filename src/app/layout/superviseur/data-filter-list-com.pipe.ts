import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterListeCom"
})
export class DataFilterListeComPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (row.fullname.toLowerCase().indexOf(query.toLowerCase())>-1 || row.telephone.toLocaleString().indexOf(query.toLowerCase())>-1 || row.email.toLowerCase().indexOf(query.toLowerCase())>-1 ) });
        }
        return array;
    }
}
