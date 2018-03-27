/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterSuiviDemandepositHistorique"
})
export class DataFilterAdminadministratifSuivipositionnementHistoriquePipe implements PipeTransform {
    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (
                row.datedemande.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.telephone.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.etatpositionnement.toLowerCase().indexOf(query.toLowerCase())>-1
            ) });
        }
        return array;
    }
}
