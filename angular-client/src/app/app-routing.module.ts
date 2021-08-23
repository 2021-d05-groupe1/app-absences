import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ManagerComponent } from './components/manager/manager.component';
import { AuthenticationGuard } from './services/guards/authentication.guard';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'homePage'}, // redirection all to the authentication path
  { path: 'authentication', component: AuthenticationComponent }, // path for authentication
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard] }, // path for administrator
  { path: 'manager', component: ManagerComponent, canActivate: [AuthenticationGuard] } // path for manager

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
