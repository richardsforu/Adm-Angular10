import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-parent';
  totalCount: number = 0;
  buttons = [5, 10, 20, -5, -10, -20]


  f1(msg) {
    console.log("-----> Hello I am f1");
    console.log(msg);

    this.totalCount += msg;

  }



}
