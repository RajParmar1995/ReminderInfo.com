import { Routes } from '@angular/router';
import { AllreminderComponent } from './allreminder/allreminder.component';
import { CreatereminderComponent } from './createreminder/createreminder.component';
import { CreatebirthdayComponent } from'./createbirthday/createbirthday.component';
import { MeetingreminderComponent } from'./meetingreminder/meetingreminder.component';
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
  {
    path: 'createbirthday',
    component: CreatebirthdayComponent,
data: {
      title: 'Create Birthday',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Create Birthday' }
      ]

    }
  },
  {
    path: 'meetingreminder',
    component: MeetingreminderComponent,
data: {
      title: 'Meeting Reminder',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Meeting Reminder' }
      ]

    }
  },
  //createbirthday
]
  }];
