import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterListesuivipoint"
})
export class DataFilterListesuivipointPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (
                row.date_ajout.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.tel.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.nom_point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.gerant.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.cautiondebase.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                row.caution.toLocaleString().indexOf(query.toLowerCase())>-1
            )});
        }
        return array;
    }
}
