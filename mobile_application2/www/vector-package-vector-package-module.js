(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vector-package-vector-package-module"],{

/***/ "./src/app/pages/vector-package/vector-package.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/vector-package/vector-package.module.ts ***!
  \***************************************************************/
/*! exports provided: VectorPackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorPackagePageModule", function() { return VectorPackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vector_package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vector-package.page */ "./src/app/pages/vector-package/vector-package.page.ts");
/* harmony import */ var _image_selection_image_selection_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-selection/image-selection.module */ "./src/app/pages/image-selection/image-selection.module.ts");
/* harmony import */ var _crop_modal_crop_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../crop-modal/crop-modal.module */ "./src/app/pages/crop-modal/crop-modal.module.ts");









var routes = [
    {
        path: '',
        component: _vector_package_page__WEBPACK_IMPORTED_MODULE_6__["VectorPackagePage"]
    }
];
var VectorPackagePageModule = /** @class */ (function () {
    function VectorPackagePageModule() {
    }
    VectorPackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _image_selection_image_selection_module__WEBPACK_IMPORTED_MODULE_7__["ImageSelectionPageModule"],
                _crop_modal_crop_modal_module__WEBPACK_IMPORTED_MODULE_8__["CropModalPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vector_package_page__WEBPACK_IMPORTED_MODULE_6__["VectorPackagePage"]]
        })
    ], VectorPackagePageModule);
    return VectorPackagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/vector-package/vector-package.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/vector-package/vector-package.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\" slot=\"icon-only\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>SnapToVector</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider [color]=\"vectorObj.price==='' && isError ? 'danger' : 'primary'\">Basic\n    Details\n  </ion-item-divider>\n\n  <ion-list class=\"bottom-border\" id=\"price\"  name=\"price\">\n    <ion-radio-group  *ngFor =\"let p of prices\" name=\"price\" [(ngModel)]=\"vectorObj.price\" (ngModelChange)=\"updateLogoTypePrice($event)\">\n      <ion-item>\n        <ion-label>{{p.name}}</ion-label>\n        <ion-radio value={{p.value}}>{{p.name}}</ion-radio>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label>$20 - Detail Logo</ion-label>\n        <ion-radio value=\"20\">$20 - Detail Logo</ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>$35 - Complex Logo</ion-label>\n        <ion-radio value=\"35\">$35 - Complex Logo</ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>$45 - Very Complex Logo</ion-label>\n        <ion-radio value=\"45\">$45 - Very Complex Logo</ion-radio>\n      </ion-item> -->\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-item-group>\n    <ion-item-divider color=\"primary\">Required Earlier - Less than 24 hours</ion-item-divider>\n    <ion-item>\n      <ion-label>\n        Rush! Rush! - Add ${{rush.value}}\n      </ion-label>\n      <!-- <ion-checkbox slot=\"start\" [disabled]=\"isRushdisabled==true\" [(ngModel)]=\"vectorObj.isUrgent\"\n        (ionChange)=\"updatePriceForUrgent()\"></ion-checkbox> -->\n         <ion-checkbox slot=\"start\"  [(ngModel)]=\"vectorObj.isUrgent\"\n        (ionChange)=\"updatePriceForUrgent()\"></ion-checkbox>\n    </ion-item>\n    <ion-item-divider [color]=\"vectorObj.artwork==='' && isError ? 'danger' : 'primary'\">\n      Artwork For?\n    </ion-item-divider>\n    <ion-list>\n      <ion-radio-group id=\"artwork\" nanm=\"artwork\" [(ngModel)]=\"vectorObj.artwork\">\n        <ion-item>\n          <ion-label>Screen Printing</ion-label>\n          <ion-radio value=\"Screen Printing\">Screen Printing</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Digital Printing - DTG</ion-label>\n          <ion-radio value=\"Digital Printing - DTG\">Digital Printing - DTG</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Other</ion-label>\n          <ion-radio value=\"Other\">Other</ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-item-divider [color]=\"vectorObj.scheme==='' && isError ? 'danger' : 'primary'\">Color\n      Scheme\n    </ion-item-divider>\n    <ion-list padding-bottom>\n      <ion-radio-group id=\"scheme\" name=\"scheme\" [(ngModel)]=\"vectorObj.scheme\">\n        <ion-item>\n          <ion-label>Black & White - 1 Color</ion-label>\n          <ion-radio value=\"Black White Color\">Black & White - 1 Color</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Black & White - with halftones</ion-label>\n          <ion-radio value=\"Black White Halftones\">Black & White - with halftones </ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Spot Color No Halftones</ion-label>\n          <ion-radio value=\"Spot Color\">Spot Color No Halftones</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Spot Color with Halftones</ion-label>\n          <ion-radio value=\"Spot Color Halftones\">Spot Color with Halftones</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Full Color CMYK</ion-label>\n          <ion-radio value=\"CMYK\">Full Color CMYK</ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-item-divider id=\"fileFormat\" [color]=\"vectorObj.fileFormat==='' && isError ? 'danger' : 'primary'\" tappable\n      (click)=\"toggleSection()\"   detail-none [ngClass]=\"{'section-active': fileListOpen, 'section': !fileListOpen}\">\n      <ion-label style=\"margin:13px 0px\">\n        File Format\n      </ion-label>\n      <ion-icon slot=\"start\" size=\"small\" style=\"margin:7px\" name=\"add\" *ngIf=\"!fileListOpen\" padding-right></ion-icon>\n      <ion-icon slot=\"start\" size=\"small\" style=\"margin:7px\" name=\"remove\" *ngIf=\"fileListOpen\" padding-right>\n      </ion-icon>\n    </ion-item-divider>\n    <ion-list class=\"custom-list\" *ngIf=\"fileListOpen\" lines=\"none\">\n      <ion-radio-group name=\"format\" [(ngModel)]=\"vectorObj.fileFormat\">\n        <ion-item>\n          <ion-label>Coral Draw 12</ion-label>\n          <ion-radio value=\"12\">Coral Draw 12</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Coral Draw X3</ion-label>\n          <ion-radio value=\"X3\">Coral Draw X3</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Coral Draw X4</ion-label>\n          <ion-radio value=\"X4\">Coral Draw X4</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Coral Draw X5</ion-label>\n          <ion-radio value=\"X5\">Coral Draw X5</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Coral Draw X6</ion-label>\n          <ion-radio value=\"X6\">Coral Draw X6</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Coral Draw X7</ion-label>\n          <ion-radio value=\"X7\">Coral Draw X7</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Illustrator 10</ion-label>\n          <ion-radio value=\"10\">Illustrator 10</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Illustrator CS</ion-label>\n          <ion-radio value=\"CS\">Illustrator CS</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Illustrator CS2</ion-label>\n          <ion-radio value=\"CS2\">Illustrator CS2</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Illustrator CS3</ion-label>\n          <ion-radio value=\"CS3\">Illustrator CS3</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Illustrator CS4</ion-label>\n          <ion-radio value=\"CS4\">Illustrator CS4</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Illustrator CS5</ion-label>\n          <ion-radio value=\"CS5\">Illustrator CS5</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Illustrator CS6</ion-label>\n          <ion-radio value=\"CS6\">Illustrator CS6</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>EPS</ion-label>\n          <ion-radio value=\"EPS\">EPS</ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>PDF</ion-label>\n          <ion-radio value=\"PDF\">PDF</ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n  <!--   <ion-item-divider color=\"primary\">Special Instructions</ion-item-divider>\n    <ion-item>\n      <ion-textarea placeholder=\"Enter message for designer...\" rows=\"5\" [(ngModel)]=\"vectorObj.instructions\">\n      </ion-textarea>\n    </ion-item> -->\n  </ion-item-group>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"dark\" (click)=\"placeOrder()\">\n    ${{vectorObj?.amount | number : '1.2-2' }} - Continue\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/vector-package/vector-package.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/vector-package/vector-package.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlY3Rvci1wYWNrYWdlL3ZlY3Rvci1wYWNrYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/vector-package/vector-package.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/vector-package/vector-package.page.ts ***!
  \*************************************************************/
/*! exports provided: VectorPackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorPackagePage", function() { return VectorPackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/storage.service */ "./src/app/providers/storage.service.ts");
/* harmony import */ var src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _image_selection_image_selection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-selection/image-selection.page */ "./src/app/pages/image-selection/image-selection.page.ts");
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/data.service */ "./src/app/providers/data.service.ts");
/* harmony import */ var src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/loading.service */ "./src/app/providers/loading.service.ts");








var VectorPackagePage = /** @class */ (function () {
    function VectorPackagePage(navCtrl, elementRef, storage, 
    // private navParams: NavParams,
    toast, modalCtrl, loadingService, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.elementRef = elementRef;
        this.storage = storage;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.dataService = dataService;
        this.rush = 0;
        this.vectorObj = {
            type: 'Snap to Vector',
            price: '',
            scheme: '',
            artwork: '',
            isUrgent: false,
            fileFormat: '',
            instructions: '',
            amount: 0
        };
        this.isRushdisabled = false;
        this.fileListOpen = false;
        this.isError = false;
        this.loadingService.presentLoading();
        // this.storage.get('packs').then((packages) => {
        this.dataService.getRequest("packages").subscribe(function (packages) {
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
    VectorPackagePage.prototype.ngOnInit = function () {
    };
    VectorPackagePage.prototype.scrollTo = function (element) {
        //    let yOffset = document.getElementById(element).offsetTop;
        var yOffset = this.elementRef.nativeElement.querySelector(element).offsetTop;
        this.content.scrollToPoint(0, yOffset, 1000);
    };
    VectorPackagePage.prototype.goBack = function () {
        this.navCtrl.navigateBack('/menu/tabs/tabs/home');
    };
    VectorPackagePage.prototype.onChange = function ($event) {
        this.vectorObj.amount = +$event;
    };
    VectorPackagePage.prototype.placeOrder = function () {
        if (this.vectorObj.price !== '' && this.vectorObj.scheme !== '' && this.vectorObj.fileFormat !== '' && this.vectorObj.artwork !== '') {
            this.isError = false;
            this.vectorObj.amount = parseInt(this.vectorObj.price, 10);
            if (this.vectorObj.isUrgent) {
                this.vectorObj.amount += 10;
            }
            //this.storage.set('PACKAGE', this.vectorObj);
            this.openModal(_image_selection_image_selection_page__WEBPACK_IMPORTED_MODULE_5__["ImageSelectionPage"], this.vectorObj);
        }
        else {
            this.isError = true;
            var errors = [];
            var offset = null;
            if (this.vectorObj.fileFormat === '') {
                errors.push("fileFormat  is required");
                offset = this.elementRef.nativeElement.querySelector('#fileFormat').offsetTop;
                this.scrollTo("#fileFormat");
                //this.toast.presentToast('fileFormat  is required', 'danger');
            }
            if (this.vectorObj.scheme === '') {
                errors.push("scheme  is required");
                offset = this.elementRef.nativeElement.querySelector('#scheme').offsetTop;
                this.scrollTo("#scheme");
                //this.toast.presentToast('scheme  is required', 'danger');
            }
            if (this.vectorObj.artwork === '') {
                errors.push("artwork  is required");
                offset = this.elementRef.nativeElement.querySelector('#artwork').offsetTop;
                this.scrollTo("#artwork");
                //this.toast.presentToast('artwork  is required', 'danger');
            }
            if (this.vectorObj.price === '') {
                errors.push("price  is required");
                offset = this.elementRef.nativeElement.querySelector('#price').offsetTop;
                this.scrollTo("#price");
                //this.toast.presentToast('price  is required', 'danger');
            }
            // console.log(errors);
            var len = Object.keys(errors).length;
            if (len !== 1) {
                this.toast.presentToast('Select All required details', 'danger');
            }
            else {
                this.toast.presentToast(errors[0], 'danger');
            }
            // else{
            // this.content.scrollToTop();
            // // this.toast.presentToast('Select All required details', 'danger');
            // }
        }
    };
    VectorPackagePage.prototype.updateLogoTypePrice = function ($event) {
        var price = +$event;
        console.log(price);
        //let price= parseInt(amount , 10);
        //console.log(price);
        if (price === 35 || price === 45) {
            console.log(price);
            //this.vectorObj.isUrgent = false;
            //this.isRushdisabled = true;
        }
        else {
            //this.isRushdisabled = false;
        }
        // if (price === '') {
        //   if (this.vectorObj.isUrgent) {
        //     this.vectorObj.amount = 10;
        //   } else {
        //     this.vectorObj.amount = 0;
        //   }
        //   return;
        // }
        if (this.vectorObj.isUrgent) {
            // this.vectorObj.amount = parseInt(price, 10) + 10;
            this.vectorObj.amount = price + this.rush.value;
        }
        else {
            this.vectorObj.amount = price;
        }
    };
    VectorPackagePage.prototype.updatePriceForUrgent = function () {
        if (this.vectorObj.isUrgent) {
            if (this.vectorObj.price) {
                this.vectorObj.amount = parseInt(this.vectorObj.price, 10) + this.rush.value;
            }
            else {
                this.vectorObj.amount = this.rush.value;
            }
        }
        else {
            if (this.vectorObj.price) {
                this.vectorObj.amount = parseInt(this.vectorObj.price, 10);
            }
            else {
                this.vectorObj.amount = 0;
            }
        }
    };
    VectorPackagePage.prototype.toggleSection = function () {
        this.fileListOpen = !this.fileListOpen;
        this.scrollTo("#fileFormat");
    };
    VectorPackagePage.prototype.openModal = function (component, data) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], VectorPackagePage.prototype, "content", void 0);
    VectorPackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vector-package',
            template: __webpack_require__(/*! ./vector-package.page.html */ "./src/app/pages/vector-package/vector-package.page.html"),
            styles: [__webpack_require__(/*! ./vector-package.page.scss */ "./src/app/pages/vector-package/vector-package.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
            src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], VectorPackagePage);
    return VectorPackagePage;
}());



/***/ })

}]);
//# sourceMappingURL=vector-package-vector-package-module.js.map