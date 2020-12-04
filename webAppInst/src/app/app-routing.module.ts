import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './home/chat/chat.component';

const routes: Routes=[
  {path:'', redirectTo:'/user/login', pathMatch:'full'},
  {
      path: 'user', component: UserComponent,
      children:[
          {path:'registration', component: RegistrationComponent},
          {path:'login', component: LoginComponent}
      ]
  },
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
