/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterCommercial"
})
export class DataFilterCommercialPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (row.fullname.toLowerCase().indexOf(query.toLowerCase())>-1 || row.email.toLowerCase().indexOf(query.toLowerCase())>-1 ) });
        }
        return array;
    }
}

