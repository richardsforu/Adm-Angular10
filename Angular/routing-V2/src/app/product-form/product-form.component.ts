import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  isAddMode: boolean;
  productForm: FormGroup
  constructor(private fb: FormBuilder, private ps: ProductService, private router: Router, private route: ActivatedRoute) { }

  handleSubmit() {

    if (this.isAddMode) {
      this.saveProduct();
    } else {
      this.editProduct()
    }

  }

  saveProduct() {
    console.log('save mode');

    if (this.productForm.valid) {
      this.ps.saveProduct(this.productForm.value).subscribe(response => {
        console.log(response);

      })

      this.router.navigate(['list-all'])
    }
  }

  editProduct() {
    console.log('edit mode');

    if (this.productForm.valid) {
      this.ps.updateProduct(this.productForm.value).subscribe(response => {
        console.log(response);
        this.router.navigate(['/list-all'])
      })
    }

  }
  ngOnInit(): void {
    let id = null;
    this.route.paramMap.subscribe((params => {
      this.isAddMode = !params.get('id');
      id = params.get('id');
    }))

    this.productForm = this.fb.group(
      {
        id: ['', Validators.required],
        name: ['', Validators.required],
        price: [, Validators.required],
        description: ['', Validators.required]
      }

    )
    if (!this.isAddMode) {
      this.ps.findProduct(id).subscribe(product => {
        this.productForm.patchValue(product);
      })
    }
  }

}
