webpackJsonp([14],{

/***/ "../../../../../src/app/layout/form/form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__("../../../../../src/app/layout/form/form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */] }
];
var FormRoutingModule = (function () {
    function FormRoutingModule() {
    }
    return FormRoutingModule;
}());
FormRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], FormRoutingModule);

//# sourceMappingURL=form-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/form/form.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"page-wrapper\" [@routerTransition]>\r\n    <app-page-header [heading]=\"'Nouveau Client'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\" >\r\n        <div class=\"col-sm-12\" *ngIf=\"regionsactivites\">\r\n              <div class=\"col-sm-12 col-xs-12\" >\r\n                  <h5 style=\"margin-top: 2rem\">Point</h5>\r\n                  <input type=\"text\" [(ngModel)]=\"client.nompoint\"   name=\"nompoint\" id=\"nompoint\" class=\"form-control\"  placeholder=\"Nom Point\" required>\r\n                  <a class=\"btn btn-outline-primary\" style=\"margin-bottom: 1rem;\" (click)=\"isAdressepoint = !isAdressepoint\"\r\n                     [attr.aria-expanded]=\"!isAdressepoint\" aria-controls=\"collapseExamples\"> Adresse point\r\n                  </a>\r\n                  <div id=\"collapseExamples\" [ngbCollapse]=\"isAdressepoint\">\r\n                      <div class=\"card\">\r\n                          <div class=\"card-block\">\r\n                              <label>Région</label>\r\n                              <select class=\"form-control input-sm\" [(ngModel)]=\"client.adressecompletpoint.regionpoint\" (change)=\"selectRegionPoint()\">\r\n                                  <option>--Choix région--</option>\r\n                                  <option  *ngFor=\"let region of regionsactivites.regions\">{{region.nom}}</option>\r\n                                  <option  >autre</option>\r\n                              </select>\r\n                              <label>Zones</label>\r\n                              <select class=\"form-control input-sm\" [(ngModel)]=\"client.adressecompletpoint.zonepoint\" (change)=\"selectZonePoint()\">\r\n                                  <option>--Choix zone--</option>\r\n                                  <option  *ngFor=\"let zone of zonespoints\">{{zone.nom}}</option>\r\n                                  <option>autre</option>\r\n                              </select>\r\n                              <label>Sous-zones</label>\r\n                              <select class=\"form-control input-sm\" [(ngModel)]=\"client.adressecompletpoint.souszonepoint\">\r\n                                  <option>--Choix sous zone--</option>\r\n                                  <option  *ngFor=\"let souszone of souszonespoints\">{{souszone.nom}}</option>\r\n                                  <option>autre</option>\r\n                              </select>\r\n                              <label>Adresse exacte</label>\r\n                              <input type=\"text\" [(ngModel)]=\"client.adressecompletpoint.adressepoint\"   name=\"adressepoint\" id=\"adressepoint\" class=\"form-control\"  placeholder=\"adresse exacte\" required>\r\n                              <label>Code postal</label>\r\n                              <input type=\"number\" [(ngModel)]=\"client.adressecompletpoint.codepostalpoint\"   name=\"codepostalpoint\" id=\"codepostalpoint\" class=\"form-control\"  placeholder=\"code postal point\">\r\n                              <div class=\"row\">\r\n                                  <button (click)=\"coordonneesgeospatialespoint()\" *ngIf=\"client.adressecompletpoint.geospatialpoint.latitude==0\" type=\"button\" class=\"btn btn-primary btn-circle\">\r\n                                      <i class=\"fa fa-search\"></i>Coordonnées Géospatiales du point\r\n                                  </button>\r\n                                  <strong *ngIf=\"client.adressecompletpoint.geospatialpoint.latitude!=0\" style=\"background-color: greenyellow\"><i class=\"fa fa-check\"></i>Coordonnées Géospatiales du point récupèré avec succés\r\n                                  </strong>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <h5 style=\"margin-top: 2rem\">Le gérant</h5>\r\n                  <input type=\"text\" [(ngModel)]=\"client.prenomgerant\"   name=\"prenomgerant\" id=\"prenomgerant\" class=\"form-control\"  placeholder=\"prénom gérant\" required>\r\n                  <input type=\"text\" [(ngModel)]=\"client.nomgerant\"   name=\"nomgerant\" id=\"nomgerant\" class=\"form-control\" placeholder=\"nom gérant\" required>\r\n                  <input type=\"number\" [(ngModel)]=\"client.telephonegerant\"   name=\"telephonegerant\" id=\"telephonegerant\" class=\"form-control\" placeholder=\"téléphone gérant\" required>\r\n                  <input type=\"email\" [(ngModel)]=\"client.emailgerant\"   name=\"emailgerant\" id=\"emailgerant\" class=\"form-control\" placeholder=\"email gérant\" required>\r\n                  <h5 style=\"margin-top: 2rem\">Le propriétaire <small>(si pas connu, mettre les infos du gérant à la place)</small></h5>\r\n                  <input type=\"text\" [(ngModel)]=\"client.prenomproprietaire\"   name=\"prenomproprietaire\" id=\"prenomproprietaire\" class=\"form-control\"  placeholder=\"prénom propiétaire\" required>\r\n                  <input type=\"text\" [(ngModel)]=\"client.nomproprietaire\"   name=\"nomproprietaire\" id=\"nomproprietaire\" class=\"form-control\" placeholder=\"nom propiétaire\" required>\r\n                  <input type=\"number\" [(ngModel)]=\"client.telephoneproprietaire\"   name=\"telephoneproprietaire\" id=\"telephoneproprietaire\" class=\"form-control\" placeholder=\"téléphone propiétaire\" required>\r\n                  <input type=\"email\" [(ngModel)]=\"client.emailproprietaire\"   name=\"emailpropietaire\" id=\"emailpropietaire\" class=\"form-control\" placeholder=\"email propiétaire\" required>\r\n                  <!--<a style=\"margin-bottom: 1rem;\" class=\"btn btn-outline-primary\" (click)=\"isAdresseproprio = !isAdresseproprio\"\r\n                      [attr.aria-expanded]=\"!isAdresseproprio\" aria-controls=\"collapseExample\">\r\n                      Adresse propriétaire\r\n                  </a>-->\r\n                  <div id=\"collapseExample\" [ngbCollapse]=\"isAdresseproprio\">\r\n                      <div class=\"card\">\r\n                            <div class=\"card-block\">\r\n                                <label>Région</label>\r\n                                <select class=\"form-control input-sm\" [(ngModel)]=\"client.adressecompletproprietaire.regionproprietaire\" (change)=\"selectRegionProprietaire()\">\r\n                                    <option>--Choix région--</option>\r\n                                    <option  *ngFor=\"let region of regionsactivites.regions\">{{region.nom}}</option>\r\n                                    <option  >autre</option>\r\n                                </select>\r\n                                <label>Zones</label>\r\n                                <select class=\"form-control input-sm\" [(ngModel)]=\"client.adressecompletproprietaire.zoneproprietaire\" (change)=\"selectZoneProprietaire()\">\r\n                                    <option>--Choix zone--</option>\r\n                                    <option  *ngFor=\"let zone of zonespropietaires\">{{zone.nom}}</option>\r\n                                    <option>autre</option>\r\n                                </select>\r\n                                <label>Sous zones</label>\r\n                                <select class=\"form-control input-sm\" [(ngModel)]=\"client.adressecompletproprietaire.souszoneproprietaire\">\r\n                                    <option>&#45;&#45;Choix sous zone&#45;&#45;</option>\r\n                                    <option  *ngFor=\"let souszone of souszonespropietaires\">{{souszone.nom}}</option>\r\n                                    <option>autre</option>\r\n                                </select>\r\n                                <label>Adresse exacte</label>\r\n                                <input type=\"text\" [(ngModel)]=\"client.adressecompletproprietaire.adresseproprietaire\" name=\"adresseproprietaire\" id=\"adresseproprietaire\" class=\"form-control\"  placeholder=\"adresse exacte\" required>\r\n                                <label>Code postal</label>\r\n                                <input type=\"number\" [(ngModel)]=\"client.adressecompletproprietaire.codepostalproprietaire\" name=\"codepostalproprietaire\" id=\"codepostalproprietaire\" class=\"form-control\"  placeholder=\"code postal propriétaire\">\r\n                                <button (click)=\"coordonneesgeospatialesproprietaire()\" type=\"button\" class=\"btn btn-primary btn-circle\">\r\n                                    <i class=\"fa fa-search\"></i>Recherche Coordonnées Géospatiales du proprietaire\r\n                                </button>\r\n                            </div>\r\n                      </div>\r\n                  </div>\r\n                  <h5 style=\"margin-top: 2rem\">Types d'activités</h5>\r\n                  <div class=\"row\">\r\n                        <div  *ngFor=\"let option of options\"  class=\"col-sm-6 col-xs-12\">\r\n                          <input type=\"checkbox\" name=\"options\" value=\"{{option.value}}\"\r\n                                 [(ngModel)]=\"option.checked\" (change)=\"updateCheckedOptions()\"\r\n                          />\r\n                          {{option.name}}\r\n                        </div>\r\n                  </div>\r\n                  <button style=\"margin-top:4rem; margin-bottom: 1rem;\" class=\"btn btn-outline-primary\" (click)=\"getAllServices()\"\r\n                        [attr.aria-expanded]=\"!isSelect\" aria-controls=\"collapseExampl\"> Prospection\r\n                  </button>\r\n                  <div id=\"collapseExampl\" [ngbCollapse]=\"isSelect\">\r\n                      <div class=\"card\">\r\n                          <div class=\"col-xs-12 col-sm-12\">\r\n\r\n                              <div class=\"row table-responsive\">\r\n                                  <table class=\"table table-hover\">\r\n                                      <thead>\r\n                                      <tr>\r\n                                          <th>Réponse</th>\r\n                                          <th *ngFor=\"let item of possibleAnswers\">{{item.reponse}}</th>\r\n                                      </tr>\r\n                                      </thead>\r\n                                      <tbody *ngIf=\"allServices\">\r\n                                      <tr *ngFor=\"let service of allServices ; let i = index \">\r\n                                          <td>{{service.nom}}</td>\r\n                                          <td *ngFor=\"let item of possibleAnswers\"><input type=\"radio\" value=\"{{item.reponse}}\" name=\"{{service.nom}}\" [(ngModel)]=\"reponsesProspect[i]\"/></td>\r\n                                      </tr>\r\n                                      </tbody>\r\n                                  </table>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <button style=\"margin-top:4rem; margin-bottom: 1rem;\" class=\"btn btn-outline-primary\" (click)=\"isUploadfile = !isUploadfile\"\r\n                        [attr.aria-expanded]=\"!isUploadfile\" aria-controls=\"collapseExamplees\">\r\n                        Recueille de documents\r\n                  </button>\r\n                  <div id=\"collapseExamplees\" [ngbCollapse]=\"isUploadfile\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-block\">\r\n                           <fieldset class=\"form-group\" _ngcontent-c25=\"\" style=\"margin-top: 1rem;\">\r\n                                <label>Libellé</label><select class=\"form-control input-sm\" [(ngModel)]=\"uploadedFileType\">\r\n                                        <option>--Choisir le type de pièce--</option>\r\n                                        <option value=\"cni\">CIN</option>\r\n                                        <option value=\"passport\">Passport</option>\r\n                                        <option value=\"carte consulaire\">Carte Consulaire</option>\r\n                                        <option value=\"autre\"> Autres Pièces... </option>\r\n                                        </select>\r\n                                <label class=\"ng-tns-c25-10\" for=\"exampleInputFile\" _ngcontent-c25=\"\">Choisir un fichier</label>\r\n                                <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" (change)=\"fileChange($event)\" placeholder=\"Uploader Image\" accept=\".pdf,.docx,.png,.jpg\">\r\n\r\n                            </fieldset>\r\n                            </div>\r\n                        </div>\r\n                   </div>\r\n                   <div>\r\n                       <label>Notez le point</label>\r\n                        <p>\r\n                          <span *ngFor=\"let option of rating\"><i [ngClass]=\"{'fa': true, 'fa-star-o': !option.checked, 'fa-star': option.checked}\" aria-hidden=\"true\" (click)=\"avoter(option.indice)\"></i></span>\r\n                        </p>\r\n                  </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div style=\"margin-top: 4rem; margin-bottom: 4rem\" class=\"text-center\">\r\n        <button type=\"button\" class=\"btn btn-success\"\r\n                (click)=\"validernewclient()\"\r\n                [disabled]=\"!client.nompoint || !client.telephonegerant || !client.telephoneproprietaire ||\r\n                !client.adressecompletpoint.souszonepoint || !client.adressecompletpoint.adressepoint\"\r\n        > Enregistrer le nouveau client</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_service__ = __webpack_require__("../../../../../src/app/services/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__ = __webpack_require__("../../../../../src/app/services/assignation-suivi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormComponent = (function () {
    function FormComponent(router, _location, _utilService, _assignationsuiviService, http) {
        this.router = router;
        this._location = _location;
        this._utilService = _utilService;
        this._assignationsuiviService = _assignationsuiviService;
        this.http = http;
        this.fakevalues = true;
        this.isAdresseproprio = true;
        this.isAdressepoint = true;
        this.isUploadfile = true;
        this.rowsOnPage = 5;
        this.sortBy = "service";
        this.sortOrder = "asc";
        this.allServices = [];
        this.reponsesProspect = [];
        this.isSelect = true;
        this.client = {
            nompoint: '',
            adressecompletpoint: {
                regionpoint: '--Choix région--',
                zonepoint: '--Choix zone--',
                souszonepoint: '--Choix sous zone--',
                adressepoint: '',
                codepostalpoint: 0,
                geospatialpoint: { latitude: 0, longitude: 0 },
            },
            typeactivite: [],
            avissurpoint: 0,
            nomgerant: '',
            prenomgerant: '',
            telephonegerant: '',
            emailgerant: '',
            nomproprietaire: '',
            prenomproprietaire: '',
            telephoneproprietaire: '',
            emailproprietaire: '',
            adressecompletproprietaire: {
                regionproprietaire: '--Choix région--',
                zoneproprietaire: '--Choix zone--',
                souszoneproprietaire: '--Choix sous zone--',
                adresseproprietaire: '',
                codepostalproprietaire: 0,
                geospatialproprietaire: { latitude: 0, longitude: 0 },
            },
            reponsesProspect: [],
            piecesFournies: []
        };
        this.rating = [
            { indice: 0, checked: false },
            { indice: 1, checked: false },
            { indice: 2, checked: false },
            { indice: 3, checked: false },
            { indice: 4, checked: false },
        ];
        this.options = [];
        this.apiEndPoint = 'http://abonnement.bbstvnet.com/crmbbs/server-backend-upload/index.php';
        this.possibleAnswers = [
            {
                "reponse": "A Déjà Souscri"
            },
            {
                "reponse": "Souscrit Maintenant"
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
    FormComponent.prototype.ngOnInit = function () {
        this.getRegionActivite();
    };
    FormComponent.prototype.getRegionActivite = function () {
        var _this = this;
        this._utilService.getRegionActivite()
            .subscribe(function (data) {
            console.log(data);
            _this.regionsactivites = data;
            _this.options = _this.regionsactivites.activites.map(function (type) {
                return { name: type.activite, value: type.id, checked: false };
            });
        }, function (error) { return alert(error); }, function () { return console.log(_this.regionsactivites); });
    };
    FormComponent.prototype.selectRegionPoint = function () {
        var _this = this;
        this.client.adressecompletpoint.zonepoint = '--Choix zone--';
        this.client.adressecompletpoint.souszonepoint = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.client.adressecompletpoint.regionpoint)
            .subscribe(function (data) { return _this.zonespoints = data; }, function (error) { return alert(error); }, function () { return console.log(_this.zonespoints); });
    };
    FormComponent.prototype.selectRegionProprietaire = function () {
        var _this = this;
        this.client.adressecompletproprietaire.zoneproprietaire = '--Choix zone--';
        this.client.adressecompletproprietaire.souszoneproprietaire = '--Choix sous zone--';
        this._utilService.getZoneByRegion(this.client.adressecompletproprietaire.regionproprietaire)
            .subscribe(function (data) { return _this.zonespropietaires = data; }, function (error) { return alert(error); }, function () { return console.log(_this.zonespropietaires); });
    };
    FormComponent.prototype.selectZonePoint = function () {
        var _this = this;
        this._utilService.getSouszoneByZone(this.client.adressecompletpoint.zonepoint)
            .subscribe(function (data) { return _this.souszonespoints = data; }, function (error) { return alert(error); }, function () { return console.log(_this.souszonespoints); });
    };
    FormComponent.prototype.selectZoneProprietaire = function () {
        var _this = this;
        this._utilService.getSouszoneByZone(this.client.adressecompletproprietaire.zoneproprietaire)
            .subscribe(function (data) { return _this.souszonespropietaires = data; }, function (error) { return alert(error); }, function () { return console.log(_this.souszonespropietaires); });
    };
    FormComponent.prototype.getAllServices = function () {
        var _this = this;
        this._utilService.getServices()
            .subscribe(function (data) { return _this.allServices = data; }, function (error) { return alert(error); }, function () {
            _this.isSelect = !_this.isSelect;
            for (var i = 0; i < _this.allServices.length; i++) {
                _this.reponsesProspect.push("");
            }
        });
    };
    FormComponent.prototype.avoter = function (index) {
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
        this.client.avissurpoint = arrayRating.length;
    };
    FormComponent.prototype.coordonneesgeospatialespoint = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.client.adressecompletpoint.geospatialpoint.longitude = position.coords.longitude;
                _this.client.adressecompletpoint.geospatialpoint.latitude = position.coords.latitude;
                console.log('test 1');
                console.log(_this.client.adressecompletpoint.geospatialpoint);
            });
        }
    };
    FormComponent.prototype.coordonneesgeospatialesproprietaire = function () {
        if (navigator.geolocation) {
            console.log("YES!");
            var geospatialproprietaire_1 = { latitude: 0, longitude: 0 };
            navigator.geolocation.getCurrentPosition(function (position) {
                geospatialproprietaire_1.longitude = position.coords.longitude;
                geospatialproprietaire_1.latitude = position.coords.latitude;
                sessionStorage.setItem('positionproprietaire', JSON.stringify(geospatialproprietaire_1));
            });
        }
    };
    Object.defineProperty(FormComponent.prototype, "selectedOptions", {
        get: function () {
            return this.options
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    FormComponent.prototype.updateCheckedOptions = function () {
        var activites = this.regionsactivites.activites;
        this.client.typeactivite = this.selectedOptions.map(function (option) {
            return activites[Number(option) - 1].activite;
        });
        console.log(this.client.typeactivite);
    };
    FormComponent.prototype.validernewclient = function () {
        var _this = this;
        this.client.adressecompletproprietaire.geospatialproprietaire = JSON.parse(sessionStorage.getItem('positionproprietaire'));
        for (var i = 0; i < this.allServices.length; i++) {
            this.client.reponsesProspect.push(this.allServices[i].nom + "#" + this.reponsesProspect[i]);
        }
        console.log(this.client);
        this._utilService.insertPoint(this.client)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/dashboard']);
        }, function (error) { return alert(error); }, function () { return console.log('insertPoint'); });
    };
    FormComponent.prototype.fileChange = function (event) {
        var _this = this;
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
                _this.client.piecesFournies.push(_this.uploadedFileType + "#" + _this.newImage);
            }, function (error) { return console.log(error); });
        }
    };
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/layout/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/form/form.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_service__["a" /* UtilService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_assignation_suivi_service__["a" /* AssignationSuiviService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _e || Object])
], FormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_routing_module__ = __webpack_require__("../../../../../src/app/layout/form/form-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_component__ = __webpack_require__("../../../../../src/app/layout/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_datatable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__form_routing_module__["a" /* FormRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]]
    })
], FormModule);

//# sourceMappingURL=form.module.js.map

/***/ })

});
//# sourceMappingURL=14.chunk.js.map