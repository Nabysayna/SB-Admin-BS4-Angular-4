/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterSuiviDemandepositcc"
})
export class DataFilterSuiviDemandepositccPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (
                row.datedemande.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.recouvre_by.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.telephone.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.montantdemande.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                row.etatpositionnement.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.etatpayement.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.etatversement.toLowerCase().indexOf(query.toLowerCase())>-1
            ) });
        }
        return array;
    }
}
