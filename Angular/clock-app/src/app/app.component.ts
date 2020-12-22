import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  test(a: number): number {
    return 8374;
  }

  loadClock(props) {

    this.test(10);
    //this.test('Abc');
    //this.test(true);

    return new Date().toLocaleString('EN-US', { timeZone: props });
  }

  number = setInterval(() => {
    this.loadClock('');
  }, 1000);


}
