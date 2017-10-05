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
var AssignationSuiviService = (function () {
    function AssignationSuiviService(_http) {
        this._http = _http;
        this.link = "http://localhost/backup-sb-admin/backend-SB-Admin-BS4-Angular-4-1/index.php";
        //private link = "http://abonnement.bbstvnet.com/crmbbs/backend-SB-Admin-BS4-Angular-4/index.php";
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.basetoken = JSON.parse(sessionStorage.getItem('currentUser')).basetoken;
    }
    AssignationSuiviService.prototype.assignationsuperviseur = function (data) {
        var url = this.link + "/assignation/superviseur";
        var datas = JSON.stringify({ token: this.basetoken, data: data });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AssignationSuiviService.prototype.modifPoint = function (data) {
        var url = this.link + "/suivi/modifpointandajoutsuivi";
        var datas = JSON.stringify({ token: this.basetoken, data: data });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AssignationSuiviService.prototype.assignationcommercial = function (data) {
        var url = this.link + "/assignation/commercial";
        var datas = JSON.stringify({ token: this.basetoken, data: data });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AssignationSuiviService.prototype.getAssignationsBySuperviseur = function () {
        var url = this.link + "/assignation/getassignersuperviseur";
        var datas = JSON.stringify({ token: this.basetoken });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AssignationSuiviService.prototype.getAssignationsByCommercial = function () {
        var url = this.link + "/assignation/getassignercommercial";
        var datas = JSON.stringify({ token: this.basetoken });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AssignationSuiviService.prototype.listsuiviforsuperviseur = function () {
        var url = this.link + "/suivi/listsuiviforsuperviseur";
        var datas = JSON.stringify({ token: this.basetoken });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AssignationSuiviService.prototype.listsuiviarelancerforsuperviseur = function () {
        var url = this.link + "/suivi/listsuiviarelancerforsuperviseur";
        var datas = JSON.stringify({ token: this.basetoken });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AssignationSuiviService.prototype.ajoutsuivifromsuperviseur = function (data) {
        var url = this.link + "/suivi/ajoutsuivifromsuperviseur";
        var datas = JSON.stringify({ token: this.basetoken, data: data });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AssignationSuiviService.prototype.getSuperviseursForPerformance = function () {
        var url = this.link + "/suivi/getsuperviseursforperformance";
        var datas = JSON.stringify({ token: this.basetoken });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    AssignationSuiviService.prototype.getCommerciauxForPerformance = function () {
        var url = this.link + "/suivi/getcommerciauxforperformance";
        var datas = JSON.stringify({ token: this.basetoken });
        var params = 'params=' + datas;
        return this._http.post(url, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return AssignationSuiviService;
}());
AssignationSuiviService = __decorate([
    core_1.Injectable()
], AssignationSuiviService);
exports.AssignationSuiviService = AssignationSuiviService;
/**
 * Created by PC on 30/08/2017.
 */
