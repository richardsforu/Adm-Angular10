import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  handleSubmit() {
    console.log(this.productForm);
    console.log("-- form Submited");
    console.log(this.productForm.value);

  }

  get fc() {
    return this.productForm.controls;
  }
  ngOnInit(): void {
    this.productForm = this.fb.group(
      {
        productId: ['', Validators.required],
        productName: ['', Validators.required],
        price: [, Validators.required],
        description: [, Validators.required],
      })

  }

}
