import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AuthguardService } from './Portal/Service/authguard.service';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboards/dashboard1',
        pathMatch: 'full',
        //canActivate: [AuthguardService]
      },
      {
        path: 'dashboards',
        loadChildren: './dashboards/dashboards.module#DashboardsModule',
       // canActivate: [AuthguardService],
        // redirectTo: 'dashboards/dashboard2'
      },
      {
        path: 'reminder',      
        loadChildren: () => import('./Portal/reminder/reminder.module').then(m => m.ReminderModule),           
      },      
      // {
      //   path: 'complaintmanager',
      //   loadChildren: './Portal/Complaintmanager/complaint.module#ComplaintModule',
      //   canActivate: [AuthguardService]
      // },
      // {
      //   path: 'complaintmanager',
      //   loadChildren: './Portal/Complaintmanager/complaint.module#ComplaintModule',
      //   canActivate: [AuthguardService]
      // },        
      {
        path: 'setting',
        loadChildren:
          './Portal/Workmanager/workmanager.module#WorkManagerModule',
       // canActivate: [AuthguardService]
      },
      // {
      //   path: 'aucation',
      //   loadChildren:
      //     './Portal/Aucation/aucation.module#AucationModule',
      //  // canActivate: [AuthguardService]
      // },
     
    ]
  },
  {
    path: '',
    component: AppBlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },//Reditrect All the apis
  {
    path: 'dashboard',
    redirectTo: 'dashboards/dashboard1'
  },
 
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];
