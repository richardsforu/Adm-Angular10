import { Component } from '@angular/core';

@Component({ // Component Decarator
  selector: 'app-root', // name of component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Variavbles/properties/methods/function -> directly available to app.component.html template
export class AppComponent {

  cityName='Kolkata';

}
