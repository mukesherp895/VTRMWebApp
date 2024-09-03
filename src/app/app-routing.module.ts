import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';
import { AppComponent } from './app.component';
import { authGuard } from './services/AuthGuardService/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: AppComponent,
    canActivate: [authGuard],
    children:[
      // Define child routes here
      // Example: { path: 'dashboard', component: DashboardComponent },
    ],

  },
  { path: '**', redirectTo: '' } // Wildcard route for 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
