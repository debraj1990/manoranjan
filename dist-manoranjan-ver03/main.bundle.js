webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div> -->\n<!-- <app-searchcriteria></app-searchcriteria> --><!--not allowed as this is a modal content-->\n<!-- <app-artistlanding></app-artistlanding>\n<app-searchresults></app-searchresults> -->\n\n<div>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my app live changes';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_externalapi_service__ = __webpack_require__("./src/app/services/externalapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_speech_synthesiser_service__ = __webpack_require__("./src/app/services/speech-synthesiser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_phrase_matcher_service__ = __webpack_require__("./src/app/services/phrase-matcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_artistlanding_artistlanding_component__ = __webpack_require__("./src/app/components/artistlanding/artistlanding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_searchcriteria_searchcriteria_component__ = __webpack_require__("./src/app/components/searchcriteria/searchcriteria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_searchresults_searchresults_component__ = __webpack_require__("./src/app/components/searchresults/searchresults.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_previewplayer_previewplayer_component__ = __webpack_require__("./src/app/components/previewplayer/previewplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//routing 
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_artistlanding_artistlanding_component__["a" /* ArtistlandingComponent */] },
    // {path:'search', component:SearchcriteriaComponent}, //not allowed as this is modal content
    { path: 'searchresults/:artistname/:nofotracks', component: __WEBPACK_IMPORTED_MODULE_12__components_searchresults_searchresults_component__["a" /* SearchresultsComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_artistlanding_artistlanding_component__["a" /* ArtistlandingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_searchcriteria_searchcriteria_component__["a" /* SearchcriteriaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_searchresults_searchresults_component__["a" /* SearchresultsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_previewplayer_previewplayer_component__["a" /* PreviewplayerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__components_searchcriteria_searchcriteria_component__["a" /* SearchcriteriaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_previewplayer_previewplayer_component__["a" /* PreviewplayerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_externalapi_service__["a" /* ExternalapiService */], __WEBPACK_IMPORTED_MODULE_7__services_speech_synthesiser_service__["a" /* SpeechSynthesiserService */], __WEBPACK_IMPORTED_MODULE_8__services_phrase_matcher_service__["a" /* PhraseMatcherService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/artistlanding/artistlanding.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"center-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <!-- <div class=\"col-sm-2\">\r\n        <img class=\"\" src=\"{{fullImagePath}}\"/>\r\n      </div> -->\r\n      <div class=\"col-sm\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm align-content\">            \r\n                <button class=\"btn btn-primary btn-lg hide\" title=\"{{searchLabel}}\" (click)=\"openSearchDialog()\">Search Artist</button>\r\n                <i class=\"fa fa-microphone\" title=\"{{speechApi.micLabel}}\" (click)=\"speakToManoranjan($event)\"></i>\r\n                <div class=\"heading-text\">{{helloText}}\r\n                  <i class=\"fa fa-info-circle\" title=\"Info\" (click)=\"speechApi.speakText(helloVocalText)\"></i>\r\n                </div>\r\n              \r\n            </div>          \r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/artistlanding/artistlanding.component.scss":
/***/ (function(module, exports) {

module.exports = ".container .heading-text {\n  font-size: 20px;\n  padding-top: 10px; }\n\n.container img {\n  width: 60px;\n  margin-top: 75%;\n  margin-left: 75%;\n  -webkit-transform: rotate(-25deg);\n          transform: rotate(-25deg); }\n\n.container .center-div {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 430px;\n  height: 100px; }\n\n.container .btn {\n  margin-top: 5%;\n  margin-left: 20%; }\n\n.container i.fa.fa-microphone {\n  font-size: 80px;\n  width: 180px;\n  height: 180px;\n  border-radius: 200px;\n  background: #f00;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border: solid 20px #efeeec;\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.27);\n          box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.27); }\n\n.container i.fa.fa-microphone:before {\n    color: #f5f5dc; }\n\n.align-content {\n  text-align: center; }\n\n.center-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/components/artistlanding/artistlanding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistlandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchcriteria_searchcriteria_component__ = __webpack_require__("./src/app/components/searchcriteria/searchcriteria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_speech_synthesiser_service__ = __webpack_require__("./src/app/services/speech-synthesiser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_phrase_matcher_service__ = __webpack_require__("./src/app/services/phrase-matcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistlandingComponent = /** @class */ (function () {
    function ArtistlandingComponent(speechApi, speechListenApi, modalService) {
        this.speechApi = speechApi;
        this.speechListenApi = speechListenApi;
        this.modalService = modalService;
    }
    ArtistlandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voiceSettingsComplete = this.speechApi.populateVoiceSettings();
        this.fullImagePath = './assets/arrow.png';
        this.helloText = 'Click & Say "Hello Manoranjan"';
        this.helloVocalText = 'Click and Say "Hello Manoranjan"';
        this.welcomeText = 'Welcome to Manoranjan - The voice for Entertainment!!';
        this.searchLabel = 'Hello Dear; You can now search your entertainment stuff here. All you have to do is just click on mic & say: "Search Manoranjan"';
        this.voiceSettingsComplete.then(function (val) {
            console.log(val);
            _this.speechApi.speakText(_this.welcomeText);
            _this.speechApi.speakText("To start, " + _this.helloVocalText);
        });
        // this.speechListenApi.recognizeSpeechCommand('Hello Khojo', this, this.commandToActionConnector, event);
    };
    ArtistlandingComponent.prototype.commandToActionConnector = function (targetElement, callerReference, voiceResponseObj) {
        console.log('commandToActionConnector called..');
        console.log(voiceResponseObj);
        targetElement.classList.remove("in-use");
        if (voiceResponseObj.hasOwnProperty("speechResult")) {
            console.log(voiceResponseObj["speechResult"]);
            // console.log("Initial inputSpeech:"+callerReference.inputSpeech);
            // targetElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent = 'I heard "' + voiceResponseObj["speechResult"] + '"';
            // console.log("after assignment inputSpeech:"+callerReference.inputSpeech);
            switch (voiceResponseObj["speechResult"].toUpperCase()) {
                case "HELLO MANORANJAN":
                    callerReference.speechApi.speakText(callerReference.searchLabel);
                    // callerReference.manoranjanSays(callerReference.searchLabel);
                    break;
                case "SEARCH MANORANJAN":
                    // callerReference.openSearchDialog();
                    // callerReference.modalService.open(SearchcriteriaComponent, {centered: true, backdropClass: 'light-blue-backdrop'});
                    targetElement.previousElementSibling.click();
                    break;
                default:
                    callerReference.speechApi.speakText(callerReference.speechApi.invalidCommandMsg);
                    // callerReference.manoranjanSays(callerReference.speechApi.invalidCommandMsg);
                    break;
            }
        }
    };
    ArtistlandingComponent.prototype.speakToManoranjan = function (event) {
        // this.speechApi.stopSpeaking();
        var target = event.target || event.srcElement || event.currentTarget;
        target.classList.add("in-use");
        this.speechListenApi.listenRealTimeSpeech(event, this, false, this.commandToActionConnector);
    };
    ArtistlandingComponent.prototype.openSearchDialog = function () {
        // this.speechApi.stopSpeaking();
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__searchcriteria_searchcriteria_component__["a" /* SearchcriteriaComponent */], { centered: true, size: 'lg', backdropClass: 'light-blue-backdrop' });
        // modalRef.componentInstance.name = 'World';
    };
    ArtistlandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artistlanding',
            template: __webpack_require__("./src/app/components/artistlanding/artistlanding.component.html"),
            styles: [__webpack_require__("./src/app/components/artistlanding/artistlanding.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_speech_synthesiser_service__["a" /* SpeechSynthesiserService */], __WEBPACK_IMPORTED_MODULE_4__services_phrase_matcher_service__["a" /* PhraseMatcherService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ArtistlandingComponent);
    return ArtistlandingComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div [ngClass]=\"'container'\">\r\n    <div [ngClass]=\"'row'\">\r\n    <div [ngClass]=\"'col-md-8'\">\r\n      <ul>\r\n        <li>\r\n          <p>About NoidaGeeks Team &#8810;/&#8811; </p>\r\n        </li>\r\n        <li>\r\n          <picture>\r\n            <img src=\"{{amitkumarPng}}\" alt=\"Amit Kumar\"/>\r\n          </picture>          \r\n          <a href=\"https://www.linkedin.com/in/amitsingh84/\" target=\"_blank\">\r\n            <span>Amit Kumar</span>\r\n            <img src=\"{{linkedinPng}}\" alt=\"Linkedin\"/>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <picture>\r\n            <img src=\"{{debrajrayPng}}\" alt=\"Debraj Ray\"/>\r\n          </picture>      \r\n          <a href=\"https://www.linkedin.com/in/debraj-ray/\" target=\"_blank\">\r\n            <span>Debraj Ray</span>\r\n            <img src=\"{{linkedinPng}}\" alt=\"Linkedin\"/>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n    <div [ngClass]=\"'col-md-4 footer-text'\">\r\n      <strong>{{connectedWorldHackathon}}</strong>\r\n      <p>Copyright © 2018 </p>\r\n      <p>{{manoranjanAppName}} </p>\r\n    </div>\r\n  </div>\r\n  </div>   \r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "footer {\n  background: #f00;\n  min-height: 200px;\n  padding: 25px 0; }\n  footer ul {\n    list-style-type: none;\n    padding: 0; }\n  footer ul li {\n      display: block;\n      margin-bottom: 20px; }\n  @media (min-width: 768px) {\n        footer ul li {\n          float: left;\n          margin-left: 26px;\n          margin-bottom: 0; } }\n  footer ul li:first-child {\n        margin-left: 0;\n        padding-top: 10px;\n        text-align: center; }\n  @media (min-width: 768px) {\n          footer ul li:first-child {\n            padding-top: 48px;\n            text-align: left; } }\n  footer ul a,\n    footer ul span {\n      display: block;\n      text-align: center; }\n  footer ul a {\n      color: #000; }\n  @media (min-width: 768px) {\n    footer .col-md-8 {\n      padding-left: 0; } }\n  @media (min-width: 768px) {\n    footer .col-md-4 {\n      padding-right: 0; } }\n  picture {\n  display: block;\n  text-align: center; }\n  .footer-text {\n  padding-top: 10px;\n  text-align: center; }\n  @media (min-width: 768px) {\n    .footer-text {\n      text-align: right; } }\n  p {\n  font-size: 22px;\n  font-weight: 700;\n  font-style: italic; }\n  @media (min-width: 768px) {\n    p {\n      font-size: 16px; } }\n  @media (min-width: 992px) {\n    p {\n      font-size: 22px; } }\n  .attackimage {\n  margin-bottom: 15px;\n  display: inline-block; }\n  @media (min-width: 768px) {\n    .attackimage {\n      width: 180px; }\n      .attackimage img {\n        width: 100%; } }\n  @media (min-width: 992px) {\n    .attackimage {\n      width: auto; } }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.amitkumarPng = './assets/amitkumar.png';
        this.linkedinPng = './assets/linkedin.png';
        this.debrajrayPng = './assets/debrajray.png';
        this.connectedWorldHackathon = 'Manoranjan - The voice for Entertainment!!';
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/previewplayer/previewplayer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Preview Player</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <!-- <iframe width=\"420\" height=\"345\" [src]=\"iframeUrl | safe\">\n  </iframe> -->\n  <!-- <iframe src=\"https://stackoverflow.com/questions/39407618/angular-2-declaring-an-array-of-objects/39407753\"></iframe> -->\n  <!-- <iframe width=\"420\" height=\"315\"\n  src=\"https://www.youtube.com/embed/tgbNymZ7vqY\">\n  </iframe> -->\n  <!-- <audio controls>\n    <source src=\"{{iframeUrl}}\" type=\"audio/ogg\">\n    <source src=\"{{iframeUrl}}\" type=\"audio/mpeg\">\n  Your browser does not support the audio element.\n  </audio> -->\n  <video width=\"100%\" height=\"240\" controls autoplay poster=\"http://culturapoprigor.com.br/wp-content/uploads/2018/02/music.gif\">\n    <source src=\"{{iframeUrl}}\" type=\"video/mp4\">\n    <source src=\"{{iframeUrl}}\" type=\"video/ogg\">\n  Your browser does not support the video tag.\n  </video>\n  <!-- {{iframeUrl}} -->\n</div>\n<!-- <div class=\"modal-footer\">\n  <div class=\"col-sm\" style=\"margin-left: 37%;\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close('Cross click')\">Close</button>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/components/previewplayer/previewplayer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/previewplayer/previewplayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewplayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreviewplayerComponent = /** @class */ (function () {
    function PreviewplayerComponent(activeModal) {
        this.activeModal = activeModal;
    }
    PreviewplayerComponent.prototype.ngOnInit = function () {
        // this.setVideoWidth();
    };
    PreviewplayerComponent.prototype.setVideoWidth = function () {
        var modalBody = __WEBPACK_IMPORTED_MODULE_2_jquery__(".modal-body");
        this.modalWidth = modalBody.width();
        console.log(this.modalWidth);
        modalBody.find("video").attr("width", this.modalWidth - 48);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PreviewplayerComponent.prototype, "iframeUrl", void 0);
    PreviewplayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-previewplayer',
            template: __webpack_require__("./src/app/components/previewplayer/previewplayer.component.html"),
            styles: [__webpack_require__("./src/app/components/previewplayer/previewplayer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], PreviewplayerComponent);
    return PreviewplayerComponent;
}());



/***/ }),

/***/ "./src/app/components/searchcriteria/searchcriteria.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<form ngNativeValidate (submit)=\"submitSearchCriteria()\">\r\n  <div class=\"modal-body\">\r\n      <div class=\"row form-group\">\r\n        \r\n        <div class=\"col-sm search-input-container\">\r\n            <input type=\"text\" [(ngModel)]=\"artistname\" (click)=\"voiceToText($event)\" placeholder=\"{{textLabel}}\"  name=\"artistname\"  id=\"artistname\" class=\"form-control\" required/>\r\n            <i class=\"fa fa-microphone\" title=\"{{speechApi.micLabel}}\" (click)=\"speakToManoranjan($event)\"></i>\r\n            <i class=\"fa fa-info-circle\" title=\"Info\" (click)=\"speechApi.speakText(textLabel)\"></i>           \r\n        </div>\r\n        \r\n      </div>\r\n      \r\n            \r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <div class=\"top-arrow\">top-arrow</div>\r\n    <p>{{tapInstruction}}<i class=\"fa fa-info-circle\" title=\"Info\" (click)=\"speechApi.speakText(tapInstruction)\"></i></p>\r\n    <button type=\"submit\" class=\"btn btn-primary hide\">Search</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/searchcriteria/searchcriteria.component.scss":
/***/ (function(module, exports) {

module.exports = ".light-blue-backdrop {\n  background-color: #5cb3fd; }\n\n.modal-header {\n  border-bottom: none;\n  padding: 1rem 1.5rem; }\n\n.modal-header .modal-title {\n    color: #7E7E7E;\n    font-weight: 400; }\n\nform .form-control {\n  width: 95%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-right: 2px solid #DBDBDB;\n  background-color: #F5F5F5;\n  border-bottom: 2px solid #DBDBDB;\n  border-radius: unset;\n  display: inline-block;\n  width: 88%;\n  height: 90px;\n  padding-right: 58px;\n  border: 0;\n  border-bottom: 3px solid #767676; }\n\n@media (min-width: 768px) {\n    form .form-control {\n      width: 95%;\n      padding-right: 0; } }\n\nform label {\n  color: #666666; }\n\nform .modal-body {\n  padding: 3rem 2rem; }\n\nform .modal-footer {\n  border-top: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #db1e4b;\n  font-size: 25px;\n  color: white;\n  padding: 1.5rem;\n  text-align: center;\n  position: relative; }\n\nform .modal-footer .top-arrow {\n    width: 0;\n    height: 0;\n    border-left: 30px solid #0000;\n    border-right: 30px solid #0000;\n    border-bottom: 30px solid #db1e4b;\n    font-size: 0;\n    line-height: 0;\n    position: absolute;\n    top: -29px; }\n\nform img {\n  width: 60px;\n  margin-top: -36px;\n  transform: rotate(-25deg);\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1); }\n\n.search-input-container {\n  position: relative; }\n\n.search-input-container .fa-microphone {\n    position: absolute;\n    top: 20px;\n    right: 60px; }\n\n@media (min-width: 768px) {\n      .search-input-container .fa-microphone {\n        right: 76px; } }\n\n.search-input-container .fa-microphone:before {\n      color: #db1e4b; }\n\ni.fa.fa-info-circle {\n  margin: 3px; }\n"

/***/ }),

/***/ "./src/app/components/searchcriteria/searchcriteria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchcriteriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_speech_synthesiser_service__ = __webpack_require__("./src/app/services/speech-synthesiser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_phrase_matcher_service__ = __webpack_require__("./src/app/services/phrase-matcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchcriteriaComponent = /** @class */ (function () {
    function SearchcriteriaComponent(activeModal, router, route, speechApi, speechListenApi) {
        this.activeModal = activeModal;
        this.router = router;
        this.route = route;
        this.speechApi = speechApi;
        this.speechListenApi = speechListenApi;
        // @Input() name;
        this.name = 'my app dialog';
    }
    SearchcriteriaComponent.prototype.ngOnInit = function () {
        this.voiceSettingsComplete = this.speechApi.populateVoiceSettings();
        // this.artistname = 'Debraj Ray';
        this.nofotracks = 25;
        this.textLabel = 'Enter any movie, album, artist, podcast, musicVideo, audiobook, tvSeason or shortFilm.';
        this.confirmPreText = 'I heard: "';
        this.confirmPostText = '"; If you want to search this term, then click on the mic and say "search Manoranjan"!!';
        this.tapInstruction = 'Just tap on the textbox and speak your search term';
        this.fullImagePath = './assets/arrow.png';
        // this.voiceSettingsComplete.then(
        //   (val) => {console.log(val);
        this.speechApi.speakText(this.textLabel + this.tapInstruction);
        // });
    };
    SearchcriteriaComponent.prototype.voiceToText = function (event) {
        this.speechApi.stopSpeaking();
        var voiceRealResponse = this.speechListenApi.listenRealTimeSpeech(event, this, false, this.populateTextToField);
        // callbackFn(voiceRealResponse);
    };
    SearchcriteriaComponent.prototype.populateTextToField = function (targetElement, callerReference, voiceResponseObj) {
        console.log('populateTextToField called..');
        console.log(voiceResponseObj);
        if (voiceResponseObj.hasOwnProperty("speechResult")) {
            console.log(voiceResponseObj["speechResult"]);
            console.log("Initial artistname:" + callerReference.artistname);
            callerReference.artistname = voiceResponseObj["speechResult"];
            // callerReference.form.get('email').setValue("example@example.com");
            targetElement.value = callerReference.artistname;
            callerReference.speechApi.speakText(callerReference.confirmPreText + callerReference.artistname + callerReference.confirmPostText);
        }
        console.log("After artistname:" + callerReference.artistname);
    };
    SearchcriteriaComponent.prototype.commandToActionConnector = function (targetElement, callerReference, voiceResponseObj) {
        console.log('commandToActionConnector called..');
        console.log(voiceResponseObj);
        targetElement.classList.remove("in-use");
        if (voiceResponseObj.hasOwnProperty("speechResult")) {
            console.log(voiceResponseObj["speechResult"]);
            // console.log("Initial inputSpeech:"+callerReference.inputSpeech);
            // targetElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent = 'I heard "' + voiceResponseObj["speechResult"] + '"';
            // console.log("after assignment inputSpeech:"+callerReference.inputSpeech);
            switch (voiceResponseObj["speechResult"].toUpperCase()) {
                // case "HELLO MANORANJAN":
                //   callerReference.speechApi.speakText(callerReference.searchLabel);
                //   // callerReference.manoranjanSays(callerReference.searchLabel);
                //   break;
                case "SEARCH MANORANJAN":
                    // callerReference.modalService.open(SearchcriteriaComponent, {centered: true, backdropClass: 'light-blue-backdrop'});
                    targetElement.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.click();
                    break;
                default:
                    callerReference.speechApi.speakText(callerReference.speechApi.invalidCommandMsg);
                    // callerReference.manoranjanSays(callerReference.speechApi.invalidCommandMsg);
                    break;
            }
        }
    };
    SearchcriteriaComponent.prototype.speakToManoranjan = function (event) {
        // this.speechApi.stopSpeaking();
        var target = event.target || event.srcElement || event.currentTarget;
        target.classList.add("in-use");
        this.speechListenApi.listenRealTimeSpeech(event, this, false, this.commandToActionConnector);
    };
    SearchcriteriaComponent.prototype.submitSearchCriteria = function () {
        this.router.navigate(['searchresults/' + this.artistname + '/' + this.nofotracks]);
        this.activeModal.close('Close click');
    };
    SearchcriteriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-searchcriteria',
            template: __webpack_require__("./src/app/components/searchcriteria/searchcriteria.component.html"),
            styles: [__webpack_require__("./src/app/components/searchcriteria/searchcriteria.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_speech_synthesiser_service__["a" /* SpeechSynthesiserService */], __WEBPACK_IMPORTED_MODULE_4__services_phrase_matcher_service__["a" /* PhraseMatcherService */]])
    ], SearchcriteriaComponent);
    return SearchcriteriaComponent;
}());



/***/ }),

/***/ "./src/app/components/searchresults/searchresults.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-result-header\">\r\n    <div class=\"container\">\r\n      <div class=\"col-sm\">\r\n          <h1 class=\"heading-text\">Search results for \"{{artistname}}\".   </h1>\r\n          <a [routerLink]=\"['']\" href=\"#\" class=\"clear\" role=\"button\">( Clear )</a>\r\n          <i class=\"fa fa-microphone\" title=\"{{speechApi.micLabel}}\" (click)=\"speakToManoranjan($event)\"></i>\r\n      </div>\r\n      \r\n    </div>\r\n</div>\r\n<div class=\"container\">  \r\n  <section *ngIf=\"searchResultsObj?.resultCount > 0\">\r\n    <div class=\"row result-box\" *ngFor=\"let searchItem of searchResultsObj.results; let i = index\">\r\n      <div class=\"col-sm-2\">\r\n        <img class=\"img-thumbnail rounded-circle\" src=\"{{searchItem.artworkUrl100}}\" title=\"{{searchItem.trackName}}\"/>\r\n      </div>\r\n      <div class=\"col-sm artist-details\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm\">\r\n            <span class=\"bold-text\">Artist name : {{searchItem.artistName}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm\">\r\n            <span class=\"bold-text\">Track name : {{searchItem.trackName}}</span>\r\n          </div>\r\n        </div>        \r\n        <div class=\"row\">\r\n          <div class=\"col-sm\">\r\n            <span class=\"light-text\">{{searchItem.shortDescription}}</span> <!--.substr(0, 40)-->\r\n          </div>\r\n        </div>        \r\n        <div class=\"row\">\r\n          <div class=\"col-sm\">\r\n            <p class=\"mic-text\">{{playInstruction}}<strong>{{i < 9 ? '0'+(i+1)+'\"' : (i+1)+'\"'}}</strong>\r\n              <i class=\"fa fa-info-circle\" title=\"Info\" (click)=\"manoranjanSays(playVoiceInstruction, i)\"></i>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm\">\r\n              <button class=\"btn btn-primary btn-lg hide\" attr.data-identifierbtn=\"play{{i < 9 ? '0'+(i+1) : (i+1)}}\" (click)=\"openPlayerDialog(searchItem.previewUrl)\">Play Preview</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section *ngIf=\"searchResultsObj?.resultCount == 0\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\">\r\n        <span>No match found!!</span>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/components/searchresults/searchresults.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 5%; }\n  .container section {\n    margin-top: 2%; }\n  .container section .result-box {\n      margin: 10px; }\n  .container section .result-box img {\n        width: 100%;\n        max-width: 125px;\n        max-height: 125px; }\n  .container section .result-box .artist-details {\n        border-bottom: 1px solid #CCCCCC;\n        padding-bottom: 10px;\n        padding-left: 0; }\n  .container section .result-box .artist-details .bold-text {\n          font-weight: 500; }\n  .container section .result-box .artist-details .light-text {\n          color: #5f5d5d; }\n  .container section .result-box .artist-details .mic-text {\n          color: #db1e4b;\n          margin-top: 17px; }\n  .container .search-result-header {\n    padding-bottom: 40px; }\n  @media (min-width: 768px) {\n      .container .search-result-header {\n        padding-bottom: 0; } }\n  .container .search-result-header .heading-text {\n      font-size: xx-large; }\n  .container .search-result-header .fa-microphone:before {\n      color: #db1e4b; }\n  .search-result-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: #db1e4b;\n  z-index: 5;\n  padding-bottom: 20px; }\n  @media (min-width: 768px) {\n    .search-result-header {\n      padding-bottom: 0; } }\n  .heading-text {\n  display: inline-block;\n  padding-bottom: 10px;\n  color: #fff; }\n  @media (min-width: 768px) {\n    .heading-text {\n      padding-bottom: 45px; } }\n  .clear {\n  margin-right: 25px;\n  margin-left: 25px;\n  color: #000; }\n"

/***/ }),

/***/ "./src/app/components/searchresults/searchresults.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_externalapi_service__ = __webpack_require__("./src/app/services/externalapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__previewplayer_previewplayer_component__ = __webpack_require__("./src/app/components/previewplayer/previewplayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_speech_synthesiser_service__ = __webpack_require__("./src/app/services/speech-synthesiser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_phrase_matcher_service__ = __webpack_require__("./src/app/services/phrase-matcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchresultsComponent = /** @class */ (function () {
    function SearchresultsComponent(speechApi, speechListenApi, ajaxApi, router, route, modalService) {
        this.speechApi = speechApi;
        this.speechListenApi = speechListenApi;
        this.ajaxApi = ajaxApi;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.searchResultsObj = {};
    }
    SearchresultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.voiceSettingsComplete = this.speechApi.populateVoiceSettings();
        this.artistname = this.route.snapshot.params['artistname'];
        this.nofotracks = this.route.snapshot.params['nofotracks'];
        this.invalidTrackCommandMsg = 'Not a valid track number to play! Please ask for a valid track. For example: "Play 11"';
        this.playInstruction = 'Tap on mic & say "Play ';
        this.playVoiceInstruction = 'Click on mic and say "Play ';
        this.resultsInstruction = 'Here you can ask for playing the preview tracks. For example: Click on mic and Say "Play 11"';
        var serviceUri = 'https://itunes.apple.com/search?term=' + this.artistname + '&limit=' + this.nofotracks;
        console.log(serviceUri);
        this.ajaxApi.getSearchResults(serviceUri).subscribe(function (data) {
            _this.searchResultsObj = data;
            console.log(_this.searchResultsObj);
        });
        this.speechApi.speakText("Below are the search results for " + this.artistname);
        this.speechApi.speakText(this.resultsInstruction);
    };
    SearchresultsComponent.prototype.commandToActionConnector = function (targetElement, callerReference, voiceResponseObj) {
        console.log('commandToActionConnector called..');
        console.log(voiceResponseObj);
        targetElement.classList.remove("in-use");
        if (voiceResponseObj.hasOwnProperty("speechResult")) {
            console.log(voiceResponseObj["speechResult"]);
            // console.log("Initial inputSpeech:"+callerReference.inputSpeech);
            // targetElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent = 'I heard "' + voiceResponseObj["speechResult"] + '"';
            // console.log("after assignment inputSpeech:"+callerReference.inputSpeech);
            var trackCommandPrefix = voiceResponseObj["speechResult"].substr(0, 4).toLowerCase();
            var trackCommandIndex = voiceResponseObj["speechResult"].substr(5).toLowerCase();
            switch (trackCommandPrefix) {
                case "clea":
                    targetElement.previousElementSibling.click();
                    break;
                case "play":
                    var selectedTrack = __WEBPACK_IMPORTED_MODULE_7_jquery__("button[data-identifierbtn='" + trackCommandPrefix + trackCommandIndex + "']");
                    if (selectedTrack.length > 0) {
                        selectedTrack.click();
                    }
                    else {
                        callerReference.speechApi.speakText(callerReference.invalidTrackCommandMsg);
                    }
                    break;
                default:
                    callerReference.speechApi.speakText(callerReference.speechApi.invalidCommandMsg);
                    // callerReference.manoranjanSays(callerReference.speechApi.invalidCommandMsg);
                    break;
            }
        }
    };
    SearchresultsComponent.prototype.speakToManoranjan = function (event) {
        // this.speechApi.stopSpeaking();
        var target = event.target || event.srcElement || event.currentTarget;
        target.classList.add("in-use");
        this.speechListenApi.listenRealTimeSpeech(event, this, false, this.commandToActionConnector);
    };
    SearchresultsComponent.prototype.manoranjanSays = function (voiceText, trackNo) {
        // this.speechApi.stopSpeaking();
        var trackNoStr = trackNo < 9 ? 'Zero' + (trackNo + 1) + '"' : (trackNo + 1) + '"';
        this.speechApi.speakText(voiceText + trackNoStr);
    };
    SearchresultsComponent.prototype.openPlayerDialog = function (previewUrl) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__previewplayer_previewplayer_component__["a" /* PreviewplayerComponent */], { centered: true, size: 'lg', backdropClass: 'light-blue-backdrop' });
        modalRef.componentInstance.iframeUrl = previewUrl;
        // modalRef.opened.then(function(){
        //   alert('hi');
        // });
    };
    SearchresultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-searchresults',
            template: __webpack_require__("./src/app/components/searchresults/searchresults.component.html"),
            styles: [__webpack_require__("./src/app/components/searchresults/searchresults.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_speech_synthesiser_service__["a" /* SpeechSynthesiserService */], __WEBPACK_IMPORTED_MODULE_6__services_phrase_matcher_service__["a" /* PhraseMatcherService */], __WEBPACK_IMPORTED_MODULE_2__services_externalapi_service__["a" /* ExternalapiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], SearchresultsComponent);
    return SearchresultsComponent;
}());



/***/ }),

/***/ "./src/app/services/externalapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExternalapiService = /** @class */ (function () {
    function ExternalapiService(http) {
        this.http = http;
    }
    ExternalapiService.prototype.getSearchResults = function (serviceUri) {
        return this.http.get(serviceUri)
            .map(function (res) { return res.json(); });
    };
    ExternalapiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ExternalapiService);
    return ExternalapiService;
}());



/***/ }),

/***/ "./src/app/services/phrase-matcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhraseMatcherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhraseMatcherService = /** @class */ (function () {
    function PhraseMatcherService() {
        this.SpeechRecognition = window["SpeechRecognition"] || window["webkitSpeechRecognition"];
        this.SpeechGrammarList = window["SpeechGrammarList"] || window["webkitSpeechGrammarList"];
        this.SpeechRecognitionEvent = window["SpeechRecognitionEvent"] || window["webkitSpeechRecognitionEvent"];
    }
    PhraseMatcherService.prototype.listenRealTimeSpeech = function (event, callerReference, interimFlag, callbackFn) {
        console.log('started listening..');
        var target = event.target || event.srcElement || event.currentTarget;
        // console.log(target);
        // let $this = $(target);
        // testBtn.textContent = 'Listening...';
        var voiceResponse = {};
        var grammar = '#JSGF V1.0; grammar phrase;'; //'#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
        var recognition = new this.SpeechRecognition();
        var speechRecognitionList = new this.SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US'; //'hi-IN';
        recognition.interimResults = interimFlag;
        recognition.maxAlternatives = 1;
        recognition.start();
        console.log('speech processing..');
        recognition.onresult = function (event) {
            // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
            // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
            // It has a getter so it can be accessed like an array
            // The first [0] returns the SpeechRecognitionResult at position 0.
            // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
            // These also have getters so they can be accessed like arrays.
            // The second [0] returns the SpeechRecognitionAlternative at position 0.
            // We then return the transcript property of the SpeechRecognitionAlternative object 
            var speechResult = event.results[0][0].transcript;
            console.log('Speech received: ' + speechResult);
            // target.value = speechResult;
            voiceResponse["speechResult"] = speechResult;
            console.log('Confidence: ' + event.results[0][0].confidence);
            callbackFn(target, callerReference, voiceResponse);
        };
        recognition.onspeechend = function () {
            recognition.stop();
            // testBtn.disabled = false;
            // testBtn.textContent = 'Start new test';
        };
        recognition.onerror = function (event) {
            // testBtn.disabled = false;
            // testBtn.textContent = 'Start new test';
            // diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
            voiceResponse["error"] = 'Error occurred in recognition: ' + event.error;
            callbackFn(target, callerReference, voiceResponse);
        };
        // return voiceResponse;
    };
    PhraseMatcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PhraseMatcherService);
    return PhraseMatcherService;
}());



/***/ }),

/***/ "./src/app/services/speech-synthesiser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechSynthesiserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeechSynthesiserService = /** @class */ (function () {
    function SpeechSynthesiserService() {
        this.synth = window.speechSynthesis;
        this.voices = [];
        this.speechSettings = {};
        this.micLabel = 'Click & Speak to Manoranjan';
        this.invalidCommandMsg = 'That didn\'t sound right. Can you please give me a valid instruction?';
    }
    SpeechSynthesiserService.prototype.populateVoiceSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // this.voices = this.synth.getVoices();
            _this.speechSettings = { lang: "hi-IN", name: "Google हिन्दी", pitch: 1, rate: 1 };
            // this.speechSettings.lang = "hi-IN";
            // this.speechSettings.name = "Google हिन्दी";
            // this.speechSettings.pitch = 1;
            // this.speechSettings.rate = 1;
            var self = _this; //console.log(self);
            // wait on voices to be loaded before fetching list
            _this.synth.onvoiceschanged = function () {
                // console.log(this);
                // console.log(self);
                self.voices = self.synth.getVoices();
                if (self.voices.length === 0) {
                    reject('error'); // pass values
                }
                else {
                    resolve('done'); // pass values
                }
            };
        });
    };
    SpeechSynthesiserService.prototype.speakText = function (speechText) {
        var utterThis = new SpeechSynthesisUtterance(speechText);
        // let voiceSettingsComplete = this.populateVoiceSettings();
        // voiceSettingsComplete.then(
        //   (val) => {console.log(val);
        for (var i = 0; i < this.voices.length; i++) {
            if (this.voices[i].name === this.speechSettings["name"]) {
                utterThis.voice = this.voices[i];
                break;
            }
        }
        utterThis.pitch = this.speechSettings["pitch"];
        utterThis.rate = this.speechSettings["rate"];
        this.synth.speak(utterThis);
        //   }
        // );
    };
    SpeechSynthesiserService.prototype.stopSpeaking = function () {
        this.synth.cancel();
    };
    SpeechSynthesiserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SpeechSynthesiserService);
    return SpeechSynthesiserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map