import { MenufilterPipe } from './../../Portal/Pipes/menufilter.pipe';
import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}
const SuperAdmin = [
  {
    state: '',
    name: 'Menu',
    type: 'saperator',
    icon: 'av_timer'
  },
  {
    state: 'dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'home',
  },
  // {
  //   state: 'mastermanager',
  //   name: 'Master Manager',
  //   type: 'sub',
  //   icon: 'receipt',
  //   children: [
  //     { state: 'areamaster', name: 'Area Master', type: 'link' },
  //     { state: 'userrolemaster', name: 'User Role Master', type: 'link' },
  //     { state: 'kycmaster', name: 'KYC Master', type: 'link' },
  //     { state: 'subscriptionmaster', name: 'Subscription Master', type: 'link' },
  //     { state: 'statusmaster', name: 'Status Master', type: 'link' },
  //     { state: 'taxmaster', name: 'TAX Master', type: 'link' },
  //     { state: 'complainmaster', name: 'Complain Master', type: 'link' },
  //  ]
  // }, 
  // {
  //   state: 'transaction',
  //   name: 'Transaction Manager',
  //   type: 'sub',
  //   icon: 'money',
  //   children: [
  //     { state: 'userbased', name: 'User Based Transaction', type: 'link' },
  //     { state: 'auctionbased', name: 'Auction Based Transaction', type: 'link' },
  //     { state: 'registrationbased', name: 'Registration Transaction', type: 'link' },
  //     { state: 'gstcollection', name: 'GST Collection', type: 'link' },
  //  ]
  // },
  {
      state: 'remindermanager',
      name: 'reminder Manager',
      type: 'sub',
      icon: 'money',
      children: [
        { state: 'createreminder', name: 'Create New Reminder', type: 'link' },
        { state: 'allreminder', name: 'All Reminder', type: 'link' },
     ]
    },
  {
    state: 'usermanager',
    name: 'User Manager',
    type: 'sub',
    icon: 'people',
    children: [
      { state: 'userlist', name: 'User List', type: 'link' },
      { state: 'createuser', name: 'Create New User', type: 'link' },
   ]
  },
 
 
];


@Injectable()
export class MenuItems {
  
  getMenuitem(): Menu[] {
    // if (localStorage.getItem("UserType") == "Super Admin" || localStorage.getItem("UserType") == "Manager") {
    //   return SuperAdmin;
    // } else if (localStorage.getItem("UserType") == "Admin") {
    //   return Admin;
    // } else if (localStorage.getItem("UserType") == "Agent") {
    //   return Agent;
    // } else {
    //  return SuperAdmin;
    // }
    // return MENUITEMS;

    // if (localStorage.getItem("UserType") == "7") {
    //     return SuperAdmin;
    //   } else  if (localStorage.getItem("UserType") > "0") {
    //     if (localStorage.getItem("UserType") != "7") {
    //       return LoginUser;
    //     }
    //   }else {
    //     return User;
    //   }

     if (localStorage.getItem("UserType") == "7") {
        return SuperAdmin;
      } else  if (localStorage.getItem("UserType") > "0") {
        if (localStorage.getItem("UserType") != "7") {
          return SuperAdmin;
        }
      }else {
        return SuperAdmin;
      }
      
      
      
      
  }
}
