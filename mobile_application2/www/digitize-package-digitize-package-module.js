(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["digitize-package-digitize-package-module"],{

/***/ "./src/app/pages/digitize-package/digitize-package.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/digitize-package/digitize-package.module.ts ***!
  \*******************************************************************/
/*! exports provided: DigitizePackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitizePackagePageModule", function() { return DigitizePackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _digitize_package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./digitize-package.page */ "./src/app/pages/digitize-package/digitize-package.page.ts");
/* harmony import */ var _image_selection_image_selection_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-selection/image-selection.module */ "./src/app/pages/image-selection/image-selection.module.ts");







//import { ImageSelectionPageModule } from '../image-selection/image-selection.module';

var routes = [
    {
        path: '',
        component: _digitize_package_page__WEBPACK_IMPORTED_MODULE_6__["DigitizePackagePage"]
    }
];
var DigitizePackagePageModule = /** @class */ (function () {
    function DigitizePackagePageModule() {
    }
    DigitizePackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _image_selection_image_selection_module__WEBPACK_IMPORTED_MODULE_7__["ImageSelectionPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_digitize_package_page__WEBPACK_IMPORTED_MODULE_6__["DigitizePackagePage"]]
        })
    ], DigitizePackagePageModule);
    return DigitizePackagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/digitize-package/digitize-package.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/digitize-package/digitize-package.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\" slot=\"icon-only\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>SnapToDigitize</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--   <ion-item-divider id=\"poNumber\" [color]=\"digitizeObj.poNumber==='' && isError ? 'danger' : 'primary'\">PO Number - file\n    name</ion-item-divider>\n  <ion-item>\n    <ion-input type=\"text\" placeholder=\"Enter PO number\" [(ngModel)]=\"digitizeObj.poNumber\"></ion-input>\n  </ion-item> -->\n  <ion-item-divider id=\"size\"\n    [color]=\"(digitizeObj.sizeValue==='' || digitizeObj.size==='') && isError ? 'danger' : 'primary'\">Embroidery Size -\n    we keep it proportional\n  </ion-item-divider>\n  <ion-list class=\"custom-list\">\n    <ion-radio-group [(ngModel)]=\"digitizeObj.size\" name=\"size\">\n      <ion-row radio-group>\n        <ion-item>\n          <ion-label>Height</ion-label>\n          <ion-radio value=\"Height\">Height</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Wide</ion-label>\n          <ion-radio value=\"Wide\">Wide</ion-radio>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item>\n\n          <ion-input type=\"number\" placeholder=\"in inches\" [(ngModel)]=\"digitizeObj.sizeValue\"></ion-input>\n           <ion-label>Inches</ion-label>\n        </ion-item>\n      </ion-row>\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-item-divider id=\"price\" [color]=\"digitizeObj.price==='' && isError ? 'danger' : 'primary'\">Package\n  </ion-item-divider>\n  <ion-list class=\"custom-list\">\n    <ion-radio-group [(ngModel)]=\"digitizeObj.price\" name=\"price\" (ngModelChange)=\"updateLogoTypePrice($event)\" >\n      <ion-item>\n        <ion-label>$15 - Left chest or Hats up to 4x4 inch</ion-label>\n        <ion-radio value=\"15\">$15 - Left chest or Hats up to 4x4 inch</ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>$20 -Size up to - 7x7 inch</ion-label>\n        <ion-radio value=\"20\">$20 - Size up to - 7x7 inch</ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>$30 - Full back up to 12x12</ion-label>\n        <ion-radio value=\"30\">$30 - Full back up to 12x12</ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>$40 - up to 15 x 15</ion-label>\n        <ion-radio value=\"40\">$40 - up to 15 x 15</ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>$50 - up to 20 x 20</ion-label>\n        <ion-radio value=\"50\">$50 - up to 20 x 20</ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  <ion-item-group>\n    <ion-item-divider color=\"primary\">Required Earlier - less than 24 hours</ion-item-divider>\n    <ion-item>\n      <ion-label>\n        Rush! Rush! - Add $10\n      </ion-label>\n  <!--     <ion-checkbox item-right [disabled]=\"isRushdisabled==true\" [(ngModel)]=\"digitizeObj.isUrgent\"\n        (ionChange)=\"updatePriceForUrgent()\"></ion-checkbox> -->\n         <ion-checkbox item-right  [(ngModel)]=\"digitizeObj.isUrgent\"\n        (ionChange)=\"updatePriceForUrgent()\"></ion-checkbox>\n    </ion-item>\n    <ion-item-divider id=\"fileFormat\" [color]=\"digitizeObj.fileFormat==='' && isError ? 'danger' : 'primary'\" tappable\n      (click)=\"toggleSection()\" detail-none [ngClass]=\"{'section-active': fileListOpen, 'section': !fileListOpen}\">\n      <ion-label style=\"margin:13px 0px\">\n        File Format\n      </ion-label>\n      <ion-icon item-right small style=\"margin:7px\" name=\"add\" *ngIf=\"!fileListOpen\" padding-right></ion-icon>\n      <ion-icon item-right small style=\"margin:7px\" name=\"remove\" *ngIf=\"fileListOpen\" padding-right></ion-icon>\n    </ion-item-divider>\n    <ion-list class=\"custom-list\" *ngIf=\"fileListOpen\" no-lines>\n      <ion-radio-group [(ngModel)]=\"digitizeObj.fileFormat\">\n        <ion-item>\n          <ion-label>EMB 6</ion-label>\n          <ion-radio value=\"EMB6\">EMB 6</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>EMB 9</ion-label>\n          <ion-radio value=\"EMB9\">EMB 9</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>DST</ion-label>\n          <ion-radio value=\"DST\">DST</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>CND</ion-label>\n          <ion-radio value=\"CND\">CND</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>EXP</ion-label>\n          <ion-radio value=\"EXP\">EXP</ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-item-divider id=\"garmentTypes\"\n      [color]=\"digitizeObj.garmentTypes.length === 0 && isError ? 'danger' : 'primary'\">Garment Type</ion-item-divider>\n    <ion-item-group>\n      <ion-item *ngFor=\"let type of garmentTypes\">\n        <ion-label>\n          {{type.name}}\n        </ion-label>\n        <ion-checkbox item-right [(ngModel)]=\"type.checked\" (ionChange)=\"garmentChangeEvent()\"></ion-checkbox>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-divider id=\"trims\" [color]=\"digitizeObj.trims.length===0 && isError ? 'danger' : 'primary'\">Trims\n    </ion-item-divider>\n    <ion-item-group>\n      <ion-item *ngFor=\"let trim of trims\">\n        <ion-label>\n          {{trim.name}}\n        </ion-label>\n        <ion-checkbox item-right [(ngModel)]=\"trim.checked\" (ionChange)=\"trimsChangeEvent()\"></ion-checkbox>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-item-divider color=\"primary\">Special Instructions</ion-item-divider>\n    <ion-item>\n      <ion-textarea placeholder=\"Enter message for designer...\" rows=\"5\" [(ngModel)]=\"digitizeObj.instructions\">\n      </ion-textarea>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n<ion-footer>\n   <ion-button expand=\"full\" color=\"dark\" (click)=\"placeOrder()\">\n \n    ${{ digitizeObj?.amount | number : '1.2-2' }} - Continue\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/digitize-package/digitize-package.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/digitize-package/digitize-package.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpZ2l0aXplLXBhY2thZ2UvZGlnaXRpemUtcGFja2FnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/digitize-package/digitize-package.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/digitize-package/digitize-package.page.ts ***!
  \*****************************************************************/
/*! exports provided: DigitizePackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitizePackagePage", function() { return DigitizePackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/storage.service */ "./src/app/providers/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_selection_image_selection_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image-selection/image-selection.page */ "./src/app/pages/image-selection/image-selection.page.ts");
/* harmony import */ var src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ "./src/app/providers/data.service.ts");
/* harmony import */ var src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/loading.service */ "./src/app/providers/loading.service.ts");








var DigitizePackagePage = /** @class */ (function () {
    function DigitizePackagePage(storage, elementRef, modalCtrl, toast, loadingService, 
    // private navParams: NavParams,
    dataService, navCtrl) {
        var _this = this;
        this.storage = storage;
        this.elementRef = elementRef;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.loadingService = loadingService;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.rush = 0;
        this.garmentTypes = [
            { name: 'Flat - All flat items - Shirts, bags etc', checked: false },
            { name: 'Caps - all hats', checked: false },
            { name: 'Beanies', checked: false }
        ];
        this.trims = [
            { name: 'Cut thread longer than 2mm', checked: false },
            { name: 'Cut all connections threads', checked: false },
            { name: 'Do not cut - never trim', checked: false }
        ];
        this.digitizeObj = {
            type: 'Snap to Digitize',
            // poNumber: '',
            size: '',
            sizeValue: '',
            price: '',
            isUrgent: false,
            fileFormat: '',
            instructions: '',
            garmentTypes: [],
            trims: [],
            amount: 0
        };
        this.isRushdisabled = false;
        this.fileListOpen = false;
        this.isError = false;
        this.loadingService.presentLoading();
        // this.storage.get('packages', packages).catch((e) =>{
        this.dataService.getRequest("packages").subscribe(function (packages) {
            //   this.storage.get('packs').then((packages) => {
            console.log(packages);
            _this.loadingService.dismissLoading();
            var len = Object.keys(packages).length;
            for (var i = 0; i < len; i++) {
                var thispackage = packages[i];
                if (thispackage.type === "digitize") {
                    var normal = [];
                    var hurry = void 0;
                    for (var x = 0; x < thispackage.prices.length; x++) {
                        var sel = thispackage.prices[x];
                        console.log(sel);
                        if (sel.type === "normal") {
                            normal.push(sel);
                        }
                        else {
                            hurry = sel;
                        }
                        // elseif(){
                        // }
                    }
                    _this.prices = normal;
                    _this.rush = hurry;
                    // grouped = mapValues(groupBy(thispackage, 'type'),
                    //                 clist => clist.map(thispackage => _.omit(thispackage, 'type')));
                }
            }
            console.log(_this.prices);
            console.log(_this.rush);
        }, function (err) {
            //console.log(e);
            console.log(err);
            _this.dataService.getRequest("packages").subscribe(function (packages) {
                console.log(packages);
                var len = Object.keys(packages).length;
                for (var i = 0; i < len; i++) {
                    var thispackage = packages[i];
                    if (thispackage.type === "digitize") {
                        var normal = [];
                        var hurry = void 0;
                        for (var x = 0; x < thispackage.prices.length; x++) {
                            var sel = thispackage.prices[x];
                            console.log(sel);
                            if (sel.type === "normal") {
                                normal.push(sel);
                            }
                            else {
                                hurry = sel;
                            }
                            // elseif(){
                            // }
                        }
                        _this.prices = normal;
                        _this.rush = hurry;
                        // grouped = mapValues(groupBy(thispackage, 'type'),
                        //                 clist => clist.map(thispackage => _.omit(thispackage, 'type')));
                    }
                }
                console.log(_this.prices);
                console.log(_this.rush);
                // this.prices=grouped.vector;
                //let package=packages;
                //this.prices=price.prices;
            });
            // this.loadingService.dismissLoading();
            _this.toast.presentToast('Network error,check your connection and try again', 'danger');
            _this.navCtrl.navigateForward('/menu/tabs/tabs/home');
        });
    }
    DigitizePackagePage.prototype.ngOnInit = function () {
    };
    DigitizePackagePage.prototype.onChange = function ($event) {
        this.digitizeObj.amount = +$event;
    };
    DigitizePackagePage.prototype.scrollTo = function (element) {
        //    let yOffset = document.getElementById(element).offsetTop;
        var yOffset = this.elementRef.nativeElement.querySelector(element).offsetTop;
        this.content.scrollToPoint(0, yOffset, 1000);
    };
    DigitizePackagePage.prototype.placeOrder = function () {
        this.digitizeObj.garmentTypes = this.garmentTypes.filter(function (type) {
            return type.checked === true;
        });
        this.digitizeObj.trims = this.trims.filter(function (trim) {
            return trim.checked === true;
        });
        if (this.digitizeObj.price !== '' &&
            this.digitizeObj.sizeValue !== '' &&
            this.digitizeObj.size !== '' &&
            this.digitizeObj.fileFormat !== '' &&
            // this.digitizeObj.poNumber !== '' &&
            this.digitizeObj.garmentTypes.length &&
            this.digitizeObj.trims.length) {
            this.isError = false;
            this.digitizeObj.amount = parseInt(this.digitizeObj.price, 10);
            if (this.digitizeObj.isUrgent) {
                this.digitizeObj.amount += 10;
            }
            //  this.storage.set('PACKAGE', this.digitizeObj);
            this.openModal(_image_selection_image_selection_page__WEBPACK_IMPORTED_MODULE_4__["ImageSelectionPage"], this.digitizeObj);
        }
        else {
            this.isError = true;
            var errors = [];
            var offset = null;
            if (this.digitizeObj.trims.length === 0) {
                offset = this.elementRef.nativeElement.querySelector('#trims').offsetTop;
                this.scrollTo("#trims");
                //this.toast.presentToast('trims  is required', 'danger');
            }
            if (this.digitizeObj.garmentTypes.length === 0) {
                offset = this.elementRef.nativeElement.querySelector('#garmentTypes').offsetTop;
                this.scrollTo("#garmentTypes");
                //this.toast.presentToast('garmentTypes  is required', 'danger');
            }
            if (this.digitizeObj.fileFormat === '') {
                offset = this.elementRef.nativeElement.querySelector('#fileFormat').offsetTop;
                this.scrollTo("#fileFormat");
                //this.toast.presentToast('fileFormat  is required', 'danger');
            }
            if (this.digitizeObj.price === '') {
                offset = this.elementRef.nativeElement.querySelector('#price').offsetTop;
                this.scrollTo("#price");
                //this.toast.presentToast('price  is required', 'danger');
            }
            if (this.digitizeObj.size === '') {
                offset = this.elementRef.nativeElement.querySelector('#size').offsetTop;
                this.scrollTo("#size");
                // this.toast.presentToast('size  is required', 'danger');
            }
            // console.log(errors);
            var len = Object.keys(errors).length;
            if (len !== 1) {
                this.toast.presentToast('Select All required details', 'danger');
            }
            else {
                this.toast.presentToast(errors[0], 'danger');
            }
            // if (this.digitizeObj.poNumber === '') {
            //   offset = this.elementRef.nativeElement.querySelector('#poNumber').offsetTop;
            // }
            //  else{
            //  this.content.scrollToTop();
            // // this.toast.presentToast('Select All required details', 'danger');
            //   }
        }
    };
    DigitizePackagePage.prototype.updateLogoTypePrice = function ($event) {
        // this.amount = +$event;
        //console.log(+$event);
        // price = parseInt(price, 10)
        var price = +$event;
        console.log(price);
        if (price !== 15) {
            // this.digitizeObj.isUrgent = false;
            //this.isRushdisabled = true;
        }
        else {
            //this.isRushdisabled = false;
        }
        // if (price === '') {
        //   if (this.digitizeObj.isUrgent) {
        //     this.digitizeObj.amount = 10;
        //   } else {
        //     this.digitizeObj.amount = 0;
        //   }
        //   return;
        // }
        if (this.digitizeObj.isUrgent) {
            //this.digitizeObj.amount = parseInt(price, 10) + 10;
            this.digitizeObj.amount = price + 10;
        }
        else {
            this.digitizeObj.amount = price;
        }
    };
    DigitizePackagePage.prototype.updatePriceForUrgent = function () {
        if (this.digitizeObj.isUrgent) {
            if (this.digitizeObj.price) {
                this.digitizeObj.amount = parseInt(this.digitizeObj.price, 10) + 10;
            }
            else {
                this.digitizeObj.amount = 10;
            }
        }
        else {
            if (this.digitizeObj.price) {
                this.digitizeObj.amount = parseInt(this.digitizeObj.price, 10);
            }
            else {
                this.digitizeObj.amount = 0;
            }
        }
    };
    DigitizePackagePage.prototype.toggleSection = function () {
        this.fileListOpen = !this.fileListOpen;
        this.scrollTo("#fileFormat");
    };
    DigitizePackagePage.prototype.garmentChangeEvent = function () {
        this.digitizeObj.garmentTypes = this.garmentTypes.filter(function (type) {
            return type.checked === true;
        });
    };
    DigitizePackagePage.prototype.trimsChangeEvent = function () {
        this.digitizeObj.trims = this.trims.filter(function (trim) {
            return trim.checked === true;
        });
    };
    DigitizePackagePage.prototype.openModal = function (component, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: component,
                            componentProps: {
                                "data": data,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DigitizePackagePage.prototype.goBack = function () {
        this.navCtrl.navigateBack('/menu/tabs/tabs/home');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], DigitizePackagePage.prototype, "content", void 0);
    DigitizePackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-digitize-package',
            template: __webpack_require__(/*! ./digitize-package.page.html */ "./src/app/pages/digitize-package/digitize-package.page.html"),
            styles: [__webpack_require__(/*! ./digitize-package.page.scss */ "./src/app/pages/digitize-package/digitize-package.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
            src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], DigitizePackagePage);
    return DigitizePackagePage;
}());



/***/ })

}]);
//# sourceMappingURL=digitize-package-digitize-package-module.js.map