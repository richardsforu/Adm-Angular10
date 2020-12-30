import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';


  name: string = 'Abc';
  message: string = ''

  n1 = 100;
  n2 = 200;

  greetMessage(msg) {
    this.message = msg;
  }


}
