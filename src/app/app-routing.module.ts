import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path: 'product-details/:id', component: ProductDetailsComponent },
{path:'product',component:ProductsComponent},
{path:'cart',component:CartComponent},
// {path:'', redirectTo:'products', pathMatch:'full'},
{path:'products', component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
