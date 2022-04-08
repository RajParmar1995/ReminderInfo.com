(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Portal-Workmanager-workmanager-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Workmanager/mywork/mywork.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Workmanager/mywork/mywork.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <form [formGroup]=\"myworkform\">\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\n                <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-label>KNo:<span style=\"color:#1e88e5; font-weight :bold;\"> {{manage.kno}}</span></mat-label>\n                </div>\n\n                <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-label>Customer Name:<span style=\"color:#1e88e5; font-weight :bold;\"> {{manage.cname}}</span>\n                    </mat-label>\n                </div>\n                <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-label>Amount:<span style=\"color:#4caf50; font-weight :bold;\"> ₹ {{manage.billamount}}</span>\n                    </mat-label>\n                </div>\n                <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-label>Due Date:<span style=\"color:#1e88e5; font-weight :bold;\"> {{manage.lastdate}}</span>\n                    </mat-label>\n                </div>\n            </div>\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\n                <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-form-field>\n                        <mat-label>Transaction Status</mat-label>\n                        <mat-select formControlName=\"transstatus\" [(ngModel)]=\"lists.transtype\">\n                            <mat-option *ngFor=\"let u of lists.TransTypelist\" [value]=\"u.name\">\n                                {{u.name}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Transaction\" Id type=\"number\" formControlName=\"transid\">\n                    </mat-form-field>\n                </div>\n                <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                    <button mat-raised-button color=\"primary\" class=\"\" type=\"submit\" [disabled]=\"!myworkform.valid\"\n                        (click)=\"Save()\">Submit</button>\n                </div>\n            </div>\n        </form>\n        <h2 text-center class=\"text-center\" style=\"color:red\" *ngIf=\"!myworkform.value.receiptid\">Work Completed Or No\n            Work Assined to\n            You.</h2>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Workmanager/setting/setting.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Workmanager/setting/setting.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <mat-slide-toggle (toggleChange)=\"ChangeApiStatus($event)\" [(ngModel)]=\"lists.changesetting\" [checked]=\"lists.settingvalue\"\n            >Switch API Mode</mat-slide-toggle>\n            <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">          \n\n                \n            </div>\n        <!-- <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">            \n\n            <a href=\"javascript:void\">\n                <mat-card class=\"bg-warning text-white text-center\">\n                    <div class=\"p-10\">\n                        <h2 class=\"m-0\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> </i>\n                        </h2>\n                        <small>Total No. of Hits</small>\n                    </div>\n                </mat-card>\n            </a>\n        </div> -->\n        <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">          \n\n                \n        </div>\n        \n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Workmanager/workassign/workassign.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Workmanager/workassign/workassign.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-r-10\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"lists.from\" (focus)=\"picker.open()\" placeholder=\"Choose a Start date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-r-10\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" [(ngModel)]=\"lists.to\" (focus)=\"picker1.open()\" placeholder=\"Choose an End date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-r-10\">\n                        <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker2\" [(ngModel)]=\"lists.duedate\" (focus)=\"picker2.open()\" placeholder=\"Choose a Due date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker2></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType!='Agent'\">\n                        <mat-form-field>\n                            <mat-label>Select User Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.agentid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Userlist|selectfilter:lists.searchuser:'userinfo'\" [value]=\"u.id\">\n                                    {{u.userinfo}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngIf=\"lists.userType=='Super Admin' ||lists.userType=='Manager'\">\n                        <mat-form-field>\n                            <mat-label>Select Admin Name</mat-label>\n                            <mat-select [(ngModel)]=\"lists.adminid\">\n                                <mat-option>\n                                    <ngx-mat-select-search [(ngModel)]=\"lists.searchuser1\"\n                                        [ngModelOptions]=\"{standalone: true}\" [placeholderLabel]=\"'Search...'\"\n                                        name=\"search\"></ngx-mat-select-search>\n                                </mat-option>\n                                <mat-option *ngFor=\"let u of lists.Adminlist|selectfilter:lists.searchuser1:'name'\" [value]=\"u.id\">\n                                    {{u.name}} </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-form-field>\n                            <mat-label>Order By</mat-label>\n                            <mat-select [(ngModel)]=\"lists.order\">\n                                <mat-option *ngFor=\"let u of lists.orderlist\" [value]=\"u.value\">\n                                    {{u.name}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                        <button mat-raised-button color=\"primary\" (click)=\"ViewReport()\">View Report</button>\n\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n\n\n                    </div>\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-warning text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\"><i class=\"fa fa-inr\" aria-hidden=\"true\"> {{lists.Totalamount}}</i></h2>\n                                    <small>Total Pending Amount</small>\n                                </div>\n                            </mat-card>\n                        </a>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <a href=\"javascript:void\">\n                            <mat-card class=\"bg-info text-white text-center\">\n                                <div class=\"p-10\">\n                                    <h2 class=\"m-0\">{{lists.Pending}}</h2>\n                                    <small>Pending Bills</small>\n                                </div>\n                            </mat-card>\n                        </a>\n\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n\n                    <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-r-10\">\n                        <mat-form-field>\n                            <mat-label>Select Depositor</mat-label>\n                            <mat-select [(ngModel)]=\"lists.depositorid\">\n                                <mat-option>--</mat-option>\n                                <mat-option *ngFor=\"let u of lists.Depositorlist\" [value]=\"u.id\">\n                                    {{u.name}} </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n\n                    </div>\n                    <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Assign Bills\" type=\"number\" [(ngModel)]=\"lists.nobills\">\n                        </mat-form-field>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right m-b-10\">\n                        <button mat-raised-button color=\"primary\" (click)=\"BillAssign()\">Work Assign</button>\n                    </div>\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                    </div>\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <table mat-table matSort [dataSource]=\"report\">\n                            <ng-container matColumnDef=\"receipt\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Receipt </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.receipt}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"kno\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> KNo</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.kno}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"agent\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Agent</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.username}}\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"cname\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Customer Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.cname}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"mobile\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"billamount\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> <i class=\"fa fa-inr\" aria-hidden=\"true\"> Amount</i> </th>\n                                <td mat-cell *matCellDef=\"let element\"> <i class=\"fa fa-inr\" aria-hidden=\"true\"> {{element.billamount}} </i></td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"lastdate\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Due Date </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.lastdate}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"depositor\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Depositor</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.depositor}} </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"billstatus\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    {{element.billstatus?element.billstatus:'Pending'}} </td>\n                            </ng-container>\n\n                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                        </table>\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50,100,500]\" showFirstLastButtons></mat-paginator>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/Portal/Workmanager/mywork/mywork.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Portal/Workmanager/mywork/mywork.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9Xb3JrbWFuYWdlci9teXdvcmsvbXl3b3JrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Portal/Workmanager/mywork/mywork.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Portal/Workmanager/mywork/mywork.component.ts ***!
  \***************************************************************/
/*! exports provided: MyworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworkComponent", function() { return MyworkComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyworkComponent = /** @class */ (function () {
    function MyworkComponent(common, fb) {
        this.common = common;
        this.fb = fb;
        this.hide = true;
        this.lists = {};
        this.manage = {};
        this.lists.TransTypelist = [{ name: "On Hold", value: 'onhold' }, { name: "Success", value: 'success' }, { name: "Failed", value: 'failed' }];
        this.lists.transid = [];
        this.GetMyWork();
    }
    MyworkComponent.prototype.ngOnInit = function () {
        this.myworkform = this.fb.group({
            transstatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            transid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            receiptid: [''],
            depositor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.myworkform.controls["depositor"].setValue(localStorage.getItem("UserId"));
    };
    MyworkComponent.prototype.Save = function () {
        var _this = this;
        this.common.PostMethod("Savemywork", this.myworkform.value).then(function (res) {
            if (res.Status == 1) {
                _this.myworkform.reset();
                _this.myworkform.controls['depositor'].setValue(localStorage.getItem("UserId"));
                _this.common.ToastMessage('Success', res.Message);
                _this.GetMyWork();
            }
            else {
                _this.common.ToastMessage('Failure', res.Message);
            }
        });
    };
    MyworkComponent.prototype.GetMyWork = function () {
        var _this = this;
        this.common.GetMethod("GetMyPendingWork?Id=" + localStorage.getItem("UserId")).then(function (res) {
            _this.manage = res.Data || {};
            _this.myworkform.controls["receiptid"].setValue(res.Data.receipt);
            _this.myworkform.controls["transstatus"].setValue(res.Data.billstatus);
        });
    };
    MyworkComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }
    ]; };
    MyworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mywork',
            template: __webpack_require__(/*! raw-loader!./mywork.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Workmanager/mywork/mywork.component.html"),
            styles: [__webpack_require__(/*! ./mywork.component.css */ "./src/app/Portal/Workmanager/mywork/mywork.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], MyworkComponent);
    return MyworkComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Workmanager/setting/setting.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Portal/Workmanager/setting/setting.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9Xb3JrbWFuYWdlci9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Portal/Workmanager/setting/setting.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Portal/Workmanager/setting/setting.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingComponent = /** @class */ (function () {
    function SettingComponent(common) {
        this.common = common;
        this.lists = {};
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.GetSettingInfo();
    };
    SettingComponent.prototype.GetSettingInfo = function () {
        var _this = this;
        this.common.PostMethod("GetfilterData", { file: "settings", name: "id", value: 1 }).then(function (res) {
            console.log(res);
            _this.lists.settingvalue = res.Data[0].value == 0 ? false : true;
            _this.lists.changesetting = _this.lists.settingvalue;
        });
    };
    SettingComponent.prototype.ChangeApiStatus = function (ev) {
        var _this = this;
        console.log(this.lists.changesetting);
        var value = this.lists.changesetting ? 0 : 1;
        this.common.PostMethod("RecordUpdate", { file: 'settings', name: 'id', value: 1, updatename: 'value', updatevalue: value }).then(function (res) {
            if (res.Status == 1) {
                _this.common.ToastMessage('Success', 'Your Api Status Update Successfully');
            }
        });
    };
    SettingComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }
    ]; };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Workmanager/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/Portal/Workmanager/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Workmanager/workassign/workassign.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Portal/Workmanager/workassign/workassign.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9Xb3JrbWFuYWdlci93b3JrYXNzaWduL3dvcmthc3NpZ24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Portal/Workmanager/workassign/workassign.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Portal/Workmanager/workassign/workassign.component.ts ***!
  \***********************************************************************/
/*! exports provided: WorkassignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkassignComponent", function() { return WorkassignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkassignComponent = /** @class */ (function () {
    function WorkassignComponent(common) {
        this.common = common;
        this.hide = true;
        this.lists = {};
        this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.newreport = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['receipt', 'kno', 'agent', 'cname', 'mobile', 'billamount', 'lastdate', 'depositor', 'billstatus'];
        this.lists.from = new Date();
        this.lists.to = new Date();
        this.lists.Totalamount = 0;
        this.lists.Totalworkassign = 0;
        this.lists.Totalworkassignsub = 0;
        this.lists.Totalworkassignpen = 0;
        this.lists.Pending = 0;
        this.lists.orderlist = [{ name: "Descending", value: 'desc' }, { name: "Ascending", value: 'asc' }];
        this.GetUserList();
        this.GetAdminList();
        this.GetDepositorlist();
    }
    WorkassignComponent.prototype.ngOnInit = function () {
        this.report.paginator = this.paginator;
        this.report.sort = this.sort;
    };
    WorkassignComponent.prototype.GetUserList = function () {
        var _this = this;
        if (localStorage.getItem("UserType") == "Super Admin") {
            this.common.GetMethod("GetUserInfo").then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
        else {
            this.common.GetMethod("GetUserInfo?userid=" + localStorage.getItem("UserId")).then(function (res) {
                _this.lists.Userlist = res.Data;
                _this.lists.Userlist.forEach(function (element) {
                    element.userinfo = element.name + "-" + element.Branchname;
                });
                _this.ViewReport();
            });
        }
    };
    WorkassignComponent.prototype.GetAdminList = function () {
        var _this = this;
        this.common.PostMethod("GetfilterData", { file: "users", name: "usertype", value: "Admin" }).then(function (res) {
            _this.lists.Adminlist = res.Data;
        });
    };
    WorkassignComponent.prototype.GetDepositorlist = function () {
        var _this = this;
        this.common.PostMethod("GetfilterData", { file: "users", name: "usertype", value: "Depositor" }).then(function (res) {
            _this.lists.Depositorlist = res.Data;
        });
    };
    WorkassignComponent.prototype.ViewReport = function () {
        var _this = this;
        this.lists.Multiple = false;
        this.lists.userids = false;
        this.lists.from = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.from).format("YYYY-MM-DD");
        this.lists.to = moment__WEBPACK_IMPORTED_MODULE_3__(this.lists.to).format("YYYY-MM-DD");
        this.lists.userType = localStorage.getItem("UserType");
        if (localStorage.getItem("UserType") == "Super Admin") {
            this.lists.userid = 0;
        }
        else if (localStorage.getItem("UserType") == "Admin") {
            if (!this.lists.agentid) {
                this.lists.userids = [];
                //  this.lists.userids.push(localStorage.getItem("UserId"));
                this.lists.Userlist.forEach(function (element) {
                    _this.lists.userids.push(element.id);
                });
                this.lists.Multiple = true;
                this.lists.userid = localStorage.getItem("UserId");
            }
        }
        else {
            this.lists.userid = localStorage.getItem("UserId");
        }
        if (this.lists.agentid) {
            this.lists.userid = this.lists.agentid;
        }
        if (this.lists.adminid) {
            this.lists.userids = [];
            this.lists.Userlist.forEach(function (element) {
                if (element.adminid == _this.lists.adminid) {
                    _this.lists.userids.push(element.id);
                }
            });
        }
        this.lists.myduedate = "";
        if (this.lists.duedate) {
            var duedate = new Date(this.lists.duedate);
            var fduedate = moment__WEBPACK_IMPORTED_MODULE_3__(duedate).format("DD-MM-YYYY");
            this.lists.myduedate = fduedate;
        }
        this.common.PostMethod('BillAssignReport', this.lists).then(function (res) {
            _this.report = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.Data);
            _this.report.paginator = _this.paginator;
            _this.report.sort = _this.sort;
            _this.newreport = res.Data;
            _this.lists.Totalamount = 0;
            if (_this.lists.duedate) {
                _this.lists.duedate = "";
            }
            _this.lists.Pending = 0;
            _this.lists.Success = 0;
            res.Data.forEach(function (element) {
                if (!element.billstatus || element.billstatus == 'Pending') {
                    _this.lists.Pending = _this.lists.Pending + 1;
                }
                _this.lists.Totalamount = _this.lists.Totalamount + element.billamount;
            });
        });
    };
    WorkassignComponent.prototype.BillAssign = function () {
        var _this = this;
        if (this.lists.nobills > this.lists.Pending) {
            this.common.ToastMessage("Fail", "Assigned Bills exceeding the Pending Bills.");
        }
        else {
            var ids_1 = [];
            var TotalAmount = 0;
            for (var i = 0; i <= this.lists.nobills - 1; i++) {
                TotalAmount = TotalAmount + this.report.data[i].billamount;
                ids_1.push(this.report.data[i].id);
            }
            this.common.ConfirmMessage("Do You Want Confirm Assign Work? Your Assing Work Total Amount is " + TotalAmount + "", function (res) {
                if (res) {
                    _this.common.PostMethod("UserWorkAssign", { ids: ids_1, Depositor: _this.lists.depositorid, Status: "Assign" }).then(function (res) {
                        if (res.Status == 1) {
                            _this.common.ToastMessage('Success', res.Message);
                            _this.lists.nobills = 0;
                            _this.lists.depositorid = 0;
                            _this.ViewReport();
                        }
                        else {
                            _this.common.ToastMessage('Failure', res.Message);
                        }
                    });
                }
            });
        }
    };
    WorkassignComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], WorkassignComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], WorkassignComponent.prototype, "sort", void 0);
    WorkassignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workassign',
            template: __webpack_require__(/*! raw-loader!./workassign.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Workmanager/workassign/workassign.component.html"),
            styles: [__webpack_require__(/*! ./workassign.component.css */ "./src/app/Portal/Workmanager/workassign/workassign.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], WorkassignComponent);
    return WorkassignComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Workmanager/workmanager.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/Portal/Workmanager/workmanager.module.ts ***!
  \**********************************************************/
/*! exports provided: WorkManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkManagerModule", function() { return WorkManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _workmanager_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workmanager.routing */ "./src/app/Portal/Workmanager/workmanager.routing.ts");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _workassign_workassign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workassign/workassign.component */ "./src/app/Portal/Workmanager/workassign/workassign.component.ts");
/* harmony import */ var _mywork_mywork_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mywork/mywork.component */ "./src/app/Portal/Workmanager/mywork/mywork.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var _Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../Pipes/pipe/pipe.module */ "./src/app/Portal/Pipes/pipe/pipe.module.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/Portal/Workmanager/setting/setting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var WorkManagerModule = /** @class */ (function () {
    function WorkManagerModule() {
    }
    WorkManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_workmanager_routing__WEBPACK_IMPORTED_MODULE_5__["WorkmanagerRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_11__["PipeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
            ],
            declarations: [
                _workassign_workassign_component__WEBPACK_IMPORTED_MODULE_7__["WorkassignComponent"],
                _mywork_mywork_component__WEBPACK_IMPORTED_MODULE_8__["MyworkComponent"],
                _setting_setting_component__WEBPACK_IMPORTED_MODULE_12__["SettingComponent"]
            ]
        })
    ], WorkManagerModule);
    return WorkManagerModule;
}());



/***/ }),

/***/ "./src/app/Portal/Workmanager/workmanager.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/Portal/Workmanager/workmanager.routing.ts ***!
  \***********************************************************/
/*! exports provided: WorkmanagerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkmanagerRoutes", function() { return WorkmanagerRoutes; });
/* harmony import */ var _workassign_workassign_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workassign/workassign.component */ "./src/app/Portal/Workmanager/workassign/workassign.component.ts");
/* harmony import */ var _mywork_mywork_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mywork/mywork.component */ "./src/app/Portal/Workmanager/mywork/mywork.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/Portal/Workmanager/setting/setting.component.ts");



var WorkmanagerRoutes = [
    {
        path: '',
        children: [
            {
                path: 'workassign',
                component: _workassign_workassign_component__WEBPACK_IMPORTED_MODULE_0__["WorkassignComponent"],
                data: {
                    title: 'Work Assign Manager',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Work Assign Manager' }
                    ]
                }
            },
            {
                path: 'setting',
                component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_2__["SettingComponent"],
                data: {
                    title: 'Setting',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Setting' }
                    ]
                }
            },
            {
                path: 'mywork',
                component: _mywork_mywork_component__WEBPACK_IMPORTED_MODULE_1__["MyworkComponent"],
                data: {
                    title: 'My Work',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'My Work' }
                    ]
                }
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=Portal-Workmanager-workmanager-module-es5.js.map