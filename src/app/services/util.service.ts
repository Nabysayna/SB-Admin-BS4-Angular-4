import { Injectable }    from '@angular/core';
import {Http, Response, Headers} from "@angular/http";


@Injectable()
export class UtilService {



    //private link:string = "http://127.0.0.1/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4/index.php";
    //private link = "http://localhost/backend-SB-Admin-BS4-Angular-4/index.php";
    private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";

    private headers = new Headers();
    private basetoken:any;

    constructor(private _http: Http){
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
    }

    getAdministratifs(){
        let url = this.link+"/user/administratif";
        return this._http.get(url)
            .map(res => res.json());
    }

    getRecouvreurs(){
        let url = this.link+"/util/getrecouvreurs";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPersonForRecouvrement(){
        let url = this.link+"/util/getpersonforrecouvrement";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getSuperviseurs(){
        let url = this.link+"/user/superviseur";
        return this._http.get(url)
            .map(res => res.json());
    }

    getCommerciaux(){
        let url = this.link+"/user/commercial";
        return this._http.get(url)
            .map(res => res.json());
    }

    getZones(){
        let url = this.link+"/util/zone";
        return this._http.get(url)
            .map(res => res.json());
    }

    getSouszones(){
        let url = this.link+"/util/souszone";
        return this._http.get(url)
            .map(res => res.json());
    }

    getServices(){
        let url = this.link+"/util/service";
        return this._http.get(url)
            .map(res => res.json());
    }

    getActivites(){
        let url = this.link+"/util/activite";
        return this._http.get(url)
            .map(res => res.json());
    }

    getSouszoneByZoneByRegion(data:any){
        let url = this.link+"/util/souszonebyzonebyregion";
        let datas = JSON.stringify(data);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getSouszoneByZone(zone:string){
        let url = this.link+"/util/souszone";
        let datas = JSON.stringify({zone:zone});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getZoneByRegion(region:string){
        let url = this.link+"/util/zone";
        let datas = JSON.stringify({region:region});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointByRegion(region:string){
        let url = this.link+"/client/pointbyregion";
        let datas = JSON.stringify({region:region});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointByZone(zone:string){
        let url = this.link+"/client/pointbyzone";
        let datas = JSON.stringify({zone:zone});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointBySouszone(souszone:string){
        let url = this.link+"/client/pointbysouszone";
        let datas = JSON.stringify({souszone:souszone});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointByCommercial(){
        let url = this.link+"/client/getpointscommercial";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointsInfosIncomplets(){
        let url = this.link+"/client/getpointsinfosincomplets";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }
    getCommerciauxBySuperviseur(){
        let url = this.link+"/user/commercial";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res =>res.json());
    }

    getProspectValide(){
        let url = this.link+"/client/getprospects";
           let datas = JSON.stringify({token:this.basetoken});
           let param='param='+datas;
        return this._http.post(url, param ,{headers:this.headers})
            .map(res => res.json());
    }

    getClients(){
        let url = this.link+"/client/getclient";
           let datas = JSON.stringify({token:this.basetoken});
           let param='param='+datas;
        return this._http.post(url, param ,{headers:this.headers})
            .map(res => res.json());
    }

    getlistsDeposit(){
        let url = this.link+"/client/getlistDeposit";
           let datas = JSON.stringify({token:this.basetoken});
           let param='param='+datas;
        return this._http.post(url, param ,{headers:this.headers})
            .map(res => res.json());
    }

    validerDepositcc(){
        let url = this.link+"/client/validerDepositcc";
           let datas = JSON.stringify({token:this.basetoken});
           let param='param='+datas;
        return this._http.post(url, param ,{headers:this.headers})
            .map(res => res.json());
    }

    alertdepositcc(){
         let url = this.link+"/client/alertdepositcc";
           let datas = JSON.stringify({token:this.basetoken});
           let param='param='+datas;
        return this._http.post(url, param ,{headers:this.headers})
            .map(res => res.json());
    }

    getlistsDepositcc(){
        let url = this.link+"/client/getlistDepositcc";
           let datas = JSON.stringify({token:this.basetoken});
           let param='param='+datas;
        return this._http.post(url, param ,{headers:this.headers})
            .map(res => res.json());
    }

    getAdresseByPoint(data:any){
        let url = this.link+"/client/adressepdv";
        let datas = JSON.stringify(data);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getAllDataPoint(data:any){
        let url = this.link+"/client/alldata";
        let datas = JSON.stringify(data);
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getRegionsSuperviseurs(){
        let url = this.link+"/util/region-superviseur";
        return this._http.get(url)
            .map(res => res.json());
    }

    getZoneActivite(){
        let url = this.link+"/util/zone-activite";
        return this._http.get(url)
            .map(res => res.json());
    }

    getRegion(){
        let url = this.link+"/util/region";
        return this._http.get(url)
            .map(res => res.json());
    }

    getRegionActivite(){
        let url = this.link+"/util/region-activite";
        return this._http.get(url)
            .map(res => res.json());
    }

    getRegionZoneActivite(){
        let url = this.link+"/util/region-zone-activite";
        return this._http.get(url)
            .map(res => res.json());
    }

    ajoutCommercial(data:any){
        let url = this.link+"/user/ajoutcommercial";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    ajoutSuperviseur(data:any){
        let url = this.link+"/user/ajoutsuperviseur";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    insertPoint(data:any){
        let url = this.link+"/client/insertpoint";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    modifPoint(data:any){
        let url = this.link+"/client/modifpoint";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    affectationCommercial(data:any){
        let url = this.link+"/util/affectationcommercial";
        let datas = JSON.stringify({token:this.basetoken, data:data});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getNouveauxpoints(){
        let url = this.link+"/client/getnouveauxpoints";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointscrm(){
        let url = this.link+"/client/getpointscrm";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers}).map(res => res.json());
    }

    getPointssentool(){
        let url = this.link+"/client/getpointssentool";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers}).map(res => res.json());
    }

    getAdminCCSuiviPoints(){
        let url = this.link+"/client/getadminccsuivipoints";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getEncienpoints(){
        let url = this.link+"/client/getencienpoints";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointsdeploye(){
        let url = this.link+"/client/getpointsdeploye";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointsdeployeByCC(){
        let url = this.link+"/client/getpointsdeployebycc";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getDashboardNbres(){
        let url = this.link+"/util/dashboardnbres";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getComSuperviseurs(){
        let url = this.link+"/util/commercial-superviseur";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getPointssouscritBBS(){
        let url = this.link+"/client/getpointssouscritbbs";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }

    getAdmincomsuiviPP(){
        let url = this.link+"/client/getadmincomsuivipp";
        let datas = JSON.stringify({token:this.basetoken});
        let params = 'params='+datas;
        return this._http.post(url, params, {headers:this.headers})
            .map(res => res.json());
    }



}
