import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-demo-V2';

  divStatus = true;

  person = {
    name: 'Praveen',
    country: 'India'
  }

  buttons = [10, -15, 20, -7, 100, -76, 87, 54, -43, 98];


}
