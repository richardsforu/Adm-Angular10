import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  basePath="/assets/images/";
  colorPath='i20-red';
  imagePath=this.basePath+this.colorPath+'.png';

  changeImage(colorName){
    this.imagePath=this.basePath+colorName.target.value+'.png';

  }

}
