/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterAdminadministratifEtat"
})
export class DataFilterAdminadministratifEtatPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (
                row.date_update.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.superviseur.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.telephone.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                row.montantactuel.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                row.last_deposit.toLocaleString().indexOf(query.toLowerCase())>-1
            ) });
        }
        return array;
    }
}
