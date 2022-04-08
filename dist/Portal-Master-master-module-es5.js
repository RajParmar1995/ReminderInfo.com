(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Portal-Master-master-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/areamaster/areamaster.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Master/areamaster/areamaster.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"areaform\" (ngSubmit)=\"onSubmit()\">\r\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\r\n                <div fxFlex.gt-sm=\"80\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Area Name\" type=\"textarea\" formControlName=\"AreaName\" required>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <mat-label>Status</mat-label>\r\n                            <mat-select formControlName=\"Status\" placeholder=\"Select Status\" required>\r\n                                <mat-option value=\"1\">Active </mat-option>\r\n                                <mat-option value=\"0\">DeActive </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-center m-t-30\">\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid == 0\" mat-raised-button color=\"primary\" type=\"submit\"\r\n                        (click)=\"CreateAreaMaster()\" [disabled]=\"!areaform.valid\">Save</button>\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid > 0\" mat-raised-button color=\"primary\"\r\n                        (click)=\"UpdateAreaMaster()\" [disabled]=\"!areaform.valid\">Update</button>\r\n                    <button mat-raised-button color=\"default\" (click)=\"ResetAreaMaster()\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <mat-form-field>\r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <table mat-table matSort [dataSource]=\"lists.Arealist\">\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Area Name </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"status\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status?'Active':'DeActive'}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\r\n                            <a>\r\n                                <mat-icon style=\"color:black\" (click)=\"EditAreaMaster(element)\"><i\r\n                                        class=\"fa fa-pencil\"></i>\r\n                                </mat-icon>\r\n                            </a>\r\n                            <mat-icon class=\"m-l-10\" style=\"color:#E91E63\" (click)=\"DeleteConfirmation(element)\"><i\r\n                                    class=\"fa fa-trash\"></i>\r\n                            </mat-icon>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                </table>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\r\n            </div>\r\n        </div>\r\n\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/complainmaster/complainmaster.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Master/complainmaster/complainmaster.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"complainmasterform\" (ngSubmit)=\"onSubmit()\">\r\n        <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\r\n                    <div fxFlex.gt-sm=\"80\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                        \r\n                            <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                                <mat-form-field>\r\n                                    <input matInput placeholder=\"Complaint Type\" type=\"textarea\" formControlName=\"ComplaintType\" required>\r\n                                </mat-form-field>\r\n                                <p class=\"text-danger m-t-0 font-16\"\r\n                                *ngIf=\"copmplainForm.ComplaintType.touched && copmplainForm.ComplaintType.errors?.pattern\">\r\n                                Complaint Type contains only characters.</p>\r\n                            </div>\r\n                           \r\n                            <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                                <mat-form-field>\r\n                                    <mat-label>Status</mat-label>\r\n                                    <mat-select formControlName=\"Status\" required>\r\n                                        <mat-option value=\"1\">Active </mat-option>\r\n                                        <mat-option value=\"0\">DeActive </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                          </div>\r\n                          <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-center m-t-30\">\r\n                            <button class=\"m-r-20\" *ngIf=\"updateid == 0\" mat-raised-button color=\"primary\" (click)=\"CreateComplainMaster()\" [disabled]=\"!complainmasterform.valid\">Save</button>\r\n                            <button class=\"m-r-20\" *ngIf=\"updateid > 0\" mat-raised-button color=\"primary\" (click)=\"UpdateComplainMaster()\" [disabled]=\"!complainmasterform.valid\">Update</button>\r\n                            <button mat-raised-button color=\"default\" (click)=\"resetComplainMaster()\">Clear</button>\r\n                        </div>\r\n                        \r\n                </div>\r\n                </form>\r\n        \r\n                <div fxLayout=\"row wrap\">\r\n                        <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                <mat-form-field>\r\n                                    <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                                <table mat-table matSort [dataSource]=\"lists.complist\">\r\n                                    <ng-container matColumnDef=\"ctype\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Complaint Type </th>\r\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.complaint_name}} </td>\r\n                                    </ng-container>\r\n                                    \r\n                                    <ng-container matColumnDef=\"status\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n                                        <td mat-cell *matCellDef=\"let element\">{{element.status?'Active':'DeActive'}} </td>\r\n                                    </ng-container>\r\n                                    <ng-container matColumnDef=\"action\">\r\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\r\n                                            <a>\r\n                                                <mat-icon style=\"color:black\" (click)=\"EditComplainMaster(element)\"><i\r\n                                                        class=\"fa fa-pencil\"></i>\r\n                                                </mat-icon>\r\n                                            </a>\r\n                                            <mat-icon class=\"m-l-10\" style=\"color:#E91E63\" (click)=\"DeleteConfirmation(element)\"><i\r\n                                                    class=\"fa fa-trash\"></i>\r\n                                            </mat-icon>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                                </table>\r\n                                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\r\n                            </div>\r\n                        </div>\r\n      \r\n                    </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/kycmaster/kycmaster.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Master/kycmaster/kycmaster.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"kycnasterform\" (ngSubmit)=\"onSubmit()\">\r\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\r\n\r\n                <div fxFlex.gt-sm=\"80\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Document Name\" type=\"textarea\" formControlName=\"DocumentName\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\" *ngIf=\"kycForm.DocumentName.touched && kycForm.DocumentName.errors?.pattern\">\r\n                            Document Name contains only characters.</p>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <mat-label>Document Type</mat-label>\r\n                            <mat-select placeholder=\"Select Document Type\" formControlName=\"DocumentType\" required>\r\n                                <!-- <mat-option value=\"0\">Image along with Id </mat-option> -->\r\n                                <mat-option value=\"0\">Image </mat-option>\r\n                                <mat-option value=\"1\">Id </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <mat-label>Document Form</mat-label>\r\n                            <mat-select placeholder=\"Select Document Form\" formControlName=\"DocumentForm\" required>\r\n                                <mat-option value=\"0\">Registration </mat-option>\r\n                                <mat-option value=\"1\">Profile </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <mat-label>Status</mat-label>\r\n                            <mat-select placeholder=\"Select Status\" formControlName=\"Status\" required>\r\n                                <mat-option value=\"1\">Active </mat-option>\r\n                                <mat-option value=\"0\">DeActive </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                    <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-center m-t-30\">\r\n                        <button class=\"m-r-20\" *ngIf=\"updateid == 0\" mat-raised-button color=\"primary\" (click)=\"CreateKyc()\" [disabled]=\"!kycnasterform.valid\">Save</button>\r\n                        <button class=\"m-r-20\" *ngIf=\"updateid > 0\" mat-raised-button color=\"primary\" (click)=\"UpdateKycMaster()\" [disabled]=\"!kycnasterform.valid\">Update</button>\r\n                        <button mat-raised-button color=\"default\" (click)=\"resetKycform()\">Clear</button>\r\n                    </div>\r\n\r\n            </div>\r\n        </form>\r\n\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <table mat-table matSort [dataSource]=\"lists.kyclist\">\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Document Name</th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.doc_name}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"Type\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Document Type</th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.doc_type?'Id':'Image'}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"Form\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Document Form</th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.form_id?'Profile':'Registration'}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"status\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Document status</th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status?'Active':'DeActive'}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Action</th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\r\n                            <a>\r\n                                <mat-icon style=\"color:black\" (click)=\"EditKycMaster(element)\"><i\r\n                                        class=\"fa fa-pencil\"></i>\r\n                                </mat-icon>\r\n                            </a>\r\n                            <mat-icon class=\"m-l-10\" style=\"color:#E91E63\" (click)=\" DeleteConfirmation(element)\"><i\r\n                                    class=\"fa fa-trash\"></i>\r\n                            </mat-icon>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                </table>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\r\n            </div>\r\n        </div>\r\n\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/mastermanager/mastermanager.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Master/mastermanager/mastermanager.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <mat-tab-group>\n            <mat-tab label=\"Create Branch\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <div fxLayout=\"row wrap\">\n                            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-l-10\">\n                                <mat-form-field>\n                                    <mat-label>City</mat-label>\n                                    <mat-select [(ngModel)]=\"lists.name\">\n                                        <mat-option *ngFor=\"let u of lists.Citylist\" [value]=\"u.name\">\n                                            {{u.name}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"p-l-10\">\n                                <mat-form-field>\n                                    <input matInput [(ngModel)]=\"lists.address\" placeholder=\"Address\">\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right\">\n                                <button mat-raised-button color=\"primary\" [disabled]=\"!lists.name || !lists.address\" (click)=\"AddBranch()\">Save</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Branch List\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <div fxLayout=\"row wrap\">\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <mat-form-field>\n                                    <mat-label>Select Admin</mat-label>\n                                    <mat-select [(ngModel)]=\"lists.admin\">\n                                        <mat-option *ngFor=\"let u of lists.adminlist\" [value]=\"u.id\">\n                                            {{u.name}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-right m-b-10\">\n                                <button mat-raised-button color=\"primary\" (click)=\"GetBranchList()\">View\n                                    Branch List</button>\n                            </div>\n                            <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <mat-form-field>\n                                    <input matInput (keyup)=\"common.TableFilter(lists.branchlist,$event.target.value)\" placeholder=\"Search\">\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                <table mat-table matSort [dataSource]=\"lists.branchlist\">\n                                    <!-- <ng-container matColumnDef=\"action\">\n                                        <th mat-header-cell *matHeaderCellDef> Action </th>\n                                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                            <a>\n                                                <mat-icon>edit</mat-icon>\n                                            </a>\n                                            <a>\n                                                <mat-icon>delete</mat-icon>\n                                            </a>\n                                        </td>\n                                    </ng-container> -->\n                                    <ng-container matColumnDef=\"name\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Branch Name </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"address\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Address </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n                                    </ng-container>\n                                    <ng-container matColumnDef=\"admin\">\n                                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Admin Name </th>\n                                        <td mat-cell *matCellDef=\"let element\"> {{element.admin}} </td>\n                                    </ng-container>\n                                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                                </table>\n                                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n        </mat-tab-group>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/servicemaster/servicemaster.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Master/servicemaster/servicemaster.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <!-- <mat-card-title>Branch Manager</mat-card-title> -->\n    <mat-card-content>\n        <!-- <mat-card-title>Create Branch</mat-card-title> -->\n        <mat-tab-group>\n            <mat-tab label=\"Create Service Provider\">\n                <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\n\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Service Provide Name\">\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\n                        <mat-form-field>\n                            <input matInput placeholder=\"Service Provide Id\">\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\n                        <!-- <mat-form-field>\n                             <app-material-file-upload (complete)=\"onFileComplete($event)\"></app-material-file-upload>                     \n                              \n                        </mat-form-field>-->\n                    </div>\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\n\n                    </div>\n\n                    <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <button mat-raised-button color=\"primary\" class=\"btn-block btn-lg m-t-20 m-b-20\" type=\"submit\">Save</button>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Service Provider List\">\n                <div fxLayout=\"row wrap\">\n                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                        <mat-card>\n                            <mat-card-content>\n                                <mat-card-title>Service Provider List</mat-card-title>\n                                <div fxLayout=\"row wrap\">\n\n                                    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                                        <table mat-table matSort [dataSource]=\"lists.servicelist\">\n                                            <ng-container matColumnDef=\"action\">\n                                                <th mat-header-cell *matHeaderCellDef> Action </th>\n                                                <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                                    <a>\n                                                        <mat-icon>edit</mat-icon>\n                                                    </a> |\n                                                    <a>\n                                                        <mat-icon>delete</mat-icon>\n                                                    </a>\n                                                </td>\n\n                                            </ng-container>\n\n                                            <ng-container matColumnDef=\"pname\">\n                                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Service Provider Name </th>\n                                                <td mat-cell *matCellDef=\"let element\"> {{element.pname}} </td>\n                                            </ng-container>\n                                            <ng-container matColumnDef=\"sname\">\n                                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Serice Provider ID </th>\n                                                <td mat-cell *matCellDef=\"let element\"> {{element.sname}} </td>\n                                            </ng-container>\n\n\n\n                                            <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\n                                            <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\n                                        </table>\n                                        <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\n                                    </div>\n                                </div>\n                            </mat-card-content>\n                        </mat-card>\n                    </div>\n                </div>\n            </mat-tab>\n        </mat-tab-group>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/statusmaster/statusmaster.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Master/statusmaster/statusmaster.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"statusmasform\" (ngSubmit)=\"onSubmit()\">\r\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\r\n                <div fxFlex.gt-sm=\"80\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Status Name\" type=\"textarea\" formControlName=\"StatusName\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                            *ngIf=\"statusForm.StatusName.touched && statusForm.StatusName.errors?.pattern\">\r\n                            Status Name contains only characters.</p>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <mat-label>Status</mat-label>\r\n                            <mat-select formControlName=\"Status\" placeholder=\"Select Status\" required>\r\n                                <mat-option value=\"1\">Active </mat-option>\r\n                                <mat-option value=\"0\">DeActive </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-center m-t-30\">\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid == 0\" mat-raised-button color=\"primary\" (click)=\"CreateStatusMaster()\" [disabled]=\"!statusmasform.valid\">Save</button>\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid > 0\" mat-raised-button color=\"primary\" (click)=\"UpdateStatusMaster()\" [disabled]=\"!statusmasform.valid\">Update</button>\r\n                    <button mat-raised-button color=\"default\" (click)=\"resetStatusMaster()\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <table mat-table matSort [dataSource]=\"lists.statuslist\">\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status Name </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"status\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status?'Active':'DeActive'}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\r\n                            <a>\r\n                                <mat-icon style=\"color:black\" (click)=\"EditStatusMaster(element)\"><i\r\n                                        class=\"fa fa-pencil\"></i>\r\n                                </mat-icon>\r\n                            </a>\r\n                            <mat-icon class=\"m-l-10\" style=\"color:#E91E63\" (click)=\"DeleteConfirmation(element)\"><i\r\n                                    class=\"fa fa-trash\"></i>\r\n                            </mat-icon>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                </table>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\r\n            </div>\r\n        </div>\r\n\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"subscrimasterform\" (ngSubmit)=\"onSubmit()\">\r\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\r\n                <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Subscription Name\" formControlName=\"SubscriptionName\"\r\n                                type=\"text\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                            *ngIf=\"subscriForm.SubscriptionName.touched && subscriForm.SubscriptionName.errors?.pattern\">\r\n                            Subscription Name contains only characters.</p>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"75\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Description\" formControlName=\"Description\" type=\"textarea\"\r\n                                required>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\r\n                <div fxFlex.gt-sm=\"80\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                    <div fxFlex.gt-sm=\"33\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Fee Amount\" formControlName=\"FeeAmount\" type=\"number\"\r\n                                required>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"33\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Validity (in Months)\" type=\"number\"\r\n                                formControlName=\"validitymonths\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                            *ngIf=\"subscriForm.validitymonths.touched && (subscriForm.validitymonths.errors?.maxLength || subscriForm.validitymonths.errors?.min || subscriForm.validitymonths.errors?.max)\">\r\n                            Months contains only 2 digits (01-99).</p>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"33\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <mat-label>Status</mat-label>\r\n                            <mat-select formControlName=\"Status\" placeholder=\"Select Status\" required>\r\n                                <mat-option value=\"1\">Active </mat-option>\r\n                                <mat-option value=\"0\">DeActive </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-center m-t-30\">\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid == 0\" mat-raised-button color=\"primary\" (click)=\"CreateSubscription()\" [disabled]=\"!subscrimasterform.valid\">Save</button>\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid > 0\" mat-raised-button color=\"primary\" (click)=\"UpdateSubscription()\" [disabled]=\"!subscrimasterform.valid\">Update</button>\r\n                    <button mat-raised-button color=\"default\" (click)=\"resetSubscriptionform()\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <table mat-table matSort [dataSource]=\"lists.sublist\">\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Subscription Name </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.subscription_name}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"desc\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"Amount\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Fee Amount </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"month\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Period </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.validity}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"status\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status?'Active':'DeActive'}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\r\n                            <a>\r\n                                <mat-icon style=\"color:black\" (click)=\"EditSubscriptionMaster(element)\"><i\r\n                                        class=\"fa fa-pencil\"></i>\r\n                                </mat-icon>\r\n                            </a>\r\n                            <mat-icon class=\"m-l-10\" style=\"color:#E91E63\" (click)=\"DeleteConfirmation(element)\"><i\r\n                                    class=\"fa fa-trash\"></i>\r\n                            </mat-icon>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                </table>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\r\n            </div>\r\n        </div>\r\n\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/taxmaster/taxmaster.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Master/taxmaster/taxmaster.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"taxmasterform\" (ngSubmit)=\"onSubmit()\">\r\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\r\n                <div fxFlex.gt-sm=\"80\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Tax Name \" type=\"textarea\" formControlName=\"TaxName\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                            *ngIf=\"taxForm.TaxName.touched && taxForm.TaxName.errors?.pattern\">\r\n                            Tax Name contains only characters.</p>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Tax Value % \" type=\"number\" formControlName=\"TaxValue\"\r\n                                required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\"\r\n                            *ngIf=\"taxForm.TaxValue.touched && (taxForm.TaxValue.errors?.maxLength || taxForm.TaxValue.errors?.min || taxForm.TaxValue.errors?.max)\">\r\n                            Tax Value % contains only 2 digits (01-99).</p>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"25\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <mat-label>Status</mat-label>\r\n                            <mat-select formControlName=\"Status\" placeholder=\"Select Status\" required>\r\n                                <mat-option value=\"1\">Active </mat-option>\r\n                                <mat-option value=\"0\">DeActive </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-center m-t-30\">\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid == 0\" mat-raised-button color=\"primary\" (click)=\"CreateTaxMaster()\" [disabled]=\"!taxmasterform.valid\">Save</button>\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid > 0\" mat-raised-button color=\"primary\" (click)=\"UpdateTaxMaster()\" [disabled]=\"!taxmasterform.valid\">Update</button>\r\n                    <button mat-raised-button color=\"default\" (click)=\"resetTaxMaster()\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <table mat-table matSort [dataSource]=\"lists.taxlist\">\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> TAX name </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.tax_name}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"value\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> TAX value % </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.tax_value}} % </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"status\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status?'Active':'DeActive'}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\r\n                            <a>\r\n                                <mat-icon style=\"color:black\" (click)=\"EditTaxMaster(element)\"><i\r\n                                        class=\"fa fa-pencil\"></i>\r\n                                </mat-icon>\r\n                            </a>\r\n                            <mat-icon class=\"m-l-10\" style=\"color:#E91E63\" (click)=\"DeleteConfirmation(element)\"><i\r\n                                    class=\"fa fa-trash\"></i>\r\n                            </mat-icon>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                </table>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\r\n            </div>\r\n        </div>\r\n\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/userrolemaster/userrolemaster.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Portal/Master/userrolemaster/userrolemaster.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <form [formGroup]=\"userroleform\" (ngSubmit)=\"onSubmit()\">\r\n            <div fxLayout=\"row wrap\" fxFlexAlign=\"center\" class=\"row\">\r\n                <div fxFlex.gt-sm=\"80\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Role Name\" type=\"textarea\" formControlName=\"rolename\" required>\r\n                        </mat-form-field>\r\n                        <p class=\"text-danger m-t-0 font-16\" *ngIf=\"usrroleForm.rolename.touched && usrroleForm.rolename.errors?.pattern\">\r\n                            Role Name contains only characters.</p>\r\n                    </div>\r\n                    <div fxFlex.gt-sm=\"50\" fxFlex=\"100\" class=\"p-10\">\r\n                        <mat-form-field>\r\n                            <mat-label>Role Status</mat-label>\r\n                            <mat-select formControlName=\"roleStatus\" placeholder=\"Select Status\" required>\r\n                                <mat-option value=\"1\">Active </mat-option>\r\n                                <mat-option value=\"0\">DeActive </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"text-center m-t-30\">\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid == 0\" mat-raised-button color=\"primary\" (click)=\"CreateUserRole()\" [disabled]=\"!userroleform.valid\">Save</button>\r\n                    <button class=\"m-r-20\" *ngIf=\"updateid > 0\" mat-raised-button color=\"primary\" (click)=\"UpdateUserRoleMaster()\" [disabled]=\"!userroleform.valid\">Update</button>\r\n                    <button mat-raised-button color=\"default\" (click)=\"resetuserroleform()\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div fxLayout=\"row wrap\">\r\n            <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <mat-form-field>\r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                <table mat-table matSort [dataSource]=\"lists.rolelist\">\r\n\r\n                    <ng-container matColumnDef=\"rolename\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Role Name </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container matColumnDef=\"rolestatus\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Role Status </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status?'Active':'DeActive'}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\r\n                        <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\r\n                            <a>\r\n                                <mat-icon style=\"color:black\" (click)=\"EditUserRoleMaster(element)\"><i\r\n                                        class=\"fa fa-pencil\"></i>\r\n                                </mat-icon>\r\n                            </a>\r\n                            <mat-icon class=\"m-l-10\" style=\"color:#E91E63\" (click)=\"DeleteConfirmation(element)\"><i\r\n                                    class=\"fa fa-trash\"></i>\r\n                            </mat-icon>\r\n                        </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"lists.displayedColumns; sticky: true\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: lists.displayedColumns;\"></tr>\r\n                </table>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20,25,50]\" showFirstLastButtons></mat-paginator>\r\n            </div>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/Portal/Master/areamaster/areamaster.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Portal/Master/areamaster/areamaster.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9NYXN0ZXIvYXJlYW1hc3Rlci9hcmVhbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Portal/Master/areamaster/areamaster.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Portal/Master/areamaster/areamaster.component.ts ***!
  \******************************************************************/
/*! exports provided: AreamasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreamasterComponent", function() { return AreamasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dailogbox/confirmbox/confirmbox.component */ "./src/app/Portal/Dailogbox/confirmbox/confirmbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AreamasterComponent = /** @class */ (function () {
    function AreamasterComponent(fb, common, dialog) {
        this.fb = fb;
        this.common = common;
        this.dialog = dialog;
        this.lists = {};
        this.updateid = 0;
    }
    AreamasterComponent.prototype.ngOnInit = function () {
        this.areaform = this.fb.group({
            AreaName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.lists.Arealist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['name', 'status', 'action'];
        this.lists.Arealist.paginator = this.paginator;
        this.lists.Arealist.sort = this.sort;
        this.GetAreaMaster();
    };
    AreamasterComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.lists.Arealist.filter = filterValue;
    };
    AreamasterComponent.prototype.GetAreaMaster = function () {
        var _this = this;
        this.common.GetMethod('master/getmaster?master=areamaster').then(function (res) {
            if (res.status == 1) {
                _this.lists.Arealist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.data);
            }
        });
    };
    AreamasterComponent.prototype.CreateAreaMaster = function () {
        var _this = this;
        this.common.PostMethod('master/add', {
            master: 'areamaster',
            name: this.areaform.value.AreaName,
            status: this.areaform.value.Status
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetAreaMaster();
                _this.ResetAreaMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    AreamasterComponent.prototype.EditAreaMaster = function (ev) {
        this.updateid = ev.id;
        this.areaform.controls['AreaName'].setValue(ev.name);
        if (ev.status) {
            this.areaform.controls['Status'].setValue('1');
        }
        else {
            this.areaform.controls['Status'].setValue('0');
        }
    };
    AreamasterComponent.prototype.ResetAreaMaster = function () {
        this.updateid = 0;
        this.areaform.controls['AreaName'].setValue('');
        this.areaform.controls['Status'].setValue('');
    };
    AreamasterComponent.prototype.DeleteConfirmation = function (ev) {
        var _this = this;
        var dailog = this.common.dialog.open(_Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmboxComponent"], { data: { status: true, Message: "Are you sure you want to delete this record?" } });
        dailog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.DeleteAreaMaster(ev.id);
            }
        });
    };
    AreamasterComponent.prototype.DeleteAreaMaster = function (_id) {
        var _this = this;
        this.common.PostMethod('master/deletemaster', {
            master: 'areamaster',
            where: { id: _id },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetAreaMaster();
                _this.ResetAreaMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    AreamasterComponent.prototype.UpdateAreaMaster = function () {
        var _this = this;
        this.common.PostMethod('master/updatemaster', {
            master: 'areamaster',
            update: {
                name: this.areaform.value.AreaName,
                status: this.areaform.value.Status,
            },
            where: { id: this.updateid },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetAreaMaster();
                _this.ResetAreaMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    AreamasterComponent.prototype.onSubmit = function () {
    };
    AreamasterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AreamasterComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AreamasterComponent.prototype, "sort", void 0);
    AreamasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-areamaster',
            template: __webpack_require__(/*! raw-loader!./areamaster.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/areamaster/areamaster.component.html"),
            styles: [__webpack_require__(/*! ./areamaster.component.css */ "./src/app/Portal/Master/areamaster/areamaster.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AreamasterComponent);
    return AreamasterComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Master/complainmaster/complainmaster.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Portal/Master/complainmaster/complainmaster.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9NYXN0ZXIvY29tcGxhaW5tYXN0ZXIvY29tcGxhaW5tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Portal/Master/complainmaster/complainmaster.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Portal/Master/complainmaster/complainmaster.component.ts ***!
  \**************************************************************************/
/*! exports provided: ComplainmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplainmasterComponent", function() { return ComplainmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dailogbox/confirmbox/confirmbox.component */ "./src/app/Portal/Dailogbox/confirmbox/confirmbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComplainmasterComponent = /** @class */ (function () {
    function ComplainmasterComponent(fb, common, dialog) {
        this.fb = fb;
        this.common = common;
        this.dialog = dialog;
        this.lists = {};
        this.updateid = 0;
    }
    ComplainmasterComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.lists.complist.filter = filterValue;
    };
    ComplainmasterComponent.prototype.ngOnInit = function () {
        this.complainmasterform = this.fb.group({
            ComplaintType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            Status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.lists.complist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['ctype', 'status', 'action'];
        this.lists.complist.paginator = this.paginator;
        this.lists.complist.sort = this.sort;
        this.GetComplainMaster();
    };
    Object.defineProperty(ComplainmasterComponent.prototype, "copmplainForm", {
        get: function () {
            return this.complainmasterform.controls;
        },
        enumerable: true,
        configurable: true
    });
    ComplainmasterComponent.prototype.GetComplainMaster = function () {
        var _this = this;
        this.common.GetMethod('master/getmaster?master=complaintmaster').then(function (res) {
            if (res.status == 1) {
                _this.lists.complist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.data);
            }
        });
    };
    ComplainmasterComponent.prototype.CreateComplainMaster = function () {
        var _this = this;
        this.common.PostMethod('master/add', {
            master: 'complaintmaster',
            complaint_name: this.complainmasterform.value.ComplaintType,
            status: this.complainmasterform.value.Status,
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetComplainMaster();
                _this.resetComplainMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    ComplainmasterComponent.prototype.UpdateComplainMaster = function () {
        var _this = this;
        this.common.PostMethod('master/updatemaster', {
            master: 'complaintmaster',
            update: {
                complaint_name: this.complainmasterform.value.ComplaintType,
                status: this.complainmasterform.value.Status,
            },
            where: { id: this.updateid },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetComplainMaster();
                _this.resetComplainMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    ComplainmasterComponent.prototype.resetComplainMaster = function () {
        this.updateid = 0;
        this.complainmasterform.controls['ComplaintType'].setValue('');
        this.complainmasterform.controls['Status'].setValue('');
    };
    ComplainmasterComponent.prototype.EditComplainMaster = function (ev) {
        this.updateid = ev.id;
        this.complainmasterform.controls['ComplaintType'].setValue(ev.complaint_name);
        if (ev.status) {
            this.complainmasterform.controls['Status'].setValue('1');
        }
        else {
            this.complainmasterform.controls['Status'].setValue('0');
        }
    };
    ComplainmasterComponent.prototype.DeleteConfirmation = function (ev) {
        var _this = this;
        var dailog = this.common.dialog.open(_Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmboxComponent"], { data: { status: true, Message: "Are you sure you want to delete this record?" } });
        dailog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.DeleteComplainMaster(ev.id);
            }
        });
    };
    ComplainmasterComponent.prototype.DeleteComplainMaster = function (_id) {
        var _this = this;
        this.common.PostMethod('master/deletemaster', {
            master: 'complaintmaster',
            where: { id: _id },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetComplainMaster();
                _this.resetComplainMaster();
                _id = 0;
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    ComplainmasterComponent.prototype.onSubmit = function () {
    };
    ComplainmasterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ComplainmasterComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ComplainmasterComponent.prototype, "sort", void 0);
    ComplainmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-complainmaster',
            template: __webpack_require__(/*! raw-loader!./complainmaster.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/complainmaster/complainmaster.component.html"),
            styles: [__webpack_require__(/*! ./complainmaster.component.css */ "./src/app/Portal/Master/complainmaster/complainmaster.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ComplainmasterComponent);
    return ComplainmasterComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Master/kycmaster/kycmaster.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Portal/Master/kycmaster/kycmaster.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9NYXN0ZXIva3ljbWFzdGVyL2t5Y21hc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Portal/Master/kycmaster/kycmaster.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Portal/Master/kycmaster/kycmaster.component.ts ***!
  \****************************************************************/
/*! exports provided: KycmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycmasterComponent", function() { return KycmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dailogbox/confirmbox/confirmbox.component */ "./src/app/Portal/Dailogbox/confirmbox/confirmbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KycmasterComponent = /** @class */ (function () {
    function KycmasterComponent(fb, common, dialog) {
        this.fb = fb;
        this.common = common;
        this.dialog = dialog;
        this.lists = {};
        this.updateid = 0;
    }
    KycmasterComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.lists.kyclist.filter = filterValue;
    };
    KycmasterComponent.prototype.ngOnInit = function () {
        this.kycnasterform = this.fb.group({
            DocumentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            DocumentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DocumentForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.lists.kyclist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['name', 'Type', 'Form', 'status', 'action'];
        this.lists.kyclist.paginator = this.paginator;
        this.lists.kyclist.sort = this.sort;
        this.GetKYCMaster();
    };
    Object.defineProperty(KycmasterComponent.prototype, "kycForm", {
        get: function () {
            return this.kycnasterform.controls;
        },
        enumerable: true,
        configurable: true
    });
    KycmasterComponent.prototype.GetKYCMaster = function () {
        var _this = this;
        this.common.GetMethod('master/getmaster?master=kyctype').then(function (res) {
            if (res.status == 1) {
                _this.lists.kyclist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.data);
            }
        });
    };
    KycmasterComponent.prototype.resetKycform = function () {
        this.updateid = 0;
        this.kycnasterform.controls['DocumentName'].setValue('');
        this.kycnasterform.controls['DocumentType'].setValue('');
        this.kycnasterform.controls['DocumentForm'].setValue('');
        this.kycnasterform.controls['Status'].setValue('');
    };
    KycmasterComponent.prototype.CreateKyc = function () {
        var _this = this;
        this.common.PostMethod('master/add', {
            master: 'kyctype',
            doc_name: this.kycnasterform.value.DocumentName,
            doc_type: this.kycnasterform.value.DocumentType,
            form_id: this.kycnasterform.value.DocumentForm,
            status: this.kycnasterform.value.Status,
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetKYCMaster();
                _this.resetKycform();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    KycmasterComponent.prototype.EditKycMaster = function (ev) {
        this.updateid = ev.id;
        this.kycnasterform.controls['DocumentName'].setValue(ev.doc_name);
        if (ev.status) {
            this.kycnasterform.controls['Status'].setValue('1');
        }
        else {
            this.kycnasterform.controls['Status'].setValue('0');
        }
        if (ev.form_id == 0) {
            this.kycnasterform.controls['DocumentForm'].setValue('0');
        }
        else {
            this.kycnasterform.controls['DocumentForm'].setValue('1');
        }
        if (ev.doc_type == 0) {
            this.kycnasterform.controls['DocumentType'].setValue('0');
        }
        else {
            this.kycnasterform.controls['DocumentType'].setValue('1');
        }
    };
    KycmasterComponent.prototype.UpdateKycMaster = function () {
        var _this = this;
        this.common.PostMethod('master/updatemaster', {
            master: 'kyctype',
            update: {
                doc_name: this.kycnasterform.value.DocumentName,
                form_id: this.kycnasterform.value.DocumentForm,
                doc_type: this.kycnasterform.value.DocumentType,
                status: this.kycnasterform.value.Status,
            },
            where: { id: this.updateid },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetKYCMaster();
                _this.resetKycform();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    KycmasterComponent.prototype.DeleteConfirmation = function (ev) {
        var _this = this;
        var dailog = this.common.dialog.open(_Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmboxComponent"], { data: { status: true, Message: "Are you sure you want to delete this record?" } });
        dailog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.DeleteKycMaster(ev.id);
            }
        });
    };
    KycmasterComponent.prototype.DeleteKycMaster = function (_id) {
        var _this = this;
        this.common.PostMethod('master/deletemaster', {
            master: 'kyctype',
            where: { id: _id },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetKYCMaster();
                _this.resetKycform();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    KycmasterComponent.prototype.onSubmit = function () {
    };
    KycmasterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], KycmasterComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], KycmasterComponent.prototype, "sort", void 0);
    KycmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kycmaster',
            template: __webpack_require__(/*! raw-loader!./kycmaster.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/kycmaster/kycmaster.component.html"),
            styles: [__webpack_require__(/*! ./kycmaster.component.css */ "./src/app/Portal/Master/kycmaster/kycmaster.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], KycmasterComponent);
    return KycmasterComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Master/master.module.ts":
/*!************************************************!*\
  !*** ./src/app/Portal/Master/master.module.ts ***!
  \************************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _master_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master.routing */ "./src/app/Portal/Master/master.routing.ts");
/* harmony import */ var _mastermanager_mastermanager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mastermanager/mastermanager.component */ "./src/app/Portal/Master/mastermanager/mastermanager.component.ts");
/* harmony import */ var _servicemaster_servicemaster_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicemaster/servicemaster.component */ "./src/app/Portal/Master/servicemaster/servicemaster.component.ts");
/* harmony import */ var _areamaster_areamaster_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./areamaster/areamaster.component */ "./src/app/Portal/Master/areamaster/areamaster.component.ts");
/* harmony import */ var _userrolemaster_userrolemaster_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userrolemaster/userrolemaster.component */ "./src/app/Portal/Master/userrolemaster/userrolemaster.component.ts");
/* harmony import */ var _kycmaster_kycmaster_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kycmaster/kycmaster.component */ "./src/app/Portal/Master/kycmaster/kycmaster.component.ts");
/* harmony import */ var _subscriptionmaster_subscriptionmaster_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subscriptionmaster/subscriptionmaster.component */ "./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.ts");
/* harmony import */ var _taxmaster_taxmaster_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./taxmaster/taxmaster.component */ "./src/app/Portal/Master/taxmaster/taxmaster.component.ts");
/* harmony import */ var _complainmaster_complainmaster_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./complainmaster/complainmaster.component */ "./src/app/Portal/Master/complainmaster/complainmaster.component.ts");
/* harmony import */ var _statusmaster_statusmaster_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./statusmaster/statusmaster.component */ "./src/app/Portal/Master/statusmaster/statusmaster.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_master_routing__WEBPACK_IMPORTED_MODULE_6__["MasterRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [
                _mastermanager_mastermanager_component__WEBPACK_IMPORTED_MODULE_7__["MastermanagerComponent"],
                _servicemaster_servicemaster_component__WEBPACK_IMPORTED_MODULE_8__["ServicemasterComponent"],
                _areamaster_areamaster_component__WEBPACK_IMPORTED_MODULE_9__["AreamasterComponent"],
                _userrolemaster_userrolemaster_component__WEBPACK_IMPORTED_MODULE_10__["UserrolemasterComponent"],
                _kycmaster_kycmaster_component__WEBPACK_IMPORTED_MODULE_11__["KycmasterComponent"],
                _subscriptionmaster_subscriptionmaster_component__WEBPACK_IMPORTED_MODULE_12__["SubscriptionmasterComponent"],
                _taxmaster_taxmaster_component__WEBPACK_IMPORTED_MODULE_13__["TaxmasterComponent"],
                _complainmaster_complainmaster_component__WEBPACK_IMPORTED_MODULE_14__["ComplainmasterComponent"],
                _statusmaster_statusmaster_component__WEBPACK_IMPORTED_MODULE_15__["StatusmasterComponent"],
            ]
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ }),

/***/ "./src/app/Portal/Master/master.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/Portal/Master/master.routing.ts ***!
  \*************************************************/
/*! exports provided: MasterRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutes", function() { return MasterRoutes; });
/* harmony import */ var _areamaster_areamaster_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areamaster/areamaster.component */ "./src/app/Portal/Master/areamaster/areamaster.component.ts");
/* harmony import */ var _complainmaster_complainmaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complainmaster/complainmaster.component */ "./src/app/Portal/Master/complainmaster/complainmaster.component.ts");
/* harmony import */ var _kycmaster_kycmaster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kycmaster/kycmaster.component */ "./src/app/Portal/Master/kycmaster/kycmaster.component.ts");
/* harmony import */ var _mastermanager_mastermanager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mastermanager/mastermanager.component */ "./src/app/Portal/Master/mastermanager/mastermanager.component.ts");
/* harmony import */ var _servicemaster_servicemaster_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicemaster/servicemaster.component */ "./src/app/Portal/Master/servicemaster/servicemaster.component.ts");
/* harmony import */ var _statusmaster_statusmaster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statusmaster/statusmaster.component */ "./src/app/Portal/Master/statusmaster/statusmaster.component.ts");
/* harmony import */ var _subscriptionmaster_subscriptionmaster_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscriptionmaster/subscriptionmaster.component */ "./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.ts");
/* harmony import */ var _taxmaster_taxmaster_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./taxmaster/taxmaster.component */ "./src/app/Portal/Master/taxmaster/taxmaster.component.ts");
/* harmony import */ var _userrolemaster_userrolemaster_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userrolemaster/userrolemaster.component */ "./src/app/Portal/Master/userrolemaster/userrolemaster.component.ts");









var MasterRoutes = [
    {
        path: '',
        children: [
            {
                path: 'mastermanager',
                component: _mastermanager_mastermanager_component__WEBPACK_IMPORTED_MODULE_3__["MastermanagerComponent"],
                data: {
                    title: 'Master Manager',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Master Manager' }
                    ]
                }
            },
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'servicemaster',
                component: _servicemaster_servicemaster_component__WEBPACK_IMPORTED_MODULE_4__["ServicemasterComponent"],
                data: {
                    title: 'Service Master',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Service Master' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'areamaster',
                component: _areamaster_areamaster_component__WEBPACK_IMPORTED_MODULE_0__["AreamasterComponent"],
                data: {
                    title: 'Area Master',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Area Master' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'complainmaster',
                component: _complainmaster_complainmaster_component__WEBPACK_IMPORTED_MODULE_1__["ComplainmasterComponent"],
                data: {
                    title: 'Complain Master',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Complain Master' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'subscriptionmaster',
                component: _subscriptionmaster_subscriptionmaster_component__WEBPACK_IMPORTED_MODULE_6__["SubscriptionmasterComponent"],
                data: {
                    title: 'Subscription Master',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Subscription Master' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'taxmaster',
                component: _taxmaster_taxmaster_component__WEBPACK_IMPORTED_MODULE_7__["TaxmasterComponent"],
                data: {
                    title: 'TAX Master',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'TAX Master' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'userrolemaster',
                component: _userrolemaster_userrolemaster_component__WEBPACK_IMPORTED_MODULE_8__["UserrolemasterComponent"],
                data: {
                    title: 'User Role Master',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'UserRole Master' }
                    ]
                }
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'kycmaster',
                component: _kycmaster_kycmaster_component__WEBPACK_IMPORTED_MODULE_2__["KycmasterComponent"],
                data: {
                    title: 'KYC Master',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'KYC Master' }
                    ]
                }
            }
        ]
    }, {
        path: '',
        children: [
            {
                path: 'statusmaster',
                component: _statusmaster_statusmaster_component__WEBPACK_IMPORTED_MODULE_5__["StatusmasterComponent"],
                data: {
                    title: 'Status Master',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Status Master' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/Portal/Master/mastermanager/mastermanager.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Portal/Master/mastermanager/mastermanager.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9NYXN0ZXIvbWFzdGVybWFuYWdlci9tYXN0ZXJtYW5hZ2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Portal/Master/mastermanager/mastermanager.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Portal/Master/mastermanager/mastermanager.component.ts ***!
  \************************************************************************/
/*! exports provided: MastermanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastermanagerComponent", function() { return MastermanagerComponent; });
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




var MastermanagerComponent = /** @class */ (function () {
    function MastermanagerComponent(common, fb) {
        this.common = common;
        this.fb = fb;
        this.hide = true;
        this.lists = {};
        this.InitFun();
        this.lists.branchlist = [];
        this.lists.UserTab = "UserList";
        this.lists.UserType = localStorage.getItem("UserType");
        this.GetBranchList();
        this.GetCitylist();
        this.GetAdminList();
    }
    MastermanagerComponent.prototype.ngOnInit = function () {
        // this.lists.Branchlist.paginator = this.paginator;
        // this.lists.Branchlist.sort  = this.sort;
        this.lists.branchlist.paginator = this.paginator;
        this.lists.branchlist.sort = this.sort;
    };
    MastermanagerComponent.prototype.InitFun = function () {
        this.lists.Branchlist = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.lists.displayedColumns = ['name', 'address', 'admin'];
    };
    MastermanagerComponent.prototype.applyFilter = function (filterValue) {
        this.lists.Branchlist.filter = filterValue.trim().toLowerCase();
    };
    MastermanagerComponent.prototype.AddBranch = function () {
        var _this = this;
        this.common.PostMethod("AddBranch", { name: this.lists.name, address: this.lists.address, userid: localStorage.getItem("UserId"), usertype: localStorage.getItem("UserType") }).then(function (res) {
            if (res.Status == 1) {
                _this.common.ToastMessage("Success", res.Message);
                _this.GetBranchList();
                _this.lists.name = "";
                _this.lists.address = "";
            }
            else {
                _this.common.ToastMessage("Fail", res.Message);
            }
        }).catch();
    };
    MastermanagerComponent.prototype.GetBranchList = function () {
        var _this = this;
        var userid = localStorage.getItem("UserId");
        if (localStorage.getItem("UserType") == 'Super Admin') {
            userid = 0;
        }
        if (this.lists.admin) {
            userid = this.lists.admin;
        }
        this.common.GetMethod("GetBranchlist?userid=" + userid).then(function (res) {
            _this.lists.branchlist = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res.Data);
            _this.lists.branchlist.paginator = _this.paginator;
            _this.lists.branchlist.sort = _this.sort;
        });
    };
    MastermanagerComponent.prototype.GetAdminList = function () {
        var _this = this;
        this.common.PostMethod("GetfilterData", { file: "users", name: "usertype", value: 'Admin' }).then(function (res) {
            _this.lists.adminlist = res.Data;
        }).catch(function (y) {
            console.log(y);
        });
    };
    MastermanagerComponent.prototype.GetCitylist = function () {
        var _this = this;
        this.common.GetMethod('GetCitites').then(function (res) {
            _this.lists.Citylist = res.Data;
        }).catch();
    };
    MastermanagerComponent.ctorParameters = function () { return [
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], MastermanagerComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], MastermanagerComponent.prototype, "sort", void 0);
    MastermanagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mastermanager',
            template: __webpack_require__(/*! raw-loader!./mastermanager.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/mastermanager/mastermanager.component.html"),
            styles: [__webpack_require__(/*! ./mastermanager.component.css */ "./src/app/Portal/Master/mastermanager/mastermanager.component.css")]
        }),
        __metadata("design:paramtypes", [_Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], MastermanagerComponent);
    return MastermanagerComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Master/servicemaster/servicemaster.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Portal/Master/servicemaster/servicemaster.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9NYXN0ZXIvc2VydmljZW1hc3Rlci9zZXJ2aWNlbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Portal/Master/servicemaster/servicemaster.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Portal/Master/servicemaster/servicemaster.component.ts ***!
  \************************************************************************/
/*! exports provided: ServicemasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicemasterComponent", function() { return ServicemasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicemasterComponent = /** @class */ (function () {
    function ServicemasterComponent() {
        this.hide = true;
        this.lists = {};
        this.InitFun();
        this.GetServiceList();
    }
    ServicemasterComponent.prototype.ngOnInit = function () {
        this.lists.Servicelist.paginator = this.paginator;
        this.lists.Servicelist.sort = this.sort;
    };
    ServicemasterComponent.prototype.InitFun = function () {
        this.lists.Servicelist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.Servicelist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([{ name: 'Shubham', Branchname: 'abc' }, { name: 'Shubham', Branchname: 'abc' }]);
        this.lists.displayedColumns = ['sname', 'pname'];
    };
    ServicemasterComponent.prototype.GetServiceList = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ServicemasterComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ServicemasterComponent.prototype, "sort", void 0);
    ServicemasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicemaster',
            template: __webpack_require__(/*! raw-loader!./servicemaster.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/servicemaster/servicemaster.component.html"),
            styles: [__webpack_require__(/*! ./servicemaster.component.css */ "./src/app/Portal/Master/servicemaster/servicemaster.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicemasterComponent);
    return ServicemasterComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Master/statusmaster/statusmaster.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Portal/Master/statusmaster/statusmaster.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9NYXN0ZXIvc3RhdHVzbWFzdGVyL3N0YXR1c21hc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Portal/Master/statusmaster/statusmaster.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Portal/Master/statusmaster/statusmaster.component.ts ***!
  \**********************************************************************/
/*! exports provided: StatusmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusmasterComponent", function() { return StatusmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dailogbox/confirmbox/confirmbox.component */ "./src/app/Portal/Dailogbox/confirmbox/confirmbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatusmasterComponent = /** @class */ (function () {
    function StatusmasterComponent(fb, common, dialog) {
        this.fb = fb;
        this.common = common;
        this.dialog = dialog;
        this.lists = {};
        this.updateid = 0;
    }
    StatusmasterComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.lists.statuslist.filter = filterValue;
    };
    StatusmasterComponent.prototype.ngOnInit = function () {
        this.statusmasform = this.fb.group({
            StatusName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            Status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.lists.statuslist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['name', 'status', 'action'];
        this.lists.statuslist.paginator = this.paginator;
        this.lists.statuslist.sort = this.sort;
        this.GetStatusMaster();
    };
    Object.defineProperty(StatusmasterComponent.prototype, "statusForm", {
        get: function () {
            return this.statusmasform.controls;
        },
        enumerable: true,
        configurable: true
    });
    StatusmasterComponent.prototype.GetStatusMaster = function () {
        var _this = this;
        this.common.GetMethod('master/getmaster?master=statustype').then(function (res) {
            if (res.status == 1) {
                _this.lists.statuslist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.data);
            }
        });
    };
    StatusmasterComponent.prototype.resetStatusMaster = function () {
        this.updateid = 0;
        this.statusmasform.controls['StatusName'].setValue('');
        this.statusmasform.controls['Status'].setValue('');
    };
    StatusmasterComponent.prototype.CreateStatusMaster = function () {
        var _this = this;
        this.common.PostMethod('master/add', {
            master: 'statustype',
            name: this.statusmasform.value.StatusName,
            status: this.statusmasform.value.Status,
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetStatusMaster();
                _this.resetStatusMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    StatusmasterComponent.prototype.EditStatusMaster = function (ev) {
        this.updateid = ev.id;
        this.statusmasform.controls['StatusName'].setValue(ev.name);
        if (ev.status) {
            this.statusmasform.controls['Status'].setValue('1');
        }
        else {
            this.statusmasform.controls['Status'].setValue('0');
        }
    };
    StatusmasterComponent.prototype.UpdateStatusMaster = function () {
        var _this = this;
        this.common.PostMethod('master/updatemaster', {
            master: 'statustype',
            update: {
                name: this.statusmasform.value.StatusName,
                status: this.statusmasform.value.Status,
            },
            where: { id: this.updateid },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetStatusMaster();
                _this.resetStatusMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    StatusmasterComponent.prototype.DeleteConfirmation = function (ev) {
        var _this = this;
        var dailog = this.common.dialog.open(_Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmboxComponent"], { data: { status: true, Message: 'Are you sure you want to delete this record?' } });
        dailog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.DeleteStatusMaster(ev.id);
            }
        });
    };
    StatusmasterComponent.prototype.DeleteStatusMaster = function (_id) {
        var _this = this;
        this.common.PostMethod('master/deletemaster', {
            master: 'statustype',
            where: { id: _id },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetStatusMaster();
                _this.resetStatusMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    StatusmasterComponent.prototype.onSubmit = function () {
    };
    StatusmasterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], StatusmasterComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], StatusmasterComponent.prototype, "sort", void 0);
    StatusmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statusmaster',
            template: __webpack_require__(/*! raw-loader!./statusmaster.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/statusmaster/statusmaster.component.html"),
            styles: [__webpack_require__(/*! ./statusmaster.component.css */ "./src/app/Portal/Master/statusmaster/statusmaster.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], StatusmasterComponent);
    return StatusmasterComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9NYXN0ZXIvc3Vic2NyaXB0aW9ubWFzdGVyL3N1YnNjcmlwdGlvbm1hc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SubscriptionmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionmasterComponent", function() { return SubscriptionmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dailogbox/confirmbox/confirmbox.component */ "./src/app/Portal/Dailogbox/confirmbox/confirmbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubscriptionmasterComponent = /** @class */ (function () {
    function SubscriptionmasterComponent(fb, common, dialog) {
        this.fb = fb;
        this.common = common;
        this.dialog = dialog;
        this.lists = {};
        this.updateid = 0;
    }
    SubscriptionmasterComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.lists.sublist.filter = filterValue;
    };
    SubscriptionmasterComponent.prototype.ngOnInit = function () {
        this.subscrimasterform = this.fb.group({
            SubscriptionName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            FeeAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            validitymonths: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99)]],
            Status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.lists.sublist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['name', 'desc', 'Amount', 'month', 'status', 'action'];
        this.lists.sublist.paginator = this.paginator;
        this.lists.sublist.sort = this.sort;
        this.GetSubscriptionMaster();
    };
    Object.defineProperty(SubscriptionmasterComponent.prototype, "subscriForm", {
        get: function () {
            return this.subscrimasterform.controls;
        },
        enumerable: true,
        configurable: true
    });
    SubscriptionmasterComponent.prototype.GetSubscriptionMaster = function () {
        var _this = this;
        this.common.GetMethod('master/getmaster?master=subscriptionmaster').then(function (res) {
            if (res.status == 1) {
                _this.lists.sublist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.data);
            }
        });
    };
    SubscriptionmasterComponent.prototype.resetSubscriptionform = function () {
        this.updateid = 0;
        this.subscrimasterform.controls['SubscriptionName'].setValue('');
        this.subscrimasterform.controls['Description'].setValue('');
        this.subscrimasterform.controls['FeeAmount'].setValue('');
        this.subscrimasterform.controls['validitymonths'].setValue('');
        this.subscrimasterform.controls['Status'].setValue('');
    };
    SubscriptionmasterComponent.prototype.CreateSubscription = function () {
        var _this = this;
        this.common.PostMethod('master/add', {
            master: 'subscriptionmaster',
            subscription_name: this.subscrimasterform.value.SubscriptionName,
            description: this.subscrimasterform.value.Description,
            amount: this.subscrimasterform.value.FeeAmount,
            validity: this.subscrimasterform.value.validitymonths,
            status: this.subscrimasterform.value.Status,
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetSubscriptionMaster();
                _this.resetSubscriptionform();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    SubscriptionmasterComponent.prototype.EditSubscriptionMaster = function (ev) {
        this.updateid = ev.id;
        this.subscrimasterform.controls['SubscriptionName'].setValue(ev.subscription_name);
        this.subscrimasterform.controls['Description'].setValue(ev.description);
        this.subscrimasterform.controls['FeeAmount'].setValue(ev.amount);
        this.subscrimasterform.controls['validitymonths'].setValue(ev.validity);
        if (ev.status) {
            this.subscrimasterform.controls['Status'].setValue('1');
        }
        else {
            this.subscrimasterform.controls['Status'].setValue('0');
        }
    };
    SubscriptionmasterComponent.prototype.UpdateSubscription = function () {
        var _this = this;
        this.common.PostMethod('master/updatemaster', {
            master: 'subscriptionmaster',
            update: {
                subscription_name: this.subscrimasterform.value.SubscriptionName,
                description: this.subscrimasterform.value.Description,
                amount: this.subscrimasterform.value.FeeAmount,
                validity: this.subscrimasterform.value.validitymonths,
                status: this.subscrimasterform.value.Status,
            },
            where: { id: this.updateid },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetSubscriptionMaster();
                _this.resetSubscriptionform();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    SubscriptionmasterComponent.prototype.DeleteConfirmation = function (ev) {
        var _this = this;
        var dailog = this.common.dialog.open(_Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmboxComponent"], { data: { status: true, Message: "Are you sure you want to delete this record?" } });
        dailog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.DeleteSubscriptionMaster(ev.id);
            }
        });
    };
    SubscriptionmasterComponent.prototype.DeleteSubscriptionMaster = function (_id) {
        var _this = this;
        this.common.PostMethod('master/deletemaster', {
            master: 'subscriptionmaster',
            where: { id: _id },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetSubscriptionMaster();
                _this.resetSubscriptionform();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    SubscriptionmasterComponent.prototype.onSubmit = function () {
    };
    SubscriptionmasterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SubscriptionmasterComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SubscriptionmasterComponent.prototype, "sort", void 0);
    SubscriptionmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscriptionmaster',
            template: __webpack_require__(/*! raw-loader!./subscriptionmaster.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.html"),
            styles: [__webpack_require__(/*! ./subscriptionmaster.component.css */ "./src/app/Portal/Master/subscriptionmaster/subscriptionmaster.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], SubscriptionmasterComponent);
    return SubscriptionmasterComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Master/taxmaster/taxmaster.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Portal/Master/taxmaster/taxmaster.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9NYXN0ZXIvdGF4bWFzdGVyL3RheG1hc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Portal/Master/taxmaster/taxmaster.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Portal/Master/taxmaster/taxmaster.component.ts ***!
  \****************************************************************/
/*! exports provided: TaxmasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxmasterComponent", function() { return TaxmasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dailogbox/confirmbox/confirmbox.component */ "./src/app/Portal/Dailogbox/confirmbox/confirmbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaxmasterComponent = /** @class */ (function () {
    function TaxmasterComponent(fb, common, dialog) {
        this.fb = fb;
        this.common = common;
        this.dialog = dialog;
        this.lists = {};
        this.updateid = 0;
    }
    TaxmasterComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.lists.taxlist.filter = filterValue;
    };
    TaxmasterComponent.prototype.ngOnInit = function () {
        this.taxmasterform = this.fb.group({
            TaxName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            TaxValue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99)]],
            Status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.lists.taxlist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['name', 'value', 'status', 'action'];
        this.lists.taxlist.paginator = this.paginator;
        this.lists.taxlist.sort = this.sort;
        this.GetTaxMaster();
    };
    Object.defineProperty(TaxmasterComponent.prototype, "taxForm", {
        get: function () {
            return this.taxmasterform.controls;
        },
        enumerable: true,
        configurable: true
    });
    TaxmasterComponent.prototype.GetTaxMaster = function () {
        var _this = this;
        this.common.GetMethod('master/getmaster?master=taxmaster').then(function (res) {
            if (res.status == 1) {
                _this.lists.taxlist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.data);
            }
        });
    };
    TaxmasterComponent.prototype.resetTaxMaster = function () {
        this.updateid = 0;
        this.taxmasterform.controls['TaxName'].setValue('');
        this.taxmasterform.controls['TaxValue'].setValue('');
        this.taxmasterform.controls['Status'].setValue('');
    };
    TaxmasterComponent.prototype.CreateTaxMaster = function () {
        var _this = this;
        this.common.PostMethod('master/add', {
            master: 'taxmaster',
            tax_name: this.taxmasterform.value.TaxName,
            tax_value: this.taxmasterform.value.TaxValue,
            status: this.taxmasterform.value.Status,
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetTaxMaster();
                _this.resetTaxMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    TaxmasterComponent.prototype.EditTaxMaster = function (ev) {
        this.updateid = ev.id;
        this.taxmasterform.controls['TaxName'].setValue(ev.tax_name);
        this.taxmasterform.controls['TaxValue'].setValue(ev.tax_value);
        if (ev.status) {
            this.taxmasterform.controls['Status'].setValue('1');
        }
        else {
            this.taxmasterform.controls['Status'].setValue('0');
        }
    };
    TaxmasterComponent.prototype.UpdateTaxMaster = function () {
        var _this = this;
        this.common.PostMethod('master/updatemaster', {
            master: 'taxmaster',
            update: {
                tax_name: this.taxmasterform.value.TaxName,
                tax_value: this.taxmasterform.value.TaxValue,
                status: this.taxmasterform.value.Status,
            },
            where: { id: this.updateid },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetTaxMaster();
                _this.resetTaxMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    TaxmasterComponent.prototype.DeleteConfirmation = function (ev) {
        var _this = this;
        var dailog = this.common.dialog.open(_Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmboxComponent"], { data: { status: true, Message: "Are you sure you want to delete this record?" } });
        dailog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.DeleteTaxMaster(ev.id);
            }
        });
    };
    TaxmasterComponent.prototype.DeleteTaxMaster = function (_id) {
        var _this = this;
        this.common.PostMethod('master/deletemaster', {
            master: 'taxmaster',
            where: { id: _id },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetTaxMaster();
                _this.resetTaxMaster();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    TaxmasterComponent.prototype.onSubmit = function () {
    };
    TaxmasterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TaxmasterComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TaxmasterComponent.prototype, "sort", void 0);
    TaxmasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taxmaster',
            template: __webpack_require__(/*! raw-loader!./taxmaster.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/taxmaster/taxmaster.component.html"),
            styles: [__webpack_require__(/*! ./taxmaster.component.css */ "./src/app/Portal/Master/taxmaster/taxmaster.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], TaxmasterComponent);
    return TaxmasterComponent;
}());



/***/ }),

/***/ "./src/app/Portal/Master/userrolemaster/userrolemaster.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Portal/Master/userrolemaster/userrolemaster.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BvcnRhbC9NYXN0ZXIvdXNlcnJvbGVtYXN0ZXIvdXNlcnJvbGVtYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Portal/Master/userrolemaster/userrolemaster.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Portal/Master/userrolemaster/userrolemaster.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserrolemasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserrolemasterComponent", function() { return UserrolemasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/common.service */ "./src/app/Portal/Service/common.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dailogbox/confirmbox/confirmbox.component */ "./src/app/Portal/Dailogbox/confirmbox/confirmbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserrolemasterComponent = /** @class */ (function () {
    function UserrolemasterComponent(fb, common, dialog) {
        this.fb = fb;
        this.common = common;
        this.dialog = dialog;
        this.lists = {};
        this.updateid = 0;
    }
    UserrolemasterComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.lists.rolelist.filter = filterValue;
    };
    UserrolemasterComponent.prototype.ngOnInit = function () {
        this.userroleform = this.fb.group({
            rolename: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            roleStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.lists.rolelist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.lists.displayedColumns = ['rolename', 'rolestatus', 'action'];
        this.lists.rolelist.paginator = this.paginator;
        this.lists.rolelist.sort = this.sort;
        this.GetRoleMaster();
    };
    Object.defineProperty(UserrolemasterComponent.prototype, "usrroleForm", {
        get: function () {
            return this.userroleform.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserrolemasterComponent.prototype.GetRoleMaster = function () {
        var _this = this;
        this.common.GetMethod('master/getmaster?master=role').then(function (res) {
            if (res.status == 1) {
                _this.lists.rolelist = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.data);
            }
        });
    };
    UserrolemasterComponent.prototype.CreateUserRole = function () {
        var _this = this;
        this.common.PostMethod('master/add', {
            master: 'role',
            name: this.userroleform.value.rolename,
            status: this.userroleform.value.roleStatus
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetRoleMaster();
                _this.resetuserroleform();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    UserrolemasterComponent.prototype.EditUserRoleMaster = function (ev) {
        this.updateid = ev.id;
        this.userroleform.controls['rolename'].setValue(ev.name);
        if (ev.status) {
            this.userroleform.controls['roleStatus'].setValue('1');
        }
        else {
            this.userroleform.controls['roleStatus'].setValue('0');
        }
    };
    UserrolemasterComponent.prototype.UpdateUserRoleMaster = function () {
        var _this = this;
        this.common.PostMethod('master/updatemaster', {
            master: 'role',
            update: {
                name: this.userroleform.value.rolename,
                status: this.userroleform.value.roleStatus,
            },
            where: { id: this.updateid },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetRoleMaster();
                _this.resetuserroleform();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    UserrolemasterComponent.prototype.resetuserroleform = function () {
        this.updateid = 0;
        this.userroleform.controls['rolename'].setValue('');
        this.userroleform.controls['roleStatus'].setValue('');
    };
    UserrolemasterComponent.prototype.DeleteConfirmation = function (ev) {
        var _this = this;
        var dailog = this.common.dialog.open(_Dailogbox_confirmbox_confirmbox_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmboxComponent"], { data: { status: true, Message: "Are you sure you want to delete this record?" } });
        dailog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.DeleteUserRoleMaster(ev.id);
            }
        });
    };
    UserrolemasterComponent.prototype.DeleteUserRoleMaster = function (_id) {
        var _this = this;
        this.common.PostMethod('master/deletemaster', {
            master: 'role',
            where: { id: _id },
        }).then(function (res) {
            if (res.status == 1) {
                _this.common.ToastMessage('Success', res.message);
                _this.GetRoleMaster();
                _this.resetuserroleform();
            }
            else {
                _this.common.ToastMessage('Info Error!', res.message);
            }
        }).catch(function (y) {
            _this.common.ToastMessage('Info Error!', y.error.message);
        });
    };
    UserrolemasterComponent.prototype.onSubmit = function () {
    };
    UserrolemasterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserrolemasterComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UserrolemasterComponent.prototype, "sort", void 0);
    UserrolemasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userrolemaster',
            template: __webpack_require__(/*! raw-loader!./userrolemaster.component.html */ "./node_modules/raw-loader/index.js!./src/app/Portal/Master/userrolemaster/userrolemaster.component.html"),
            styles: [__webpack_require__(/*! ./userrolemaster.component.css */ "./src/app/Portal/Master/userrolemaster/userrolemaster.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], UserrolemasterComponent);
    return UserrolemasterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Portal-Master-master-module-es5.js.map