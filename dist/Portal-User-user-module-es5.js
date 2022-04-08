(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Portal-User-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/User/createuser/createuser.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/User/createuser/createuser.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <!--start stepper-->\r\n        <mat-horizontal-stepper linear #stepper>\r\n            <!-- <mat-step [stepControl]=\"firstFormGroup\"> -->\r\n            <mat-step>\r\n                <form [formGroup]=\"firstFormGroup\">\r\n                    <ng-template matStepLabel>Basic Info</ng-template>\r\n                    <div fxLayout=\"row wrap\">\r\n                        \r\n                        <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"FirstName\" formControlName=\"firstname\" required>\r\n                            </mat-form-field>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"firtsForm.firstname.touched && (firtsForm.firstname.errors?.minlength || firtsForm.firstname.errors?.maxlength)\">\r\n                                First Name should be of Min. 3 characters, Max. 20 characters.</p>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"firtsForm.firstname.touched && firtsForm.firstname.errors?.pattern\">\r\n                                First Name contains only characters.</p>\r\n                        </div>\r\n                        <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Last Name\" formControlName=\"lastname\" required>\r\n                            </mat-form-field>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"firtsForm.lastname.touched && (firtsForm.lastname.errors?.minlength || firtsForm.lastname.errors?.maxlength)\">\r\n                                Last Name should be of Min. 3 characters, Max. 20 characters.</p>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"firtsForm.lastname.touched && firtsForm.lastname.errors?.pattern\">\r\n                                Last Name contains only characters.</p>\r\n                        </div>\r\n                        <div class=\"p-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <mat-label>User Type</mat-label>\r\n                                <mat-select formControlName=\"usertype\" >\r\n                                    <mat-option>--</mat-option>\r\n                                    <mat-option *ngFor=\"let a of usertypearray\" [value]=\"a.id\" required>\r\n                                        {{a.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>                          \r\n                        </div>\r\n                        <div class=\"p-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <span matPrefix>+91 &nbsp;</span>\r\n                                <input type=\"tel\" matInput placeholder=\"Mobile Number\" formControlName=\"mobnumber\"\r\n                                    required>\r\n                            </mat-form-field>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"firtsForm.mobnumber.touched && firtsForm.mobnumber.hasError('required')\">\r\n                                Mobile Number Cannot be blank.\r\n                            </p>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"firtsForm.mobnumber.touched && (firtsForm.mobnumber.errors?.minlength || firtsForm.mobnumber.errors?.maxlength)\">\r\n                                Mobile Number Should be of atleast 10 digit.\r\n                            </p>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"firtsForm.mobnumber.touched &&(firtsForm.mobnumber.errors?.pattern)\">\r\n                                Use Digits Only.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"p-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                            </mat-form-field>\r\n                            <p *ngIf=\"firtsForm.email.hasError('pattern') && firtsForm.email.touched\"\r\n                                class=\"text-danger m-t-0 font-16\">Please Enter Valid Email.</p>\r\n                        </div>                        \r\n                        <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Enter your password\" formControlName=\"password\"\r\n                                    [type]=\"hide ? 'password' : 'text'\">\r\n                                <button mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </button>\r\n                            </mat-form-field>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"firtsForm.password.touched && (firtsForm.password.errors?.required||firtsForm.password.errors?.minlength||firtsForm.password.errors?.maxlength||firtsForm.password.errors?.pattern)\">\r\n                                Password should be of Min. 8 characters,Max. 30 characters, which must contain at least\r\n                                one Special\r\n                                character, one Capital letter, one Small letter and one Numeric value.</p>\r\n                        </div>\r\n                        <div class=\"p-10\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Confirm your password\" [type]=\"hide1 ? 'password' : 'text'\"\r\n                                    formControlName=\"confirmPassword\">\r\n                                <button mat-icon-button matSuffix (click)=\"hide1 = !hide1\"\r\n                                    [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide1\">\r\n                                    <mat-icon>{{hide1 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </button>\r\n                            </mat-form-field>\r\n                            <p *ngIf=\"firtsForm.confirmPassword.errors?.equalTo && firtsForm.confirmPassword.touched\"\r\n                                class=\"text-danger m-t-0 font-16\">Passwords do not math.</p>\r\n                        </div>                        \r\n                    </div>\r\n                </form>\r\n                <div fxLayout=\"row wrap\">\r\n                    <div *ngIf=\"firstFormGroup.value.usertype > 2\" class=\"p-10\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                        <button mat-raised-button  [disabled]=\"!firstFormGroup.valid\" class=\"pull-right\" color=\"primary\" (click)=\"CreateUser()\"\r\n                        >Submit</button>\r\n                    </div>\r\n                    <div *ngIf=\"firstFormGroup.value.usertype < 3\" class=\"p-10\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        <button mat-raised-button color=\"warn\" class=\"pull-right\" matStepperNext>Next</button>\r\n                    </div>\r\n                </div>\r\n            </mat-step>\r\n            <mat-step *ngIf=\"firstFormGroup.value.usertype < 3\" [optional]=\"isOptional\">\r\n                <!-- <mat-step *ngIf=\"!usertype\" [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\"> -->\r\n                <form [formGroup]=\"secondFormGroup\">\r\n                    <ng-template matStepLabel>Fill out your address</ng-template>\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <label><b>Permanent Address</b></label>\r\n                        </div>\r\n                        <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <textarea matInput placeholder=\"Address\" formControlName=\"perAddress\"\r\n                                    required></textarea>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Select State\" (selectionChange)=\"GetCity()\"\r\n                                    formControlName=\"perState\" required>\r\n                                    <mat-option>--</mat-option>\r\n                                    <mat-option *ngFor=\"let state of statearray\" [value]=\"state.id\">{{state.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Select City\" formControlName=\"perCity\" required>\r\n                                    <mat-option>--</mat-option>\r\n                                    <mat-option *ngFor=\"let city of cityarray\" [value]=\"city.id\">{{city.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput type=\"number\" placeholder=\"Pincode\" formControlName=\"perPincode\"\r\n                                    required>\r\n                            </mat-form-field>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"secondForm.perPincode.touched && (secondForm.perPincode.errors?.maxLength || secondForm.perPincode.errors?.min || secondForm.perPincode.errors?.max)\">\r\n                                Pincode code Contains only 6 digits.</p>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                            <label><b>Correspondance Address</b></label>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                            <section>\r\n                                <mat-checkbox (change)=\"AddressCopy($event)\">Same as Permanent</mat-checkbox>\r\n                            </section>\r\n                        </div>\r\n                        <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <textarea matInput placeholder=\"Address\" formControlName=\"corresAddress\"\r\n                                    required></textarea>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Select State\" (selectionChange)=\"GetCityCors()\"\r\n                                    formControlName=\"corresState\" required>\r\n                                    <mat-option>--</mat-option>\r\n                                    <mat-option *ngFor=\"let state of statearray\" [value]=\"state.id\">{{state.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Select City\" formControlName=\"corresCity\" required>\r\n                                  <mat-option>--</mat-option>\r\n                                  <mat-option *ngFor=\"let city of cityarraycors\" [value]=\"city.id\">{{city.name}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"p-l-10 p-r-10\" fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"33.33\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput type=\"number\" placeholder=\"Pincode\" formControlName=\"corresPincode\"\r\n                                    required>\r\n                            </mat-form-field>\r\n                            <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"secondForm.corresPincode.touched && (secondForm.corresPincode.errors?.maxLength || secondForm.corresPincode.errors?.min || secondForm.corresPincode.errors?.max)\">\r\n                                Pincode code Contains only 6 digits.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n                        <button mat-raised-button class=\"pull-right\" color=\"warn\" (click)=\"checkaccountnolength();\"\r\n                            matStepperNext>Next</button>\r\n                    </div>\r\n                </form>\r\n            </mat-step>\r\n            <mat-step *ngIf=\"firstFormGroup.value.usertype < 3\" [optional]=\"isOptional\">\r\n                <form [formGroup]=\"thirdFormGroup\">\r\n                    <ng-template matStepLabel>Bank Information</ng-template>\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex.gt-sm=\"50\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput formControlName=\"bankname\" placeholder=\"Bank Name\" required>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"50\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput type=\"number\" formControlName=\"accountno\" placeholder=\"Account No\"\r\n                                    required>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"50\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <mat-label>Account Type</mat-label>\r\n                                <mat-select formControlName=\"accttype\">\r\n                                    <mat-option>--</mat-option>\r\n                                    <mat-option *ngFor=\"let a of AcctTypelist\" [value]=\"a.name\" required>\r\n                                        {{a.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"50\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput formControlName=\"ifsccode\" placeholder=\"IFSC Code\" required>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-0 p-b-10\">\r\n                        <div fxFlex.gt-sm=\"70\" class=\"p-r-10\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"30\" class=\"p-r-10 text-right\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"checkactivityaddupdatebtn\"\r\n                                [disabled]=\"!thirdFormGroup.valid\" (click)=\"Addbankdetail()\">Add Account</button>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"!checkactivityaddupdatebtn\"\r\n                                [disabled]=\"!thirdFormGroup.valid\" (click)=\"Updatebankdetail()\">Update Account</button>\r\n                            <button mat-raised-button class=\"m-l-10\" (click)=\"resetbanktab()\">Clear</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div fxLayout=\"row wrap\">\r\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        <table mat-table matSort [dataSource]=\"lists.bankdetailList\">\r\n                            <ng-container matColumnDef=\"BankName\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Bank Name </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.bankname}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"AccountNo\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Account No. </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.accountno}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"IFSCCode\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> IFSC Code </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.ifsccode}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"AccountType\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Account Type </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.accttype}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"Action\">\r\n                                <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\r\n                                    <a>\r\n                                        <mat-icon style=\"color:black\" (click)=\"BankdetailEdit(element)\"><i\r\n                                                class=\"fa fa-pencil\"></i>\r\n                                        </mat-icon>\r\n                                    </a>\r\n                                    <mat-icon class=\"m-l-10\" style=\"color:#E91E63\" (click)=\"Deletebankrecord(element)\">\r\n                                        <i class=\"fa fa-trash\"></i>\r\n                                    </mat-icon>\r\n                                </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                        </table>\r\n                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-10\">\r\n                    <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n                    <button mat-raised-button class=\"pull-right\" [disabled]=\"!checkaccountlistlenfth\" color=\"warn\"\r\n                        matStepperNext>Next</button>\r\n                </div>\r\n            </mat-step>\r\n            <mat-step *ngIf=\"firstFormGroup.value.usertype < 3\" [optional]=\"isOptional\">\r\n                <!-- <mat-step *ngIf=\"firstFormGroup.value.usertype < 3\" [stepControl]=\"fourthFormGroup\" [optional]=\"isOptional\"> -->\r\n                <form [formGroup]=\"fourthFormGroup\">\r\n                    <ng-template matStepLabel>KYC Information</ng-template>\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex.gt-sm=\"33.33\" *ngFor=\"let d of lists.Doctype\" class=\"p-r-10\" fxFlex.gt-xs=\"100\"\r\n                            fxFlex=\"100\">\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"{{d.docname}}\" [ngModelOptions]=\"{standalone: true}\"\r\n                                    [disabled]=\"d.doctype=='0'\" [(ngModel)]=\"d.value\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex.gt-sm=\"33.33\" *ngFor=\"let d of lists.Doctype;let i=index\" class=\"p-r-10 text-center\"\r\n                            fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <img style=\"width:250px;\" src=\"{{d.image?d.image:'./assets/images/noimage.png'}}\" />\r\n                            <input type=\"file\" (change)=\"onFileChange($event,i)\" />\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n                        <button mat-raised-button class=\"pull-right\" color=\"warn\" matStepperNext>Next</button>\r\n                    </div>\r\n                </form>\r\n            </mat-step>\r\n            <!-- <mat-step *ngIf=\"firstFormGroup.value.usertype < 3\" [stepControl]=\"fifthFormGroup\" [optional]=\"isOptional\"> -->\r\n            <mat-step *ngIf=\"firstFormGroup.value.usertype < 3\" [optional]=\"isOptional\">\r\n                <form [formGroup]=\"fifthFormGroup\">\r\n                    <ng-template matStepLabel>Subscription</ng-template>\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex.gt-sm=\"100\" class=\"m-t-20 m-b-20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <label [ngStyle]=\"{'color':plantypeval == true ? 'black' : 'Red' }\">Subscription\r\n                                Plan</label>\r\n                        </div>\r\n                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-radio-group formControlName=\"Subscriptionplan\">\r\n                                <div *ngFor=\"let Plan of SubPlans\">\r\n                                    <mat-radio-button class=\"m-l-20 m-t-5\" value=\"{{Plan.id}}\">\r\n                                        {{Plan.subscription_name}}<span>\r\n                                            (Validity: {{ Plan.validity | monthtoyear}})</span> </mat-radio-button><br>\r\n                                    <p class=\"font-16 m-l-20  m-t-5\">{{!Plan.detailview?(Plan.description |\r\n                                        limitto:100):Plan.description }}<a *ngIf=\"Plan.description.length > 100\"\r\n                                            style=\"margin-left: -15px;\" mat-button color=\"primary\"\r\n                                            (click)='Plan.detailview=!Plan.detailview'>{{!Plan.detailview?'Read\r\n                                            More':'Hide\r\n                                            More'}}</a></p>\r\n                                </div>\r\n                            </mat-radio-group>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n                        <button mat-raised-button class=\"pull-right\" color=\"primary\" (click)=\"CreateUser()\"\r\n                            [disabled]=\"!fifthFormGroup.valid\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </mat-step>\r\n        </mat-horizontal-stepper>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/User/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/User/profile/profile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-lg=\"100\" fxFlex.gt-md=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n        <mat-card class=\"text-center little-profile\">\r\n            <!-- <img mat-card-image src=\"assets/images/background/profile-bg.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n            <mat-card-content>\r\n                <div class=\"pro-img\" style=\"margin-top: 10px;\">\r\n                    <img src=\"assets/images/icon/people_Icon.png\" width=\"100\" alt=\"user\">\r\n                </div>\r\n                <h3 class=\"m-b-0\">{{lists.firstname}}&nbsp;&nbsp;{{lists.lastname}}</h3>\r\n                <mat-tab-group mat-align-tabs=\"center\">\r\n                    <mat-tab label=\"Basic Info\">\r\n                        <mat-card-content>\r\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                <table class=\"text-left\">\r\n                                    <tr>\r\n                                        <th width=\"50%\" class=\"customhr\">User Type:</th>\r\n                                        <td width=\"50%\" class=\"customhr\">{{lists.usertype}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"customhr\">First Name:</th>\r\n                                        <td class=\"customhr\">{{lists.firstname}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"customhr\">Last Name:</th>\r\n                                        <td class=\"customhr\">{{lists.lastname}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"customhr\">Mobile Number:</th>\r\n                                        <td class=\"customhr\">{{lists.mobnumber}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"customhr\">Email:</th>\r\n                                        <td class=\"customhr\">{{lists.email}}</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </mat-card-content>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Address Info\">\r\n                        <mat-card-content>\r\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                <table style=\"width: 100%; table-layout: auto;\">\r\n                                    <tr class=\"text-center\">\r\n                                        <th class=\"customhr\" colspan=\"2\">Permanent Address</th>\r\n                                        <th class=\"customhr\" colspan=\"2\">Correspondance Address</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"customAddresinfo\" > Address:</th>\r\n                                        <td class=\"customAddresinfo1 customhr\">{{lists.perAddress}}                                                                                   \r\n                                        </td>\r\n                                        <th class=\"customAddresinfo\"> Address:</th>\r\n                                        <td class=\"customAddresinfo1 customhr\">{{lists.corresAddress}}</td>\r\n                                    </tr>\r\n                                    <!-- <p>{{!lists.detailview?(lists.perAddress | limitto:50):lists.perAddress }}<a *ngIf=\"lists.perAddress.length > 50\"\r\n                                                    style=\"margin-left: -15px;\" mat-button color=\"primary\"\r\n                                                    (click)='lists.detailview=!lists.detailview'>{{!lists.detailview?'Read\r\n                                                    More':'Hide\r\n                                                    More'}}</a></p> --> \r\n                                    <tr>\r\n                                        <th class=\"customAddresinfo\"> State:</th>\r\n                                        <td class=\"customAddresinfo1 customhr\">{{lists.perState}}</td>\r\n                                        <th class=\"customAddresinfo\"> State:</th>\r\n                                        <td class=\"customAddresinfo1 customhr\">{{lists.corresState}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"customAddresinfo\"> City:</th>\r\n                                        <td class=\"customAddresinfo1 customhr\">{{lists.perCity}}</td>\r\n                                        <th class=\"customAddresinfo\"> City:</th>\r\n                                        <td class=\"customAddresinfo1 customhr\">{{lists.corresCity}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"customAddresinfo\"> Pincode:</th>\r\n                                        <td class=\"customAddresinfo1 customhr\">{{lists.perPincode}}</td>\r\n                                        <th class=\"customAddresinfo\"> Pincode:</th>\r\n                                        <td class=\"customAddresinfo1 customhr\">{{lists.corresPincode}}</td>\r\n                                    </tr>\r\n                                </table>                             \r\n                            </div>\r\n                        </mat-card-content>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Bank Info\">\r\n                        <mat-card-content>\r\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                <table mat-table matSort [dataSource]=\"lists.bankdetailList\" class=\"text-left\">\r\n                                    <ng-container matColumnDef=\"BankName\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Bank Name </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.bankname}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"AccountNo\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Account No. </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.accountno}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"IFSCCode\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> IFSC Code </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.ifsccode}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"AccountType\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Account Type </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.accttype}} </td>\r\n                                    </ng-container>\r\n                                    <!-- <ng-container matColumnDef=\"Action\">\r\n                                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\r\n                                                <td mat-cell *matCellDef=\"let element\"> {{element.Action}} </td>\r\n                                            </ng-container> -->\r\n                                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                                </table>\r\n                                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons>\r\n                                </mat-paginator>\r\n                            </div>\r\n\r\n\r\n                        </mat-card-content>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"KYC Info\">\r\n                        <mat-card-content>\r\n                            <!-- <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                <table mat-table matSort [dataSource]=\"lists.kycdetailList\" class=\"text-left\">\r\n                                    <ng-container matColumnDef=\"Dcname\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Document No. </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.Dacname}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"DocNo\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Document No. </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.value}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"DocImage\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Image </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"><a target=\"_blank\" href=\"{{element.image}}\">Open</a></td>                                        \r\n                                    </ng-container>                                  \r\n                                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                                </table>\r\n                                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons>\r\n                                </mat-paginator>\r\n                            </div> -->\r\n                            <!-- <div fxLayout=\"row wrap\" style=\"margin-top: -25px;\">\r\n                                <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                    <div fxLayout=\"row wrap\" >\r\n                                        <div fxFlex.gt-sm=\"100\" class=\"text-center\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                            <h3><b>{{lists.Doctype[0].docname}}</b></h3>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div fxLayout=\"row wrap\">\r\n                                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                            <b>No&nbsp;&nbsp;:&nbsp;&nbsp;</b><label>{{lists.Doctype[0].value}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div fxLayout=\"row wrap\">\r\n                                        <div fxFlex.gt-sm=\"100\" class=\"text-center m-t-30\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                            <img src={{lists.Doctype[0].image}} width=\"400\" alt={{lists.Doctype[0].docname}}>\r\n                                            </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                    <div fxLayout=\"row wrap\" >\r\n                                        <div fxFlex.gt-sm=\"100\" class=\"text-center\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                            <h3><b>{{lists.Doctype[1].docname}}</b></h3>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div fxLayout=\"row wrap\">\r\n                                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                            <b>No&nbsp;&nbsp;:&nbsp;&nbsp;</b><label>{{lists.Doctype[1].value}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div fxLayout=\"row wrap\">\r\n                                        <div fxFlex.gt-sm=\"100\" class=\"text-center m-t-30\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                            <img src={{lists.Doctype[1].image}} width=\"400\" alt={{lists.Doctype[1].docname}}>\r\n                                            </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                    <div fxLayout=\"row wrap\" >\r\n                                        <div fxFlex.gt-sm=\"100\" class=\"text-center\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                            <h3><b>{{lists.Doctype[2].docname}}</b></h3>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div fxLayout=\"row wrap\" style=\"margin-top: 22px;\">\r\n                                        <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                            <b></b><label></label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div fxLayout=\"row wrap\">\r\n                                        <div fxFlex.gt-sm=\"100\" class=\"text-center m-t-30\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                            <img src={{lists.Doctype[2].image}} width=\"400\" alt={{lists.Doctype[2].docname}}>\r\n                                            </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n\r\n                        </mat-card-content>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Subscription Info\">\r\n                        <mat-card-content>\r\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                <table class=\"text-left\">\r\n                                    <tr>\r\n                                        <th width=\"50%\" class=\"customhr\">Subscription Plan:</th>\r\n                                        <td width=\"50%\" class=\"customhr\">{{lists.subscriptionplanid}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th width=\"50%\" class=\"customhr\">Plan Start Date:</th>\r\n                                        <td width=\"50%\" class=\"customhr\">{{lists.subscriptionplanstartdate}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th width=\"50%\" class=\"customhr\">Plan End Date:</th>\r\n                                        <td width=\"50%\" class=\"customhr\">{{lists.subscriptionplanenddate}}</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </mat-card-content>\r\n                    </mat-tab>                   \r\n                </mat-tab-group>\r\n\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/User/userlist/userlist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/User/userlist/userlist.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxFlex.gt-sm=\"100%\" fxFlex=\"100\" class=\"m-0\">\r\n    <mat-card-content >\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <div fxLayout=\"row wrap\">\r\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        <mat-form-field>\r\n                            <input matInput (keyup)=\"comman.TableFilter(newUserlist,$event.target.value)\"\r\n                                placeholder=\"Search\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        <table mat-table matSort [dataSource]=\"newUserlist\">                            \r\n                            <ng-container matColumnDef=\"id\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> User Id </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"user_type\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> User Type </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.user_type}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"name\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"email\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"mobile\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact Number </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.mobile}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"profile_image\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Profile Image </th>\r\n                                <td mat-cell *matCellDef=\"let element\"><a target=\"_blank\" href=\"{{element.profile_image}}\">Open</a></td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"fcm_id\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Fcm Id </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.fcm_id}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"subscription_id\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Subscription Plan </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.subscription_id}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"expire_date\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Expire date </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.subscription_info.expire_date}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"crated_at\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Crated Date </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.crated_at}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"last_login_at\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Login</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.last_login_at}} </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"updatedAt\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Updated Date </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.updatedAt}} </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"status\">\r\n                                <th mat-header-cell *matHeaderCellDef>Status</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.status?'Active':'DeActive'}} </td>\r\n                            </ng-container>                           \r\n                            <ng-container matColumnDef=\"action\">\r\n                                <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\r\n                                    <a>\r\n                                        <mat-icon style=\"color:#E91E63\" (click)=\"UserProfileEdit(element)\">edit\r\n                                        </mat-icon>\r\n                                    </a>\r\n                                    <a class=\"m-l-10\">\r\n                                        <mat-icon style=\"color:#E91E63\" (click)=\"UserAllDetail(element)\"><i style=\"color: cornflowerblue;\" class=\"fa fa-info-circle\"></i>\r\n                                        </mat-icon>\r\n                                    </a>\r\n                                </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                        </table>\r\n                        <mat-paginator [pageSizeOptions]=\"[10, 20,30,50,100]\" showFirstLastButtons>\r\n                        </mat-paginator>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        </mat-card-content>\r\n    </mat-card >\r\n"

/***/ }),

/***/ "./src/app/Portal/User/createuser/createuser.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Portal/User/createuser/createuser.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5{\r\n    margin-top: 5px !important;\r\n    margin-bottom: 5px !important;\r\n    border-bottom: 1px solid !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUG9ydGFsL1VzZXIvY3JlYXRldXNlci9jcmVhdGV1c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9Vc2VyL2NyZWF0ZXVzZXIvY3JlYXRldXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDV7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Portal/User/createuser/createuser.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Portal/User/createuser/createuser.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserComponent", function() { return CreateuserComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]));
var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].equalTo(password));
var Todatdate = new Date();
var CreateuserComponent = /** @class */ (function () {
    function CreateuserComponent(common, fb) {
        this.common = common;
        this.fb = fb;
        this.lists = {};
        this.Userlist = [];
        this.bankdetailList = [];
        this.bankdetailListarray = [];
        this.bankdetail = {};
        this.KYCdata = [];
        this.isLinear = false;
        this.isOptional = false;
        this.isEditable = false;
        this.hide = true;
        this.hide1 = true;
        this.AcctTypelist = [{ name: "Saving" }, { name: "Current" }];
        this.submitcreateuserformdata = [];
        this.checkaccountlistlenfth = false;
        this.checkactivityaddupdatebtn = true;
        this.copyofaccountname = '';
        this.copyofaccountnumber = '';
        this.usertypearray = [];
        this.statearray = [];
        this.cityarray = [];
        this.cityarraycors = [];
        this.statevalue = '';
        this.SubPlans = [];
        this.newUserlist = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        // this.lists.UserTypelist = [{ name: "Admin" }, { name: "Agent" }, { name: "Depositor" }, { name: "Manager" }];
        // this.lists.AcctTypelist = [{ name: "Saving" }, { name: "Current" }];
        this.lists.Doctype = [];
        // if (localStorage.getItem("UserType") == 'Admin') {
        //   this.lists.usertype = "Agent";
        // }
        // this.GetUserList();
        // this.GetCitylist();
        //this.GetDocList();
    }
    CreateuserComponent.prototype.ngOnInit = function () {
        this.lists.bankdetailList = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.bankdetailListarray);
        this.lists.displayedColumns = ['BankName', 'AccountNo', 'IFSCCode', 'AccountType', 'Action'];
        this.lists.bankdetailList.paginator = this.paginator;
        this.lists.bankdetailList.sort = this.sort;
        // this.lists.SelectedIndex = 0;
        // this.lists.displayedColumns = ['action', 'name', 'Branchname', 'mobile', 'usertype', 'PresentAmount', 'lastlogin', 'status', 'login'];
        // this.newUserlist.paginator = this.paginator;
        // this.newUserlist.sort = this.sort;
        /*  this.userform = this.fb.group({
            aId: new FormControl(localStorage.getItem("UserId"), Validators.required),
            name: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            mobile: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])),
            branch: new FormControl('', Validators.required),
            usertype: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            confirmpassword: new FormControl(),
            amount: new FormControl(0),
            bankname: new FormControl(''),
            accttype: new FormControl(''),
            ifsccode: new FormControl(''),
            account: new FormControl(''),
            KYC: new FormControl([]),
            id: new FormControl(0)
          }, this.checkPasswords);*/
        this.firstFormGroup = this.fb.group({
            usertype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-zA-Z ]+$')]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-zA-Z ]+$')]],
            mobnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: password,
            confirmPassword: confirmPassword,
        });
        this.secondFormGroup = this.fb.group({
            perAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            perState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            perCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            perPincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(100000), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(999999)]],
            corresAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            corresState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            corresCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            corresPincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(100000), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(999999)]],
        });
        this.thirdFormGroup = this.fb.group({
            bankname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-zA-Z ]+$')]],
            accttype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            ifsccode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            accountno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
        this.fourthFormGroup = this.fb.group({
            KYC: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]([]),
        });
        this.fifthFormGroup = this.fb.group({
            Subscriptionplan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            Planstartdate: Todatdate,
        });
        this.GetUserTypeMaster();
        this.GetSubscriptionMaster();
        this.GetStates();
    };
    Object.defineProperty(CreateuserComponent.prototype, "firtsForm", {
        get: function () {
            return this.firstFormGroup.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateuserComponent.prototype, "secondForm", {
        get: function () {
            return this.secondFormGroup.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateuserComponent.prototype, "fifthForm", {
        get: function () {
            return this.fifthFormGroup.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateuserComponent.prototype.AddressCopy = function (e) {
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
    };
    CreateuserComponent.prototype.GetUserTypeMaster = function () {
        var _this = this;
        this.common.GetMethod('master/getmaster?master=role').then(function (res) {
            if (res.status == 1) {
                _this.usertypearray = res.data;
            }
        }).catch(function (y) {
            _this.common.ToastMessage("Error !", y.error.message);
        });
    };
    CreateuserComponent.prototype.GetSubscriptionMaster = function () {
        var _this = this;
        this.common.GetMethod('master/getmaster?master=subscriptionmaster').then(function (res) {
            if (res.status == 1) {
                _this.SubPlans = res.data;
            }
        }).catch(function (y) {
            _this.common.ToastMessage("Error !", y.error.message);
        });
    };
    CreateuserComponent.prototype.GetStates = function () {
        var _this = this;
        this.common.PostMethod("common/getstates", { id: 101 }).then(function (res) {
            if (res.status == 1) {
                _this.statearray = res.data;
            }
        }).catch(function (y) {
            _this.common.ToastMessage("Error !", y.error.message);
        });
    };
    CreateuserComponent.prototype.GetCity = function () {
        var _this = this;
        var stateid = this.secondFormGroup.value.perState;
        this.common.PostMethod("common/getcities", { id: stateid }).then(function (res) {
            if (res.status == 1) {
                _this.cityarray = res.data;
                _this.cityarraycors = res.data;
            }
        }).catch(function (y) {
            _this.common.ToastMessage("Error !", y.error.message);
        });
    };
    CreateuserComponent.prototype.GetCityCors = function () {
        var _this = this;
        var stateid = this.secondFormGroup.value.corresState;
        this.common.PostMethod("common/getcities", { id: stateid }).then(function (res) {
            if (res.status == 1) {
                _this.cityarraycors = res.data;
            }
        }).catch(function (y) {
            _this.common.ToastMessage("Error !", y.error.message);
        });
    };
    CreateuserComponent.prototype.CreateUser = function () {
        var _this = this;
        var submitdata = {};
        submitdata.user_type = this.firstFormGroup.value.usertype,
            submitdata.name = this.firstFormGroup.value.firstname + ' ' + this.firstFormGroup.value.lastname,
            submitdata.mobile = this.firstFormGroup.value.mobnumber,
            submitdata.email = this.firstFormGroup.value.email,
            submitdata.password = this.firstFormGroup.value.confirmPassword,
            submitdata.fcm_id = localStorage.getItem("FCMID");
        if (this.firstFormGroup.value.usertype < 3) {
            submitdata.address = [
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
                submitdata.bankdetails = this.bankdetailListarray,
                submitdata.kycdetails = this.lists.Doctype,
                submitdata.subscription_id = parseInt(this.fifthFormGroup.value.Subscriptionplan);
        }
        else {
            submitdata.subscription_id = 1;
        }
        this.common.PostMethod("user/addnewuser", submitdata).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage("Sucess", res.Message);
            }
            else {
                _this.common.ToastMessage("Info", res.Message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage("Error !", y.error.message);
        });
    };
    ///////////////////////---------------api work end------------------//////////////////////////////////////////////
    // bankdetailarraylist: accdetail[] = [{"BankName": "AN","AccountNo": 123,"IFSCCode": "helo123","AccountType":"saving"},
    // ];
    // checkpasswordstrength(event){
    //   this.passworderrors = ''
    //   let val = this.firstFormGroup.value.password;
    //   let pattern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    //   if (pattern.test(val)) {
    //    return this.passworderrors = '';
    //     } else{
    //      return this.passworderrors = 'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:.';
    //     }
    // }
    CreateuserComponent.prototype.checkaccountnolength = function () {
        if (this.bankdetailListarray.length > 0) {
            this.checkaccountlistlenfth = true;
        }
        else {
            this.checkaccountlistlenfth = false;
        }
    };
    CreateuserComponent.prototype.Addbankdetail = function () {
        this.checkactivityaddupdatebtn = true;
        this.bankdetailListarray.push(this.thirdFormGroup.value);
        this.lists.bankdetailList = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.bankdetailListarray);
        this.lists.displayedColumns = ['BankName', 'AccountNo', 'IFSCCode', 'AccountType', 'Action'];
        this.lists.bankdetailList.paginator = this.paginator;
        this.lists.bankdetailList.sort = this.sort;
        this.resetbanktab();
        this.checkaccountnolength();
        this.common.ToastMessage("Success", "Bank Account Added Successfully");
    };
    CreateuserComponent.prototype.resetbanktab = function () {
        this.checkactivityaddupdatebtn = true;
        this.thirdFormGroup.controls['bankname'].setValue('');
        this.thirdFormGroup.controls['accttype'].setValue('');
        this.thirdFormGroup.controls['ifsccode'].setValue('');
        this.thirdFormGroup.controls['accountno'].setValue('');
    };
    CreateuserComponent.prototype.BankdetailEdit = function (ev) {
        this.checkactivityaddupdatebtn = false;
        if (ev) {
            this.thirdFormGroup.controls["bankname"].setValue(ev.bankname);
            this.thirdFormGroup.controls["accttype"].setValue(ev.accttype);
            this.thirdFormGroup.controls["ifsccode"].setValue(ev.ifsccode);
            this.thirdFormGroup.controls["accountno"].setValue(ev.accountno);
            this.copyofaccountname = ev.bankname;
            this.copyofaccountnumber = ev.accountno;
        }
    };
    CreateuserComponent.prototype.Deletebankrecord = function (ele) {
        ele.bankname;
        ele.accountno;
        var arr = this.bankdetailListarray;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].bankname === ele.bankname && arr[i].accountno === ele.accountno) {
                var spliced = arr.splice(i, 1);
                this.bankdetailListarray = arr;
                this.common.ToastMessage("Success", "Bank Account Delete Successfully");
                this.checkaccountnolength();
            }
        }
        this.lists.bankdetailList = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.bankdetailListarray);
        this.lists.displayedColumns = ['BankName', 'AccountNo', 'IFSCCode', 'AccountType', 'Action'];
        this.lists.bankdetailList.paginator = this.paginator;
        this.lists.bankdetailList.sort = this.sort;
    };
    CreateuserComponent.prototype.Updatebankdetail = function () {
        var _this = this;
        var arrvalue = this.bankdetailListarray;
        var filtervalue = arrvalue.filter(function (x) { return x.bankname == _this.copyofaccountname && x.accountno == _this.copyofaccountnumber; });
        if (filtervalue) {
            filtervalue[0].bankname = this.thirdFormGroup.value.bankname;
            filtervalue[0].accountno = this.thirdFormGroup.value.accountno;
            filtervalue[0].accttype = this.thirdFormGroup.value.accttype;
            filtervalue[0].ifsccode = this.thirdFormGroup.value.ifsccode;
            this.common.ToastMessage("Success", "Bank Account Update Successfully");
            this.resetbanktab();
            this.checkactivityaddupdatebtn = true;
        }
        else {
            this.common.ToastMessage("Fail", "Bank Account Update Fail");
            this.checkactivityaddupdatebtn = false;
        }
    };
    //-------------------------------- create user end----------------------------------//
    /* checkPasswords(group: FormGroup) { // here we have the 'passwords' group
        let pass = group.get('password').value;
        let confirmPass = group.get('confirmpassword').value;
        return pass === confirmPass ? null : { notSame: true }
      }*/
    // GetUserList() {
    //   let UserId: any = 0;
    //   if (localStorage.getItem("UserType") != "Super Admin") {
    //     UserId = localStorage.getItem("UserId");
    //   }
    //   if (this.lists.adminid) {
    //     UserId = this.lists.adminid;
    //   }
    //   this.common.GetMethod("GetUserInfo?userid=" + UserId).then((res: any) => {
    //     this.Userlist = res.Data;
    //     this.Userlist.forEach(element => {
    //       element.adminid = parseInt(element.adminid);
    //       if (element.status == 0) {
    //         element.status = false;
    //       }
    //       if (element.status == 1) {
    //         element.status = true;
    //       }
    //       if (element.currentstatus == 0) {
    //         element.currentstatus = false;
    //       }
    //       if (element.currentstatus == 1) {
    //         element.currentstatus = true;
    //       }
    //     });
    //     this.newUserlist = new MatTableDataSource(this.Userlist);
    //     this.newUserlist.paginator = this.paginator;
    //     this.newUserlist.sort = this.sort;
    //   });
    // }
    // GetBranchlist(ev) {
    //   let branch = [];
    //   this.common.PostMethod("GetfilterData", { file: "branch", name: "name", value: ev.value }).then((res: any) => {
    //     if (localStorage.getItem('UserType') == 'Admin') {
    //       res.Data.forEach(element => {
    //         if (element.adminid == localStorage.getItem("UserId")) {
    //           branch.push(element);
    //         }
    //       });
    //       this.lists.branchlist = branch;
    //     } else {
    //       this.lists.branchlist = res.Data;
    //     }
    //   });
    // }
    // GetCitylist() {
    //   this.common.GetMethod('GetCitites').then((res: any) => {
    //     this.lists.Citylist = res.Data;
    //   });
    // }
    CreateuserComponent.prototype.GetDocList = function () {
        var _this = this;
        this.common.GetMethod("GetDatatable?Name=kycdoc").then(function (res) {
            _this.lists.Doctype = res.Data;
        });
    };
    CreateuserComponent.prototype.onFileChange = function (ev, type) {
        var _this = this;
        var filetype = ev.target.files[0]['type'];
        if (filetype == 'image/png' || filetype == 'image/jpg' || filetype == 'image/jpeg') {
            this.lists.Doctype[type].image = ev.target.value;
            this.common.fileUpload(ev.target.files, function (res) {
                _this.lists.Doctype[type].image = _this.common.Url + "Files/" + res.filename;
            });
        }
        else {
            this.common.ToastMessage("Fail", "Please Select Only Image Files png,jpg,jpeg Extension.");
        }
    };
    CreateuserComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CreateuserComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CreateuserComponent.prototype, "sort", void 0);
    CreateuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createuser',
            template: __webpack_require__(/*! raw-loader!./createuser.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/User/createuser/createuser.component.html"),
            styles: [__webpack_require__(/*! ./createuser.component.css */ "./src/app/Portal/User/createuser/createuser.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], CreateuserComponent);
    return CreateuserComponent;
}());



/***/ }),

/***/ "./src/app/Portal/User/profile/profile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/Portal/User/profile/profile.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customhr {\r\n    border-bottom: 2px solid rgba(120, 130, 140, 0.13);\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    padding-left: 1px;\r\n    /* width: 50%; */\r\n}\r\n.customAddresinfo {\r\n    border-bottom: 2px solid rgba(120, 130, 140, 0.13);\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    padding-left: 1px;\r\n    width: 20%;\r\n    text-align: left;\r\n}\r\n.customAddresinfo1 {\r\n    border-bottom: 2px solid rgba(120, 130, 140, 0.13);\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    padding-left: 1px;\r\n    width: 30%;\r\n    text-align: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUG9ydGFsL1VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrREFBa0Q7SUFDbEQsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrREFBa0Q7SUFDbEQsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0RBQWtEO0lBQ2xELG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9Qb3J0YWwvVXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21ociB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgxMjAsIDEzMCwgMTQwLCAwLjEzKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgIC8qIHdpZHRoOiA1MCU7ICovXHJcbn1cclxuLmN1c3RvbUFkZHJlc2luZm8ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMTIwLCAxMzAsIDE0MCwgMC4xMyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uY3VzdG9tQWRkcmVzaW5mbzEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMTIwLCAxMzAsIDE0MCwgMC4xMyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Portal/User/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Portal/User/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(common, fb) {
        this.common = common;
        this.fb = fb;
        this.lists = {};
        this.bankdetailListarray = [];
        this.doctype = [];
        this.userdetailarray = [];
        this.newUserlist = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.userdetail();
    };
    ProfileComponent.prototype.shortformatDate = function (date) {
        if (date) {
            var day = date.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            var month = date.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            var year = date.getFullYear();
            return day + "/" + month + "/" + year;
        }
        else {
            return '';
        }
    };
    ProfileComponent.prototype.checkplanvalidity = function (pstartDate, plantype) {
        if (pstartDate && plantype) {
            var days = 0;
            if (plantype == 'Yearlyplan') {
                days = 365;
            }
            else if (plantype == 'sixmonthplan') {
                days = 181;
            }
            var finaldate = new Date(pstartDate.getTime() + days * 24 * 60 * 60 * 1000);
            return finaldate;
        }
        else {
            return '';
        }
    };
    ProfileComponent.prototype.checkplandetail = function (plantype) {
        if (plantype == 'Yearlyplan') {
            return 'Basic Yearly Plan(Rs. 1000/-)';
        }
        else if (plantype == 'sixmonthplan') {
            return '6 Month Plan(Rs. 500/-)';
        }
    };
    ProfileComponent.prototype.userdetail = function () {
        var data = JSON.parse(localStorage.getItem("UserProfile"));
        this.lists.usertype = data.user_type;
        var res = data.name.split(" ");
        this.lists.firstname = res[0];
        this.lists.lastname = res[1];
        this.lists.email = data.email;
        this.lists.mobnumber = data.mobile;
        //permanent address
        if (data.user_address.length > 0) {
            this.lists.perAddress = data.user_address[0].address;
            this.lists.perState = data.user_address[0].state_id;
            this.lists.perCity = data.user_address[0].city_id;
            this.lists.perPincode = data.user_address[0].pincode;
        }
        //corresponding address
        if (data.user_address.length > 0) {
            this.lists.corresAddress = data.user_address[0].address;
            this.lists.corresState = data.user_address[0].state_id;
            this.lists.corresCity = data.user_address[0].city_id;
            this.lists.corresPincode = data.user_address[0].pincode;
        }
        this.lists.bankdetailList = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.lists.displayedColumns = ['BankName', 'AccountNo', 'IFSCCode', 'AccountType',];
        this.lists.bankdetailList.paginator = this.paginator;
        this.lists.bankdetailList.sort = this.sort;
        // subscription detail
        this.lists.subscriptionplanid = data.subscription_info.id;
        var psdate = data.subscription_info.subscription_date.split("T");
        this.lists.subscriptionplanstartdate = psdate[0];
        var esdate = data.subscription_info.expire_date.split("T");
        this.lists.subscriptionplanenddate = esdate[0];
        //  this.lists.kycdetailList = new MatTableDataSource();
        // this.lists.displayedColumns = ['DcName','DocNo','DocImage',];
        // this.lists.kycdetailList.paginator = this.paginator;
        // this.lists.kycdetailList.sort = this.sort;
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ProfileComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ProfileComponent.prototype, "sort", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/User/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/Portal/User/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/Portal/User/user.module.ts":
/*!********************************************!*\
  !*** ./src/app/Portal/User/user.module.ts ***!
  \********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.routing */ "./src/app/Portal/User/user.routing.ts");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/Portal/User/createuser/createuser.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/Portal/User/userlist/userlist.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/Portal/User/profile/profile.component.ts");
/* harmony import */ var _Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Pipes/pipe/pipe.module */ "./src/app/Portal/Pipes/pipe/pipe.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_5__["UserRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _Pipes_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__["PipeModule"]
            ],
            declarations: [
                _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_7__["CreateuserComponent"],
                _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__["UserlistComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/Portal/User/user.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/Portal/User/user.routing.ts ***!
  \*********************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/Portal/User/createuser/createuser.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/Portal/User/profile/profile.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/Portal/User/userlist/userlist.component.ts");



var UserRoutes = [
    {
        path: '',
        children: [
            {
                path: 'createuser',
                component: _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_0__["CreateuserComponent"],
                data: {
                    title: 'Create New User',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Create New User' }
                    ]
                }
            },
            {
                path: 'userlist',
                component: _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_2__["UserlistComponent"],
                data: {
                    title: 'User List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'User List' }
                    ]
                }
            },
            {
                path: 'userprofile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"],
                data: {
                    title: 'User Profile',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'User Profile' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/Portal/User/userlist/userlist.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Portal/User/userlist/userlist.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9Vc2VyL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Portal/User/userlist/userlist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Portal/User/userlist/userlist.component.ts ***!
  \************************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _Dailogbox_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Dailogbox/userdetail/userdetail.component */ "./src/app/Portal/Dailogbox/userdetail/userdetail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(common, dialog) {
        this.common = common;
        this.dialog = dialog;
        this.lists = {};
        this.Userlist = [];
        this.usertypelistarray = [];
        this.subscriptionplanarray = [];
        this.userviewdata = {};
        this.isLinear = false;
        this.newUserlist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.Doctype = [];
        if (localStorage.getItem("UserType") == 'Admin') {
            this.lists.usertype = "Agent";
        }
        // this.GetUsertype();
        // this.GetSubscriptionpan();
        this.GetUserList();
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.lists.SelectedIndex = 0;
        //this.lists.displayedColumns = ['action', 'name', 'Branchname', 'mobile', 'usertype', 'PresentAmount', 'lastlogin', 'status', 'login'];
        this.lists.displayedColumns = ['id', 'user_type', 'name', 'email', 'mobile', 'profile_image', 'fcm_id', 'subscription_id', 'expire_date', 'crated_at', 'last_login_at', 'updatedAt', 'status', 'action'];
        this.newUserlist.paginator = this.paginator;
        this.newUserlist.sort = this.sort;
    };
    UserlistComponent.prototype.GetUserList = function () {
        var _this = this;
        this.common.PostMethod("user/getuserlist", { where: {}, order: [['id', 'desc']], limit: 100,
        }).then(function (res) {
            _this.newUserlist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.data);
        });
    };
    UserlistComponent.prototype.UserProfileEdit = function (ev) {
    };
    UserlistComponent.prototype.UserAllDetail = function (ev) {
        var dailog = this.common.dialog.open(_Dailogbox_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_4__["UserdetailComponent"], { data: { status: true, ev: ev } });
        dailog.afterClosed().subscribe(function (data) {
        });
    };
    UserlistComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserlistComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserlistComponent.prototype, "sort", void 0);
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! raw-loader!./userlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/User/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.css */ "./src/app/Portal/User/userlist/userlist.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Portal-User-user-module-es5.js.map