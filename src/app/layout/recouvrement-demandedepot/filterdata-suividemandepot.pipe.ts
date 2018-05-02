/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterSuiviDemandeposit"
})
export class DataFilterSuiviDemandepositPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (
                row.datedemande.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.recouvre_by.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.cc.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.telephone.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.montantdemande.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                row.etatpositionnement.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                row.etatpayement.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                row.etatversement.toLocaleString().indexOf(query.toLowerCase())>-1
            ) });
        }
        return array;
    }
}
