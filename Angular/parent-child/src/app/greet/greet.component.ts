import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {


  @Input() // decarator
  message: string;

  @Input()
  n1: number = 0;

  @Input()
  n2: number = 0;

  @Input()
  personName: string










}
