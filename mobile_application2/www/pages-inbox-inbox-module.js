(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inbox-inbox-module"],{

/***/ "./src/app/pages/inbox/inbox.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inbox/inbox.module.ts ***!
  \*********************************************/
/*! exports provided: InboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox.page */ "./src/app/pages/inbox/inbox.page.ts");







var routes = [
    {
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]
    }
];
var InboxPageModule = /** @class */ (function () {
    function InboxPageModule() {
    }
    InboxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]]
        })
    ], InboxPageModule);
    return InboxPageModule;
}());



/***/ }),

/***/ "./src/app/pages/inbox/inbox.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/inbox/inbox.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n  \t <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\" slot=\"icon-only\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Coupons</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n   <ion-list-header>\n          Recent Notifications\n        </ion-list-header>\n      <ion-list *ngFor =\"let notif of notifications\">\n    \n\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/img/logo.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>{{notif.title}}</h2>\n           <!--  <h3>{{notif.wasTapped}}</h3> -->\n            <p>{{notif.body}}</p>\n          </ion-label>\n        </ion-item>\n<!-- \n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/img/logo.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Han</h2>\n            <h3>Look, kid...</h3>\n            <p>I've got enough on my plate as it is, and I...</p>\n          </ion-label>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/img/logo.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Yoda</h2>\n            <h3>Size matters not</h3>\n            <p>Do or do not. There is no try...</p>\n          </ion-label>\n        </ion-item> -->\n      \n      </ion-list>\n    </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/inbox/inbox.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/inbox/inbox.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luYm94L2luYm94LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/inbox/inbox.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/inbox/inbox.page.ts ***!
  \*******************************************/
/*! exports provided: InboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPage", function() { return InboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/user */ "./src/app/providers/user.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");





var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl, afAuth, user) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.user = user;
    }
    InboxPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            console.log(res);
            if (res != null) {
                console.log("user id:" + res.uid);
                //  this.userid=res.uid;
                _this.user.getinbox(res.uid).subscribe(function (msg) {
                    console.log(msg);
                    var data = msg[0];
                    console.log(data.body);
                    _this.notifications = msg;
                });
            }
            else {
                //this.navCtrl.navigateRoot('/login');
            }
        }, function (err) {
            console.log(err);
            //this.toast.presentToast('unable to find logged in user','danger');
        });
    };
    InboxPage.prototype.ngOnInit = function () {
    };
    InboxPage.prototype.ngAfterViewInit = function () {
    };
    InboxPage.prototype.goBack = function () {
        this.notifications = [];
        this.navCtrl.navigateBack('/menu/tabs/tabs/home');
    };
    InboxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(/*! ./inbox.page.html */ "./src/app/pages/inbox/inbox.page.html"),
            styles: [__webpack_require__(/*! ./inbox.page.scss */ "./src/app/pages/inbox/inbox.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            src_app_providers_user__WEBPACK_IMPORTED_MODULE_3__["UserProvider"]])
    ], InboxPage);
    return InboxPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-inbox-inbox-module.js.map