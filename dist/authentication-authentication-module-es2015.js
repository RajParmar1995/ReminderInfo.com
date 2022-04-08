(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/error/error.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/error/error.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\">\n    <div class=\"login-register-box error-card text-center\">\n        <h1>404</h1>\n        <h3 class=\"text-uppercase\">Page Not Found !</h3>\n        <p class=\"text-muted m-t-30 m-b-30\">You seem to be trying to find this way to home</p>\n        <a mat-raised-button color=\"primary\" [routerLink]=\"['/']\" class=\"btn btn-info btn-rounded waves-effect waves-light m-b-40\">Back to home</a>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/forgot/forgot.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/forgot/forgot.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/login-register.jpg);\">\n    <div class=\"login-register-box\">\n        <mat-card>\n            <mat-card-content>\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"text-center\">\n                        <img alt=\"homepage\" style=\"heigth:100px !important\" src=\"assets/images/logo-icon.png\">\n                        <h4 class=\"m-t-0\">Recover Password</h4>\n                    </div>\n                    <p class=\"text-center font-14\">Enter your Mobile Number and we'll send you OTP.</p>\n                    <div fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n                        <div class=\"pb-1\">\n                            <mat-form-field style=\"width: 100%\">\n                                <input matInput placeholder=\"Mobile Number\" type=\"tel\" maxlength=\"10\"\n                                    [formControl]=\"form.controls['mobile']\">\n                            </mat-form-field>\n                            <small\n                                *ngIf=\"form.controls['mobile'].hasError('required') && form.controls['mobile'].touched\"\n                                class=\"text-danger support-text\">You must include Mobile Number.</small>\n                            <small *ngIf=\"form.controls['mobile'].errors?.email && form.controls['mobile'].touched\"\n                                class=\"text-danger support-text\">You must include a valid Mobile Number.</small>\n                        </div>\n                        <a [routerLink]=\"['/authentication/login']\" class=\"link text-info\">Back to Login</a>\n\n                        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"btn-block btn-lg m-t-20\"\n                            [disabled]=\"!form.valid\">Send OTP</button>\n                    </div>\n\n                </form>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/lockscreen/lockscreen.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/lockscreen/lockscreen.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/login-register.jpg);\">\n  <div class=\"login-register-box\">\n    <mat-card>\n      <mat-card-content>\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"text-center\">\n            <img src=\"assets/images/users/1.jpg\" class=\"img-circle\" width=\"80\" alt=\"user\" title=\"user\" />\n          <h4 class=\"m-t-0\">{{lists.profile.name}}</h4>\n          </div>\n\n          <div fxLayout=\"row wrap\">\n            <!-- col full-->\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n              <mat-form-field style=\"width: 100%\">\n                <input matInput type=\"password\" placeholder=\"Enter Password\" [formControl]=\"form.controls['password']\">\n              </mat-form-field>\n              <small *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\" class=\"text-danger support-text\">Password is required.</small>\n            </div>\n            <!-- col full-->\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n              <button mat-raised-button class=\"btn-block btn-lg m-t-10 m-b-10\" color=\"primary\" type=\"submit\" [disabled]=\"!form.valid\">Unlock</button>\n            </div>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/login/login.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/login-register.png);\">\r\n    <div class=\"login-register-box\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"text-center\">\r\n                        <img style=\"height: 100px !important;\" alt=\"homepage\" src=\"assets/images/logo-icon.png\">\r\n                    </div>\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Mobile Number / Email\" type=\"text\" \r\n                                    [formControl]=\"form.controls['mobile']\">\r\n                            </mat-form-field>\r\n                            <small\r\n                                *ngIf=\"form.controls['mobile'].hasError('required') && form.controls['mobile'].touched\"\r\n                                class=\"text-danger support-text\">Mobile No. / Email is required.</small>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\"\r\n                                    [formControl]=\"form.controls['password']\">\r\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </button>\r\n                            </mat-form-field>\r\n                            <small\r\n                                *ngIf=\"form.controls['password'].hasError('required') && form.controls['password'].touched\"\r\n                                class=\"text-danger support-text\">Password is required.</small>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\">\r\n                            <mat-checkbox color=\"warn\">Remember me</mat-checkbox>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" class=\"text-right\">\r\n                            <a [routerLink]=\"['/authentication/forgot']\" class=\"link\">Forgot Password?</a>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <button mat-raised-button color=\"primary\" class=\"btn-block btn-lg m-t-20 m-b-20\"\r\n                                type=\"submit\" [disabled]=\"!form.valid\">Login</button>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-center\">\r\n                            <span>Don't have an account?\r\n                                <a [routerLink]=\"['/authentication/register']\" class=\"text-info link\">Register</a>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div style=\"font-size: 14px;margin-top: 10px;\">   \r\n                    <!-- <a href=\"https://easybillpay.co.in\">2020 EasyBillPay</a> &copy;  -->\r\n                    Powered by <a href=\"http://stwinsparx.com/\">Stwin Sparx</a>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentication/register/register.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentication/register/register.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/login-register.jpg);\">\r\n  <div fxLayout=\"row wrap\">\r\n    <mat-card fxFlex.gt-sm=\"50%\" fxFlex=\"50\" style=\"margin-left: 25%;\">\r\n      <mat-card-content style=\"margin: 0%;\">\r\n        <div class=\"text-center\">\r\n          <h4 class=\"m-t-0 m-b-0\">Register to App</h4>\r\n        </div>\r\n        <div fxLayout=\"row wrap m-l-0 m-r-0\">\r\n          <!-- col full-->\r\n          <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\" class=\"m-0 p-0\">\r\n            <mat-card-content>\r\n              <mat-horizontal-stepper linear #stepper>\r\n                <mat-step [stepControl]=\"firstFormGroup\">\r\n                <!-- <mat-step> -->\r\n                  <form [formGroup]=\"firstFormGroup\">\r\n                    <ng-template matStepLabel>Basic Info</ng-template>\r\n                    <div fxLayout=\"row wrap\">\r\n                      <div class=\"p-10\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"1-0\" fxFlex=\"100\">\r\n                          <mat-form-field>\r\n                            <mat-label>User Type</mat-label>\r\n                            <mat-select formControlName=\"usertype\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let a of userTtypelist\" [value]=\"a.id\" required>\r\n                                    {{a.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n                      </div>\r\n                      <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"FirstName\" formControlName=\"firstname\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"firtsForm.firstname.touched && (firtsForm.firstname.errors?.minlength || firtsForm.firstname.errors?.maxlength)\">\r\n                          First Name should be of Min. 3 characters, Max. 20 characters.</p>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"firtsForm.firstname.touched && firtsForm.firstname.errors?.pattern\">\r\n                          First Name contains only characters.</p>\r\n                      </div>\r\n                      <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"Last Name\" formControlName=\"lastname\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"firtsForm.lastname.touched && (firtsForm.lastname.errors?.minlength || firtsForm.lastname.errors?.maxlength)\">\r\n                          Last Name should be of Min. 3 characters, Max. 20 characters.</p>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"firtsForm.lastname.touched && firtsForm.lastname.errors?.pattern\">\r\n                          Last Name contains only characters.</p>\r\n                      </div>\r\n                      <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <span matPrefix>+91 &nbsp;</span>\r\n                          <input type=\"tel\" matInput placeholder=\"Mobile Number\" formControlName=\"mnumber\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"firtsForm.mnumber.touched && firtsForm.mnumber.hasError('required')\">\r\n                          Mobile Number Cannot be blank.\r\n                        </p>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"firtsForm.mnumber.touched && (firtsForm.mnumber.errors?.minlength || firtsForm.mnumber.errors?.maxlength)\">\r\n                          Mobile Number Should be of atleast 10 digit.\r\n                        </p>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"firtsForm.mnumber.touched &&(firtsForm.mnumber.errors?.pattern)\">\r\n                          Use Digits Only.\r\n                        </p>\r\n                      </div>\r\n                      <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                        </mat-form-field>\r\n                        <p *ngIf=\"firtsForm.email.hasError('pattern') && firtsForm.email.touched\"\r\n                          class=\"text-danger m-t-0 font-16\">Please Enter Valid Email.</p>\r\n                      </div>\r\n                      <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"Enter your password\" formControlName=\"password\"\r\n                            [type]=\"hide ? 'password' : 'text'\">\r\n                          <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\r\n                            [attr.aria-pressed]=\"hide\">\r\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                          </button>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"firtsForm.password.touched && (firtsForm.password.errors?.required||firtsForm.password.errors?.minlength||firtsForm.password.errors?.maxlength||firtsForm.password.errors?.pattern)\">\r\n                          Password should be of Min. 8 characters,Max. 30 characters, which must contain at least\r\n                          one Special character, one Capital letter, one Small letter and one Numeric value.</p>\r\n                      </div>\r\n                      <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"Confirm your password\" [type]=\"hide1 ? 'password' : 'text'\"\r\n                            formControlName=\"confirmPassword\">\r\n                          <button mat-icon-button matSuffix (click)=\"hide1 = !hide1\" [attr.aria-label]=\"'Hide password'\"\r\n                            [attr.aria-pressed]=\"hide1\">\r\n                            <mat-icon>{{hide1 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                          </button>\r\n                        </mat-form-field>\r\n                        <p *ngIf=\"firtsForm.confirmPassword.errors?.equalTo && firtsForm.confirmPassword.touched\"\r\n                          class=\"text-danger m-t-0 font-16\">Passwords do not math.</p>\r\n                      </div>                     \r\n                    </div>\r\n                    <div fxLayout=\"row wrap\">\r\n                      <div fxFlex.gt-sm=\"100\" class=\"text-right\" fxFlex.gt-xs=\"1-0\" fxFlex=\"100\">\r\n                        <button mat-raised-button class=\"pull-right\" color=\"warn\" matStepperNext>Next</button>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </mat-step>\r\n                <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\r\n                  <form [formGroup]=\"secondFormGroup\">\r\n                    <ng-template matStepLabel>Fill out your address</ng-template>\r\n                    <div fxLayout=\"row wrap\">\r\n                      <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        <label><b>Permanent Address</b></label>\r\n                      </div>\r\n                      <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <textarea matInput placeholder=\"Address\" formControlName=\"perAddress\" required></textarea>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Select State\" (selectionChange)=\"GetCity()\" formControlName=\"perState\" required>\r\n                            <mat-option>--</mat-option>\r\n                            <mat-option *ngFor=\"let state of statearray\" [value]=\"state.id\">{{state.name}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Select City\" formControlName=\"perCity\" required>\r\n                            <mat-option>--</mat-option>\r\n                            <mat-option *ngFor=\"let city of cityarray\" [value]=\"city.id\">{{city.name}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <input matInput type=\"number\" placeholder=\"Pincode\" formControlName=\"perPincode\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"secondForm.perPincode.touched && (secondForm.perPincode.errors?.maxLength || secondForm.perPincode.errors?.min || secondForm.perPincode.errors?.max)\">\r\n                          Pincode code Contains only 6 digits.</p>\r\n                      </div>\r\n                      <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                        <label><b>Correspondance Address</b></label>\r\n                      </div>\r\n                      <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                        <section>\r\n                          <mat-checkbox (change)=\"AddressCopy($event)\">Same as Permanent</mat-checkbox>\r\n                        </section>\r\n                      </div>\r\n                      <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <textarea matInput placeholder=\"Address\" formControlName=\"corresAddress\" required></textarea>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Select State\" (selectionChange)=\"GetCityCors()\" formControlName=\"corresState\" required>\r\n                            <mat-option>--</mat-option>\r\n                            <mat-option *ngFor=\"let state of statearray\" [value]=\"state.id\">{{state.name}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"Select City\" formControlName=\"corresCity\" required>\r\n                              <mat-option>--</mat-option>\r\n                              <mat-option *ngFor=\"let city of cityarraycors\" [value]=\"city.id\">{{city.name}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                          <input matInput type=\"number\" placeholder=\"Pincode\" formControlName=\"corresPincode\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                          *ngIf=\"secondForm.corresPincode.touched && (secondForm.corresPincode.errors?.maxLength || secondForm.corresPincode.errors?.min || secondForm.corresPincode.errors?.max)\">\r\n                          Pincode code Contains only 6 digits.</p>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n                      <button mat-raised-button class=\"pull-right\" color=\"warn\" matStepperNext>Next</button>\r\n                    </div>\r\n                  </form>\r\n                </mat-step>\r\n                  <mat-step  [stepControl]=\"thirdFormGroup\" [optional]=\"isOptional\">\r\n                  <form [formGroup]=\"thirdFormGroup\">\r\n                    <ng-template matStepLabel>Subscription</ng-template>\r\n                    <div fxLayout=\"row wrap\">\r\n                      <div fxFlex.gt-sm=\"100\" class=\"m-t-20 m-b-20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        <label [ngStyle]=\"{'color':plantypeval == true ? 'black' : 'Red' }\">Subscription Plan</label>\r\n                      </div>\r\n\r\n                      <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        <mat-radio-group formControlName=\"Subscriptionplan\">\r\n                          <div *ngFor=\"let Plan of SubPlans\">\r\n                            <mat-radio-button class=\"m-l-20 m-t-5\" value=\"{{Plan.id}}\">{{Plan.subscription_name}}<span>\r\n                                (Validity: {{ Plan.validity | monthtoyear}})</span> </mat-radio-button><br>\r\n                            <p class=\"font-16 m-l-20  m-t-5\">{{!Plan.detailview?(Plan.description |\r\n                              limitto:100):Plan.description }}<a *ngIf=\"Plan.description.length > 100\"\r\n                                style=\"margin-left: -15px;\" mat-button color=\"primary\"\r\n                                (click)='Plan.detailview=!Plan.detailview'>{{!Plan.detailview?'Read More':'Hide\r\n                                More'}}</a></p>\r\n                          </div>\r\n                          <hr>\r\n                        </mat-radio-group>\r\n                      </div>\r\n                    </div>\r\n                    <div>\r\n                      <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" class=\"pull-right\"\r\n                        [disabled]=\"!thirdFormGroup.valid\">submit</button>\r\n                    </div>\r\n                  </form>\r\n\r\n                </mat-step>\r\n              </mat-horizontal-stepper>\r\n            </mat-card-content>\r\n          </div>\r\n          <div class=\"text-center\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n            <span>Already have an account?\r\n              <a [routerLink]=\"['/authentication/login']\" class=\"link text-info\"> Login</a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!---start-->"

/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/authentication/error/error.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/authentication/lockscreen/lockscreen.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _Portal_Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Portal/Pipes/pipe/pipe.module */ "./src/app/Portal/Pipes/pipe/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_6__["AuthenticationRoutes"]),
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
            _Portal_Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_14__["PipeModule"]
        ],
        declarations: [
            _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"],
            _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_8__["ForgotComponent"],
            _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_9__["LockscreenComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
        ]
    })
], AuthenticationModule);



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error/error.component */ "./src/app/authentication/error/error.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/authentication/lockscreen/lockscreen.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/authentication/register/register.component.ts");





const AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: _error_error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"]
            },
            {
                path: 'forgot',
                component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__["ForgotComponent"]
            },
            {
                path: 'lockscreen',
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_2__["LockscreenComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/authentication/error/error.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/authentication/error/error.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/error/error.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/error/error.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() { }
};
ErrorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/authentication/error/error.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);



/***/ }),

/***/ "./src/app/authentication/forgot/forgot.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/authentication/forgot/forgot.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/authentication/forgot/forgot.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/forgot/forgot.component.ts ***!
  \***********************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Portal/Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _Portal_Dailogbox_otp_otp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Portal/Dailogbox/otp/otp.component */ "./src/app/Portal/Dailogbox/otp/otp.component.ts");
/* harmony import */ var _Portal_Dailogbox_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Portal/Dailogbox/changepassword/changepassword.component */ "./src/app/Portal/Dailogbox/changepassword/changepassword.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ForgotComponent = class ForgotComponent {
    constructor(fb, router, common) {
        this.fb = fb;
        this.router = router;
        this.common = common;
        this.lists = {};
    }
    ngOnInit() {
        this.form = this.fb.group({
            mobile: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].number, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)])
            ]
        });
    }
    onSubmit() {
        this.lists.Randomnumber = Math.floor(100000 + Math.random() * 900000);
        this.common.PostMethod("Checkuser", { mobile: this.form.value.mobile }).then((result) => {
            if (result.Status == 1) {
                this.common.PostMethod("SendOTP", { Mobile: this.form.value.mobile, OTP: this.lists.Randomnumber }).then((res) => {
                    let dailog = this.common.dialog.open(_Portal_Dailogbox_otp_otp_component__WEBPACK_IMPORTED_MODULE_5__["OtpComponent"], {});
                    dailog.afterClosed().subscribe(data => {
                        if (this.lists.Randomnumber == data) {
                            this.common.ToastMessage("Success", "Please Enter New Password Successfully");
                            let passChnage = this.common.dialog.open(_Portal_Dailogbox_changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordComponent"], {});
                            passChnage.afterClosed().subscribe(result => {
                                if (result.Status) {
                                    this.ChangePassword(result.Password);
                                }
                                else {
                                    this.common.ToastMessage("Fail", "User Cancel Password Change");
                                }
                            });
                        }
                        else {
                            this.common.ToastMessage("Fail", "OTP not match please try again.");
                        }
                    });
                });
            }
            else {
                this.common.ToastMessage("Fail", "Invalid User Please Contact Administrator");
            }
        });
    }
    ChangePassword(Password) {
        this.common.PostMethod("ForgotPassword", { mobile: this.form.value.mobile, password: Password }).then((res) => {
            if (res.Status == 1) {
                this.common.ToastMessage("Success", res.Message);
                this.gotologin();
            }
            else {
                this.common.ToastMessage("Fail", res.Message);
            }
        }).catch();
    }
    gotologin() {
        this.router.navigate(["/authentication/login"]);
    }
};
ForgotComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
ForgotComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-forgot',
        template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/forgot/forgot.component.html"),
        styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/app/authentication/forgot/forgot.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], ForgotComponent);



/***/ }),

/***/ "./src/app/authentication/lockscreen/lockscreen.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/authentication/lockscreen/lockscreen.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvY2tzY3JlZW4vbG9ja3NjcmVlbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/authentication/lockscreen/lockscreen.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/lockscreen/lockscreen.component.ts ***!
  \*******************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Portal/Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LockscreenComponent = class LockscreenComponent {
    constructor(fb, router, route, common) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.common = common;
        this.lists = {};
    }
    ngOnInit() {
        this.lists.profile = JSON.parse(localStorage.getItem("UserProfile"));
        this.form = this.fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
        this.route.queryParams.subscribe((res) => {
            console.log(res);
            this.lists.LastUrl = res.Url;
            this.lists.LastUrl = this.lists.LastUrl.replace("http://localhost:4200", "");
            this.lists.LastUrl = this.lists.LastUrl.replace("https://easybillpay.co.in", "");
        });
    }
    onSubmit() {
        let pass = localStorage.getItem("Typepography");
        if (pass == this.form.value.password) {
            this.router.navigate([this.lists.LastUrl]);
        }
        else {
            this.common.ToastMessage('Fail', "You Entered a Wrong Password try again to login");
            this.common.logout();
        }
    }
};
LockscreenComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_0__["CommonService"] }
];
LockscreenComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lockscreen',
        template: __webpack_require__(/*! raw-loader!./lockscreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/lockscreen/lockscreen.component.html"),
        styles: [__webpack_require__(/*! ./lockscreen.component.scss */ "./src/app/authentication/lockscreen/lockscreen.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_0__["CommonService"]])
], LockscreenComponent);



/***/ }),

/***/ "./src/app/authentication/login/login.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Portal/Service/common.service */ "./src/app/Portal/Service/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(fb, router, common) {
        this.fb = fb;
        this.router = router;
        this.common = common;
        this.hide = true;
        this.lists = {};
        if (!localStorage.getItem("FCMID")) {
            let ID = Math.floor(100000 + Math.random() * 900000);
            localStorage.setItem("FCMID", ID);
        }
    }
    ngOnInit() {
        this.form = this.fb.group({
            mobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    onSubmit() {
        let data = [];
        this.form.value.fcid = localStorage.getItem("FCMID");
        if (!this.form.value.mobile.match(/^\d{10}$/)) {
            this.form.addControl('email', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.form.value.mobile, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            this.form.removeControl('mobile');
            data = this.form.value;
            this.form.addControl('mobile', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.form.value.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            this.form.removeControl('email');
        }
        else {
            data = this.form.value;
        }
        this.common.PostMethod("auth/signin", data).then((res) => {
            if (res.status == 1) {
                window.localStorage.setItem('UserId', res.data.id);
                window.localStorage.setItem('UserProfile', JSON.stringify(res.data));
                window.localStorage.setItem("UserType", res.data.user_type);
                window.localStorage.setItem("Token", res.token);
                this.common.ToastMessage("Success", res.message);
                setTimeout(() => {
                    this.router.navigate(["/"]);
                }, 1000);
            }
            else {
                this.common.ToastMessage("Info", res.Message);
            }
        }).catch(y => {
            this.common.ToastMessage("Error !", y.error.message);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/authentication/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/authentication/register/register.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Portal/Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]));
const confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].equalTo(password));
let RegisterComponent = class RegisterComponent {
    constructor(_formBuilder, common) {
        this._formBuilder = _formBuilder;
        this.common = common;
        this.lists = {};
        this.isLinear = false;
        this.isOptional = false;
        this.isEditable = false;
        this.hide = true;
        this.hide1 = true;
        this.userTtypelist = [{ id: "1", name: "Individual" }, { id: "2", name: "Corporate" }];
        this.passworderrors = '';
        this.submitformdata = [];
        this.statearray = [];
        this.cityarray = [];
        this.cityarraycors = [];
        this.statevalue = '';
        this.SubPlans = [];
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            usertype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            mnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: password,
            confirmPassword: confirmPassword,
        });
        this.secondFormGroup = this._formBuilder.group({
            perAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            perState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            perCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            perPincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(100000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999999)]],
            corresAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            corresState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            corresCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            corresPincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(100000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999999)]],
        });
        this.thirdFormGroup = this._formBuilder.group({
            Subscriptionplan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.GetSubscriptionMaster();
        this.GetStates();
    }
    get firtsForm() {
        return this.firstFormGroup.controls;
    }
    get secondForm() {
        return this.secondFormGroup.controls;
    }
    AddressCopy(e) {
        if (e.checked) {
            this.secondFormGroup.controls['corresAddress'].setValue(this.secondFormGroup.value.perAddress);
            this.secondFormGroup.controls['corresState'].setValue(this.secondFormGroup.value.perState);
            this.secondFormGroup.controls['corresCity'].setValue(this.secondFormGroup.value.perCity);
            this.secondFormGroup.controls['corresPincode'].setValue(this.secondFormGroup.value.perPincode);
        }
        else {
            this.secondFormGroup.controls['corresAddress'].setValue('');
            this.secondFormGroup.controls['corresState'].setValue('');
            this.secondFormGroup.controls['corresCity'].setValue('');
            this.secondFormGroup.controls['corresPincode'].setValue('');
        }
    }
    GetSubscriptionMaster() {
        this.common.GetMethod('master/getmaster?master=subscriptionmaster').then((res) => {
            if (res.status == 1) {
                this.SubPlans = res.data;
            }
        }).catch(y => {
            this.common.ToastMessage("Error !", y.error.message);
        });
    }
    GetStates() {
        this.common.PostMethod("common/getstates", { id: 101 }).then((res) => {
            if (res.status == 1) {
                this.statearray = res.data;
            }
        }).catch(y => {
            this.common.ToastMessage("Error !", y.error.message);
        });
    }
    GetCity() {
        let stateid = this.secondFormGroup.value.perState;
        this.common.PostMethod("common/getcities", { id: stateid }).then((res) => {
            if (res.status == 1) {
                this.cityarray = res.data;
                this.cityarraycors = res.data;
            }
        }).catch(y => {
            this.common.ToastMessage("Error !", y.error.message);
        });
    }
    GetCityCors() {
        let stateid = this.secondFormGroup.value.corresState;
        this.common.PostMethod("common/getcities", { id: stateid }).then((res) => {
            if (res.status == 1) {
                this.cityarraycors = res.data;
            }
        }).catch(y => {
            this.common.ToastMessage("Error !", y.error.message);
        });
    }
    onSubmit() {
        let data = {
            user_type: this.firstFormGroup.value.usertype,
            name: this.firstFormGroup.value.firstname + ' ' + this.firstFormGroup.value.lastname,
            mobile: this.firstFormGroup.value.mnumber,
            email: this.firstFormGroup.value.email,
            password: this.firstFormGroup.value.confirmPassword,
            address: [
                {
                    address: this.secondFormGroup.value.perAddress,
                    state_id: this.secondFormGroup.value.perState,
                    city_id: this.secondFormGroup.value.perCity,
                    pincode: this.secondFormGroup.value.perPincode,
                    address_type: 0,
                    status: 1
                },
                {
                    address: this.secondFormGroup.value.corresAddress,
                    state_id: this.secondFormGroup.value.corresState,
                    city_id: this.secondFormGroup.value.corresCity,
                    pincode: this.secondFormGroup.value.corresPincode,
                    address_type: 1,
                    status: 1
                },
            ],
            subscription_id: parseInt(this.thirdFormGroup.value.Subscriptionplan),
            fcm_id: localStorage.getItem("FCMID")
        };
        this.common.PostMethod("auth/signup", data).then((res) => {
            if (res.status == 1) {
                this.common.ToastMessage("Success", res.message);
            }
        }).catch(y => {
            this.common.ToastMessage("Error !", y.error.message);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentication/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/authentication/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Portal_Service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
], RegisterComponent);



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module-es2015.js.map