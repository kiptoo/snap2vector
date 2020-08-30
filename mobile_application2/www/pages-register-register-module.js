(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var src_app_providers_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/shared.module */ "./src/app/providers/shared.module.ts");









var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_providers_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <form margin-top #form=\"ngForm\" class=\"animated fade-in\" [formGroup]=\"registerForm\">\n    <ion-grid margin-top>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div padding class=\"logo-container animated fade-in-down\">\n            <div class=\"logo\">\n              <img src=\"assets/img/ionic4-ico.png\" />\n            </div>\n          </div>\n          <div padding margin-top>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"person\"></ion-icon>\n                Full Name\n              </ion-label>\n              <ion-input name=\"email\" type=\"email\" formControlName=\"name\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"call\"></ion-icon>\n                Phone Number\n              </ion-label>\n              <ion-input maxlength=\"10\" name=\"phone\" type=\"text\" formControlName=\"phone\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"briefcase\"></ion-icon>\n                Company\n              </ion-label>\n              <ion-input maxlength=\"10\" name=\"phone\" type=\"text\" formControlName=\"company\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"mail\"></ion-icon>\n                Email\n              </ion-label>\n              <ion-input name=\"email\" type=\"email\" formControlName=\"email\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"lock\"></ion-icon>\n                Password\n              </ion-label>\n              <ion-input name=\"password\" type=\"password\" formControlName=\"password\" required></ion-input>\n            </ion-item>\n          </div>\n          <div padding-top>\n            <ion-button type=\"submit\" (click)=\"register()\" color=\"dark\" [disabled]=\"form.invalid\" expand=\"block\">\n              SIGN IN\n              &nbsp;\n              <ion-icon name=\"log-in\"></ion-icon>\n            </ion-button>\n          </div>\n        <!--   <div padding-top>\n            <ion-button type=\"submit\" (click)=\"googleLogin()\" color=\"danger\" expand=\"block\">\n              GOOGLE LOGIN\n            </ion-button>\n          </div> -->\n        </ion-col>\n      </ion-row>\n      <ion-row margin-top class=\"ion-justify-content-around\">\n        <ion-col>\n          <ion-text color=\"secondary\" class=\"bottom-links\" (click)=\"login()\" tappable>I have an account</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('bg.jpg') no-repeat;\n  --background-size: cover; }\n\n.logo-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\nh5 {\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: lighter;\n  font-size: 2em;\n  text-shadow: -1px 2px 15px rgba(0, 0, 0, 0.7); }\n\n.forgot-password {\n  font-size: 1rem;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end; }\n\n.bottom-links {\n  font-size: 1.2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRTpcXENSWVBUTyBTWVNURU1TXFxQcm9qZWN0c1xcc25hcDJ2ZWN0b3JcXG1vYmlsZV9hcHBsaWNhdGlvbjIvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQWE7RUFDYix3QkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsNkNBQTZDLEVBQUE7O0FBRy9DO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcuanBnKSBuby1yZXBlYXQ7XG4gIC0tYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oNSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAyZW07XG4gIHRleHQtc2hhZG93OiAtMXB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5ib3R0b20tbGlua3Mge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/data.service */ "./src/app/providers/data.service.ts");
/* harmony import */ var src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/storage.service */ "./src/app/providers/storage.service.ts");
/* harmony import */ var src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/loading.service */ "./src/app/providers/loading.service.ts");
/* harmony import */ var src_app_providers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/user */ "./src/app/providers/user.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(formBuilder, data, router, toastService, storageService, navCtrl, loadingService, user, titlecasePipe, events, 
    //private fAuth: FirebaseAuthentication,
    platform) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.router = router;
        this.toastService = toastService;
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.user = user;
        this.titlecasePipe = titlecasePipe;
        this.events = events;
        this.platform = platform;
        this.googleData = {
            clientId: '942240372918-669v8nknrpkq02np67hkvbgf08q8jhl0.apps.googleusercontent.com',
            clientSecret: 'wsnVP_S43h7ZoTYVIyXdoDuH'
        };
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{10}')])],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"]
                    .compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')])],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    RegisterPage.prototype.isValidMailFormat = function (email) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (email !== '' && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
            return false;
        }
        return true;
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.loadingService.presentLoading();
        var registerUserObj = {
            name: this.registerForm.value.name,
            phone: this.registerForm.value.phone,
            company: this.registerForm.value.company,
            email: this.registerForm.value.email,
        };
        if (this.registerForm.valid || 1) {
            var firebaseAuth = void 0;
            var firebaseIdToken_1;
            if (!this.platform.is('cordova')) {
                firebaseAuth = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(registerUserObj.email, this.registerForm.value.password);
                firebaseIdToken_1 = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken();
            }
            else {
                firebaseAuth = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(registerUserObj.email, this.registerForm.value.password);
                firebaseIdToken_1 = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken();
            }
            firebaseAuth.then(function (data) {
                console.log(data);
                firebaseIdToken_1.then(function (tok) {
                    registerUserObj._id = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
                    _this.user.emailRegister(registerUserObj, tok)
                        .subscribe(function (data) {
                        _this.loadingService.dismissLoading();
                        _this.toastService.presentToast('Sign-up Success', 'success ');
                        _this.navCtrl.navigateBack('login');
                    });
                });
            }).catch(function (err) {
                console.log(err);
                var message = '';
                if (err.code === 'auth/email-already-in-use') {
                    message = err.message;
                }
                _this.loadingService.dismissLoading();
                _this.toastService.presentToast(message, 'danger');
            });
        }
        else {
            this.loadingService.dismissLoading();
            this.toastService.presentToast('Form has one or more errors', 'danger');
        }
    };
    // login() {
    //   this.router.navigate(['/login']);
    // }
    RegisterPage.prototype.doSocialLogin = function (userObj) {
        var _this = this;
        // console.log('start verification');
        var firebaseIdToken;
        firebaseIdToken = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken();
        // console.log(firebaseIdToken);
        firebaseIdToken.then(function (tok) {
            //   console.log(tok);
            _this.user.emailLogin(tok).subscribe(function (data) {
                console.log(data);
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    //console.log('verification');
                    if (element.email === userObj.email) {
                        //console.log('verified');
                        _this.storageService.set('designer', element).then(function (data) {
                            //  console.log(data);
                        }).catch(function (e) {
                            console.log(e);
                        });
                        // this.storageService.set('designer', loginUserObj).catch((e) =>{
                        //        console.log(e);
                        //      });
                        _this.loadingService.dismissLoading();
                        _this.events.publish('user:loggedIn', element);
                        _this.toastService.presentToast('Welcome, ' + _this.titlecasePipe.transform(element.name), 'dark');
                        // this.navCtrl.navigateForward('/menu/tabs/home');
                        _this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                        //('/menu/tabs/home');
                        //this.navCtrl.push('/menu/tabs/tabs/home');
                        //this.router.navigate(['/menu/tabs/home']);
                        return;
                    }
                    else {
                        _this.user.emailRegister(userObj, tok).subscribe(function (data) {
                            _this.loadingService.dismissLoading();
                            _this.events.publish('user:loggedIn', data);
                            _this.toastService.presentToast('Welcome, ' + _this.titlecasePipe.transform(data.name), 'dark');
                            //this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                            _this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                            //this.navCtrl.push('/menu/tabs/tabs/home');
                            //this.router.navigate(['/menu/tabs/home']);
                        });
                    }
                }
            });
        });
    };
    RegisterPage.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    RegisterPage.prototype.googleLogin = function () {
        var _this = this;
        this.loadingService.presentLoading();
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
            // console.log(user);
            //console.log('user: ', user);
            var userObj = {};
            userObj._id = user.user.uid;
            userObj.name = user.user.displayName;
            userObj.email = user.user.email;
            userObj.source = 'google';
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
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"],
            src_app_providers_user__WEBPACK_IMPORTED_MODULE_9__["UserProvider"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map