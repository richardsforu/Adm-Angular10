import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cityName = 'Pune';
  positionValue = 'center';
  hideInfo = true;

  hideDiv = false;

  logedUserName = '';

  personName='';

  image = {
    path: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Hyundai-i20-premium-hatchback-Interior-Mid-1-revised.jpg",
    height: 250,
    width: 300
  }

  f1() {
    console.log('... clicked ....');
  }


  f2(msg) {
    console.log('Clicked .. ' + msg);

  }

  changeUserName(s1) {
    console.log(s1.target.value);
    this.logedUserName = s1.target.value;
  }

  checkGender(data) {
    console.log(data.target.checked);
    console.log(data.target.value);
  }

  checkHobbies(data) {
    console.log(data.target.name);

  }


  toggleDiv(value) {
    console.log(value.target.checked);
    this.hideDiv = value.target.checked;
  }


}
