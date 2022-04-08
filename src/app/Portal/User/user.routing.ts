import { Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { ProfileComponent } from './profile/profile.component';
import { UserlistComponent } from './userlist/userlist.component';
export const UserRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'createuser',
        component: CreateuserComponent,
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
    component: UserlistComponent,
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
    component: ProfileComponent,
data: {
      title: 'User Profile',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'User Profile' }
      ]
      
    }
  }
]
  }];
