(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/@ionic-native/base64/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/base64/ngx/index.js ***!
  \********************************************************/
/*! exports provided: Base64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return Base64; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Base64 = /** @class */ (function (_super) {
    __extends(Base64, _super);
    function Base64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64.prototype.encodeFile = function (filePath) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "encodeFile", {}, arguments); };
    Base64.pluginName = "Base64";
    Base64.plugin = "com-badrit-base64";
    Base64.pluginRef = "plugins.Base64";
    Base64.repo = "https://github.com/hazemhagrass/phonegap-base64";
    Base64.platforms = ["Android", "iOS"];
    Base64 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Base64);
    return Base64;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhc2U2NC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQzVDLDBCQUFpQjs7OztJQVEzQywyQkFBVSxhQUFDLFFBQWdCOzs7Ozs7SUFSaEIsTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQWxDbkI7RUFrQzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIEJhc2U2NFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIFBsdWdpbiBpcyB1c2VkIHRvIGVuY29kZSBiYXNlNjQgb2YgYW55IGZpbGUsIGl0IHVzZXMganMgY29kZSBmb3IgaU9TLCBidXQgaW4gY2FzZSBvZiBhbmRyb2lkIGl0IHVzZXMgbmF0aXZlIGNvZGUgdG8gaGFuZGxlIGFuZHJvaWQgdmVyc2lvbnMgbG93ZXIgdGhhbiB2LjNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhc2U2NCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFzZTY0L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlNjQ6IEJhc2U2NCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogbGV0IGZpbGVQYXRoOiBzdHJpbmcgPSAnZmlsZTovLy8uLi4nO1xuICogdGhpcy5iYXNlNjQuZW5jb2RlRmlsZShmaWxlUGF0aCkudGhlbigoYmFzZTY0RmlsZTogc3RyaW5nKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGJhc2U2NEZpbGUpO1xuICogfSwgKGVycikgPT4ge1xuICogICBjb25zb2xlLmxvZyhlcnIpO1xuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFzZTY0JyxcbiAgcGx1Z2luOiAnY29tLWJhZHJpdC1iYXNlNjQnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLkJhc2U2NCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaGF6ZW1oYWdyYXNzL3Bob25lZ2FwLWJhc2U2NCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2U2NCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBlbmNvZGVzIGJhc2U2NCBvZiBhbnkgZmlsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggQWJzb2x1dGUgZmlsZSBwYXRoXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmaWxlIGlzIHN1Y2Nlc3NmdWxseSBlbmNvZGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuY29kZUZpbGUoZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==

/***/ }),

/***/ "./src/app/pages/orders/orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/pages/orders/orders.page.ts");
/* harmony import */ var src_app_providers_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/order */ "./src/app/providers/order.ts");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var src_app_providers_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/shared.module */ "./src/app/providers/shared.module.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _image_preview_image_preview_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../image-preview/image-preview.module */ "./src/app/pages/image-preview/image-preview.module.ts");
/* harmony import */ var _revision_image_revision_image_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../revision-image/revision-image.module */ "./src/app/pages/revision-image/revision-image.module.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var src_app_providers_ordertransform_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/providers/ordertransform.pipe */ "./src/app/providers/ordertransform.pipe.ts");












//import { PhoneModalPageModule } from '../phone-modal/phone-modal.module';





var routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }
];
var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_providers_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _image_preview_image_preview_module__WEBPACK_IMPORTED_MODULE_12__["ImagePreviewPageModule"],
                _revision_image_revision_image_module__WEBPACK_IMPORTED_MODULE_13__["RevisionImagePageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"], src_app_providers_ordertransform_pipe__WEBPACK_IMPORTED_MODULE_16__["OrderTransform"]],
            providers: [src_app_providers_order__WEBPACK_IMPORTED_MODULE_7__["OrderProvider"], _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidPermissions"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_15__["Base64"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"]]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons ion-button slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button tappable (click)=refreshList() slot=\"start\" size=\"large\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n      <!-- <ion-button *ngIf=\"isCordova\" tappable (click)=message() slot=\"end\" size=\"large\">\n        <ion-icon name=\"text\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n    <ion-title>Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"orderTabs\">\n    <ion-segment-button  value=\"inProgress\" (click)=\"switchTo('inProgress')\" padding-left>\n      In Prog.\n    </ion-segment-button>\n    <ion-segment-button value=\"attentionRequired\"\n      (click)=\"switchTo('attentionRequired');orderViewed('attentionRequired')\">\n      Attention Req.\n      <ion-badge class=\"new_badge\" *ngIf=\"att_new_count>0\" slot=\"end\">{{att_new_count}}</ion-badge>\n    </ion-segment-button>\n    <ion-segment-button value=\"completed\" (click)=\"switchTo('completed');orderViewed('completed')\">\n      Completed\n      <ion-badge class=\"new_badge_last\" *ngIf=\"comp_new_count>0\" slot=\"end\">{{comp_new_count}}</ion-badge>\n    </ion-segment-button>\n  </ion-segment>\n  <ng-container [ngSwitch]=\"orderTabs\">\n    <ng-container *ngSwitchCase=\"'inProgress'\">\n           <ion-row>\n        <ion-text color=\"primary\" [hidden]=\"!inprogressOrders || inprogressOrders?.length!=0\" text-center margin>No order has been placed!</ion-text>\n      </ion-row>\n      <ion-list *ngIf=\"inprogressOrders.length > 0\">\n        <ng-container *ngFor=\"let order of displayedOrders;let i = index\">\n         <ion-card background=\"primary\">\n\n        <ion-card-header>\n  <!--        <ion-label *ngIf=\"order.delivered && order.accepted\">Status: Completed</ion-label>\n            <ion-label *ngIf=\"order.delivered && !order.accepted\">Status: Delivered</ion-label>\n            <ion-label *ngIf=\"!order.delivered && !order.revisionRequested\">Status: In Progress</ion-label>\n            <ion-label *ngIf=\"order.revisionRequested && !order.delivered\">Status: In Revision</ion-label>\n            <ion-label style=\"text-align: right;position: absolute;margin-left: 30px\" padding-right>Order No: {{order.id |OrderTransform}}</ion-label> -->\n\n                 <ion-toolbar>\n  <ion-buttons slot=\"start\">\n      <p style=\"padding-right: 50px\" slot=\"start\">Status: Completed\n      <!-- <ion-icon slot=\"start\" name=\"open\"></ion-icon> -->\n    </p>\n    <p style=\"padding-right: 50px\">\n      <!-- <ion-icon slot=\"start\" name=\"text\"></ion-icon> -->\n       Order No: {{order.id |OrderTransform}}\n    </p>\n    <p style=\"right: 0px\" slot=\"end\">\n     Date: {{order.date | date : 'MMM dd, yyyy'}}\n      <!-- <ion-icon slot=\"end\" name=\"share\">Date: {{order.date | date : 'MMM dd, yyyy'}}</ion-icon> -->\n    </p>\n  \n  </ion-buttons>\n  <!-- <ion-title>Default Buttons</ion-title> -->\n<!--   <ion-buttons slot=\"primary\">\n    <ion-button color=\"secondary\">\n      <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n    </ion-button>\n  </ion-buttons> -->\n</ion-toolbar>\n        \n             \n        </ion-card-header>\n\n\n        <ion-card-content *ngFor=\"let image of order.images\">\n\n             <ion-item  style=\"border-bottom: none;\" padding-left>\n             <!--  <img  [src]=\"image.url\" /> -->\n             <ion-thumbnail style=\"display:inline-block\">\n        <img  [src]=\"image.url\" />\n         </ion-thumbnail>\n<!--            <ion-row >\n  <p  style=\"text-align: right;position: absolute;right: 0px;\" class=\"image_name\" padding>File Name:{{image.filename}}</p>\n                    </ion-row> -->\n            \n   <ion-toolbar>\n     <ion-buttons slot=\"end\">\n       <p >File Name:{{image.filename}}</p>\n    \n    </ion-buttons>\n</ion-toolbar>  \n\n                   \n        </ion-item>\n\n\n \n         <!-- Icon only -->\n  <!--     <ion-segment  color=\"dark\">\n  \n        <ion-segment-button (click)=\"open(image.filename, image.url, order)\" checked>\n          <ion-label>Open</ion-label>\n          <ion-icon name=\"open\"></ion-icon>\n        </ion-segment-button >\n            <ion-segment-button  *ngIf=\"isCordova\" (click)=\"message(order)\" checked>\n          <ion-label>Text Support</ion-label>\n          <ion-icon name=\"text\"></ion-icon>\n        </ion-segment-button>\n    \n        <ion-segment-button  *ngIf=\"isCordova\"  (click)=\"share(image.filename, image.url,order)\">\n          <ion-label>Share</ion-label>\n          <ion-icon name=\"share\"></ion-icon>\n        </ion-segment-button>\n      </ion-segment> -->\n\n<!-- <ion-toolbar>\n  <ion-buttons slot=\"secondary\">\n      <ion-button>\n      <ion-icon slot=\"icon-only\" name=\"open\"></ion-icon>\n    </ion-button>\n    <ion-button>\n      <ion-icon slot=\"icon-only\" name=\"text\"></ion-icon>\n    </ion-button>\n    <ion-button>\n      <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar> -->\n<ion-button expand=\"block\" fill=\"solid\" (click)=\"open(image.filename, image.url, order)\">\n <ion-icon slot=\"start\" name=\"open\"></ion-icon>\n open\n</ion-button>\n<ion-button  *ngIf=\"isCordova\"  (click)=\"share(image.filename, image.url,order)\" expand=\"block\" fill=\"solid\">\n<ion-icon slot=\"start\" name=\"share\"></ion-icon>\nshare\n</ion-button>\n<ion-button   *ngIf=\"isCordova\" (click)=\"message(order)\" shape=\"block\" fill=\"solid\">\n<ion-icon slot=\"start\" name=\"text\"></ion-icon>\ntext support\n</ion-button>\n\n\n\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n  </ion-list>\n   <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n     \n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'attentionRequired'\">\n      <ion-row>\n        <ion-text color=\"primary\" [hidden]=\"!attentionRequeredOrders || attentionRequeredOrders?.length!=0\" text-center\n          margin>No orders requiring attention.</ion-text>\n      </ion-row>\n      <div>\n        <ion-list *ngIf=\"attentionRequeredOrders.length\">\n          <ng-container *ngFor=\"let order of attentionRequeredOrders;let i = index\">\n            <ion-card background=\"primary\">\n\n        <ion-card-header>\n         <ion-label *ngIf=\"order.delivered && order.accepted\">Status: Completed</ion-label>\n            <ion-label *ngIf=\"order.delivered && !order.accepted\">Status: Delivered</ion-label>\n            <ion-label *ngIf=\"!order.delivered && !order.revisionRequested\">Status: In Progress</ion-label>\n            <ion-label *ngIf=\"order.revisionRequested && !order.delivered\">Status: In Revision</ion-label>\n<!--             <ion-label style=\"text-align: right;position: absolute;right: 10px\" padding-right>Date: {{order.date | date : 'MMM dd, yyyy'}}</ion-label> -->\n              <ion-label style=\"text-align: right;position: absolute;margin-left: 30px\" padding-right>Order No: {{order.id |OrderTransform}}</ion-label>\n        </ion-card-header>\n        <ion-card-content *ngFor=\"let image of order.images\">\n             <ion-item  padding-left>\n             <!--  <img  [src]=\"image.url\" /> -->\n             <ion-thumbnail style=\"display:inline-block\">\n        <img  [src]=\"image.url\" />\n         </ion-thumbnail>\n           <ion-row >\n                      <p style=\"text-align: right;position: absolute;right: 0px\" class=\"image_name\" padding>File Name:{{image.filename}}</p>\n                    </ion-row>\n                            <ion-row >\n                   <!--     <ion-label style=\"text-align: right;position: absolute;margin-left: 30px\" padding-right>Order No: {{order.id}}</ion-label> -->\n                 <ion-label style=\"text-align: right;position: absolute;right: 10px\" padding-right>Date: {{order.date | date : 'MMM dd, yyyy'}}</ion-label>\n                    </ion-row>\n                   \n        </ion-item>\n         <!-- Icon only -->\n      <ion-segment  color=\"dark\">\n        <ion-segment-button (click)=\"download(image.filename, image.url, order)\">\n          <ion-label>Save</ion-label>\n          <ion-icon name=\"download\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"open(image.filename, image.url, order)\" checked>\n          <ion-label>Open</ion-label>\n          <ion-icon name=\"open\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button  *ngIf=\"isCordova\"   (click)=\"share(image.filename, image.url,order)\">\n          <ion-label>Share</ion-label>\n          <ion-icon name=\"share\"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n        </ion-card-content>\n      </ion-card>\n            <ion-grid no-padding padding-left padding-right padding-bottom>\n              <ion-row *ngIf=\"order.delivered || order.revisionRequested\">\n                <ion-col>\n                  <ion-button expand=\"full\" (click)=\"viewOrderDetails(order)\">View Delivered Files</ion-button>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"!order.accepted && order.delivered\">\n                <ion-col margin-right>\n                  <ion-button expand=\"full\" (click)='requestRevision(order)'>\n                    Request Revision\n                  </ion-button>\n                </ion-col>\n                <ion-col margin-left>\n                  <ion-button expand=\"full\" (click)='acceptOrder(order)'>\n                    Accept Delivery\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </ng-container>\n        </ion-list>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'completed'\">\n      <ion-row>\n        <ion-text color=\"primary\" [hidden]=\"!completedOrders || completedOrders?.length!=0\" text-center margin>No\n          completed orders.</ion-text>\n      </ion-row>\n      <div>\n        <ion-list *ngIf=\"completedOrders.length\">\n          <ng-container *ngFor=\"let order of completedOrders;let i = index\">\n           <ion-card background=\"primary\">\n\n        <ion-card-header>\n         <ion-label *ngIf=\"order.delivered && order.accepted\">Status: Completed</ion-label>\n            <ion-label *ngIf=\"order.delivered && !order.accepted\">Status: Delivered</ion-label>\n            <ion-label *ngIf=\"!order.delivered && !order.revisionRequested\">Status: In Progress</ion-label>\n            <ion-label *ngIf=\"order.revisionRequested && !order.delivered\">Status: In Revision</ion-label>\n           <!--  <ion-label style=\"text-align: right;position: absolute;right: 10px\" padding-right>Date: {{order.date | date : 'MMM dd, yyyy'}}</ion-label> -->\n             <ion-label style=\"text-align: right;position: absolute;margin-left: 30px\" padding-right>Order No: {{order.id |OrderTransform}}</ion-label>\n        </ion-card-header>\n        <ion-card-content *ngFor=\"let image of order.images\">\n             <ion-item  padding-left>\n             <!--  <img  [src]=\"image.url\" /> -->\n             <ion-thumbnail style=\"display:inline-block\">\n        <img  [src]=\"image.url\" />\n         </ion-thumbnail>\n           <ion-row >\n                      <p style=\"text-align: right;position: absolute;right: 0px\" class=\"image_name\" padding>File Name:{{image.filename}}</p>\n                    </ion-row>\n                            <ion-row >\n                   <!--     <ion-label style=\"text-align: right;position: absolute;margin-left: 30px\" padding-right>Order No: {{order.id}}</ion-label> -->\n                 <ion-label style=\"text-align: right;position: absolute;right: 10px\" padding-right>Date: {{order.date | date : 'MMM dd, yyyy'}}</ion-label>\n                    </ion-row>\n                   \n        </ion-item>\n         <!-- Icon only -->\n      <ion-segment  color=\"dark\">\n        <ion-segment-button (click)=\"download(image.filename, image.url, order)\">\n          <ion-label>Save</ion-label>\n          <ion-icon name=\"download\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button (click)=\"open(image.filename, image.url, order)\" checked>\n          <ion-label>Open</ion-label>\n          <ion-icon name=\"open\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button  *ngIf=\"isCordova\"   (click)=\"share(image.filename, image.url,order)\">\n          <ion-label>Share</ion-label>\n          <ion-icon name=\"share\"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n        </ion-card-content>\n      </ion-card>\n            <ion-grid no-padding padding-left padding-right padding-bottom>\n              <ion-row *ngIf=\"order.delivered || order.revisionRequested\">\n                <ion-col>\n                  <ion-button expand=\"full\" (click)=\"viewOrderDetails(order)\">View Delivered Files</ion-button>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"!order.accepted && order.delivered\">\n                <ion-col margin-right>\n                  <ion-button expand=\"full\" (click)='requestRevision(order)'>\n                    Request Revision\n                  </ion-button>\n                </ion-col>\n                <ion-col margin-left>\n                  <ion-button expand=\"full\" (click)='acceptOrder(order)'>\n                    Accept Delivery\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n          </ng-container>\n        </ion-list>\n      </div>\n    </ng-container>\n  </ng-container>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/orders/orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/orders/orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/order */ "./src/app/providers/order.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/alert.service */ "./src/app/providers/alert.service.ts");
/* harmony import */ var src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/loading.service */ "./src/app/providers/loading.service.ts");
/* harmony import */ var src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _image_preview_image_preview_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../image-preview/image-preview.page */ "./src/app/pages/image-preview/image-preview.page.ts");
/* harmony import */ var _revision_image_revision_image_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../revision-image/revision-image.page */ "./src/app/pages/revision-image/revision-image.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");


















var OrdersPage = /** @class */ (function () {
    function OrdersPage(orderService, navCtrl, alert, loading, toast, afAuth, platform, sms, base64, http, transfer, androidPermissions, modalCtrl, file, fileOpener, socialSharing) {
        var _this = this;
        this.orderService = orderService;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.loading = loading;
        this.toast = toast;
        this.afAuth = afAuth;
        this.platform = platform;
        this.sms = sms;
        this.base64 = base64;
        this.http = http;
        this.transfer = transfer;
        this.androidPermissions = androidPermissions;
        this.modalCtrl = modalCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.socialSharing = socialSharing;
        this.userObj = {};
        this.orders = [];
        this.completedOrders = [];
        this.inprogressOrders = [];
        this.attentionRequeredOrders = [];
        this.orderTabs = 'inProgress';
        this.att_new_count = 0;
        this.comp_new_count = 0;
        this.writePermission = false;
        this.loading.presentLoadingWithOptions();
        this.afAuth.authState.subscribe(function (user) {
            console.log(user);
            _this.user = user;
            _this.refreshList(user);
        }, function (err) {
            _this.toast.presentToastBottom('unable to load orders', 'danger');
            console.log(err);
            _this.loading.dismissLoading();
        });
        // this.refreshList(this.user);
        // console.log(this.user);
        // this.loading.presentLoading();
        //   this.platform.resume.subscribe(() => {
        //   //console.log(this.nav.getActive());
        //   this.ionViewWillEnter();
        // });
    }
    OrdersPage.prototype.ngOnInit = function () {
        // let k=this.myFunction(); 
        // console.log(k);
        //  this.refreshList(this.user);
        this.getPermission();
    };
    ;
    OrdersPage.prototype.ionViewWillEnter = function () {
        //   this.att_new_count = 0;
        //   this.comp_new_count = 0;
        //   //this.getPermission();
        this.loading.presentLoadingWithOptions();
        //this.refreshList(this.user);
    };
    OrdersPage.prototype.doInfinite = function (event) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var displayedOrderslength = _this.displayedOrders.length;
                try {
                    _this.displayedOrders = _this.displayedOrders.concat(_this.inprogressOrders.slice(displayedOrderslength, displayedOrderslength + 10));
                    event.target.complete();
                    resolve();
                }
                catch (e) {
                    _this.toast.presentToastBottom('No more orders', 'primary');
                    resolve();
                }
            }, 500);
        });
    };
    OrdersPage.prototype.getOrdersFromServer = function (userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.orderService.getOrdersFromServer(userId)
                            .subscribe(function (data) {
                            console.log(data);
                            _this.orders = data;
                            _this.orders.sort(function (a, b) {
                                var keyA = new Date(a.date), keyB = new Date(b.date);
                                // Compare the 2 dates
                                if (keyA > keyB)
                                    return -1;
                                if (keyA < keyB)
                                    return 1;
                                return 0;
                            });
                            _this.completedOrders = [];
                            _this.inprogressOrders = [];
                            _this.attentionRequeredOrders = [];
                            for (var index = 0; index < _this.orders.length; index++) {
                                if (_this.orders[index].accepted === true && _this.orders[index].delivered) {
                                    _this.completedOrders.push(_this.orders[index]);
                                    if (_this.orders[index].isViewedByUser === false) {
                                        _this.comp_new_count++;
                                    }
                                }
                                else if (_this.orders[index].accepted != true && _this.orders[index].delivered) {
                                    _this.attentionRequeredOrders.push(_this.orders[index]);
                                    if (_this.orders[index].isViewedByUser === false) {
                                        _this.att_new_count++;
                                    }
                                }
                                else {
                                    _this.inprogressOrders.push(_this.orders[index]);
                                }
                            }
                            _this.loading.dismissLoading();
                            _this.displayedOrders = _this.inprogressOrders.slice(0, 10);
                            // this.displayedOrders = data.reverse().filter(obj => {
                            //      return obj.delivered === false && obj.accepted === false && obj.revisionRequested === false;
                            //    }).slice(0, 10);
                            console.log(_this.inprogressOrders);
                            console.log(_this.completedOrders);
                            // this.changeDetectorRef.detectChanges();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage.prototype.requestRevision = function (order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _revision_image_revision_image_page__WEBPACK_IMPORTED_MODULE_15__["RevisionImagePage"],
                            //cssClass: 'image-preview',
                            //showBackdrop: true,
                            componentProps: { orderObj: order }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage.prototype.acceptOrder = function (orderObj) {
        var _this = this;
        this.alert.newAlert('Are you sure?', 'More revisions cannot be requested once order is complete.', [
            {
                text: 'No',
                handler: function () {
                }
            },
            {
                text: 'Yes',
                handler: function () {
                    _this.loading.presentLoading();
                    orderObj.accepted = true;
                    _this.orderService.acceptOrder(orderObj).subscribe(function (data) {
                        _this.loading.dismissLoading();
                        setTimeout(function () {
                            _this.toast.presentToastBottom('Order Accepted', 'dark');
                        }, 3000);
                    });
                }
            }
        ]);
    };
    OrdersPage.prototype.viewOrderDetails = function (orderObj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _image_preview_image_preview_page__WEBPACK_IMPORTED_MODULE_14__["ImagePreviewPage"],
                            cssClass: 'modal-fullscreen',
                            // showBackdrop: true,
                            componentProps: { order: orderObj }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersPage.prototype.refreshList = function (user) {
        console.log('refresh');
        //  this.loading.dismissLoading();
        // this.loading.presentLoading();
        console.log(user);
        console.log(user.uid);
        this.getOrdersFromServer(user.uid);
        // this.loading.dismissLoading();
        // setTimeout(() => {
        //        this.loading.dismissLoading();
        //        }, 2000)
    };
    OrdersPage.prototype.message = function (order) {
        console.log(order);
        var orderid = order._id;
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };
        this.sms.send('15187791415', 'Hello Customer Service, I need help with order number:' + orderid, options);
    };
    OrdersPage.prototype.download = function (fileName, url, order) {
        var _this = this;
        var ext = fileName.substr(fileName.lastIndexOf('.'));
        console.log("Extension" + ext);
        var filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
        console.log(filenameNoExt);
        var file_Name = filenameNoExt + '-' + order.id + ext;
        console.log(file_Name);
        // console.log(this.inprogressOrders);
        if (!this.platform.is('cordova')) {
            window.open(url);
            // saveAs(url, fileName)
            //return
            return;
        }
        else {
            this.loading.presentLoading();
            this.getPermission();
            //  console.log('afer permission');
            // if (this.writePermission) {
            // if(!this.writePermission){
            //   this.toast.presentToastBottom('Permission not granted', 'danger');
            //    return false;
            // }
            // return true
            // }
            console.log('start downloading');
            this.http.get(url, { responseType: 'blob' }).subscribe(function (data) {
                console.log(fileName);
                console.log('already got file,now downloading');
                console.log(data);
                var ext = fileName.substr(fileName.lastIndexOf('.'));
                console.log("Extension" + ext);
                var filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
                console.log(filenameNoExt);
                var file_Name = filenameNoExt + '-' + order.id + ext;
                console.log(file_Name);
                var img_path;
                img_path = _this.file.externalRootDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
                if (_this.platform.is('android')) {
                    img_path = _this.file.dataDirectory + '/';
                    //img_path = this.file.dataDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
                }
                else {
                    img_path = _this.file.documentsDirectory + '/';
                    //img_path = this.file.documentsDirectory + filenameNoExt + '-' + order.id + ext;
                }
                console.log("image path" + img_path);
                console.log(_this.file.dataDirectory);
                _this.file.writeFile(img_path, file_Name, data, { replace: true })
                    .then(function (fileEntry) {
                    _this.toast.presentToastBottom('File saved successfully', 'dark');
                    console.log(fileEntry);
                    console.log('write successful');
                    _this.loading.dismissLoading();
                    _this.showDownloadAlert(img_path, fileName, url, order);
                })
                    .catch(function (error) {
                    console.log(error);
                });
            });
            // }
            // else{
            //         console.log('no permission granted');
            // }
            //this.loading.presentLoading();
            //  const ext = fileName.substr(fileName.lastIndexOf('.'));
            //  console.log("filename"+ext);
            //  const filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
            //   console.log("filename"+filenameNoExt);
            //  let img_path;
            //  img_path = this.file.externalRootDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
            //  if (this.platform.is('android')) {
            //    img_path = this.file.dataDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
            //  } else {
            //    img_path = this.file.documentsDirectory + filenameNoExt + '-' + order.id + ext;
            //  }
            //  console.log("image path"+img_path);
            // //this.fileTransfer = this.transfer.create();
            // this.fileTransfer =this.orderService.getfiletransfer();
            // console.log('fileTransfer: ');  
            //      console.log(JSON.stringify(this.fileTransfer));
            //  this.fileTransfer.download(url, img_path).then((entry) => {
            //     console.log("success downloading");
            //    this.loading.dismissLoading();
            //    this.showDownloadAlert(img_path, fileName, order);
            //  }, (error) => {
            //     console.log("error downloading");
            //     console.log(error);
            //    this.loading.dismissLoading();
            //  });
        }
    };
    OrdersPage.prototype.getPermission = function () {
        var _this = this;
        if (!this.platform.is('android'))
            return;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) {
            console.log('Has permission?', result.hasPermission);
            // this.toast.presentToastBottom('Permission alredy granted', 'dark');
            _this.writePermission = true;
        }, function (err) {
            _this.writePermission = false;
            // this.toast.presentToastBottom('Permission not granted', 'danger');
            console.log('No permission granted', err);
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        });
    };
    OrdersPage.prototype.switchTo = function (val) {
        this.orderTabs = val;
        this.refreshList(this.user);
    };
    OrdersPage.prototype.myFunction = function () {
        //let kip=  
        return {
            name: 'Bob'
        };
    };
    OrdersPage.prototype.orderformat = function (order) {
        console.log("Format Order");
        if (order.length > 10) {
            var trucatedText = order.substr(0, 10) + '...';
            console.log(trucatedText);
            //this.imageName=trucatedText;
            return trucatedText;
        }
        else {
            return order;
        }
    };
    OrdersPage.prototype.open = function (fileName, url, order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var path_ext, ext, filenameNoExt, file_Name;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loading.presentLoading();
                if (!this.platform.is('cordova')) {
                    window.open(url);
                    // const modal = await this.modalCtrl.create({
                    //   component: ImagePreviewPage,
                    //   cssClass: 'image-preview',
                    //   showBackdrop: true,
                    //   componentProps: { url }
                    // });
                    // modal.present();
                    // return;
                    this.loading.dismissLoading();
                }
                ;
                if (this.platform.is('android')) {
                    path_ext = this.file.dataDirectory + 'SnapToVector/Images/';
                    // path_ext = this.file.dataDirectory + '/';
                }
                else {
                    path_ext = this.file.documentsDirectory + 'SnapToVector/Images/';
                    //path_ext = this.file.documentsDirectory;
                }
                ext = fileName.substr(fileName.lastIndexOf('.'));
                filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
                file_Name = filenameNoExt + '-' + order.id + ext;
                console.log("Checking file");
                this.file.checkFile(path_ext, filenameNoExt + '-' + order.id + ext).then(function (d) {
                    console.log("Checked file");
                    console.log(d);
                    _this.file.resolveLocalFilesystemUrl(path_ext + filenameNoExt + '-' + order.id + ext).then(function (response) {
                        // this.file.resolveLocalFilesystemUrl(this.file.dataDirectory+ 'SnapToVector/Images/').then((response: any) => {
                        response.file(function (meta) {
                            console.log("Resolving  file system");
                            console.log(meta);
                            _this.loading.dismissLoading();
                            _this.fileOpener.open(meta.localURL, meta.type)
                                .then(function (d) {
                                console.log("Yes");
                                console.log(d);
                            })
                                .catch(function (e) {
                                console.log("No");
                                console.log(e);
                            });
                        });
                    });
                }).catch(function (err) {
                    console.log("There was an error");
                    console.log(err);
                    var img_path = _this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
                    if (_this.platform.is('android')) {
                        img_path = _this.file.cacheDirectory + '/';
                        //img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
                    }
                    else {
                        img_path = _this.file.tempDirectory + '/';
                        // img_path = this.file.tempDirectory + filenameNoExt + '-' + order.id + ext;
                    }
                    // const fileTransfer: FileTransferObject = this.transfer.create();
                    // fileTransfer.download(url, img_path).then((entry) => {
                    _this.http.get(url, { responseType: 'blob' }).subscribe(function (data) {
                        _this.file.writeFile(img_path, file_Name, data, { replace: true })
                            .then(function (fileEntry) {
                            console.log("Yes fileEntry");
                            console.log(fileEntry);
                            console.log(fileEntry.nativeURL);
                            _this.file.resolveLocalFilesystemUrl(fileEntry.nativeURL).then(function (response) {
                                response.file(function (meta) {
                                    console.log(meta);
                                    _this.loading.dismissLoading();
                                    _this.fileOpener.open(meta.localURL, meta.type)
                                        .then(function (d) {
                                        console.log(d);
                                    })
                                        .catch(function (e) {
                                        console.log(e);
                                    });
                                });
                            }, function (err) {
                                _this.loading.dismissLoading();
                                console.log("error 3");
                                console.log(err);
                            });
                        }, function (error) {
                            _this.loading.dismissLoading();
                            _this.toast.presentToastBottom('Error downloading image, Please try again.', 'danger');
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    OrdersPage.prototype.share = function (fileName, url, order) {
        var _this = this;
        this.loading.presentLoading();
        console.log(this.file.dataDirectory);
        var path_ext;
        if (this.platform.is('android')) {
            //  path_ext = this.file.dataDirectory + 'SnapToVector/Images/';
            path_ext = this.file.dataDirectory + '/';
        }
        else {
            path_ext = this.file.documentsDirectory + '/';
        }
        var ext = fileName.substr(fileName.lastIndexOf('.'));
        var filenameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
        var file_Name = filenameNoExt + '-' + order.id + ext;
        console.log("Checking file");
        this.file.checkFile(path_ext, filenameNoExt + '-' + order.id + ext).then(function (d) {
            console.log("Checked file");
            console.log(d);
            //this.file.resolveLocalFilesystemUrl(path_ext + filenameNoExt + '-' + order.id + ext).then((response: any) => {
            _this.file.resolveLocalFilesystemUrl(_this.file.dataDirectory + 'SnapToVector/Images/').then(function (response) {
                response.file(function (meta) {
                    console.log("Resolving  file system");
                    console.log(meta);
                    _this.loading.dismissLoading();
                    // this.fileOpener.open(meta.localURL, meta.type)
                    //   .then((d) => {
                    //     console.log(d);
                    //   })
                    //   .catch(e => {
                    //     console.log(e);
                    //   });
                    // console.log(url);
                    var text = 'Check out the order #' + order.id;
                    //let theurl = url;
                    //  this.loading.presentLoading();
                    //share(message, subject, file, url)
                    _this.socialSharing.share(null, null, path_ext + filenameNoExt + '-' + order.id + ext, null).then(function (res) {
                        //  this.socialSharing.share(text, null,meta.localURL , url).then(res => {
                        console.log(res);
                        _this.loading.dismissLoading();
                    }).catch(function (err) {
                        console.log(err);
                        _this.loading.dismissLoading();
                    });
                });
            });
        }).catch(function (err) {
            console.log(err);
            var img_path = _this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
            if (_this.platform.is('android')) {
                img_path = _this.file.cacheDirectory + '/';
                // img_path = this.file.cacheDirectory + 'SnapToVector/Images/' + filenameNoExt + '-' + order.id + ext;
            }
            else {
                img_path = _this.file.tempDirectory + '/';
                //img_path = this.file.tempDirectory + filenameNoExt + '-' + order.id + ext;
            }
            // const fileTransfer: FileTransferObject = this.transfer.create();
            // fileTransfer.download(url, img_path).then((entry) => {
            //    this.http.get(url, {responseType: 'blob'}).subscribe((data: Blob) => {
            //    this.file.writeFile(this.file.dataDirectory, file_Name, data, { replace: true })
            // .then((fileEntry) => {
            //    console.log("Yes fileEntry");
            _this.http.get(url, { responseType: 'blob' }).subscribe(function (data) {
                _this.file.writeFile(_this.file.dataDirectory, file_Name, data, { replace: true })
                    .then(function (fileEntry) {
                    console.log(fileEntry);
                    _this.file.resolveLocalFilesystemUrl(fileEntry.nativeURL).then(function (response) {
                        response.file(function (meta) {
                            console.log(meta);
                            console.log(meta.localURL);
                            _this.loading.dismissLoading();
                            // this.fileOpener.open(meta.localURL, meta.type)
                            //   .then((d) => {
                            //     console.log(d);
                            //   })
                            //   .catch(e => {
                            //     console.log(e);
                            //   });
                            //now share the file
                            console.log(url);
                            var text = 'Check out the order #' + order.id;
                            //let theurl = url;
                            //  this.loading.presentLoading();
                            //share(message, subject, file, url)
                            _this.socialSharing.share(text, null, path_ext + filenameNoExt + '-' + order.id + ext, null).then(function (res) {
                                //  this.socialSharing.share(text, null,meta.localURL , url).then(res => {
                                console.log(res);
                                _this.loading.dismissLoading();
                            }).catch(function (err) {
                                console.log(err);
                                _this.loading.dismissLoading();
                            });
                        });
                    }, function (err) {
                        _this.loading.dismissLoading();
                        console.log("error 3");
                        console.log(err);
                    });
                }, function (error) {
                    _this.loading.dismissLoading();
                    _this.toast.presentToastBottom('Error sharing image, Please try again.', 'danger');
                });
            });
        });
    };
    OrdersPage.prototype.orderViewed = function (type) {
        var _this = this;
        if (type === 'attentionRequired') {
            console.log(type);
            if (this.att_new_count > 0) {
                for (var index = 0; index < this.attentionRequeredOrders.length; index++) {
                    var element = this.attentionRequeredOrders[index];
                    console.log(element);
                    element.isViewedByUser = true;
                    this.orderService.updateOrder(element).subscribe(function (res) {
                        _this.att_new_count--;
                    });
                }
            }
        }
        else if (type === 'completed') {
            console.log(type);
            if (this.comp_new_count > 0) {
                for (var index = 0; index < this.completedOrders.length; index++) {
                    var element = this.completedOrders[index];
                    console.log(element);
                    element.isViewedByUser = true;
                    this.orderService.updateOrder(element)
                        .subscribe(function (res) {
                        _this.comp_new_count--;
                    });
                }
            }
        }
    };
    OrdersPage.prototype.showDownloadAlert = function (path, filename, url, order) {
        var _this = this;
        console.log(path.substr(8));
        this.alert.newAlert('File Downloaded', 'Location : ' + path, [
            {
                text: 'OK',
            },
            {
                text: 'Open',
                handler: function () {
                    _this.open(filename, '', order);
                    //this.open(filename,url, order);
                }
            }
        ]);
    };
    Object.defineProperty(OrdersPage.prototype, "isCordova", {
        get: function () {
            return this.platform.is('cordova');
        },
        enumerable: true,
        configurable: true
    });
    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.page.html */ "./src/app/pages/orders/orders.page.html"),
            styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/pages/orders/orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_order__WEBPACK_IMPORTED_MODULE_2__["OrderProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_providers_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_17__["Base64"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidPermissions"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_13__["SocialSharing"]])
    ], OrdersPage);
    return OrdersPage;
}());



/***/ }),

/***/ "./src/app/pages/revision-image/revision-image.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/revision-image/revision-image.module.ts ***!
  \***************************************************************/
/*! exports provided: RevisionImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionImagePageModule", function() { return RevisionImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _revision_image_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./revision-image.page */ "./src/app/pages/revision-image/revision-image.page.ts");
/* harmony import */ var _image_preview_image_preview_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image-preview/image-preview.module */ "./src/app/pages/image-preview/image-preview.module.ts");
/* harmony import */ var src_app_providers_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/order */ "./src/app/providers/order.ts");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var src_app_providers_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/shared.module */ "./src/app/providers/shared.module.ts");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/angular-cropperjs.umd.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular_cropperjs__WEBPACK_IMPORTED_MODULE_13__);














// const routes: Routes = [
//   {
//     path: '',
//     component: RevisionImagePage
//   }
// ];
var RevisionImagePageModule = /** @class */ (function () {
    function RevisionImagePageModule() {
    }
    RevisionImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_providers_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _image_preview_image_preview_module__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewPageModule"],
                angular_cropperjs__WEBPACK_IMPORTED_MODULE_13__["AngularCropperjsModule"],
            ],
            declarations: [_revision_image_page__WEBPACK_IMPORTED_MODULE_5__["RevisionImagePage"]],
            entryComponents: [_revision_image_page__WEBPACK_IMPORTED_MODULE_5__["RevisionImagePage"]],
            exports: [_revision_image_page__WEBPACK_IMPORTED_MODULE_5__["RevisionImagePage"]],
            providers: [src_app_providers_order__WEBPACK_IMPORTED_MODULE_7__["OrderProvider"], _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidPermissions"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"]]
        })
    ], RevisionImagePageModule);
    return RevisionImagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/revision-image/revision-image.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/revision-image/revision-image.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button slot=\"icon-only\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Request Revision</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card padding-bottom>\n    <ion-item>\n      <ion-textarea placeholder=\"Enter instructions for designer...\" rows=\"8\" [(ngModel)]=\"instructions\"></ion-textarea>\n    </ion-item>\n <!--     <div *ngIf=\"!myFile\">\n    <img src=\"assets/img/image-backgorund.jpg\" padding style=\"width:100%\">\n  </div> -->\n\n  <ion-row padding>\n   <!--  <ion-button *ngIf=\"mobile\" expand=\"full\" (click)=\"presentActionSheet()\">\n      Upload Image\n    </ion-button> -->\n      <ion-button *ngIf=\"mobile\" expand=\"full\" (click)=\"fromcamera()\">\n      Camera\n    </ion-button>\n        <!-- <ion-button *ngIf=\"mobile\" expand=\"full\" (click)=\"pickImage()\"> -->\n          <ion-button *ngIf=\"mobile\" expand=\"full\"  (click)=\"mobileupload()\">\n      Gallery\n    </ion-button>\n  </ion-row>\n  <ion-row padding>\n    <input type=\"file\" [hidden]=\"true\" multiple=\"multiple\" capture=\"camera\" #fileInput accept=\"image/*,application/pdf\"\n      (change)=\"browsePhoto($event)\">\n    <ion-button *ngIf=\"!isCordova\" expand=\"block\" (click)=\"fileInput.click()\">Upload\n    </ion-button>\n\n  </ion-row>\n\n    <ion-item-divider *ngIf=\"myFile\">\n    <ion-label>\n      Current Image\n    </ion-label>\n  </ion-item-divider>\n <div  *ngIf=\"myFile  && !croped && mobile && !saved\">\n\n   <img class=\"selected_image\" [src]=\"myFile\" width=\"100%\" height=\"100%\" padding>\n\n </div>\n  <div  *ngIf=\"myFile && !croped && !saved && !isCordova\">\n\n   <img class=\"selected_image\" [src]=\"myFile\" width=\"100%\" height=\"100%\" padding>\n\n </div>\n  <div style=\"padding:20px;\" *ngIf=\"myFile && croped && mobile && !saved\">\n      <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n     <ion-button ion-button slot=\"icon-only\"  (click)=\"closecrop()\">\n      <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Crop Image</ion-title>\n    <ion-buttons slot=\"end\">\n\n       <ion-button ion-button slot=\"icon-only\" (click)=\"clear()\">\n        Reset\n      </ion-button>\n      <ion-button ion-button slot=\"icon-only\" (click)=\"save()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n \n    <!-- <img class=\"selected_image\" [src]=\"myFile\" width=\"100%\" height=\"100%\" padding> -->\n    <angular-cropper (touchstart)=\"cropperTouchStart($event)\" #angularCropper [cropperOptions]=\"cropperOptions\" [imageUrl]=\"myFile\" *ngIf=\"myFile\"></angular-cropper>\n  \n\n  </div>\n\n  <div style=\"padding:20px;\"  *ngIf=\"myFile && croped && !saved && !isCordova\">\n      <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n     <ion-button ion-button slot=\"icon-only\"  (click)=\"reset()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Crop Image</ion-title>\n    <ion-buttons slot=\"end\">\n\n       <ion-button ion-button slot=\"icon-only\" (click)=\"clear()\">\n        Reset\n      </ion-button>\n      <ion-button ion-button slot=\"icon-only\" (click)=\"save()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n     <!-- <img class=\"selected_image\" [src]=\"myFile\"  width=\"100%\" height=\"100%\" padding> -->\n    \n      <angular-cropper (touchstart)=\"cropperTouchStart($event)\" #angularCropper [cropperOptions]=\"cropperOptions\" [imageUrl]=\"myFile\" *ngIf=\"myFile\"></angular-cropper>\n\n  </div>\n  <div *ngIf=\"saved\">\n    <img class=\"selected_image\" [src]=\"myFile\" padding>\n   <!--    <angular-cropper #angularCropper [cropperOptions]=\"cropperOptions\" [imageUrl]=\"myFile\" *ngIf=\"myFile\"></angular-cropper> -->\n\n  </div>\n\n\n  <ion-row padding-left padding-right>\n    <ion-col col-4>\n      <ion-button  expand=\"full\" (click)='moveToPrevious()'\n        [disabled]=\"!(myFile && isimage) || previousFiles.length==0\">\n        Undo Crop\n      </ion-button>\n    </ion-col>\n<!--     <ion-col  col-4>\n      <ion-button expand=\"full\" (click)='clear()' [disabled]=\"!(myFile && isimage && !saved)\">\n        Reset\n      </ion-button>\n    </ion-col> -->\n    <ion-col col-4>\n       <ion-button  *ngIf=\"!isCordova\" expand=\"full\" (click)='docrop()' [disabled]=\"!(myFile && isimage)\">\n        Crop\n      </ion-button>\n <!--       <ion-button  *ngIf=\"!isCordova\" expand=\"full\" (click)='opencrop()' [disabled]=\"!(myFile && isimage)\">\n        Crop\n      </ion-button> -->\n     <!--   <ion-button  *ngIf=\"mobile\" expand=\"full\" (click)='opencrop()' [disabled]=\"!(myFile && isimage)\"> -->\n      <ion-button  *ngIf=\"mobile\" expand=\"full\" (click)='docrop()' [disabled]=\"!(myFile && isimage)\">\n       \n        Crop\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row padding-left padding-right *ngIf=\"myFile && buttonClicked\">\n    <!-- <ion-row padding-left padding-right *ngIf=\"myFile \"> -->\n    <ion-col col-8>\n     <!--  <ion-input #inpName [(ngModel)]=\"newName\" type=\"text\" placeholder=\"Type new filename\">\n      </ion-input> -->\n           <ion-row>  \n      <ion-input #inpName [(ngModel)]=\"newName\" type=\"text\" placeholder=\"Type new filename\">\n    \n       </ion-input>\n          <label style=\"padding: 10px; margin-left: 20px;\">{{Ext}} </label>\n    \n </ion-row>\n\n    </ion-col>\n    <ion-col col-4>\n      <ion-button expand=\"full\" (click)='setNewFileName()'>\n        Update\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row padding-left padding-right *ngIf=\"image && !buttonClicked\"> -->\n      <ion-row padding-left padding-right *ngIf=\"myFile && !buttonClicked\">\n    <ion-col padding-top col-8>\n      <p padding-left>{{imageName}}</p>\n    </ion-col>\n    <ion-col padding-top col-4>\n      <ion-button expand=\"full\" (click)='editFileName()'>\n        Rename\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" (click)='sendRequest()' [disabled]=\"!myFile || instructions===''\">\n    Submit Revision &nbsp;\n    <ion-icon name=\"send\"></ion-icon>\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/revision-image/revision-image.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/revision-image/revision-image.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldmlzaW9uLWltYWdlL3JldmlzaW9uLWltYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/revision-image/revision-image.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/revision-image/revision-image.page.ts ***!
  \*************************************************************/
/*! exports provided: RevisionImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisionImagePage", function() { return RevisionImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/loading.service */ "./src/app/providers/loading.service.ts");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/data.service */ "./src/app/providers/data.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var src_app_providers_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/image */ "./src/app/providers/image.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/angular-cropperjs.umd.js");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular_cropperjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_13__);














var RevisionImagePage = /** @class */ (function () {
    // ngOnInit() {
    // }
    function RevisionImagePage(nav, datePipe, popoverCtrl, navParams, dataService, afAuth, actionSheetCtrl, camera, toast, platform, loading, crop, file, imageService, modalCtrl) {
        this.nav = nav;
        this.datePipe = datePipe;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.afAuth = afAuth;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.toast = toast;
        this.platform = platform;
        this.loading = loading;
        this.crop = crop;
        this.file = file;
        this.imageService = imageService;
        this.modalCtrl = modalCtrl;
        this.instructions = '';
        this.previousImages = [];
        //image: any;
        this.userObj = {};
        this.croppedImage = null;
        this.croped = false;
        this.saved = false;
        this.newName = '';
        this.Ext = '';
        this.fileName = '';
        this.showAlert = true;
        this.imageName = '';
        this.previousFiles = [];
        this.buttonClicked = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
        this.cropperOptions = {
            dragMode: 'crop',
            //aspectRatio: 1,
            aspectRatio: NaN,
            autoCrop: true,
            movable: false,
            zoomable: true,
            scalable: true,
            autoCropArea: 0.8,
            //  cropController.keepingCropAspectRatio = YES;
            responsive: true,
            modal: true,
            guides: true,
            center: true,
            highlight: true,
            background: true,
            cropBoxMovable: true,
            cropBoxResizable: true,
            toggleDragModeOnDblclick: true,
        };
        console.log(this.orderObj);
        // console.log(this.navParams.data.data);
        // this.pack = this.navParams.data.data;
    }
    RevisionImagePage.prototype.ngOnInit = function () {
        //this.exists = this.fileType.some(o => o.image === data.image);
        //this.checkexists();
        //this.croppr();
    };
    Object.defineProperty(RevisionImagePage.prototype, "isCordova", {
        // checkexists(){
        //   this.exists = this.fileType.some(o => o.image === data.image);
        //   return this.exists; 
        // }
        get: function () {
            return this.platform.is('cordova');
        },
        enumerable: true,
        configurable: true
    });
    RevisionImagePage.prototype.cropperTouchStart = function (event) {
        event.stopPropagation();
        event.preventDefault(); //Most important
    };
    // croppr(){
    //      this.cropInstance = new Croppr('#croppr', {
    //         // options
    //          // custom aspect radio
    //   // e.g.
    //   aspectRatio: null,
    //   // min/max sizes
    //   maxSize: { width: null, height: null },
    //   minSize: { width: null, height: null },
    //   // start size of crop region
    //   startSize: { width: 100, height: 100, unit: '%' },
    //   // real", "ratio" or "raw"
    //   returnMode: 'real',
    //   // callback functions
    //   onInitialize: null,
    //   onUpdate: null
    //       });  
    //   }
    //   cropprGetVal(){
    //     var newSrc
    //     var data:any = []
    //     data = this.cropInstance.getValue();
    //     let x = data.x
    //     let y = data.y
    //     let width = data.width
    //     let height = data.height
    //     var img = new Image();
    //     img.src = this.myFile;
    //     var canvas = document.createElement('canvas');
    //     var ctx = canvas.getContext('2d');
    //     canvas.width=width
    //     canvas.height=height
    //     ctx.drawImage(img, x, y, width, height, 0, 0, width, height); 
    //     console.log(canvas.toDataURL("image/jpeg"))
    //     this.imgCroppedUrl = canvas.toDataURL("image/jpeg")
    //   }
    RevisionImagePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'Select file source',
                                buttons: [
                                    {
                                        text: 'Upload from Gallery',
                                        handler: function () {
                                            _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                        }
                                    },
                                    {
                                        text: 'Use Camera',
                                        handler: function () {
                                            _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                        }
                                    },
                                    {
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    //  reset() {
    //   this.angularCropper.cropper.reset();
    //    this.saved=false;
    // }
    RevisionImagePage.prototype.clear = function () {
        // this.angularCropper.cropper.clear();
        // this.angularCropper.cropper.reset();
        this.angularCropper.cropper.reset();
        this.saved = false;
        //  this.angularCropper.cropper.reset();
        // this.crop=false;
        //this.angularCropper.cropper.reset();
        // this.saved=false;
    };
    //  clear() {
    //   this.angularCropper.cropper.clear();
    //   this.closeModal(); 
    // }
    RevisionImagePage.prototype.docrop = function () {
        this.croped = true;
    };
    RevisionImagePage.prototype.save = function () {
        var croppedImgB64String = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
        console.log(croppedImgB64String);
        this.previousFiles.push(this.myFile);
        this.saved = false;
        this.croped = false;
        this.myFile = croppedImgB64String;
    };
    // async opencrop(){
    //       const cropModal = await this.modalCtrl.create({
    //     component: CropModalPage,
    //       componentProps: {
    //       "url": this.myFile,
    //      // "paramTitle": "Test Title"
    //     }
    //   });
    //   cropModal.onDidDismiss()
    //     .then((data: any) => {
    //       console.table(data);
    //       if (data.data!=undefined) {
    //        // console.log(data.data.croppedimage);
    //        this.myFile = data.data.croppedimage;
    //        this.previousFiles =data.data.previous;
    //         //console.log(this.myFile);
    //         //this.isCardAvaliable = true;
    //       }
    //     });
    //   cropModal.present();
    // }
    RevisionImagePage.prototype.fromcamera = function () {
        //     let   options = {
        //         quality: 100,
        //         sourceType:this.camera.PictureSourceType.CAMERA,
        //         destinationType: this.camera.DestinationType.DATA_URL,
        //         //destinationType: this.camera.DestinationType.FILE_URI,
        //         encodingType: this.camera.EncodingType.JPEG,
        //         mediaType: this.camera.MediaType.PICTURE,
        //         correctOrientation: true,
        //         saveToPhotoAlbum: false
        //       };
        // this.camera.getPicture(options).then((filePath) => {
        //       console.log(filePath);
        //       this.fileType=filePath.type;
        //       let win: any = window;
        //        this.myFile=win.Ionic.WebView.convertFileSrc(filePath);
        //         console.log("File path"+this.myFile)
        //     }).catch((e)=>{
        //       console.log(e);
        //       alert("Error"+e);
        //     });
        this.takePicture(this.camera.PictureSourceType.CAMERA);
    };
    RevisionImagePage.prototype.mobileupload = function () {
        // let options: ImagePickerOptions ={
        //   //title:'select picture',
        //   //message:'select atleast 1 picture',
        //   maximumImagesCount:1,
        //   outputType:0 //0=path 1=base64
        //   };
        //   this.imagePicker.getPictures(options).then((results) => {
        //   for (var i = 0; i < results.length; i++) {
        //     //this.cropImage(results[i]);
        //     let newfile=results[i];
        //      let win: any = window;
        //    this.myFile=win.Ionic.WebView.convertFileSrc(newfile);
        //     //this.showCroppedImage(this.myFile)
        //   //  this.cropImage();
        //   }
        // }, (err) => {
        //   alert(err);
        // });
        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    };
    RevisionImagePage.prototype.newcropImage = function () {
        var _this = this;
        this.crop.crop(this.myFile, { quality: 100 })
            .then(function (newPath) {
            _this.showCroppedImage(newPath.split('?')[0]);
        }, function (error) {
            console.log(error);
            _this.loading.dismissLoading();
            _this.toast.presentToast('Error cropping image', 'danger');
            // alert('Error cropping image');
        });
    };
    RevisionImagePage.prototype.showCroppedImage = function (ImagePath) {
        var _this = this;
        console.log(ImagePath);
        // this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        this.imageName = imageName;
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(function (base64) {
            _this.isimage = base64.indexOf('image') !== -1;
            _this.myFile = base64;
            //   this.isLoading = false;
        }, function (error) {
            _this.loading.dismissLoading();
            console.log(error);
            _this.toast.presentToast('Error in showing image', 'danger');
            //alert('Error in showing image' + error);
            //  this.isLoading = false;
        });
    };
    RevisionImagePage.prototype.browsePhoto = function (event) {
        var _this = this;
        var file = this.imageService.takePhoto(event);
        this.fileType = file.type;
        var fileReader = new FileReader();
        fileReader.onload = function (secondEvent) {
            //console.log(secondEvent);
            var res = secondEvent.target.result;
            console.log(secondEvent.target.result);
            //console.log(file.name);
            _this.myFile = secondEvent.target.result;
            _this.content.scrollToBottom();
            //this.newName = file.name;
            console.log("generated string" + _this.stringGen(5));
            //let date=new Date().toISOString();
            // let date = new Date().valueOf();
            var date = _this.datePipe.transform(new Date(), "MM-dd-yyyy hh-mm");
            //this.newName=this.stringGen(5);
            console.log(date.toString().slice(0, 10));
            _this.newName = date;
            // this.newName=date.toString().slice(0, 10);
            //   console.log(date.toString());
            //  this.newName=date.toString();
            //  this.newName=this.stringGen(5);
            //this.newName = file.name;
            _this.imageName = file.name;
            var ext = file.name.substr(file.name.lastIndexOf('.'));
            _this.Ext = ext;
            _this.fileName = _this.newName + ext;
            console.log('originalFile: ', file.name);
            _this.isimage = _this.fileType.indexOf('image') !== -1;
            console.log(_this.isimage);
        };
        fileReader.readAsDataURL(file);
        setTimeout(function () {
        }, 1000);
    };
    Object.defineProperty(RevisionImagePage.prototype, "mobile", {
        get: function () {
            return this.platform.is('cordova');
        },
        enumerable: true,
        configurable: true
    });
    RevisionImagePage.prototype.takePicture = function (sourceType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                options = {};
                if (sourceType === this.camera.PictureSourceType.CAMERA) {
                    options = {
                        quality: 100,
                        sourceType: sourceType,
                        destinationType: this.camera.DestinationType.FILE_URI,
                        //destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        correctOrientation: true,
                        saveToPhotoAlbum: false
                    };
                }
                else {
                    options = {
                        quality: 100,
                        sourceType: sourceType,
                        destinationType: this.camera.DestinationType.FILE_URI,
                        //destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        correctOrientation: true,
                        saveToPhotoAlbum: false
                    };
                }
                try {
                    // this.camera.getPicture(options).then((imageData) => {
                    //       let base64Image = 'data:image/jpeg;base64,' + imageData;
                    //        this.originalFile = base64Image;
                    //        this.myFile = base64Image;
                    //     }, (err) => {
                    //       // Handle error
                    //     });
                    this.camera.getPicture(options).then(function (filePath) {
                        console.log(filePath);
                        var fileName = filePath.substr(filePath.lastIndexOf('/') + 1);
                        _this.fileName = fileName.substr(0, fileName.lastIndexOf('?'));
                        _this.originalFile = filePath;
                        _this.fileName = fileName.split('?')[0];
                        console.log(_this.fileName);
                        console.log("generated string" + _this.stringGen(5));
                        //let date=new Date().toISOString();
                        // let date = new Date().valueOf();
                        var date = _this.datePipe.transform(new Date(), "MM-dd-yyyy hh-mm");
                        // this.newName=this.stringGen(5);
                        // console.log(date.toString());
                        //this.newName=date.toString().slice(0, 10);
                        _this.newName = date;
                        console.log(date.toString());
                        //this.newName=date.toString();
                        var ext = _this.fileName.substr(_this.fileName.lastIndexOf('.'));
                        _this.Ext = ext;
                        _this.fileName = _this.newName + ext;
                        _this.showCroppedImage(filePath.split('?')[0]);
                        // this.fileType=filePath.type;
                        //  this.cropImage(filePath);
                        //let win: any = window;
                        //this.myFile=win.Ionic.WebView.convertFileSrc(filePath);
                        //  let base64Image = 'data:image/jpeg;base64,' + filePath;
                        //  //console.log(this.myFile);
                        //   this.isimage= base64Image.indexOf('image') !== -1;
                        //   console.log(this.isimage);
                        //  this.originalFile = base64Image;
                        // // this.originalFile= win.Ionic.WebView.convertFileSrc(filePath);
                        //  this.myFile = base64Image;
                        //  const fileName = base64Image.substr(base64Image.lastIndexOf('/') + 1);
                        //  if (sourceType === this.camera.PictureSourceType.CAMERA) {
                        //    this.fileName = fileName;
                        //  } else {
                        //    this.fileName = fileName.substr(0, fileName.lastIndexOf('?'));
                        //  }
                        //  console.log(this.myFile);
                    }, function (err) {
                        _this.loading.dismissLoading();
                        _this.toast.presentToast('File Upload Error', 'danger');
                        console.log(err);
                    });
                    // let cameraInfo = await this.camera.getPicture(options);
                    // let blobInfo = await this.makeFileIntoBlob(cameraInfo);
                    //  console.log(cameraInfo);
                    // console.log(blobInfo);
                    // //let uploadInfo: any = await this.uploadToFirebase(blobInfo);
                    //  this.afAuth.authState.subscribe((user) => {
                    //   console.log(user);
                    // //  const req = this.imageService.uploadToGallery(this.myFile, user.uid, this.newName);
                    //     this.uploadToFirebase(blobInfo,user.uid).then((data: any) => {
                    //       console.log(data);
                    //       this.storage.set('IMAGE', data);
                    //       this.modalCtrl.dismiss();
                    //       this.openModal(CheckoutPage).then(() => {
                    //         this.loading.dismissLoading();
                    //       }).catch(() => {
                    //         this.loading.dismissLoading();
                    //       });
                    //     });
                    // });
                    // this.originalFile = blobInfo;
                    // this.myFile = blobInfo;
                    //   alert("File Upload Success " + uploadInfo.fileName);
                }
                catch (e) {
                    console.log(e.message);
                    this.toast.presentToast('File Upload Error', 'danger');
                    //alert("File Upload Error " + e.message);
                }
                return [2 /*return*/];
            });
        });
    };
    RevisionImagePage.prototype.stringGen = function (len) {
        var text = "";
        var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < len; i++)
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        return text;
    };
    RevisionImagePage.prototype.uploadToFirebase = function (_imageBlobInfo, userId) {
        var _this = this;
        console.log("uploadToFirebase");
        console.log(_imageBlobInfo);
        // storageRef: firebase.storage.Reference,
        var fileName = _imageBlobInfo.fileName;
        return new Promise(function (resolve, reject) {
            var fileRef = firebase_app__WEBPACK_IMPORTED_MODULE_13__["storage"]().ref('user_files/' + +Date.now() + _imageBlobInfo.fileName);
            //let fileRef = firebase.storage().ref("images/" + _imageBlobInfo.fileName);
            var uploadTask = fileRef.put(_imageBlobInfo.imgBlob);
            uploadTask.on("state_changed", function (_snapshot) {
                console.log("snapshot progess " +
                    (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100);
            }, function (_error) {
                console.log(_error);
                reject(_error);
            }, function () {
                console.log("upload Success");
                fileRef.getDownloadURL().then(function (url) {
                    var myFile = {
                        filename: fileName,
                        originalname: fileName.split('.')[0],
                        url: url,
                        user: userId
                    };
                    _this.dataService.postRequest("image/", myFile)
                        .subscribe(function (res) {
                        console.log(res);
                        resolve(res);
                    }, function (err) {
                        console.log(err);
                        resolve(null);
                    });
                });
                // completion...
                // resolve(uploadTask.snapshot);
            });
        });
    };
    // FILE STUFF
    RevisionImagePage.prototype.makeFileIntoBlob = function (_imagePath) {
        var _this = this;
        // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
        return new Promise(function (resolve, reject) {
            var fileName = "";
            _this.file
                .resolveLocalFilesystemUrl(_imagePath)
                .then(function (fileEntry) {
                var name = fileEntry.name, nativeURL = fileEntry.nativeURL;
                // get the path..
                var path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
                console.log("path", path);
                console.log("fileName", name);
                fileName = name;
                // we are provided the name, so now read the file into
                // a buffer
                return _this.file.readAsArrayBuffer(path, name);
            })
                .then(function (buffer) {
                // get the buffer and make a blob to be saved
                var imgBlob = new Blob([buffer], {
                    type: "image/jpeg"
                });
                console.log(imgBlob.type, imgBlob.size);
                resolve({
                    fileName: fileName,
                    imgBlob: imgBlob
                });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    RevisionImagePage.prototype.sendRequest = function () {
        var _this = this;
        this.loading.presentLoading();
        this.orderObj.instructions = this.instructions;
        console.log(this.orderObj);
        // this.imageService.requestRevision(this.orderObj, this.myFile).then((data: any) => {
        //   console.log(data);
        //   this.loading.dismissLoading();
        //   this.toast.presentToast('Revision Request Sent.', 'dark');
        //   this.nav.navigateRoot('/menu/tabs/tabs/home');
        // });
        this.imageService.uploadToGallery(this.myFile, this.orderObj.user, this.fileName).then(function (data) {
            console.log(data);
            _this.orderObj.newimage = data;
            _this.dataService.postRequest("orders/revision/", _this.orderObj)
                .subscribe(function (res) {
                console.log(res);
                _this.loading.dismissLoading();
                _this.dismiss();
                _this.toast.presentToast('Revision Request Sent.', 'dark');
                _this.nav.navigateRoot('/menu/tabs/tabs/home');
            }, function (err) {
                _this.dismiss();
                _this.toast.presentToast('Revision Request not Sent.', 'danger');
                _this.nav.navigateRoot('/menu/tabs/tabs/home');
            });
        });
    };
    RevisionImagePage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    RevisionImagePage.prototype.saveImage = function () {
        var _this = this;
        console.log(this.myFile);
        //let base64Image = 'data:image/jpeg;base64,' + this.myFile;
        this.loading.presentLoading();
        // this.updateFileName().then(() => {
        this.dataService.isOnline();
        if (this.dataService.isOnline()) {
            this.afAuth.authState.subscribe(function (user) {
                //        (user) =>{
                //        }, // success,
                // (err) => {
                // },// fail
                // () => {
                console.log(user);
                var req = _this.imageService.uploadToGallery(_this.myFile, user.uid, _this.fileName);
                req
                    .then(function (data) {
                    console.log(data);
                    // let mydata={
                    //   image:data,
                    //   package:this.pack
                    // }
                    var mydata = {
                        uploadimage: data,
                        image: _this.myFile,
                        filename: _this.fileName,
                        previous: _this.previousFiles,
                        package: _this.pack
                    };
                    console.log(mydata);
                    console.log(mydata);
                    //this.storage.set('IMAGE', data);
                    // this.modalCtrl.dismiss();
                    // this.openModal(CheckoutPage,mydata).then(() => {
                    //   this.loading.dismissLoading();
                    // }).catch(() => {
                    //   this.loading.dismissLoading();
                    // });
                }).catch(function (e) {
                    _this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
                    console.log(e);
                    _this.loading.dismissLoading();
                });
            }, function (err) {
                _this.toast.presentToast('Network Error,failed uploading', 'danger');
                console.log(err);
                _this.loading.dismissLoading();
            });
        }
        else {
            this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
            this.loading.dismissLoading();
        }
        //     }).catch((e)=>{
        //   this.toast.presentToast('Error uploading', 'danger');
        //       console.log(e);
        // this.loading.dismissLoading();
        //     });
    };
    // pickImage() {
    //    this.imagePicker.getPictures(this.imagePickerOptions).then((results) => {
    //      for (var i = 0; i < results.length; i++) {
    //        this.cropImage(results[i]);
    //      }
    //    }, (err) => {
    //       console.log(err);
    //      alert(err);
    //    });
    //  }
    // cropImage(imgPath) {
    //   this.crop.crop(imgPath, { quality: 50 })
    //     .then(
    //       newPath => {
    //         this.showCroppedImage(newPath.split('?')[0])
    //       },
    //       error => {
    //         console.log(error);
    //         this.toast.presentToast('Error cropping image','danger');
    //       }
    //     );
    // }
    RevisionImagePage.prototype.cropImage = function () {
        var _this = this;
        this.crop.crop(this.originalFile, { quality: 50 })
            .then(function (newPath) {
            _this.previousFiles.push(_this.myFile);
            //  this.myFile = newImage;
            _this.showCroppedImage(newPath.split('?')[0]);
        }, function (error) {
            // this.showCroppedImage(this.myFile.split('?')[0]);
            _this.toast.presentToast('Error cropping image', 'danger');
            // alert('Error cropping image' + error);
        });
    };
    // cropImage() {
    //   if (this.showAlert) {
    //     this.showAlert = false;
    //     this.alert.newAlert('How to crop',
    //       'Hold by the borders and then use the handlers to resize crop tool',
    //       [
    //         {
    //           text: 'OK',
    //           handler: () => {
    //             this.crop.crop(this.myFile, { quality: 100 })
    //               .then(
    //                 newImage => {
    //                   this.previousFiles.push(this.myFile);
    //                   this.myFile = newImage;
    //                 },
    //                 error => {
    //                   this.toast.presentToast('Crop failed, try again!', 'danger');
    //                 }
    //               );
    //           }
    //         },
    //       ]);
    //   } else {
    //     this.crop.crop(this.myFile, { quality: 100})
    //       .then(
    //         newImage => {
    //           this.showCroppedImage(newImage.split('?')[0])
    //          // this.previousFiles.push(this.myFile);
    //          // this.myFile = newImage;
    //         }
    //         // ,
    //         // error => {
    //         //   this.toast.presentToast('Crop failed, try again!', 'danger');
    //         // }
    //       ).catch((e)=>{
    //         console.log(e);
    //          this.toast.presentToast('Crop failed, try again!', 'danger');
    //       });
    //  }
    // }
    RevisionImagePage.prototype.moveToPrevious = function () {
        this.saved = false;
        if (this.previousFiles.length) {
            this.myFile = this.previousFiles.pop();
            // this.saved=true;
        }
    };
    RevisionImagePage.prototype.editFileName = function () {
        this.buttonClicked = true;
        //this.newName=;
    };
    RevisionImagePage.prototype.setNewFileName = function () {
        // if (this.newName !== '') {
        //   const ext = this.fileName.substr(this.fileName.lastIndexOf('.'));
        //   this.fileName = this.newName + ext;
        //   this.newName = '';
        // } else {
        //   this.newName = '';
        // }
        var ext = this.fileName.substr(this.fileName.lastIndexOf('.'));
        console.log(ext);
        //   this.fileName = this.newName + ext;
        this.imageName = this.newName + ext;
        this.buttonClicked = false;
    };
    // // FILE STUFF
    //   makeFileIntoBlob(_imagePath) {
    //     // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    //     return new Promise((resolve, reject) => {
    //       let fileName = "";
    //       this.file
    //         .resolveLocalFilesystemUrl(_imagePath)
    //         .then(fileEntry => {
    //           console.log(fileEntry);
    //           let { name, nativeURL } = fileEntry;
    //           // get the path..
    //           let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
    //           this.myFile = path;
    //            this.newName= name;
    //           console.log("path", path);
    //           console.log("fileName", name);
    //           fileName = name;
    //           // we are provided the name, so now read the file into
    //           // a buffer
    //           return this.file.readAsArrayBuffer(path, name);
    //         })
    //         .then(buffer => {
    //           // get the buffer and make a blob to be saved
    //           let imgBlob = new Blob([buffer], {
    //             type: "image/jpeg"
    //           });
    //           console.log(imgBlob.type, imgBlob.size);
    //           resolve({
    //             fileName,
    //             imgBlob
    //           });
    //         })
    //         .catch(e => reject(e));
    //     });
    //   }
    RevisionImagePage.prototype.updateFileName = function () {
        var _this = this;
        var path = this.myFile.substr(0, this.myFile.lastIndexOf('/') + 1);
        var oldName = this.myFile.substr(this.myFile.lastIndexOf('/') + 1);
        oldName = oldName.substr(0, oldName.lastIndexOf('?'));
        if (oldName === this.fileName) {
            return Promise.resolve();
        }
        return this.file.copyFile(path, oldName, path, this.fileName).then(function (data) {
            _this.myFile = data.nativeURL;
            return Promise.resolve();
        }).catch(function (err) {
            console.log(err);
        });
    };
    RevisionImagePage.prototype.reset = function () {
        this.angularCropper.cropper.clear();
        this.croped = false;
        //this.myFile = this.originalFile;
        //this.previousFiles = [];
    };
    RevisionImagePage.prototype.closecrop = function () {
        this.croped = false;
    };
    RevisionImagePage.prototype.openModal = function (component, data) {
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
    RevisionImagePage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('angularCropper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_cropperjs__WEBPACK_IMPORTED_MODULE_11__["AngularCropperjsComponent"])
    ], RevisionImagePage.prototype, "angularCropper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inpName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RevisionImagePage.prototype, "inpName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], RevisionImagePage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RevisionImagePage.prototype, "orderObj", void 0);
    RevisionImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-revision-image',
            template: __webpack_require__(/*! ./revision-image.page.html */ "./src/app/pages/revision-image/revision-image.page.html"),
            styles: [__webpack_require__(/*! ./revision-image.page.scss */ "./src/app/pages/revision-image/revision-image.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
            src_app_providers_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"],
            src_app_providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            src_app_providers_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__["Crop"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
            src_app_providers_image__WEBPACK_IMPORTED_MODULE_9__["ImageProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], RevisionImagePage);
    return RevisionImagePage;
}());



/***/ }),

/***/ "./src/app/providers/ordertransform.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/ordertransform.pipe.ts ***!
  \**************************************************/
/*! exports provided: OrderTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTransform", function() { return OrderTransform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderTransform = /** @class */ (function () {
    function OrderTransform() {
    }
    // transform(allHeroes: Flyer[]) {
    //   return allHeroes.filter(hero => hero.canFly);
    // }
    OrderTransform.prototype.transform = function (order) {
        // write your custom logic here
        if (order.length > 10) {
            var trucatedText = order.substr(0, 10) + '...';
            console.log(trucatedText);
            //this.imageName=trucatedText;
            //  return trucatedText;
            return "" + trucatedText;
        }
        else {
            //return order;
            return "" + order;
        }
        //let newValue = value.replace(/\?/g, 'N');
        //return `${newValue}`;
    };
    OrderTransform = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'OrderTransform' })
    ], OrderTransform);
    return OrderTransform;
}());



/***/ })

}]);
//# sourceMappingURL=orders-orders-module.js.map