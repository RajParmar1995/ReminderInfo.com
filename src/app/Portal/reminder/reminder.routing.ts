import { Routes } from '@angular/router';
import { AllreminderComponent } from './allreminder/allreminder.component';
import { CreatereminderComponent } from './createreminder/createreminder.component';
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
      title: 'Reminder List',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Reminder List' }
      ]

    }
  },
]
  }];
