(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_providers_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/shared.module */ "./src/app/providers/shared.module.ts");
/* harmony import */ var src_app_providers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/user */ "./src/app/providers/user.ts");
/* harmony import */ var _privacy_policy_privacy_policy_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.module */ "./src/app/pages/privacy-policy/privacy-policy.module.ts");










//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_providers_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _privacy_policy_privacy_policy_module__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], src_app_providers_user__WEBPACK_IMPORTED_MODULE_8__["UserProvider"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <form margin-top #form=\"ngForm\" class=\"animated fade-in\" [formGroup]=\"loginForm\">\n    <ion-grid margin-top>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div padding class=\"logo-container animated fade-in-down\">\n            <div class=\"logo\">\n              <img src=\"assets/img/ionic4-ico.png\" />\n            </div>\n          </div>\n          <div padding margin-top>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"mail\"></ion-icon>\n                Email\n              </ion-label>\n              <ion-input name=\"email\" type=\"email\" formControlName=\"email\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"lock\"></ion-icon>\n                Password\n              </ion-label>\n              <ion-input name=\"password\" type=\"password\" formControlName=\"password\" required></ion-input>\n            </ion-item>\n          </div>\n          <ion-text color=\"secondary\" class=\"forgot-password ion-text-start\" tappable (click)=\"forgotPass()\">\n            <strong>Forgot Password?</strong>\n          </ion-text>\n          <div padding-top>\n            <ion-button type=\"submit\" (click)=\"login()\" color=\"dark\" [disabled]=\"form.invalid\" expand=\"block\">\n              SIGN IN\n              <ion-icon name=\"log-in\"></ion-icon>\n            </ion-button>\n          </div>\n          <div padding-top>\n            <ion-button type=\"submit\" (click)=\"googleLogin()\" color=\"danger\" expand=\"block\">\n              GOOGLE LOGIN\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row margin-top class=\"ion-justify-content-around\">\n        <ion-col>\n          <ion-text color=\"secondary\" (click)=\"goToRegister()\" class=\"bottom-links\" tappable>New here?\n            <strong>Sign up</strong></ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text color=\"secondary\" (click)=\"openPrivacyPolicy()\" class=\"bottom-links\" tappable>Privacy\n            Policy</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('bg.jpg') no-repeat;\n  --background-size: cover; }\n\n.logo-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\nh5 {\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: lighter;\n  font-size: 2em;\n  text-shadow: -1px 2px 15px rgba(0, 0, 0, 0.7); }\n\n.forgot-password {\n  font-size: 1rem;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end; }\n\n.bottom-links {\n  font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXENSWVBUTyBTWVNURU1TXFxQcm9qZWN0c1xcc25hcDJ2ZWN0b3JcXG1vYmlsZV9hcHBsaWNhdGlvbjIvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQWE7RUFDYix3QkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsNkNBQTZDLEVBQUE7O0FBRy9DO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcuanBnKSBuby1yZXBlYXQ7XG4gIC0tYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oNSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAyZW07XG4gIHRleHQtc2hhZG93OiAtMXB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5ib3R0b20tbGlua3Mge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/storage.service */ "./src/app/providers/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/loading.service */ "./src/app/providers/loading.service.ts");
/* harmony import */ var src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_providers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/user */ "./src/app/providers/user.ts");
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ "./src/app/pages/privacy-policy/privacy-policy.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/providers/data.service */ "./src/app/providers/data.service.ts");











//import {GooglePlus} from "@ionic-native/google-plus";



//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, toastService, navCtrl, loadingService, forgotCtrl, dataService, storageService, titlecasePipe, user, events, modalCtrl, router, 
    // private fAuth: FirebaseAuthentication,
    afAuth, platform) {
        // this.user.getcoupons().subscribe((coupons) =>{
        //   console.log(coupons); 
        //   let coup=coupons.data;
        //   let active_coupons:any =[];
        //   let len=Object.keys(coup).length;
        // for (var i = 0; i < len; i++) {
        //   let coupon=coup[i];
        //  //  let today=new Date();
        //  //  console.log(today); 
        //  // console.log(coupon);
        //  //  console.log('redeam bÿ:'+new Date(coupon.redeem_by));
        //  //   console.log('created on:'+ new Date(coupon.created));
        //  //   console.log('duration in months:'+coupon.duration_in_months);
        //    if(coupon.valid){
        //      console.log('valid');
        //     active_coupons.push(coupon);
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.forgotCtrl = forgotCtrl;
        this.dataService = dataService;
        this.storageService = storageService;
        this.titlecasePipe = titlecasePipe;
        this.user = user;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.afAuth = afAuth;
        this.platform = platform;
        //    }
        // }
        // this.coupons=active_coupons;
        // this.storageService.set('coupons', this.coupons).catch((e) =>{
        //                   //console.log(e);
        //                   console.log(e);
        //                   // this.loadingService.dismissLoading();
        //     // this.toastService.presentToast('You Device is out of space,Clear space and try again ','danger');
        //                 });
        // console.log(this.coupons);
        // });
        //     this.afAuth.authState.subscribe((res) => {
        //   if (res) {
        //     console.log('user logged in, store your user in some variable')
        //     //this.user = res;  
        //     console.log(res);
        //   }
        // });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        //      firebase.auth().getRedirectResult().then(function(result) {
        //   if (result.credential) {
        //     // This gives you a Google Access Token.
        //     // You can use it to access the Google API.
        //     //var token = result.credential.accessToken;
        //     // The signed-in user info.
        //     var user = result.user;
        //     if (user) {
        // console.log(user);
        // //this.router.navigate('/menu/tabs/home');
        //     }
        //    //  this.navCtrl.navigateRoot('/menu/tabs/home');
        //     // ...
        //   }
        // }).catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        // });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.dataService.isOnline()) {
            this.loadingService.dismissLoading();
            this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
            return false;
        }
        this.loadingService.presentLoading();
        var loginUserObj = this.loginForm.value;
        //this.email=loginUserObj.email;
        if (this.loginForm.valid || 1) {
            var firebaseAuth = void 0;
            var firebaseIdToken_1;
            firebaseAuth = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(loginUserObj.email, loginUserObj.password);
            firebaseAuth.then(function (data) {
                console.log(data);
                firebaseIdToken_1 = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken();
                firebaseIdToken_1.then(function (tok) {
                    _this.user.emailLogin(tok).subscribe(function (users) {
                        console.log(users);
                        _this.loadingService.dismissLoading();
                        users.forEach(function (element) {
                            console.log(element);
                            console.log(loginUserObj.email);
                            console.log(element.email);
                            if (element.email === loginUserObj.email) {
                                // this.storageService.set('designer', loginUserObj).then((data: any) =>{
                                //     console.log(data);
                                // }).catch((e) =>{
                                //       console.log(e);
                                //     })
                                // this.storageService.set('designer', loginUserObj).catch((e) =>{
                                //        //console.log(e);
                                //        console.log(e);
                                //        // this.loadingService.dismissLoading();
                                //         this.toastService.presentToast('You Device is out of space,Clear space and try again ','danger');
                                //      });
                                _this.loadingService.dismissLoading();
                                _this.events.publish('user:loggedIn', element);
                                _this.toastService.presentToastBottom('Welcome, ' + _this.titlecasePipe.transform(element.name), 'dark');
                                // this.navCtrl.navigateRoot('/menu/tabs/home');
                                _this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                            }
                        });
                    });
                });
            }).catch(function (err) {
                console.log(err);
                _this.loadingService.dismissLoading();
                _this.toastService.presentToast('Invalid email/password combination', 'danger');
            });
        }
        else {
            this.loadingService.dismissLoading();
            this.toastService.presentToast('Form has one or more errors', 'danger');
        }
    };
    LoginPage.prototype.forgotPass = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var forgot;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.dataService.isOnline()) {
                            this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
                            return [2 /*return*/, false];
                        }
                        // console.log(this.email);
                        this.email = this.loginForm.value.email;
                        return [4 /*yield*/, this.forgotCtrl.create({
                                header: 'Forgot Password?',
                                message: 'Enter you email address to reset your password.',
                                backdropDismiss: false,
                                inputs: [
                                    {
                                        name: 'email',
                                        placeholder: 'Email Address',
                                        type: 'email',
                                        value: this.email
                                    },
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        handler: function (data) {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'Send',
                                        handler: function (data) {
                                            if (_this.isValidMailFormat(data.email)) {
                                                firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().sendPasswordResetEmail(data.email).then(function (res) {
                                                    _this.toastService.presentToast('Password reset email sent successfully', 'success');
                                                }).catch(function (err) {
                                                    console.log(err);
                                                    if (err.code === 'auth/user-not-found') {
                                                        _this.toastService.presentToast('Email is not registered!', 'danger');
                                                    }
                                                });
                                            }
                                            else {
                                                _this.toastService.presentToast('Enter correct email address', 'danger');
                                                forgot.present();
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        forgot = _a.sent();
                        forgot.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.goToRegister = function () {
        if (!this.dataService.isOnline()) {
            this.loadingService.dismissLoading();
            this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
            return false;
        }
        this.navCtrl.navigateForward('/register');
    };
    LoginPage.prototype.openPrivacyPolicy = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_10__["PrivacyPolicyPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.isValidMailFormat = function (email) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (email !== '' && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
            return false;
        }
        return true;
    };
    LoginPage.prototype.doSocialLogin = function (userObj) {
        var _this = this;
        console.log(userObj);
        if (!this.dataService.isOnline()) {
            this.loadingService.dismissLoading();
            this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
            return false;
        }
        // console.log('start verification');
        // let firebaseIdToken;
        // firebaseIdToken = firebase.auth().currentUser.getIdToken();
        // console.log(firebaseIdToken);
        // firebaseIdToken.then(tok => {
        console.log(userObj.email);
        this.user.byemailLogin(userObj.email).subscribe(function (data) {
            console.log(data.length);
            if (data.length === 0) {
                console.log("user does not exists,creating user then logging him in");
                _this.user.emailRegister(userObj, " ").subscribe(function (data) {
                    console.log(data);
                    _this.loadingService.dismissLoading();
                    _this.events.publish('user:created', data);
                    _this.doSocialLogin(data);
                    //this.toastService.presentToast('Welcome, ' + this.titlecasePipe.transform(data.name), 'dark');
                    //this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                    //  this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                    //this.navCtrl.push('/menu/tabs/tabs/home');
                    //this.router.navigate(['/menu/tabs/home']);
                }, function (e) {
                    console.log(e);
                    _this.loadingService.dismissLoading();
                    _this.toastService.presentToast('error try login  again, ', 'danger');
                });
            }
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                console.log(element.email);
                console.log(element);
                console.log(userObj);
                //console.log('verification');
                if (element.email === userObj.email) {
                    console.log("user exists,logging him in");
                    console.log(userObj);
                    // var;
                    // this.storageService.set('designer', element).then((data: any) =>{
                    //     console.log("Local storage successfull");
                    _this.loadingService.dismissLoading();
                    _this.events.publish('user:loggedIn', element);
                    // for (var i = 0; i < this.coupons.length; i++) {
                    //   console.log('dicount discont')
                    //   let coupon =this.coupons[i];
                    //   this.toastService.presentToast('Discont!Discount,use the following coupon '+coupon.id+' to get' +coupon.percent_off+'% off' , 'dark');
                    // }
                    _this.toastService.presentToastBottom('Welcome, ' + _this.titlecasePipe.transform(element.name), 'dark');
                    // this.navCtrl.navigateForward('/menu/tabs/home');
                    _this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                    // }).catch((e) =>{
                    //       console.log(e);
                    //        this.loadingService.dismissLoading();
                    //         this.toastService.presentToast('You Device is out of space,Clear space and try again ','danger');
                    //  this.toastService.presentToast('error try login  again, ','danger');
                    // })
                    // this.storageService.set('designer', loginUserObj).catch((e) =>{
                    //        console.log(e);
                    //      });
                    //('/menu/tabs/home');
                    //this.navCtrl.push('/menu/tabs/tabs/home');
                    //this.router.navigate(['/menu/tabs/home']);
                    return;
                }
                else {
                    console.log("user does not exists,creating user then logging him in");
                    _this.user.emailRegister(userObj, " ").subscribe(function (data) {
                        console.log(data);
                        _this.loadingService.dismissLoading();
                        _this.events.publish('user:created', data);
                        _this.doSocialLogin(data);
                        //this.toastService.presentToast('Welcome, ' + this.titlecasePipe.transform(data.name), 'dark');
                        //this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                        //  this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                        //this.navCtrl.push('/menu/tabs/tabs/home');
                        //this.router.navigate(['/menu/tabs/home']);
                    }, function (e) {
                        console.log(e);
                        _this.loadingService.dismissLoading();
                        _this.toastService.presentToast('error try login  again, ', 'danger');
                    });
                }
            }
        });
        // })
    };
    LoginPage.prototype.googleLogin = function () {
        //       if(!this.dataService.isOnline()){
        //         this.loadingService.dismissLoading();
        // this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
        //    return false;
        var _this = this;
        //    }
        this.loadingService.presentLoading();
        console.log("logging in");
        this.user.googleLogin()
            .catch(function (error) {
            console.log('catch error: ', error);
            _this.loadingService.dismissLoading();
            if (error.code === 'auth/account-exists-with-different-credential') {
                console.log('error from catch: ', error);
                _this.toastService.presentToast('Please use prior logged in method', 'danger');
            }
            else {
                _this.toastService.presentToast('Error occured', 'danger');
            }
        })
            .then(function (user) {
            console.log(user);
            //console.log('user: ', user);
            var userObj = {};
            userObj._id = user.user.uid;
            userObj.name = user.user.displayName;
            userObj.email = user.user.email;
            userObj.source = null;
            userObj.type = 'google';
            userObj.card = null;
            userObj.phone = null;
            //console.log(userObj);
            //this.navCtrl.navigateForward('/menu/tabs/tabs/home');
            //this.navCtrl.push('/menu/tabs/tabs/home');
            // this.navCtrl.navigateRoot('/menu/tabs/home');
            //  this.router.navigate(['menu']);
            _this.doSocialLogin(userObj);
        })
            .catch(function (error) {
            console.log(error);
            _this.loadingService.dismissLoading();
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"],
            src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"],
            src_app_providers_user__WEBPACK_IMPORTED_MODULE_9__["UserProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.module.ts ***!
  \***************************************************************/
/*! exports provided: PrivacyPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function() { return PrivacyPolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy-policy.page */ "./src/app/pages/privacy-policy/privacy-policy.page.ts");






var PrivacyPolicyPageModule = /** @class */ (function () {
    function PrivacyPolicyPageModule() {
    }
    PrivacyPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPage"]],
            entryComponents: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPage"]],
            exports: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPage"]]
        })
    ], PrivacyPolicyPageModule);
    return PrivacyPolicyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button slot=\"icon-only\" (click)=\"dismiss()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Privacy Policy</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-content padding class=\"privacy-content\">\n    <div>\n      <h1>Welcome to our Privacy Policy</h1>\n      <h3>Your privacy is critically important to us.</h3>\n      Snap2Vector\n\n      <p>It is Snap2Vector’s policy to respect your privacy regarding any information we may collect while operating our\n        website. This Privacy Policy applies to <b>snap2vector</b> (hereinafter, \"us\", \"we\", or \"snap2vector\"). We\n        respect your privacy and are committed to protecting personally identifiable information you may provide us\n        through the Website. We have adopted this privacy policy (\"Privacy Policy\") to explain what information may be\n        collected on our Website, how we use this information, and under what circumstances we may disclose the\n        information to third parties. This Privacy Policy applies only to information we collect through the Website and\n        does not apply to our collection of information from other sources.</p>\n      <p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules\n        and policies governing your use of our Website. Depending on your activities when visiting our Website, you may\n        be required to agree to additional terms and conditions.</p>\n\n      <h2>Gathering of Personally-Identifying Information</h2>\n      <p>Certain visitors to Snap2Vector’s websites choose to interact with Snap2Vector in ways that require Snap2Vector\n        to gather personally-identifying information. The amount and type of information that Snap2Vector gathers\n        depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at\n        http://snap2vector.com to provide a username and email address.</p>\n\n      <h2>Security</h2>\n      <p>The security of your Personal Information is important to us, but remember that no method of transmission over\n        the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable\n        means to protect your Personal Information, we cannot guarantee its absolute security.</p>\n\n      <h2>E-commerce</h2>\n      <p>Those who engage in transactions with Snap2Vector – by purchasing Snap2Vector's services or products, are asked\n        to provide additional information, including as necessary the personal and financial information required to\n        process those transactions. In each case, Snap2Vector collects such information only insofar as is necessary or\n        appropriate to fulfill the purpose of the visitor’s interaction with Snap2Vector. Snap2Vector does not disclose\n        personally-identifying information other than as described below. And visitors can always refuse to supply\n        personally-identifying information, with the caveat that it may prevent them from engaging in certain\n        website-related activities.</p>\n\n\n      <h2>Privacy Policy Changes</h2>\n      <p>Although most changes are likely to be minor, Snap2Vector may change its Privacy Policy from time to time, and\n        in Snap2Vector’s sole discretion. Snap2Vector encourages visitors to frequently check this page for any changes\n        to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute\n        your acceptance of such change.</p>\n\n\n\n      <h2>Snap2Vector</h2>\n\n\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/privacy-policy/privacy-policy.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/privacy-policy/privacy-policy.page.ts ***!
  \*************************************************************/
/*! exports provided: PrivacyPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function() { return PrivacyPolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    PrivacyPolicyPage.prototype.ngOnInit = function () {
    };
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    PrivacyPolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.page.html */ "./src/app/pages/privacy-policy/privacy-policy.page.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.page.scss */ "./src/app/pages/privacy-policy/privacy-policy.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map