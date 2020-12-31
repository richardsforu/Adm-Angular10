import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  @Input()
  btnLable: number;

  totalBtnHits = 0;

  @Output()
  parentEvent = new EventEmitter();

  btnHitsCount() {
    this.totalBtnHits += 1;
    this.parentEvent.emit(this.btnLable); // custom event sending back to parent component
  }
  constructor() { }

  ngOnInit(): void {
  }

}
