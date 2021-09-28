import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DateService} from "./date.service";
import { DateComponent } from './date/date.component';

import { InputComponent } from './input/input.component';
import { SumComponent } from './sum/sum.component';
import {HomePageComponent} from "./home-page.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HomePageComponent,

    InputComponent,
     SumComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
