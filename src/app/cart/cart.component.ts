import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Api2Service } from '../api2.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  price=100;
  public products : any =[];
  public imageUrl : any ={};
  public grandTotal !: number;
constructor(private cartService:CartService,private api2Service:Api2Service){}

ngOnInit():void{
  this.cartService.getProducts()
  .subscribe(res=>{
    this.products=res;
    // this.grandTotal=this.cartService.getTotalPrice();
    for (let product of this.products) {
      this.fetchImage(product.id);
    }
  })
}
removeItem(item:any){
  this.cartService.removeCartItem(item);
}
emptycart(){
this.cartService.removeAllCart();
}
fetchImage(id: number): void {
  this.api2Service.fetchImage(id).subscribe((data:any) => {
    this.imageUrl[id] = data.image;
  });
}
}
