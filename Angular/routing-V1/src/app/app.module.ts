import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FindProductComponent } from './find-product/find-product.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listAll', component: ProductsComponent },
  { path: 'add-product', component: ProductFormComponent },
  { path: 'find', component: FindProductComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductFormComponent,
    FindProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
