/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterAdminadministratifSuivipositionnement"
})
export class DataFilterAdminadministratifSuivipositionnementPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{ return  (
                row.dateeffectif.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.positionne_by.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.etatposit.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.telephone.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.montant.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.etatpayement.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.etatversement.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                row.recouvre_by.toLowerCase().indexOf(query.toLowerCase())>-1
            ) });
        }
        return array;
    }
}
