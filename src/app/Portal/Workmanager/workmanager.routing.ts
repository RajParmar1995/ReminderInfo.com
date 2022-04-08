import { Routes } from '@angular/router';
import { MyworkComponent } from './mywork/mywork.component';
import { SettingComponent } from './setting/setting.component';
export const WorkmanagerRoutes: Routes = [
  {
    path: '',
    children: [     
      {
        path: 'setting',
        component: SettingComponent,
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
    component: MyworkComponent,
data: {
      title: 'My Work',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'My Work' }
      ]
      
    }
  }
]
  }];
