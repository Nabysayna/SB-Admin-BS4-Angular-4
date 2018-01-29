/**
 * Created by PC on 04/10/2017.
 */import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterfilterQueryReclamationsnonresolu"
})
export class DataFilterfilterQueryReclamationsnonresoluPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>{
                return  (row.date_reclamation.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.nomservice.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.nom_point.toLowerCase().indexOf(query.toLowerCase())>-1 ||
                    row.telephone.toLocaleString().indexOf(query.toLowerCase())>-1 ||
                    row.name_caissier.toLowerCase().indexOf(query.toLowerCase())>-1
                ) });
        }
        return array;
    }
}
