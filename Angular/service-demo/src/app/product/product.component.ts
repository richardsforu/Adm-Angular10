import { Component } from '@angular/core';
import { textSpanIntersectsWithTextSpan } from 'typescript';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private ps: ProductService) { }


  save() {
    this.ps.saveProduct();
  }


}
