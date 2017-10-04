"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by PC on 21/08/2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var UtilService = (function () {
    function UtilService(_http) {
        this._http = _http;
        this.link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4-1/index.php";
        //private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
    }
    UtilService.prototype.getAdministratifs = function () {
        var url = this.link + "/user/administratif";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getSuperviseurs = function () {
        var url = this.link + "/user/superviseur";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getCommerciaux = function () {
        var url = this.link + "/user/commercial";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getZones = function () {
        var url = this.link + "/util/zone";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getSouszones = function () {
        var url = this.link + "/util/souszone";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getServices = function () {
        var url = this.link + "/util/service";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getActivites = function () {
        var url = this.link + "/util/activite";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getSouszoneByZone = function (zone) {
        var url = this.link + "/util/souszone";
        var datas = JSON.stringify({ zone: zone });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getZoneByRegion = function (region) {
        var url = this.link + "/util/zone";
        var datas = JSON.stringify({ region: region });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getPointByRegion = function (region) {
        var url = this.link + "/client/pointbyregion";
        var datas = JSON.stringify({ region: region });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getPointByZone = function (zone) {
        var url = this.link + "/client/pointbyzone";
        var datas = JSON.stringify({ zone: zone });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getPointBySouszone = function (souszone) {
        var url = this.link + "/client/pointbysouszone";
        var datas = JSON.stringify({ souszone: souszone });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getPointByCommercial = function () {
        var url = this.link + "/client/getpointscommercial";
        var datas = JSON.stringify({ token: this.basetoken });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getCommerciauxBySuperviseur = function () {
        var url = this.link + "/user/commercial";
        var datas = JSON.stringify({ token: this.basetoken });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getAdresseByPoint = function (data) {
        var url = this.link + "/client/adressepdv";
        var datas = JSON.stringify(data);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getAllDataPoint = function (data) {
        var url = this.link + "/client/alldata";
        var datas = JSON.stringify(data);
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getRegionsSuperviseurs = function () {
        var url = this.link + "/util/region-superviseur";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getZoneActivite = function () {
        var url = this.link + "/util/zone-activite";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.getRegionActivite = function () {
        var url = this.link + "/util/region-activite";
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.ajoutCommercial = function (data) {
        var url = this.link + "/user/ajoutcommercial";
        var datas = JSON.stringify({ token: this.basetoken, data: data });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    UtilService.prototype.insertPoint = function (data) {
        var url = this.link + "/client/insertpoint";
        var datas = JSON.stringify({ token: this.basetoken, data: data });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return UtilService;
}());
UtilService = __decorate([
    core_1.Injectable()
], UtilService);
exports.UtilService = UtilService;
