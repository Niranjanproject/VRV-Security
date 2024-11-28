import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { AccountsComponent } from './Pages/accounts/accounts.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './Pages/admin-layout/admin-layout.component';
import { PurchaseComponent } from './Pages/purchase/purchase.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';
import { UserLayoutComponent } from './Pages/user-layout/user-layout.component';
import { AddUserComponent } from './Pages/add-user/add-user.component';
import { WorforceComponent } from './Pages/worforce/worforce.component';


export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },
    
    {
        path:'login',
        component:LoginComponent
    },
  
  
    {
        path:"",
        component:AdminLayoutComponent,
        children:[
            {
                path:'accounts',
                component:AccountsComponent
            },
            {
                path:'admin-dashboard',
                component:AdminDashboardComponent
            },
            {
                path:'Purchase',
                component:PurchaseComponent
            },
            {
                path:'add-user',
                component:AddUserComponent
            },
            {
                path:'Workforce',
                component:WorforceComponent
            }
        ]
    },

    {
        path:"",
        component:UserLayoutComponent,
        children:[
            {
                path:'account',
                component:AccountsComponent
            },
            {
                path:'user-dashboard',
                component:UserDashboardComponent
            },
            {
                path:'Purchase',
                component:PurchaseComponent
            }
        ]
        
    }   
        
        ];
        

