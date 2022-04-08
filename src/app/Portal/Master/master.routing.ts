import { Routes } from '@angular/router';
import { AreamasterComponent } from './areamaster/areamaster.component';
import { ComplainmasterComponent } from './complainmaster/complainmaster.component';
import { KycmasterComponent } from './kycmaster/kycmaster.component';
import { MastermanagerComponent } from './mastermanager/mastermanager.component';
import { ServicemasterComponent } from './servicemaster/servicemaster.component';
import { StatusmasterComponent } from './statusmaster/statusmaster.component';
import { SubscriptionmasterComponent } from './subscriptionmaster/subscriptionmaster.component';
import { TaxmasterComponent } from './taxmaster/taxmaster.component';
import { UserrolemasterComponent } from './userrolemaster/userrolemaster.component';


export const MasterRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mastermanager',
        component: MastermanagerComponent,
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
        component: ServicemasterComponent,
    data:
     {
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
      component: AreamasterComponent,
  data:
   {
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
      component: ComplainmasterComponent,
  data:
   {
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
      component: SubscriptionmasterComponent,
  data:
   {
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
      component: TaxmasterComponent,
  data:
   {
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
      component: UserrolemasterComponent,
  data:
   {
        title: 'User Role Master',
        urls: [
          { title: 'Dashboard', url: '/dashboard' },
          { title: 'UserRole Master' }
        ]
        
      }
    }
  
    
]
}  ,
{
  path: '',
  children: [
    {
      path: 'kycmaster',
      component: KycmasterComponent,
  data:
   {
        title: 'KYC Master',
        urls: [
          { title: 'Dashboard', url: '/dashboard' },
          { title: 'KYC Master' }
        ]
        
      }
    }
  
    
]
} ,{
  path: '',
  children: [
    {
      path: 'statusmaster',
      component: StatusmasterComponent,
  data:
   {
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
