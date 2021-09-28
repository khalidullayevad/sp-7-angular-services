import { Component } from '@angular/core';
import {SumService} from "../sum.service";


@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css'],
  providers : [SumService]
})
export class SumComponent {
  num1=0;
  num2=0;



  constructor(private sumService: SumService){}

  getSum(){
    return this.sumService.getSum(parseInt(String(this.num1)),parseInt(String(this.num2)) );
  }




}
