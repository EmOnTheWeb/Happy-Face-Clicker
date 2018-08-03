(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _faces_faces_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faces/faces.component */ "./src/app/faces/faces.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _faces_faces_component__WEBPACK_IMPORTED_MODULE_2__["FacesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { margin:8px;  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _faces_faces_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faces/faces.component */ "./src/app/faces/faces.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _faces_faces_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faces/faces.service */ "./src/app/faces/faces.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _faces_faces_component__WEBPACK_IMPORTED_MODULE_6__["FacesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [_faces_faces_service__WEBPACK_IMPORTED_MODULE_8__["FaceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/faces/faces.component.css":
/*!*******************************************!*\
  !*** ./src/app/faces/faces.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".face-row {\n\tdisplay:flex; \n\tflex-wrap:wrap;\n\tmargin-right:-10px; \n\tmax-height:100vh; \n\toverflow:hidden;\n\tmax-width:1200px;\n\tmargin:0 auto; \n}\n.face-container {\n\twidth:20%; \n\tpadding-top:20%; \n\tposition:relative; \t\n}\n.face-container:nth-child(5n) > .face-img {\n\tright:0px; \n}\n@media(max-width:600px){\n\t.face-container {\n\t\twidth:25%; \n\t\tpadding-top:25%; \n\t}\n\t.face-container:nth-child(4n) > .face-img {\n\t\tright:0px; \n\t}\n\t.face-container:nth-child(5n) > .face-img {\n\t\tright:8px; \n\t}\n}\n@media(max-width:400px) {\n\t.face-container {\n\t\twidth:50%; \n\t\tpadding-top:50%; \n\t}\n\t.face-container:nth-child(2n) > .face-img {\n\t\tright:0px; \n\t}\n\n\t.face-container:nth-child(5n) > .face-img {\n\t\tright:8px; \n\t}\n}\n.face-img {\n\tposition:absolute; \n\ttop:0; \n\tleft:0; \n\tright:8px;  \n\tbottom:8px;\n\tcursor:pointer; \n\tbackground-size:cover; \n\tbackground-position:center center; \n\n\t-webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 11.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 11.1 */\n            animation: fadein 1s;\n}\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n/* Internet Explorer */\n/* Opera < 12.1 */\n.italic { font-style: italic; }\n.modal-body p {\n\tfont-size:14px; \n\tline-height:1.2;\n}\n.modal-button {\n\tbackground-color: #ffea00;\n\tcursor:pointer;\n}\np.instructions {\n\tfont-size: 16px; \n\tfont-weight:bold;\n\tmargin-bottom:5px;\n}\np.instructions span {\n\ttext-decoration:underline;\n}\n\n"

/***/ }),

/***/ "./src/app/faces/faces.component.html":
/*!********************************************!*\
  !*** ./src/app/faces/faces.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row face-row\">\n\t<ng-container *ngFor=\"let face of facesToShow\">\n\t\t<div class=\"face-container\"><div [ngStyle]=\"{'background-image': 'url(' + facesAssetPath + face.path +')'}\" class=\"face-img\" (click)=\"check(face.status)\"></div></div>\n\t</ng-container>\t\n</div>\n<ng-template #content let-c=\"close\">\n  \t<div class=\"modal-body\">\n\t    <p>This Happy Face Clicker is modeled on the 'attention training game' featured on the BBC Horizon documentary <span class=\"italic\">Rainy Brain Sunny Brain</span>. By searching for the smiley face, train the mind to disengage from the frowning faces and focus on the positive. Through habituation, this creates a positive attention bias and improves a sense of wellbeing.</p>\n\n\t\t<p>The game was originally developed by Dr Mark Baldwin at McGill University in Canada.</p>\n\n\t\t<p>The website needs more faces! If you would like to contribute your face, frown or smile, please send images to <a href=\"mailto:happyfaceclicker@gmail.com\">happyfaceclicker@gmail.com</a>. We especially need frowns! But please make sure the frown is a frown and not a smile because otherwise the game becomes confusing and ineffectual. Don't hesitate to email if you'd like your face taken down.</p> \n\n\t\t<p class=\"instructions\"><span>How to play:</span> find and click the smiley face. Repeat.</p>\n  \t</div>\n   <button type=\"button\" class=\"btn btn-light modal-button\" (click)=\"c('close click')\">Got it!</button>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/faces/faces.component.ts":
/*!******************************************!*\
  !*** ./src/app/faces/faces.component.ts ***!
  \******************************************/
/*! exports provided: FacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacesComponent", function() { return FacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faces_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faces.service */ "./src/app/faces/faces.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacesComponent = /** @class */ (function () {
    function FacesComponent(faceService, modalService, changeDetector) {
        this.faceService = faceService;
        this.modalService = modalService;
        this.changeDetector = changeDetector;
        this.allFrowns = [];
        this.facesToShow = [];
        this.facesAssetPath = 'assets/faces/';
    }
    FacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchFacesFromServer();
        var alreadyReadModal = localStorage.getItem('hfc-modal');
        if (!alreadyReadModal) {
            setTimeout(function () { _this.openModal(_this.modalContent); }, 0);
        }
    };
    FacesComponent.prototype.openModal = function (content) {
        this.modalService.open(content, { centered: true }).result.then(function (result) {
            localStorage.setItem('hfc-modal', '1');
        }, function () { });
    };
    FacesComponent.prototype.check = function (status) {
        if (status === 'smile') {
            this.fetchFacesFromServer();
        }
    };
    FacesComponent.prototype.fetchFacesFromServer = function () {
        var _this = this;
        console.log('method to fetch new faces from server');
        var frownPromise = new Promise(function (resolve, reject) {
            _this.faceService.getFrowns().subscribe(function (frowns) {
                // console.log(JSON.stringify(frowns));
                resolve(frowns);
            }, function (error) {
                console.error(error);
                reject(error);
            });
        });
        var smilePromise = new Promise(function (resolve, reject) {
            _this.faceService.getSmile().subscribe(function (smile) {
                // console.log(JSON.stringify(smile)); 
                resolve(smile);
            }, function (error) {
                reject(error);
                console.error(error);
            });
        });
        Promise.all([frownPromise, smilePromise]).then(function (frownsAndSmile) {
            _this.allFrowns = frownsAndSmile[0]['faces']; //save all fronts incase of browser resize
            var filteredFrowns = _this.filterNumFrowns();
            _this.facesToShow = _this.insertSmileIntoFrowns({ frowns: filteredFrowns, smile: frownsAndSmile[1]['faces'] });
        }, function (error) { return console.error(error); });
    };
    FacesComponent.prototype.insertSmileIntoFrowns = function (faces) {
        var frowns = faces.frowns, smile = faces.smile;
        var index = Math.floor((Math.random() * this.numFacesToShow));
        frowns.splice(index, 0, smile[0]);
        return frowns;
    };
    FacesComponent.prototype.filterNumFrowns = function () {
        var _this = this;
        this.numFacesToShow = this.calculateNumFacesToShow();
        var allFrownsCopy = JSON.parse(JSON.stringify(this.allFrowns));
        return allFrownsCopy.filter(function (item, index) { return (index < _this.numFacesToShow - 1); });
    };
    FacesComponent.prototype.calculateNumFacesToShow = function () {
        var numImgToFitWidthways;
        if (window.innerWidth > 600) {
            numImgToFitWidthways = 5;
        }
        else if (window.innerWidth > 400 && window.innerWidth < 601) {
            numImgToFitWidthways = 4;
        }
        else if (window.innerWidth < 400) {
            numImgToFitWidthways = 2;
        }
        var viewportWidthWOMargin = (window.innerWidth >= 1200) ? 1200 - 8 : window.innerWidth - 8; //8px is the extra margin 
        var imgWidthWMargin = viewportWidthWOMargin / numImgToFitWidthways; //also img height w margin 
        var viewportHeightWOMargin = window.innerHeight - 8;
        //how many fit 
        var numImgFitHeightways = Math.floor(viewportHeightWOMargin / imgWidthWMargin);
        var numImgToShow = numImgFitHeightways * numImgToFitWidthways;
        console.log(numImgToShow);
        return numImgToShow;
    };
    FacesComponent.prototype.c = function () {
        console.log('modal closed');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], FacesComponent.prototype, "modalContent", void 0);
    FacesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faces',
            template: __webpack_require__(/*! ./faces.component.html */ "./src/app/faces/faces.component.html"),
            styles: [__webpack_require__(/*! ./faces.component.css */ "./src/app/faces/faces.component.css")]
        }),
        __metadata("design:paramtypes", [_faces_service__WEBPACK_IMPORTED_MODULE_1__["FaceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], FacesComponent);
    return FacesComponent;
}());



/***/ }),

/***/ "./src/app/faces/faces.service.ts":
/*!****************************************!*\
  !*** ./src/app/faces/faces.service.ts ***!
  \****************************************/
/*! exports provided: FaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceService", function() { return FaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaceService = /** @class */ (function () {
    function FaceService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:8000';
    }
    FaceService.prototype.getFrowns = function () {
        var URI = this.serverApi + "/faces/frowns";
        return this.http.get(URI)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    FaceService.prototype.getSmile = function () {
        var URI = this.serverApi + "/faces/smile";
        return this.http.get(URI)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    FaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FaceService);
    return FaceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emiliedannenberg/Desktop/Github/Happy-Face-Clicker--frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map