/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterSentoolByCC"
})
export class DataFilterPointSentoolByCCPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{
                return  (row.date_ajout.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.nom_boutique.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.fullname.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.telephone.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                    row.fullname_commercial.toLowerCase().indexOf(query.toLowerCase())>-1

                ) });
        }
        return array;
    }
}

