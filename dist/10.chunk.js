webpackJsonp([10],{

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

module.exports = " <div id=\"page-wrapper\" [@routerTransition]>\r\n    <app-page-header [heading]=\"'Nouveau-Client'\" [icon]=\"'fa-table'\"></app-page-header>\r\n    <div class=\"row\" >\r\n            <h3 class=\"page-header\">Nouveau Client</h3>\r\n                    <div class=\"col-sm-12\" style=\"margin-top: 2rem;\">\r\n\r\n                          <div class=\"col-sm-12 col-xs-12\">\r\n                          <input type=\"text\" [(ngModel)]=\"nompoint\"   name=\"nompoint\" id=\"nompoint\" class=\"form-control\"  placeholder=\"Nom Point\" required>\r\n                          <input type=\"text\" [(ngModel)]=\"prenomgerant\"   name=\"prenomgerant\" id=\"prenomgerant\" class=\"form-control\"  placeholder=\"prénom gérant\" required>\r\n                          <input type=\"text\" [(ngModel)]=\"nomgerant\"   name=\"nomgerant\" id=\"nomgerant\" class=\"form-control\" placeholder=\"nom gérant\" required>\r\n                          <input type=\"text\" [(ngModel)]=\"telephonegerant\"   name=\"telephonegerant\" id=\"telephonegerant\" class=\"form-control\" placeholder=\"téléphone gérant\" required>\r\n                          <input type=\"email\" [(ngModel)]=\"emailgerant\"   name=\"emailgerant\" id=\"emailgerant\" class=\"form-control\" placeholder=\"email gérant\" required>           \r\n                            <a class=\"btn btn-outline-primary\" style=\"margin-bottom: 1rem;\" (click)=\"isAdressepoint = !isAdressepoint\"\r\n                                [attr.aria-expanded]=\"!isAdressepoint\" aria-controls=\"collapseExamples\">\r\n                                Adresse point\r\n                            </a>\r\n                            <div id=\"collapseExamples\" [ngbCollapse]=\"isAdressepoint\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"card-block\">\r\n                                        <label>Zones</label><select class=\"form-control input-sm\" [(ngModel)]=\"zones\">\r\n                                        <option>Dakar</option>\r\n                                        <option>Parcelles</option>\r\n                                        </select>\r\n                                     <label>Sous-zones</label><select class=\"form-control input-sm\" [(ngModel)]=\"souszones\">\r\n                                        <option>Sandaga</option>\r\n                                        <option>Unité 24</option>\r\n                                        </select>\r\n                                     <input type=\"text\" [(ngModel)]=\"adressepoint\"   name=\"adressepoint\" id=\"adressepoint\" class=\"form-control\"  placeholder=\"adresse exacte\" required>\r\n                                     <input type=\"number\" [(ngModel)]=\"codepostalpoint\"   name=\"codepostalpoint\" id=\"codepostalpoint\" class=\"form-control\"  placeholder=\"code postal point\">\r\n                                      <button (click)=\"coordonneesgeospatiales()\" class=\"btn btn-sm btn-primary\">Coordonnées Géospatiales</button>\r\n                                     <button (click)=\"enregister()\" class=\"btn btn-sm btn-primary\" >Enregistrer</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <input type=\"text\" [(ngModel)]=\"prenomproprietaire\"   name=\"prenomproprietaire\" id=\"prenomproprietaire\" class=\"form-control\"  placeholder=\"prénom propiétaire\" required>\r\n                          <input type=\"text\" [(ngModel)]=\"nomproprietaire\"   name=\"nomproprietaire\" id=\"nomproprietaire\" class=\"form-control\" placeholder=\"nom propiétaire\" required>\r\n                          <input type=\"text\" [(ngModel)]=\"telephoneproprietaire\"   name=\"telephoneproprietaire\" id=\"telephoneproprietaire\" class=\"form-control\" placeholder=\"téléphone propiétaire\" required>\r\n                          <input type=\"email\" [(ngModel)]=\"emailpropietaire\"   name=\"emailpropietaire\" id=\"emailpropietaire\" class=\"form-control\" placeholder=\"email propiétaire\" required>\r\n                            <a style=\"margin-bottom: 1rem;\" class=\"btn btn-outline-primary\" (click)=\"isAdresseproprio = !isAdresseproprio\"\r\n                                [attr.aria-expanded]=\"!isAdresseproprio\" aria-controls=\"collapseExample\">\r\n                                Adresse propriétaire\r\n                            </a>\r\n                            <div id=\"collapseExample\" [ngbCollapse]=\"isAdresseproprio\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"card-block\">\r\n                                        <label>Zones</label><select class=\"form-control input-sm\" [(ngModel)]=\"zones\">\r\n                                        <option>Dakar</option>\r\n                                        <option>Parcelles</option>\r\n                                        </select>\r\n                                     <label>Sous-zones</label><select class=\"form-control input-sm\" [(ngModel)]=\"souszones\">\r\n                                        <option>Sandaga</option>\r\n                                        <option>Unité 24</option>\r\n                                        </select>\r\n                                     <input type=\"text\" [(ngModel)]=\"adresseproprietaire\"   name=\"adresseproprietaire\" id=\"adresseproprietaire\" class=\"form-control\"  placeholder=\"adresse exacte\" required>\r\n                                     <input type=\"number\" [(ngModel)]=\"codepostalpoint\"   name=\"codepostalproprietaire\" id=\"codepostalproprietaire\" class=\"form-control\"  placeholder=\"code postal propriétaire\">\r\n                                      <button (click)=\"coordonneesgeospatiales()\" class=\"btn btn-sm btn-primary\">Coordonnées Géospatiales</button>\r\n                                     <button (click)=\"enregister()\" class=\"btn btn-sm btn-primary\">Enregistrer</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <h5>Types d'activités</h5>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6 col-xs-12\">\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\" >services personnels\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">services d'assistance\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Magasin de cosmétiques, parfumerie\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Quincaillerie\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Magasin d’optique, opticien\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Pharmacies\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Restaurant\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Agence de voyages\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Magasin de détail, boutique de cadeaux ou magasin spécialisé\r\n                                </div>\r\n                                </div> \r\n                                <div class=\"col-sm-6 col-xs-12\">\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Magasin de fruits et de légumes\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Magasin de vêtements\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Supermarché/épicerie\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Magasin d’appareil photo et de fournitures photographiques\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Grand magasin ou magasin discount\r\n                                </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                 <input type=\"checkbox\">Prestataire de services Internet, cyber café\r\n                                 </div>\r\n                                <div style=\"margin-top:1rem;\">\r\n                                <input type=\"checkbox\">Autres...\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <button style=\"margin-top:4rem; margin-bottom: 1rem;\" class=\"btn btn-outline-primary\" (click)=\"isSelect = !isSelect\"\r\n                                [attr.aria-expanded]=\"!isSelect\" aria-controls=\"collapseExampl\">\r\n                                Prospection\r\n                            </button>\r\n                            <div id=\"collapseExampl\" [ngbCollapse]=\"isSelect\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"card-block\">\r\n                                        <label>Etes-vous intéressé par le service ...? </label><select class=\"form-control input-sm\" [(ngModel)]=\"questions\">\r\n                                        <option>Souscrire maintenant</option>\r\n                                        <option>Intéressé</option>\r\n                                        <option>Pas pour le moment</option>\r\n                                        <option>Impossible</option>\r\n                                        <option></option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                           </div>\r\n\r\n                            <button style=\"margin-top:4rem; margin-bottom: 1rem;\" class=\"btn btn-outline-primary\" (click)=\"isUploadfile = !isUploadfile\"\r\n                                [attr.aria-expanded]=\"!isUploadfile\" aria-controls=\"collapseExamplees\">\r\n                                Recueille de documents\r\n                            </button>\r\n                            <div id=\"collapseExamplees\" [ngbCollapse]=\"isUploadfile\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"card-block\">\r\n                                   <fieldset class=\"form-group\" _ngcontent-c25=\"\" style=\"margin-top: 1rem;\">\r\n                                        <label>Libellé</label><select class=\"form-control input-sm\">\r\n                                                <option>--Choisir le type de pièce--</option>\r\n                                                <option>CIN</option>\r\n                                                <option>Passport</option>\r\n                                                <option>Carte consulaire</option>\r\n                                                <option> Autres Pièce... </option>\r\n                                                </select>\r\n                                        <label class=\"ng-tns-c25-10\" for=\"exampleInputFile\" _ngcontent-c25=\"\">Choisir un fichier</label>\r\n                                        <input class=\"form-control-file\" id=\"exampleInputFile\" type=\"file\" _ngcontent-c25=\"\">\r\n                                    </fieldset>\r\n                                    </div>\r\n                                </div>\r\n                            </div>  \r\n\r\n                           <div>\r\n                               <label>Avis sur point</label>\r\n                                <div>\r\n                                  <span *ngFor=\"let option of rating\"><i [ngClass]=\"{'fa': true, 'fa-heart-o': !option.checked, 'fa-heart': option.checked}\" aria-hidden=\"true\" (click)=\"avoter(option.indice)\"></i></span>\r\n                                </div>\r\n                          </div>\r\n                    </div>\r\n\r\n\r\n        \r\n        </div>\r\n    </div>  \r\n                      \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

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
    function FormComponent() {
        this.fakevalues = true;
        this.isAdresseproprio = true;
        this.isAdressepoint = true;
        this.isUploadfile = true;
        this.isSelect = true;
        this.rating = [
            { indice: 0, checked: false },
            { indice: 1, checked: false },
            { indice: 2, checked: false },
            { indice: 3, checked: false },
            { indice: 4, checked: false },
        ];
    }
    FormComponent.prototype.ngOnInit = function () { };
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
                    if (this.rating[i].checked == true) {
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
    };
    FormComponent.prototype.coordonneesgeospatiales = function () {
        if (navigator.geolocation) {
            console.log("YES!");
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("Latitude " + position.coords.latitude);
                console.log("Longitude " + position.coords.longitude);
                sessionStorage.setItem('position', JSON.stringify(position));
            });
        }
    };
    FormComponent.prototype.enregistrerProspect = function () { };
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/layout/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/form/form.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [])
], FormComponent);

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
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]]
    })
], FormModule);

//# sourceMappingURL=form.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map