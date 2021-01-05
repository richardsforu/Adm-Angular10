import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidationsService } from '../custom-validations.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  isSubmited=false;

  constructor(private fb: FormBuilder,private cvs:CustomValidationsService) { }

  handleSubmit() {
    this.isSubmited=true;
    if(!this.productForm.valid){
      return  false;
    }
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
        productId: ['', [Validators.required,Validators.minLength(3)]],
        productName: [, Validators.required],
        price: [, [Validators.required,Validators.pattern('^[0-9]+(\\.[0-9]{2})?$')]],
        description: [, Validators.required],
        password: [,[Validators.required,this.cvs.patternValidator()]],
        dob: [, [Validators.required,this.cvs.patternDateValidator()]]

      })

  }

}
