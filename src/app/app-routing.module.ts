import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {DateComponent} from "./date/date.component";
import {InputComponent} from "./input/input.component";
import {SumComponent} from "./sum/sum.component";
import {HomePageComponent} from "./home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'date', component: DateComponent },
  { path: 'input', component: InputComponent },
  { path: 'sum', component: SumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
