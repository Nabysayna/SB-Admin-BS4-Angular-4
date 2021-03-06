import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterContact"
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (
                row.libellepoint.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.date_ajout.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.fullname_proprietaire.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.email_gerant.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1
                )}
            );
        }
        return array;
    }
}
