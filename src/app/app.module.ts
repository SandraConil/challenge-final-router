import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profil/user-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
