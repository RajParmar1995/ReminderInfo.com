import { Routes } from '@angular/router';
import { CreatereminderComponent } from './createreminder/createreminder.component';
import { AllreminderComponent } from './allreminder/allreminder.component';
export const ReminderRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'createreminder',
        component: CreatereminderComponent,
		data: {
          title: 'Create New Reminder',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Create New Reminder' }
          ]
        }
      },
       {
    path: 'allreminder',
    component: AllreminderComponent,
data: {
      title: 'reminder List',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'reminder List' }
      ]
      
    }
  }, 
]
  }];
