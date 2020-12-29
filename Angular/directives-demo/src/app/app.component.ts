import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  btnDiabled = false;
  showContent = false;
  status = 0;
  isSubmited = false;
  userName;

  errors = {
    userName: false,
    password: false
  }

  cities = ['Pune', 'Bangalore', 'Hyderabas', 'Chennai', 'Koplkata'];

  employee = { id: 'E001' };

  images=['assets/images/i20-red.png','assets/images/i20-copper.png','assets/images/i20-grey.png','assets/images/i20-silver.png','assets/images/i20-starry.png'];

  handleSubmit(e) {

    e.preventDefault();
    this.isSubmited = true;

    if (this.userName.length <= 3) {
      this.errors.userName = true;
      return false;
    } else
      this.errors.userName = false;
    console.log("--- submitted");
    console.log(this.userName);
  }

  validateUser(user) {
    this.userName = user.target.value;
  }

}
