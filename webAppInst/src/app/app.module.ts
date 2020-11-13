import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
