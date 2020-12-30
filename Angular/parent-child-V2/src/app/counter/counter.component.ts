import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  btnLable: number;

  totalBtnHits=0;

  btnHitsCount(){
    this.totalBtnHits+=1;
  }

}
