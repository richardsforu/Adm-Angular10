import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  saveProduct(){
    console.log('--- save product function from ProductService');
  }

  editProduct(){
    console.log('--- Edit product function from ProductService');
  }

  findProduct(){
    console.log('--- Find product function from ProductService');
  }

}
