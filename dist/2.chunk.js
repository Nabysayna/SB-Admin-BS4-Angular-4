webpackJsonp([2],{

/***/ "../../../../../src/app/layout/geomap/geomap.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 20rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/geomap/geomap.component.html":
/***/ (function(module, exports) {

module.exports = "\n<agm-map [latitude]=\"adresse_point.geospatialpoint.latitude\" [longitude]=\"adresse_point.geospatialpoint.longitude\" [zoom]=\"zoom\">\n    <agm-marker [label]=\"'Point'\" [latitude]=\"adresse_point.geospatialpoint.latitude\" [longitude]=\"adresse_point.geospatialpoint.longitude\" [iconUrl]=\"'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Chartreuse-icon.png'\"></agm-marker>\n    <!-- <agm-marker [label]=\"'Proprietaire'\" [latitude]=\"adresse_proprietaire.geospatialproprietaire.latitude\" [longitude]=\"adresse_proprietaire.geospatialproprietaire.latitude\" [iconUrl]=\"'http://download.seaicons.com/icons/icons-land/vista-map-markers/64/Map-Marker-Flag-1-Left-Pink-icon.png'\" ></agm-marker> -->\n</agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/layout/geomap/geomap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeomapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeomapComponent = (function () {
    function GeomapComponent(_utilService) {
        this._utilService = _utilService;
        this.title = 'BBS INVEST first AGM project';
        this.lat = 14.762589983648722;
        this.lng = -17.44974915234375;
        this.zoom = 13;
        this.adresse_point = { zonepoint: '', souszonepoint: '', adressepoint: '', codepostalpoint: 14, geospatialpoint: { latitude: 14.7625731, longitude: -17.4497353 } };
        this.adresse_proprietaire = { zoneproprietaire: "Grand Dakar", souszoneproprietaire: "Colobane", adresseproprietaire: "KLHLKG", codepostalproprietaire: 29089, geospatialproprietaire: { latitude: 14.7625731, longitude: -17.4497353 } };
    }
    GeomapComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.macarte);
        this._utilService.getAdresseByPoint(this.macarte.id_point)
            .subscribe(function (data) {
            console.log(data);
            _this.adresse_point = JSON.parse(data.adresse_point);
            _this.adresse_proprietaire = JSON.parse(data.adresse_proprietaire);
        }, function (error) { return alert(error); }, function () { return console.log("adresse point data"); });
    };
    return GeomapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GeomapComponent.prototype, "macarte", void 0);
GeomapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-geomap',
        template: __webpack_require__("../../../../../src/app/layout/geomap/geomap.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/geomap/geomap.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_util_service__["a" /* UtilService */]) === "function" && _a || Object])
], GeomapComponent);

var _a;
//# sourceMappingURL=geomap.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/prospect-pdv/prospect-pdv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-bottom: 2rem\">\r\n  <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n    <h1>Point de vente de {{ infoprospect.libellepoint }}</h1>\r\n    <hr>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 2rem\" *ngIf=\"alldatapoint && zonesactivites\">\r\n  <h3 type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"isinfo.isinfopoint=!isinfo.isinfopoint; isinfo.isinfoproprietaire=false; isinfo.isinfocomplement=false\"><span><i class=\"fa fa-plus\" *ngIf=\"!isinfo.isinfopoint\"></i><i class=\"fa fa-window-minimize\" *ngIf=\"isinfo.isinfopoint\"></i> Info gerant</span></h3>\r\n  <div class=\"col-sm-12\" *ngIf=\"isinfo.isinfopoint\">\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n        <label>Prénom gerant</label>\r\n        <input type=\"text\" [(ngModel)]=\"alldatapoint.prenom_gerant\"   name=\"prenomgerant\" id=\"prenomgerant\" class=\"form-control\"  placeholder={{infoprospect.prenom}} required>\r\n      </div>\r\n      <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n        <label>Nom gerant</label>\r\n        <input type=\"text\" [(ngModel)]=\"alldatapoint.nom_gerant\"   name=\"nomgerant\" id=\"nomgerant\" class=\"form-control\" placeholder={{infoprospect.nom}} required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n        <label>Téléphone gerant</label>\r\n        <input type=\"text\" [(ngModel)]=\"alldatapoint.telephone_gerant\"   name=\"telephonegerant\" id=\"telephonegerant\" class=\"form-control\" placeholder={{infoprospect.tel}} required>\r\n      </div>\r\n      <div class=\"form-group col-md-6 col-sm-6 col-xs-6\">\r\n        <label>Email gerant</label>\r\n        <input type=\"email\" [(ngModel)]=\"alldatapoint.email_gerant\"   name=\"emailgerant\" id=\"emailgerant\" class=\"form-control\" placeholder={{infoprospect.email}} required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--<div class=\"form-group col-md-3\">\r\n            <label>Région point</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_point.regionpoint\">\r\n                <option>&#45;&#45;Choix région&#45;&#45;</option>\r\n                <option  *ngFor=\"let zone of zonesactivites.zones\">{{zone.nom}}</option>\r\n            </select>\r\n        </div>-->\r\n        <div class=\"form-group col-md-3\">\r\n            <label>Zone point</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_point.zonepoint\">\r\n                <option>--Choix zone--</option>\r\n                <option  *ngFor=\"let zone of zonesactivites.zones\">{{zone.nom}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n        <label>Sous zone point</label>\r\n        <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_point.souszonepoint\">\r\n            <option>--Choix sous zone--</option>\r\n            <option  *ngFor=\"let souszone of souszonespoints\">{{souszone.nom}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-md-3\">\r\n        <label>Code postale</label>\r\n        <input type=\"number\" [(ngModel)]=\"adresse_point.codepostalpoint\"   name=\"codepostalpoint\" id=\"codepostalpoint\" class=\"form-control\"  placeholder=\"code postal point\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <fieldset class=\"form-group  col-md-6\">\r\n        <label>Adresse du point</label>\r\n        <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"adresse_point.adressepoint\"   name=\"adressepoint\" id=\"adressepoint\" class=\"form-control\"  placeholder=\"adresse exacte\" required></textarea>\r\n      </fieldset>\r\n      <fieldset class=\"form-group  col-md-6\">\r\n        <label>Cordonnées geospatiales du point</label>\r\n          <!--<input type=\"number\" [(ngModel)]=\"adresse_point.geospatialpoint.latitude\"   name=\"latitudepoint\" id=\"latitudepoint\" class=\"form-control\"  placeholder={{infoprospect.latitude}}>\r\n          <input type=\"number\" [(ngModel)]=\"adresse_point.geospatialpoint.longitude\"   name=\"longitudepoint\" id=\"longitudepoint\" class=\"form-control\"  placeholder={{infoprospect.longitude}}>-->\r\n          <button (click)=\"coordonneesgeospatiales()\" type=\"button\" class=\"btn btn-primary btn-sm btn-circle\">\r\n              <i class=\"fa fa-search\"></i>Rechercher Coordonnées Géospatiales\r\n          </button>\r\n      </fieldset>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 2rem\">\r\n  <h3 type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"isinfo.isinfopoint=false; isinfo.isinfoproprietaire=!isinfo.isinfoproprietaire; isinfo.isinfocomplement=false\"><span><i class=\"fa fa-plus\" *ngIf=\"!isinfo.isinfoproprietaire\"></i><i class=\"fa fa-window-minimize\" *ngIf=\"isinfo.isinfoproprietaire\"></i> Info proprietaire</span></h3>\r\n  <div class=\"col-sm-12\" *ngIf=\"isinfo.isinfoproprietaire\">\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Prénom proprietaire</label>\r\n        <input type=\"text\" [(ngModel)]=\"alldatapoint.prenom_proprietaire\"   name=\"prenomproprietaire\" id=\"prenomproprietaire\" class=\"form-control\"  placeholder=\"prénom proprietaire\" required>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Nom proprietaire</label>\r\n        <input type=\"text\" [(ngModel)]=\"alldatapoint.nom_proprietaire\"   name=\"nomproprietaire\" id=\"nomproprietaire\" class=\"form-control\" placeholder=\"nom proprietaire\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Téléphone proprietaire</label>\r\n        <input type=\"text\" [(ngModel)]=\"alldatapoint.telephone_proprietaire\"   name=\"telephoneproprietaire\" id=\"telephoneproprietaire\" class=\"form-control\" placeholder=\"téléphone proprietaire\" required>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Email proprietaire</label>\r\n        <input type=\"email\" [(ngModel)]=\"alldatapoint.email_proprietaire\"   name=\"emailproprietaire\" id=\"emailproprietaire\" class=\"form-control\" placeholder=\"email proprietaire\" required>\r\n      </div>\r\n    </div>\r\n    <!--<div class=\"row\">\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Zone proprietaire</label>\r\n        <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_proprietaire.zoneproprietaire\">\r\n            <option>&#45;&#45;Choix zone&#45;&#45;</option>\r\n            <option  *ngFor=\"let zone of zonesactivites.zones\">{{zone.nom}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Sous zone proprietaire</label>\r\n        <select class=\"form-control input-sm\" [(ngModel)]=\"adresse_proprietaire.souszoneproprietaire\">\r\n          <option>&#45;&#45;Choix sous zone&#45;&#45;</option>\r\n          <option  *ngFor=\"let souszone of souszonespropietaires\">{{souszone.nom}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Code postale</label>\r\n        <input type=\"number\" [(ngModel)]=\"adresse_proprietaire.codepostalproprietaire\"   name=\"codepostalpointproprietaire\" id=\"codepostalpointproprietaire\" class=\"form-control\"  placeholder=\"code postal point\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <fieldset class=\"form-group  col-md-6\">\r\n        <label>Adresse proprietaire</label>\r\n        <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"adresse_proprietaire.adresseproprietaire\"   name=\"adressepointproprietaire\" id=\"adressepointproprietaire\" class=\"form-control\"  placeholder=\"adresse exacte proprietaire\" required></textarea>\r\n      </fieldset>\r\n      <fieldset class=\"form-group  col-md-6\">\r\n        <label>Cordonnées geospatiales proprietaire</label>\r\n        <input type=\"number\" [(ngModel)]=\"adresse_proprietaire.geospatialproprietaire.latitude\"   name=\"latitudeproprietaire\" id=\"latitudeproprietaire\" class=\"form-control\"  placeholder=\"latitude proprietaire\">\r\n        <input type=\"number\" [(ngModel)]=\"adresse_proprietaire.geospatialproprietaire.longitude\"   name=\"longitudeproprietaire\" id=\"longitudeproprietaire\" class=\"form-control\"  placeholder=\"longitude proprietaire\">\r\n      </fieldset>\r\n    </div>-->\r\n  </div>\r\n</div>\r\n<div class=\"row\" style=\"padding-bottom: 2rem\">\r\n  <h3 type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"isinfo.isinfopoint=false; isinfo.isinfoproprietaire=false; isinfo.isinfocomplement=!isinfo.isinfocomplement\"><span><i class=\"fa fa-plus\" *ngIf=\"!isinfo.isinfocomplement\"></i><i class=\"fa fa-window-minimize\" *ngIf=\"isinfo.isinfocomplement\"></i> Info complementaire</span></h3>\r\n  <div *ngIf=\"isinfo.isinfocomplement\">\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-xs-12 \">\r\n        <h4>Types d'activités du point</h4>\r\n          <div class=\"row\">\r\n              <div  *ngFor=\"let option of optionsActivite\"  class=\"col-sm-6 col-xs-12\">\r\n                  <input type=\"checkbox\" name=\"optionsActivite\" value=\"{{option.value}}\"\r\n                         [(ngModel)]=\"option.checked\" (change)=\"updateCheckedoptionsActivite()\"\r\n                  />\r\n                  {{option.name}}\r\n              </div>\r\n              <div class=\"col-sm-6 col-xs-12\">\r\n                  <label>Autre ...</label>\r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <h4>Noter le point</h4>\r\n        <div>\r\n          <span *ngFor=\"let option of rating\"><i [ngClass]=\"{'fa': true, 'fa-star-o': !option.checked, 'fa-star': option.checked}\" aria-hidden=\"true\" (click)=\"avoter(option.indice)\"></i></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <button style=\"margin-top:2rem; margin-bottom: 1rem; margin-left: 0.3rem;\" class=\"btn btn-outline-primary\" (click)=\"getAllServices()\"\r\n            [attr.aria-expanded]=\"!isSelect\" aria-controls=\"collapseExampl\">\r\n            Prospection\r\n        </button>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div id=\"collapseExampl\" [ngbCollapse]=\"isSelect\" style=\"margin-bottom: 1rem; margin-left: 0.3rem;\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead>\r\n                              <tr>\r\n                                  <th>Réponse</th>\r\n                                  <th *ngFor=\"let item of possibleAnswers\">{{item.reponse}}</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"allServices\">\r\n                              <tr *ngFor=\"let service of allServices ; let i = index \">\r\n                                  <td>{{service.nom}}</td>\r\n                                  <td *ngFor=\"let item of possibleAnswers\"><input type=\"radio\" value=\"{{item.reponse}}\" name=\"{{service.nom}}\" [(ngModel)]=\"reponsesProspect[i]\"/></td>\r\n                              </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n       </div>\r\n     </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-4\">\r\n        <label>Documents joints</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-4\">\r\n          <label>Libellé</label>\r\n          <select class=\"form-control input-sm\" [(ngModel)]=\"uploadedFileType\">\r\n              <option>--Choisir le type de pièce--</option>\r\n              <option value=\"cni\">CIN</option>\r\n              <option value=\"passport\">Passport</option>\r\n              <option value=\"carte consulaire\">Carte Consulaire</option>\r\n              <option value=\"autre\"> Autres Pièces... </option>\r\n          </select>\r\n      </div>\r\n      <div class=\"form-group col-sm-6\">\r\n        <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" (change)=\"fileChange($event)\" placeholder=\"Uploader Image\" accept=\".pdf,.docx,.png,.jpg\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row center-block\" style=\"padding-top: 2rem; padding-bottom: 1rem\" *ngIf=\"!isEnregistrerProspect\">\r\n  <div class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"enregistrerProspect()\" [disabled]=\"reponsesProspect.length == 0 || !uploadfinished\">Valider les nouvelles données</button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"isEnregistrerProspect\" class=\"page-header col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 text-center center-block\">\r\n    <ngb-alert [type]=\"'success'\" *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">\r\n        <strong>Successfull!</strong> <br/>Veuillez cliquer sur Fermer pour sortir!\r\n    </ngb-alert>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/prospect-pdv/prospect-pdv.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/prospect-pdv/prospect-pdv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectPdvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProspectPdvComponent = (function () {
    function ProspectPdvComponent(_utilService, _assignationsuiviService, http, router) {
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this.http = http;
        this.router = router;
        this.staticAlertClosed = false;
        this.isEnregistrerProspect = false;
        this.uploadfinished = true;
        this.reponsesProspect = [];
        this.isSelect = true;
        this.isinfo = { isinfopoint: false, isinfoproprietaire: false, isinfocomplement: true };
        this.rating = [
            { indice: 0, checked: false },
            { indice: 1, checked: false },
            { indice: 2, checked: false },
            { indice: 3, checked: false },
            { indice: 4, checked: false },
        ];
        this.optionsActivite = [];
        this.prospection = {
            id_assignation_origin: 0,
            id_client: '',
            client: '',
            reponsesProspect: [],
            piecesFournies: [],
            noteprospect: 0,
            niveau: 1,
            datesuivi: {
                dateniveau1: '',
                dateniveau2: '',
                dateniveau3: '',
            },
        };
        this.apiEndPoint = 'http://abonnement.bbstvnet.com/crmbbs/server-backend-upload/index.php';
        this.possibleAnswers = [
            {
                "reponse": "A Déjà Souscri"
            },
            {
                "reponse": "Souscrire Maintenant"
            },
            {
                "reponse": "Intéressé"
            },
            {
                "reponse": "Pas Pour le Moment"
            },
            {
                "reponse": "Impossible"
            },
        ];
    }
    ProspectPdvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.point = JSON.parse(this.infoprospect.point);
        this._utilService.getZoneActivite()
            .subscribe(function (data) {
            _this.zonesactivites = data;
            var geospatialpoint = { latitude: 0, longitude: 0 };
            navigator.geolocation.getCurrentPosition(function (position) {
                geospatialpoint.longitude = position.coords.longitude;
                geospatialpoint.latitude = position.coords.latitude;
                sessionStorage.setItem('positionpoint', JSON.stringify(geospatialpoint));
            });
        }, function (error) { return alert(error); }, function () {
            _this._utilService.getAllDataPoint(_this.infoprospect.id_point)
                .subscribe(function (data) {
                _this.alldatapoint = data;
                _this.avoter(_this.alldatapoint.avis - 1);
                _this.adresse_point = JSON.parse(_this.alldatapoint.adresse_point);
                _this.adresse_proprietaire = JSON.parse(_this.alldatapoint.adresse_proprietaire);
                var letactivites = JSON.parse(_this.alldatapoint.activites);
                _this.optionsActivite = _this.zonesactivites.activites.map(function (type) {
                    if (letactivites.includes(type.activite)) {
                        return { name: type.activite, value: type.id, checked: true };
                    }
                    else {
                        return { name: type.activite, value: type.id, checked: false };
                    }
                });
            }, function (error) { return alert(error); }, function () {
                _this.selectZonePoint();
                _this.selectZoneProprietaire();
                _this.adresse_point.geospatialpoint = JSON.parse(sessionStorage.getItem('positionpoint'));
            });
        });
    };
    ProspectPdvComponent.prototype.getZoneActivite = function () {
        var _this = this;
        this._utilService.getZoneActivite()
            .subscribe(function (data) {
            _this.zonesactivites = data;
        }, function (error) { return alert(error); }, function () { return console.log(_this.zonesactivites); });
    };
    ProspectPdvComponent.prototype.getRegionActivite = function () {
        var _this = this;
        this._utilService.getRegionActivite()
            .subscribe(function (data) {
            _this.regionsactivites = data;
        }, function (error) { return alert(error); }, function () { return console.log(_this.regionsactivites); });
    };
    ProspectPdvComponent.prototype.getAllServices = function () {
        var _this = this;
        this._utilService.getServices()
            .subscribe(function (data) { return _this.allServices = data; }, function (error) { return alert(error); }, function () {
            _this.isSelect = !_this.isSelect;
            for (var i = 0; i < _this.allServices.length; i++) {
                _this.reponsesProspect.push("");
            }
        });
    };
    ProspectPdvComponent.prototype.selectZonePoint = function () {
        var _this = this;
        this._utilService.getSouszoneByZone(this.adresse_point.zonepoint)
            .subscribe(function (data) { return _this.souszonespoints = data; }, function (error) { return alert(error); }, function () { return console.log(_this.souszonespoints); });
    };
    ProspectPdvComponent.prototype.selectZoneProprietaire = function () {
        var _this = this;
        this._utilService.getSouszoneByZone(this.adresse_proprietaire.zoneproprietaire)
            .subscribe(function (data) { return _this.souszonespropietaires = data; }, function (error) { return alert(error); }, function () { return console.log(_this.souszonespropietaires); });
    };
    ProspectPdvComponent.prototype.coordonneesgeospatiales = function () {
        if (navigator.geolocation) {
            console.log("YES!");
            var geospatialpoint_1 = { latitude: 0, longitude: 0 };
            navigator.geolocation.getCurrentPosition(function (position) {
                geospatialpoint_1.longitude = position.coords.longitude;
                geospatialpoint_1.latitude = position.coords.latitude;
                sessionStorage.setItem('positionpoint', JSON.stringify(geospatialpoint_1));
            });
        }
    };
    ProspectPdvComponent.prototype.avoter = function (index) {
        if ((index + 1 == this.rating.length) && (this.rating[index].checked == true)) {
            this.rating[index].checked = false;
        }
        else {
            for (var i = 0; i < this.rating.length; i++) {
                if (i < index) {
                    this.rating[i].checked = true;
                }
                else if (i == index) {
                    if ((this.rating[i].checked == true) && (this.rating[i + 1].checked == false)) {
                        this.rating[i].checked = false;
                    }
                    else {
                        this.rating[i].checked = true;
                    }
                }
                else {
                    this.rating[i].checked = false;
                }
            }
        }
        var arrayRating = this.rating.filter(function (opt) { return opt.checked; });
        this.prospection.noteprospect = arrayRating.length;
    };
    Object.defineProperty(ProspectPdvComponent.prototype, "selectedoptionsActivite", {
        get: function () {
            return this.optionsActivite
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    ProspectPdvComponent.prototype.updateCheckedoptionsActivite = function () {
        console.log(this.selectedoptionsActivite);
        var activites = this.zonesactivites.activites;
        this.alldatapoint.activites = this.selectedoptionsActivite.map(function (option) {
            return activites[Number(option) - 1].activite;
        });
    };
    ProspectPdvComponent.prototype.enregistrerProspect = function () {
        var _this = this;
        this.adresse_point.geospatialpoint = JSON.parse(sessionStorage.getItem('positionpoint'));
        this.alldatapoint.adresse_point = this.adresse_point;
        this.alldatapoint.adresse_proprietaire = this.adresse_proprietaire;
        this.prospection.id_assignation_origin = this.infoprospect.id;
        this.prospection.id_client = this.infoprospect.id_point;
        this.prospection.client = this.alldatapoint;
        this.prospection.infosup = this.infoprospect.infosup;
        for (var i = 0; i < this.allServices.length; i++) {
            this.prospection.reponsesProspect.push(this.allServices[i].nom + "#" + this.reponsesProspect[i]);
        }
        this._assignationsuiviService.modifPoint(this.prospection)
            .subscribe(function (data) {
            console.log(data);
            _this.isEnregistrerProspect = true;
            //this.router.navigate(['/dashboard']);
        }, function (error) { return alert(error); }, function () { return console.log(''); });
    };
    ProspectPdvComponent.prototype.fileChange = function (event) {
        var _this = this;
        this.uploadfinished = false;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]();
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            this.http.post("" + this.apiEndPoint, formData, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error); })
                .subscribe(function (data) {
                console.log("Retour uploader " + data.generatedName);
                var newData = data;
                _this.uploadFile = newData;
                _this.newImage = _this.uploadFile.generatedName;
                _this.prospection.piecesFournies.push(_this.uploadedFileType + "#" + _this.newImage);
            }, function (error) { return console.log(error); }, function () {
                _this.uploadfinished = true;
            });
        }
    };
    ProspectPdvComponent.prototype.validDonnees = function () {
    };
    return ProspectPdvComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProspectPdvComponent.prototype, "infoprospect", void 0);
ProspectPdvComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-prospect-pdv',
        template: __webpack_require__("../../../../../src/app/layout/prospect-pdv/prospect-pdv.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/prospect-pdv/prospect-pdv.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ProspectPdvComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=prospect-pdv.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/tables/data-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return (row.libellepoint.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.fullname.toLowerCase().indexOf(query.toLowerCase()) > -1 || row.adresse.toLowerCase().indexOf(query.toLowerCase()) > -1); });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilter"
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/tables/regions-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionsFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RegionsFilterPipe = (function () {
    function RegionsFilterPipe() {
    }
    RegionsFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.region.toLowerCase().indexOf(query.toLowerCase()) > -1; });
        }
        return array;
    };
    return RegionsFilterPipe;
}());
RegionsFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "regionsFilter"
    })
], RegionsFilterPipe);

//# sourceMappingURL=regions-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/tables/souszones-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SousZonesFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SousZonesFilterPipe = (function () {
    function SousZonesFilterPipe() {
    }
    SousZonesFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.sous_zone.toLowerCase().indexOf(query.toLowerCase()) > -1; });
        }
        return array;
    };
    return SousZonesFilterPipe;
}());
SousZonesFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "souszonesFilter"
    })
], SousZonesFilterPipe);

//# sourceMappingURL=souszones-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/layout/tables/tables-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tables_component__ = __webpack_require__("../../../../../src/app/layout/tables/tables.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tables_component__["a" /* TablesComponent */] }
];
var TablesRoutingModule = (function () {
    function TablesRoutingModule() {
    }
    return TablesRoutingModule;
}());
TablesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], TablesRoutingModule);

//# sourceMappingURL=tables-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Prospects'\" [icon]=\"'fa-table'\"></app-page-header>\r\n\r\n    <div class=\"row\" style=\"padding-bottom: 2rem\">\r\n        <div class=\"col-sm-3\">\r\n            <label class=\"label-control\">Nombre d'Affichage</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                <option [ngValue]=\"5\">5</option>\r\n                <option [ngValue]=\"10\">10</option>\r\n                <option [ngValue]=\"25\">25</option>\r\n                <option [ngValue]=\"50\">50</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Région</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreRegion\" (change)=\"selectRegion()\">\r\n                <option>--Choix région--</option>\r\n                <option  *ngFor=\"let region of regions\">{{region}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreZone\">\r\n                <option>--Choix zone--</option>\r\n                <option  *ngFor=\"let zone of zones\">{{zone}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <label>Sous zone</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"filtreSousZone\">\r\n                <option>--Choix sous zone--</option>\r\n                <option  *ngFor=\"let souszone of sousZonesOfCurrentZone()\">{{souszone}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12\">\r\n\r\n            <div class=\"row table-responsive\">\r\n                <table class=\"table table-hover\" [mfData]=\"data | regionsFilter: filtreRegion | zonesFilter: filtreZone | souszonesFilter: filtreSousZone | dataFilter: filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th><mfDefaultSorter by=\"dateajout\">Date assignation</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"libellepoint\">Nom Point</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"fullname\">Gérant(e)</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"telephone\">Téléphone</mfDefaultSorter></th>\r\n                        <th><mfDefaultSorter by=\"adresse\">Adresse</mfDefaultSorter></th>\r\n                        <th>Action</th>\r\n                        <th>Option</th>\r\n                    </tr>\r\n                    <tr>\r\n                    <th colspan=\"5\">\r\n                        Recherche:\r\n                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\r\n                    </th>\r\n                </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data\">\r\n                        <td>{{item.infosup.date_assignationcommercial | date}}</td>\r\n                        <td>{{item.libellepoint}}</td>\r\n                        <td>{{item.fullname}}</td>\r\n                        <td>{{item.telephone}}</td>\r\n                        <td>{{item.adresse}}, {{item.sous_zone}}, {{item.zone}}</td>\r\n                        <td >\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(content, item)\">Voir Map</button>\r\n                        </td>\r\n                        <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"open(contentProspect, item)\">Prospecter</button></td>\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr class=\"text-center center-block\">\r\n                        <td colspan=\"8\" class=\"text-center center-block\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-header\" *ngIf=\"client\">\r\n        <h4 class=\"modal-title\">Coordonnée du point '{{client.libellepoint}}' de '{{client.fullname}}'</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <app-geomap [macarte]=\"client\"></app-geomap>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentProspect let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <app-prospect-pdv [infoprospect]=\"client\"></app-prospect-pdv>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Fermer</button>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/tables/tables.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TablesComponent = (function () {
    function TablesComponent(router, http, modalService, _utilService, _assignationsuiviService) {
        this.router = router;
        this.http = http;
        this.modalService = modalService;
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this.filterQuery = "";
        this.filtreRegion = "";
        this.filtreZone = "";
        this.filtreSousZone = "";
        this.rowsOnPage = 5;
        this.sortBy = "libellepoint";
        this.sortOrder = "asc";
        this.regions = [];
        this.zones = [];
        this.souszones = [];
        this.data = [];
        this.sortByWordLength = function (a) {
            return a.adresse.length;
        };
    }
    TablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._assignationsuiviService.getAssignationsByCommercial()
            .subscribe(function (data) {
            console.log(data);
            _this.data = data.message.map(function (type) {
                return {
                    id: type.id,
                    id_point: type.id_client,
                    point: type.client,
                    libellepoint: JSON.parse(type.client).libellepoint,
                    prenom: JSON.parse(type.client).prenom,
                    nom: JSON.parse(type.client).nom,
                    fullname: JSON.parse(type.client).fullname,
                    telephone: JSON.parse(type.client).telephone,
                    adresse: JSON.parse(type.client).adresse,
                    note: JSON.parse(type.client).note,
                    region: type.region ? type.region : 'Dakar', zone: type.zone, sous_zone: type.sous_zone,
                    commentaire: '',
                    infosup: JSON.parse(type.infosup),
                    value: type.id,
                    checked: false,
                    id_superviseur: type.id_superviseur,
                    superviseur: JSON.parse(type.superviseur),
                    id_commercial: type.id_commercial,
                    commercial: JSON.parse(type.commercial)
                };
            });
            for (var i = 0; i < _this.data.length; i++) {
                if (!_this.regions.includes(_this.data[i].region))
                    _this.regions.push(_this.data[i].region);
            }
        }, function (error) { return alert(error); }, function () { return console.log(_this.data); });
    };
    TablesComponent.prototype.open = function (content, client) {
        var _this = this;
        this.client = client;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            _this.router.navigate(['/dashboard']);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TablesComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    TablesComponent.prototype.toInt = function (num) {
        return +num;
    };
    TablesComponent.prototype.selectRegion = function () {
        this.zones = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].region == this.filtreRegion) {
                if (!this.zones.includes(this.data[i].zone))
                    this.zones.push(this.data[i].zone);
            }
        }
        console.log(this.zones);
    };
    TablesComponent.prototype.sousZonesOfCurrentZone = function () {
        var souszones = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].zone == this.filtreZone) {
                if (!souszones.includes(this.data[i].sous_zone))
                    souszones.push(this.data[i].sous_zone);
            }
        }
        return souszones;
    };
    return TablesComponent;
}());
TablesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__("../../../../../src/app/layout/tables/tables.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/tables/tables.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_5__services_assignation_suivi_service__["a" /* AssignationSuiviService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_util_service__["a" /* UtilService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _e || Object])
], TablesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_rating__ = __webpack_require__("../../../../ngx-bootstrap/rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tables_component__ = __webpack_require__("../../../../../src/app/layout/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tables_routing_module__ = __webpack_require__("../../../../../src/app/layout/tables/tables-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/tables/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__zones_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/tables/zones-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__souszones_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/tables/souszones-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geomap_geomap_component__ = __webpack_require__("../../../../../src/app/layout/geomap/geomap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__prospect_pdv_prospect_pdv_component__ = __webpack_require__("../../../../../src/app/layout/prospect-pdv/prospect-pdv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__regions_filter_pipe__ = __webpack_require__("../../../../../src/app/layout/tables/regions-filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__tables_routing_module__["a" /* TablesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyC-2WxSYvBmnQ0HgUYU7fWxCyY_itypwn8'
            }),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_rating__["a" /* RatingModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__tables_component__["a" /* TablesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__data_filter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_11__zones_filter_pipe__["a" /* ZonesFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_15__regions_filter_pipe__["a" /* RegionsFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_12__souszones_filter_pipe__["a" /* SousZonesFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_13__geomap_geomap_component__["a" /* GeomapComponent */],
            __WEBPACK_IMPORTED_MODULE_14__prospect_pdv_prospect_pdv_component__["a" /* ProspectPdvComponent */]
        ]
    })
], TablesModule);

//# sourceMappingURL=tables.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/tables/zones-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonesFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ZonesFilterPipe = (function () {
    function ZonesFilterPipe() {
    }
    ZonesFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.zone.toLowerCase().indexOf(query.toLowerCase()) > -1; });
        }
        return array;
    };
    return ZonesFilterPipe;
}());
ZonesFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "zonesFilter"
    })
], ZonesFilterPipe);

//# sourceMappingURL=zones-filter.pipe.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map