(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");









var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            providers: [_ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_7__["SMS"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n\n<!--     <ion-buttons  slot=\"end\">\n      <ion-button (click)=message() item-right large >\n        <span ion-text>Text Support</span>\n      </ion-button>\n    </ion-buttons> -->\n        <ion-buttons slot=\"end\">\n  <ion-button id=\"cart-btn\" ion-button slot=\"icon-only\" (click)=\"openinbox()\">\n        <!-- <ion-icon name=\"inbox\"></ion-icon> -->\n        <!-- <ion-icon name=\"mail-unread\"></ion-icon> -->\n        <ion-icon  name=\"notifications\" size=\"large\"></ion-icon>\n        <!-- <ion-icon name=\"notifications\"></ion-icon> -->\n    <ion-badge *ngIf=\"thebudge\" id=\"cart-badge\" size=\"small\" color=\"danger\">{{thebudge}}</ion-badge>\n\n <!--  <ion-badge *ngIf=\"badge\" id=\"cart-badge\" size=\"small\" [value]=\"badge | async\" color=\"danger\"></ion-badge> -->\n      </ion-button>\n       <ion-button ion-button slot=\"icon-only\" (click)=\"message()\">\n        <!-- <ion-icon name=\"sms\"></ion-icon> -->\n        <!-- <ion-icon name=\"text\"></ion-icon> -->\n        <!-- <ion-icon name=\"chatboxes\" ></ion-icon> -->\n        <ion-label>Text support</ion-label>\n        <!-- <ion-icon name=\"chatboxes\" size=\"large\"></ion-icon> -->\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card  *ngIf=\"iscoupon\" name=\"coupons\" padding>\n    <ion-card-header color=\"success\">Discount!discount</ion-card-header>\n    <ion-card-content *ngFor =\"let coupon of coupons\">\n       <ion-item>\n         <p>use this coupon <b>{{coupon.id}}</b> to get {{coupon.percent_off}}% off </p>\n        \n     </ion-item>\n  </ion-card-content>\n  </ion-card>\n<!--  <ion-card  name=\"price\"padding tappable (click)=\"vector()\"> -->\n  <ion-card *ngFor =\"let p of data\" name=\"price\"padding tappable (click)=\"vector(p.type)\">\n    <ion-item>{{p.title}}</ion-item>\n    <ion-thumbnail>\n        <img class=\"package-bg\" [src]=\"p.image?.url\" >\n    <!--   <img class=\"package-bg\" src=\"assets/img/vector.jpg\"> -->\n    </ion-thumbnail>\n    <ion-item>\n      Starting from ${{from(p.prices)}}\n      <ion-button slot=\"end\">SELECT</ion-button>\n    </ion-item>\n  </ion-card>\n<!--   <ion-card padding tappable (click)=\"digitize()\">\n    <ion-item>Snap to Digitize</ion-item>\n    <ion-thumbnail>\n      <img class=\"package-bg\" src=\"assets/img/digitize.jpg\">\n    </ion-thumbnail>\n    <ion-item>\n      Starting from $15\n      <ion-button slot=\"end\">SELECT</ion-button>\n    </ion-item>\n  </ion-card> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail {\n  min-height: 200px;\n  background-size: cover;\n  min-width: 100%; }\n\n.outline-icons {\n  margin-top: 20px; }\n\n.package-bg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9FOlxcQ1JZUFRPIFNZU1RFTVNcXFByb2plY3RzXFxzbmFwMnZlY3RvclxcbW9iaWxlX2FwcGxpY2F0aW9uMi9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWwge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ub3V0bGluZS1pY29ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wYWNrYWdlLWJnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/data.service */ "./src/app/providers/data.service.ts");
/* harmony import */ var src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/storage.service */ "./src/app/providers/storage.service.ts");
/* harmony import */ var src_app_providers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/user */ "./src/app/providers/user.ts");
/* harmony import */ var src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/loading.service */ "./src/app/providers/loading.service.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");










//import { FCM } from '@ionic-native/fcm/ngx';

//import { FCM } from '@ionic-native/fcm/ngx';
//import { Platform } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(sms, fcm, 
    //public plt: Platform
    navCtrl, platform, dataService, user, afAuth, toast, 
    //private navParams: NavParams,
    storageService, loadingService) {
        var _this = this;
        this.sms = sms;
        this.fcm = fcm;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.dataService = dataService;
        this.user = user;
        this.afAuth = afAuth;
        this.toast = toast;
        this.storageService = storageService;
        this.loadingService = loadingService;
        this.iscoupon = false;
        this.loadingService.presentLoading();
        this.badgeset(0);
        this.badge = this.user.listnumber;
        // this.user.badgeset(2);
        this.user.listnumber.subscribe(function (num) {
            console.log(num);
            //this.badge=num;
        });
        //console.log(this.user.budgenumber);
        //this.loadingService.presentLoading();
        this.afAuth.authState.subscribe(function (res) {
            console.log(res);
            if (res != null) {
                console.log("user id:" + res.uid);
                _this.userid = res.uid;
            }
            else {
                //this.navCtrl.navigateRoot('/login');
            }
        }, function (err) {
            console.log(err);
            //this.toast.presentToast('unable to find logged in user','danger');
        });
        //this.storageService.get('designer').then((curruser)=>{
        this.user.getcoupons().subscribe(function (coupons) {
            console.log(coupons);
            var coup = coupons;
            console.log(coup);
            // console.log(coup.isEmpty()); 
            // this.iscoupon=coup.isEmpty();
            var active_coupons = [];
            var len = Object.keys(coup).length;
            console.log(len);
            // if (len > 0) {
            //    this.iscoupon=true;
            // }
            for (var i = 0; i < len; i++) {
                var coupon = coup[i];
                //  let today=new Date();
                //  console.log(today); 
                // console.log(coupon);
                //  console.log('redeam bÿ:'+new Date(coupon.redeem_by));
                //   console.log('created on:'+ new Date(coupon.created));
                //   console.log('duration in months:'+coupon.duration_in_months);
                if (coupon.valid) {
                    console.log('valid');
                    console.log(new Date(coupon.created));
                    if (coupon.id != "100OFF") {
                        _this.iscoupon = true;
                        active_coupons.push(coupon);
                    }
                    // this.user.applycoupon(curruser.cus_id,coupon.id).subscribe((coupo) =>{
                    // });
                }
            }
            _this.coupons = active_coupons;
            // this.storageService.set('coupons', this.coupons).catch((e) =>{
            //                   //console.log(e);
            //                   console.log(e);
            //                   // this.loadingService.dismissLoading();
            //      this.toast.presentToast('You Device is out of space,Clear space and try again ','danger');
            //                 });
            console.log(_this.coupons);
        });
        // }).catch((e) =>{
        //   console.log(e);
        // });
        this.dataService.getRequest("packages").subscribe(function (packages) {
            console.log(packages);
            _this.data = packages;
            _this.loadingService.dismissLoading();
            //  this.storageService.set('packs', packages).catch((e) =>{
            //              //console.log(e);
            //              console.log(e);
            //              // this.loadingService.dismissLoading();
            // this.toast.presentToast('This app uses device Memory,You Device is out of space,Clear space and try again ','danger');
            //            });
            // let len=Object.keys(packages).length;
            //  for (var i = 0; i < len; i++) {
            //    let thispackage=packages[i]
            //  }
        });
        //   this.start =Math.max.apply(Math, array.map(function(o) { return o.y; }))
        this.fcm.onNotification().subscribe(function (data) {
            //console.log("received message");
            //console.log(data);
            if (data.wasTapped) {
                console.log("Received in background");
                console.log(data);
                console.log(data.title);
                var dat = {
                    user: _this.userid,
                    title: data.title,
                    body: data.body,
                    wasTapped: data.wasTapped,
                };
                console.log(dat);
                _this.user.sendinbox(dat).subscribe(function (msg) {
                    console.log(msg);
                    _this.badgeincrement();
                });
                //  this.user.badgeincrement();
            }
            else {
                console.log("Received in foreground");
                console.log(data);
                console.log(data.title);
                var dat = {
                    user: _this.userid,
                    title: data.title,
                    body: data.body,
                    wasTapped: data.wasTapped,
                };
                console.log(dat);
                _this.user.sendinbox(dat).subscribe(function (msg) {
                    console.log(msg);
                    _this.badgeincrement();
                });
                // this.user.badgeincrement();
            }
            ;
        });
    }
    HomePage.prototype.badgeset = function (num) {
        console.log("setting budge number");
        var x = parseInt(num, 10);
        console.log(x);
        // this.badge.set(x);
        //let budges= await this.badge.get();
        this.thebudge = num;
        var budges = this.thebudge;
        console.log(budges);
        var no = parseInt(budges, 10);
        console.log(no);
        //this.budgenumber.next(no);//next method updates the stream value
    };
    HomePage.prototype.badgeincrement = function () {
        console.log("setting budge increment");
        //let x= parseInt(num, 10);
        //  console.log(x);
        //this.badge.set(x);
        //let budges= await  this.badge.increase(1);
        var bj = parseInt(this.thebudge, 10);
        console.log(bj);
        var budges = (bj + 1);
        this.thebudge = budges;
        console.log(budges);
        //let no=parseInt(budges, 10);
        //this.budgenumber.next(budges);//next method updates the stream value
    };
    HomePage.prototype.badgeclear = function () {
        //this.badge.clear();
        //let budges= await this.badge.get();
        this.thebudge = 0;
        var budges = this.thebudge;
        console.log(budges);
        var no = parseInt(budges, 10);
        //this.budgenumber.next(no);//next method updates the stream value
    };
    HomePage.prototype.openinbox = function () {
        this.navCtrl.navigateForward('/inbox');
        this.badgeset(0);
        // this.user.badgeincrement();
        //console.log(this.user.budgenumber);
        // this.badge=this.user.budgenumber;
        //this.user.budgenumber
    };
    HomePage.prototype.from = function (dat) {
        var normal = [];
        for (var x = 0; x < dat.length; x++) {
            var sel = dat[x];
            // console.log(sel);
            if (sel.type === "normal") {
                normal.push(sel);
            }
        }
        return Math.min.apply(Math, normal.map(function (o) { return o.value; }));
    };
    HomePage.prototype.vector = function (e) {
        console.log(e);
        if (this.dataService.isOnline()) {
            if (e === 'vector') {
                this.navCtrl.navigateForward('/menu/tabs/tabs/vector-package');
            }
            else {
                this.navCtrl.navigateForward('/menu/tabs/tabs/digitize-package');
            }
        }
        else {
            this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
        }
    };
    HomePage.prototype.digitize = function () {
        if (this.dataService.isOnline()) {
            this.navCtrl.navigateForward('/menu/tabs/tabs/digitize-package');
        }
        else {
            this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
        }
    };
    HomePage.prototype.message = function () {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };
        this.sms.send('15187791415', '', options);
    };
    Object.defineProperty(HomePage.prototype, "isCordova", {
        get: function () {
            return this.platform.is('cordova');
        },
        enumerable: true,
        configurable: true
    });
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__["SMS"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_9__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            src_app_providers_user__WEBPACK_IMPORTED_MODULE_7__["UserProvider"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuth"],
            src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map