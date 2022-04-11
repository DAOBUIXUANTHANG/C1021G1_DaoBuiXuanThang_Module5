import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtRegisterFormComponent } from './bai-6/bt-register-form/bt-register-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogginFormComponent } from './bai-6/loggin-form/loggin-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BtRegisterFormComponent,
    LogginFormComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
