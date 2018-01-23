/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterAdminadministratifPDVCRMINCOM"
})
export class DataFilterAdminadministratifPDVCRMINCOMPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (
                row.date_ajout.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.libellepoint.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.fullname_proprietaire.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.fullname_gerant.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.telephone_gerant.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                row.email_gerant.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1
            ) });
        }
        return array;
    }
}
