/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterComptableBilan"
})
export class DataFilterComptableBilanPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (
                row.date_update.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.superviseur.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.telephone.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.montant.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.maj_by.toLowerCase().indexOf(query.toLowerCase())>-1
            ) });
        }
        return array;
    }
}
