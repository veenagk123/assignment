// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { ProductsComponent } from '../products/products.component';

// @NgModule({
//   declarations: [ProductsComponent],
//   imports: [RouterModule.forChild([
//     { path: '', component: ProductsComponent }
//   ])]
// })
// export class ProductModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: ProductsComponent }
    ])
  ]
})
export class ProductModule { }
