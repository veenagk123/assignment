import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CartService } from '../cart.service';
// import { Api2Service } from '../api2.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public productList :any;
  public imageUrl: any = {};

  constructor(private api : ApiService, private cartService: CartService,private http:HttpClient){}

  ngOnInit(): void{
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        this.fetchImage(a.id);
      }); 
    })
  }
  fetchImage(id:number): void {
    const url = `https://fakestoreapi.com/products/${id}`;
    this.http.get(url, { responseType: 'json' })
      .subscribe((data: any) => {
        this.imageUrl[id] = data.image;
      });
  }

  addtocart(item:any){
    this.cartService.addtoCart(item);
    }

}
