(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Portal-Bill-bill-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Bill/billdeposit/billdeposit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Bill/billdeposit/billdeposit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <form [formGroup]=\"Billform\">\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\n                <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-form-field>\n                        <mat-label>Bill Type</mat-label>\n                        <mat-select required formControlName=\"provider_Id\">\n                            <mat-option [value]=\"'Electricity'\">Electricity\n                            </mat-option>\n                            <mat-option [value]=\"'Water'\">Water\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"KNo\" type=\"number\" formControlName=\"kno\">\n                    </mat-form-field>\n                </div>\n                <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                    <button mat-raised-button color=\"primary\" class=\"m-r-10\" type=\"submit\" (click)=\"GetBillinfo()\">Get\n                        Bill</button>\n                        <button mat-raised-button color=\"danger\" class=\"m-r-10\" type=\"submit\" (click)=\"cancelbill()\">Cancel</button>\n\n                </div>\n            </div>\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\n                <div fxFlex.gt-sm=\"100\" fxFlex=\"100\" class=\"p-10\">\n                    <h4 style=\"margin:0px\">Biller Info</h4>\n                </div>\n                <div fxFlex.gt-sm=\"33.33\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-label>Name:<span style=\"color:#1e88e5; font-weight :bold;\"> {{ lists.BillCustInfo.name}}</span>\n                    </mat-label>\n                </div>\n                <div fxFlex.gt-sm=\"33.33\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-label>Due Date:<span style=\"color:#1e88e5; font-weight :bold;\">\n                            {{ lists.BillCustInfo.duedate}}</span></mat-label>\n                </div>\n                <div fxFlex.gt-sm=\"33.33\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-label>Bill Date:<span style=\"color:#1e88e5; font-weight :bold;\">\n                            {{ lists.BillCustInfo.billdate}}</span></mat-label>\n                </div>\n                <div fxFlex.gt-sm=\"33.33\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-label *ngIf=\"!lists.BillCustInfo.edit\">Bill Amount:<span\n                            style=\"color:#1e88e5; font-weight :bold;\">\n                            {{ lists.BillCustInfo.amount}}</span>\n                        <!-- <mat-icon\n                            (click)=\"lists.BillCustInfo.edit?lists.BillCustInfo.edit=false:lists.BillCustInfo.edit=true\">\n                            edit</mat-icon> -->\n                    </mat-label>\n                    <!-- <mat-form-field appearance=\"standard\" *ngIf=\"lists.BillCustInfo.edit\">\n                        <mat-label>Bill Amount</mat-label>\n                        <input matInput placeholder=\"Bill Amount\" type=\"number\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"lists.BillCustInfo.amount\">\n                    </mat-form-field> -->\n                    <!-- {{ lists.BillCustInfo.amount}} -->\n                </div>\n\n            </div>\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\n\n                <div fxFlex.gt-sm=\"33.33\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Mobile No\" type=\"tel\" maxlength=\"10\" formControlName=\"mobile\">\n                    </mat-form-field>\n                </div>\n                <div fxFlex.gt-sm=\"33.33\" fxFlex=\"100\" class=\"p-10\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"City\" formControlName=\"city\">\n                    </mat-form-field>\n                </div>\n                <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                    <button mat-raised-button color=\"primary\" class=\"\" type=\"submit\" [disabled]=\"!Billform.valid\"\n                        (click)=\"BillSubmit()\">Submit</button>\n                </div>\n            </div>\n        </form>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Bill/billreversal/billreversal.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Bill/billreversal/billreversal.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>billreversal works!</p>\n"

/***/ }),

/***/ "./src/app/Portal/Bill/bill.module.ts":
/*!********************************************!*\
  !*** ./src/app/Portal/Bill/bill.module.ts ***!
  \********************************************/
/*! exports provided: BillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillModule", function() { return BillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _bill_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bill.routing */ "./src/app/Portal/Bill/bill.routing.ts");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _billdeposit_billdeposit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./billdeposit/billdeposit.component */ "./src/app/Portal/Bill/billdeposit/billdeposit.component.ts");
/* harmony import */ var _billreversal_billreversal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./billreversal/billreversal.component */ "./src/app/Portal/Bill/billreversal/billreversal.component.ts");
/* harmony import */ var _Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pipes/pipe/pipe.module */ "./src/app/Portal/Pipes/pipe/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BillModule = /** @class */ (function () {
    function BillModule() {
    }
    BillModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_bill_routing__WEBPACK_IMPORTED_MODULE_5__["BillRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_9__["PipeModule"]
            ],
            declarations: [
                _billdeposit_billdeposit_component__WEBPACK_IMPORTED_MODULE_7__["BilldepositComponent"],
                _billreversal_billreversal_component__WEBPACK_IMPORTED_MODULE_8__["BillreversalComponent"],
            ]
        })
    ], BillModule);
    return BillModule;
}());



/***/ }),

/***/ "./src/app/Portal/Bill/bill.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/Portal/Bill/bill.routing.ts ***!
  \*********************************************/
/*! exports provided: BillRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillRoutes", function() { return BillRoutes; });
/* harmony import */ var _billdeposit_billdeposit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billdeposit/billdeposit.component */ "./src/app/Portal/Bill/billdeposit/billdeposit.component.ts");
/* harmony import */ var _billreversal_billreversal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billreversal/billreversal.component */ "./src/app/Portal/Bill/billreversal/billreversal.component.ts");


var BillRoutes = [
    {
        path: '',
        children: [
            {
                path: 'billdeposit',
                component: _billdeposit_billdeposit_component__WEBPACK_IMPORTED_MODULE_0__["BilldepositComponent"],
                data: {
                    title: 'Bill Deposit',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Bill Deposit' }
                    ]
                }
            },
            {
                path: 'billreversal',
                component: _billreversal_billreversal_component__WEBPACK_IMPORTED_MODULE_1__["BillreversalComponent"],
                data: {
                    title: 'Bill Reversal',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Bill Reversal' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/Portal/Bill/billdeposit/billdeposit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Portal/Bill/billdeposit/billdeposit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bbpslogo{\r\n    width: 110px;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUG9ydGFsL0JpbGwvYmlsbGRlcG9zaXQvYmlsbGRlcG9zaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07QUFDViIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9CaWxsL2JpbGxkZXBvc2l0L2JpbGxkZXBvc2l0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmJwc2xvZ297XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Portal/Bill/billdeposit/billdeposit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Portal/Bill/billdeposit/billdeposit.component.ts ***!
  \******************************************************************/
/*! exports provided: BilldepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilldepositComponent", function() { return BilldepositComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BilldepositComponent = /** @class */ (function () {
    function BilldepositComponent(common, fb, ngxService) {
        this.common = common;
        this.fb = fb;
        this.ngxService = ngxService;
        this.lists = {};
        this.lists.BillCustInfo = {};
        this.lists.Providerlist = [];
        this.lists.Kvlist = [];
    }
    BilldepositComponent.prototype.ngOnInit = function () {
        this.Billform = this.fb.group({
            provider_Id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            kno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            cname: [''],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10)])],
            amount: [''],
            penalty: '',
            billamount: '',
            discount: '',
            userid: '',
            address: '',
            city: '',
        });
        this.Billform.controls["provider_Id"].setValue(localStorage.getItem("Provider_Id"));
    };
    BilldepositComponent.prototype.GetProviderlist = function () {
        var _this = this;
        this.common.PostMethod("GetfilterData", { file: "service_provider", name: "provider_type", value: "Electricity Payment", orderby: "asc" }).then(function (res) {
            _this.lists.Providerlist = res.Data;
        });
    };
    BilldepositComponent.prototype.ngAfterViewInit = function () {
        this.GetProviderlist();
    };
    BilldepositComponent.prototype.GetBillinfo = function () {
        var _this = this;
        this.ngxService.start();
        if (this.Billform.value.provider_Id == 'Electricity') {
            this.common.PostMethod("SearchProviderInfo", { number: this.Billform.value.kno }).then(function (res) {
                _this.ngxService.stopAll();
                var data = JSON.parse(res.Data);
                if (data.customername) {
                    data.name = data.customername;
                    data.amount = data.dueamount;
                    data.number = _this.Billform.value.kno;
                    _this.Billform.controls['kno'].disable();
                }
                if (data.name) {
                    _this.lists.BillCustInfo = data;
                }
                else if (data.error_code == 0) {
                    _this.lists.BillCustInfo.name = data.customer_name;
                    _this.lists.BillCustInfo.duedate = data.bill_due_date;
                    _this.lists.BillCustInfo.amount = data.outstanding_bill_amount;
                    _this.lists.BillCustInfo.number = _this.Billform.value.kno;
                    _this.Billform.controls['kno'].disable();
                }
                else if (data.data && data.statuscode != "ERR") {
                    _this.lists.BillCustInfo.name = data.data.CustomerName;
                    _this.lists.BillCustInfo.duedate = data.data.DueDate;
                    _this.lists.BillCustInfo.amount = data.data.DueAmount;
                    _this.lists.BillCustInfo.billdate = data.data.BillDate;
                    _this.lists.BillCustInfo.number = _this.Billform.value.kno;
                    _this.Billform.controls['kno'].disable();
                }
                else if (data.statuscode == "ERR") {
                    _this.common.ToastMessage("Fail", data.status);
                }
                else if (data.tel) {
                    _this.lists.BillCustInfo.name = data.records[0].CustomerName;
                    _this.lists.BillCustInfo.duedate = data.records[0].Duedate;
                    _this.lists.BillCustInfo.amount = data.records[0].Billamount;
                    _this.lists.BillCustInfo.billdate = data.records[0].Billdate;
                    _this.lists.BillCustInfo.number = _this.Billform.value.kno;
                    _this.Billform.controls['kno'].disable();
                }
                else {
                    _this.common.ToastMessage("Fail", data.message);
                }
            });
        }
        else {
            this.common.PostMethod("GetWaterBill", { number: this.Billform.value.kno }).then(function (res) {
                _this.ngxService.stopAll();
                var data = JSON.parse(res.Data);
                console.log(data);
                _this.lists.BillCustInfo.name = data.records[0].CustomerName;
                _this.lists.BillCustInfo.amount = data.records[0].Netamount;
                _this.lists.BillCustInfo.number = _this.Billform.value.kno;
                _this.lists.BillCustInfo.duedate = data.records[0].Duedate;
                _this.lists.BillCustInfo.billdate = data.records[0].Billdate;
                _this.Billform.controls['kno'].disable();
                // if (data.name) {
                //   this.lists.BillCustInfo = data;
                // } else if (data.error_code == 0) {
                //   this.lists.BillCustInfo.name = data.customer_name;
                //   this.lists.BillCustInfo.duedate = data.bill_due_date;
                //   this.lists.BillCustInfo.amount = data.outstanding_bill_amount;
                //   this.lists.BillCustInfo.number = this.Billform.value.kno;
                //   this.Billform.controls['kno'].disable();
                // } else if (data.data && data.statuscode != "ERR") {
                //   this.lists.BillCustInfo.name = data.data.CustomerName;
                //   this.lists.BillCustInfo.duedate = data.data.DueDate;
                //   this.lists.BillCustInfo.amount = data.data.DueAmount;
                //   this.lists.BillCustInfo.billdate = data.data.BillDate;
                //   this.lists.BillCustInfo.number = this.Billform.value.kno;
                //   this.Billform.controls['kno'].disable();
                // } else if (data.statuscode == "ERR") {
                //   this.common.ToastMessage("Fail", data.status);
                // } else if (data.tel) {
                //   this.lists.BillCustInfo.name = data.records[0].CustomerName;
                //   this.lists.BillCustInfo.duedate = data.records[0].DueDate;
                //   this.lists.BillCustInfo.amount = data.records[0].Billamount;
                //   this.lists.BillCustInfo.billdate = data.records[0].BillDate;
                //   this.lists.BillCustInfo.number = this.Billform.value.kno;
                //   this.Billform.controls['kno'].disable();
                // } else {
                //   this.common.ToastMessage("Fail", data.message);
                // }
            });
        }
    };
    BilldepositComponent.prototype.cancelbill = function () {
        this.Billform.controls['kno'].enable();
        this.lists.BillCustInfo = {};
    };
    BilldepositComponent.prototype.BillSubmit = function () {
        var _this = this;
        this.lists.RecieptNO = new Date().valueOf() + localStorage.getItem("UserId");
        this.Billform.value.discount = 0;
        this.Billform.value.penalty = 0;
        this.Billform.value.billamount = this.lists.BillCustInfo.amount;
        this.Billform.value.lastdate = this.lists.BillCustInfo.duedate;
        this.Billform.value.cname = this.lists.BillCustInfo.name;
        this.Billform.value.userid = window.localStorage.getItem("UserId");
        this.Billform.value.recieptno = this.lists.RecieptNO;
        this.Billform.value.kno = this.lists.BillCustInfo.number;
        if (this.lists.BillCustInfo.edit) {
            this.Billform.value.amounttype = 'Part Payment';
        }
        else {
            this.Billform.value.amounttype = 'Cash';
        }
        // console.log(this.Billform.value);
        this.common.PostMethod("BillDeposit", this.Billform.value).then(function (res) {
            if (res.Status == 1) {
                _this.print(_this.Billform.value);
                _this.common.ToastMessage("Success", res.Message);
                _this.lists.BillCustInfo = {};
                _this.Billform.controls['kno'].enable();
                _this.Billform.reset();
                _this.Billform.controls["provider_Id"].setValue(localStorage.getItem("Provider_Id"));
            }
            else {
                _this.common.ToastMessage("Fail", res.Message);
            }
        });
    };
    BilldepositComponent.prototype.print = function (ev) {
        ev.receipt = this.lists.RecieptNO;
        ev.datetime = new Date();
        this.common.ReceiptPrint(ev, '');
    };
    BilldepositComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] },
        { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }
    ]; };
    BilldepositComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billdeposit',
            template: __webpack_require__(/*! raw-loader!./billdeposit.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Bill/billdeposit/billdeposit.component.html"),
            styles: [__webpack_require__(/*! ./billdeposit.component.css */ "./src/app/Portal/Bill/billdeposit/billdeposit.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], BilldepositComponent);
    return BilldepositComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Bill/billreversal/billreversal.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Portal/Bill/billreversal/billreversal.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9CaWxsL2JpbGxyZXZlcnNhbC9iaWxscmV2ZXJzYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Portal/Bill/billreversal/billreversal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Portal/Bill/billreversal/billreversal.component.ts ***!
  \********************************************************************/
/*! exports provided: BillreversalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillreversalComponent", function() { return BillreversalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillreversalComponent = /** @class */ (function () {
    function BillreversalComponent() {
    }
    BillreversalComponent.prototype.ngOnInit = function () {
    };
    BillreversalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billreversal',
            template: __webpack_require__(/*! raw-loader!./billreversal.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Bill/billreversal/billreversal.component.html"),
            styles: [__webpack_require__(/*! ./billreversal.component.css */ "./src/app/Portal/Bill/billreversal/billreversal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BillreversalComponent);
    return BillreversalComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Pipes/limitto.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/Portal/Pipes/limitto.pipe.ts ***!
  \**********************************************/
/*! exports provided: LimittoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimittoPipe", function() { return LimittoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimittoPipe = /** @class */ (function () {
    function LimittoPipe() {
    }
    /* transform(value: any, ...args: any[]): any {
       return null;
     }*/
    LimittoPipe.prototype.transform = function (value, args) {
        if (args === undefined) {
            return value;
        }
        if (value.length > args) {
            return value.substring(0, args) + '....';
        }
        else {
            return value;
        }
    };
    LimittoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'limitto'
        })
    ], LimittoPipe);
    return LimittoPipe;
}());



/***/ }),

/***/ "./src/app/Portal/Pipes/menufilter.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/Portal/Pipes/menufilter.pipe.ts ***!
  \*************************************************/
/*! exports provided: MenufilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenufilterPipe", function() { return MenufilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenufilterPipe = /** @class */ (function () {
    function MenufilterPipe() {
    }
    MenufilterPipe.prototype.transform = function (value) {
        if (value == "Super Admin" || value == "Manager") {
            return;
        }
    };
    MenufilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'menufilter'
        })
    ], MenufilterPipe);
    return MenufilterPipe;
}());



/***/ }),

/***/ "./src/app/Portal/Pipes/monthtoyear.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/Portal/Pipes/monthtoyear.pipe.ts ***!
  \**************************************************/
/*! exports provided: MonthtoyearPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthtoyearPipe", function() { return MonthtoyearPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MonthtoyearPipe = /** @class */ (function () {
    function MonthtoyearPipe() {
    }
    MonthtoyearPipe.prototype.transform = function (value) {
        if (value > 0) {
            var x = value, months = x % 12, years = (x - months) / 12;
            if (value < 12) {
                return months + ' Months';
            }
            else {
                if (years > 0 && months > 0) {
                    return years + ' Year,  ' + months + ' Months';
                }
                else {
                    return years + ' Year';
                }
            }
        }
        else {
            return value;
        }
    };
    MonthtoyearPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'monthtoyear'
        })
    ], MonthtoyearPipe);
    return MonthtoyearPipe;
}());



/***/ }),

/***/ "./src/app/Portal/Pipes/pipe/pipe.module.ts":
/*!**************************************************!*\
  !*** ./src/app/Portal/Pipes/pipe/pipe.module.ts ***!
  \**************************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _menufilter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../menufilter.pipe */ "./src/app/Portal/Pipes/menufilter.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _selectfilter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectfilter.pipe */ "./src/app/Portal/Pipes/pipe/selectfilter.pipe.ts");
/* harmony import */ var _limitto_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../limitto.pipe */ "./src/app/Portal/Pipes/limitto.pipe.ts");
/* harmony import */ var _monthtoyear_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../monthtoyear.pipe */ "./src/app/Portal/Pipes/monthtoyear.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_menufilter_pipe__WEBPACK_IMPORTED_MODULE_0__["MenufilterPipe"], _selectfilter_pipe__WEBPACK_IMPORTED_MODULE_3__["SelectfilterPipe"], _limitto_pipe__WEBPACK_IMPORTED_MODULE_4__["LimittoPipe"], _monthtoyear_pipe__WEBPACK_IMPORTED_MODULE_5__["MonthtoyearPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_menufilter_pipe__WEBPACK_IMPORTED_MODULE_0__["MenufilterPipe"], _selectfilter_pipe__WEBPACK_IMPORTED_MODULE_3__["SelectfilterPipe"], _limitto_pipe__WEBPACK_IMPORTED_MODULE_4__["LimittoPipe"], _monthtoyear_pipe__WEBPACK_IMPORTED_MODULE_5__["MonthtoyearPipe"]]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/Portal/Pipes/pipe/selectfilter.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/Portal/Pipes/pipe/selectfilter.pipe.ts ***!
  \********************************************************/
/*! exports provided: SelectfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectfilterPipe", function() { return SelectfilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectfilterPipe = /** @class */ (function () {
    function SelectfilterPipe() {
    }
    SelectfilterPipe.prototype.transform = function (arr, searchText, fieldName) {
        if (!arr)
            return [];
        if (!searchText)
            return arr;
        searchText = searchText.toLowerCase();
        return arr.filter(function (it) {
            if (typeof it == 'string') {
                return it.toLowerCase().includes(searchText);
            }
            else if (typeof it == 'number') {
                return it.toString().toLowerCase().includes(searchText);
            }
            else {
                return it[fieldName].toLowerCase().includes(searchText);
            }
        });
    };
    SelectfilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'selectfilter'
        })
    ], SelectfilterPipe);
    return SelectfilterPipe;
}());



/***/ })

}]);
//# sourceMappingURL=Portal-Bill-bill-module-es5.js.map