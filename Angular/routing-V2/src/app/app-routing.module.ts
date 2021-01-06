import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindProductComponent } from './find-product/find-product.component';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'list-all',component:ProductsComponent},
  {path:'product-form',component:ProductFormComponent},
  {path:'product-form/:id',component:ProductFormComponent},
  {path:'find-product/:id',component:FindProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
