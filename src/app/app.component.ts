import { Component } from '@angular/core';
import {DateService} from "./date.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DateService]
})
export class AppComponent {
  title = 'services';
  constructor(private dataService: DateService){}
  ngOnInit(){
    return this.dataService.getCurentDate();

  }
}
