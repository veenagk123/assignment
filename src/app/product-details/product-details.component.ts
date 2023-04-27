import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  item: any;
  imageUrl: string = '';
  price: number = 100; // Dummy price for demonstration purposes

  constructor(private cartService: CartService,private route: ActivatedRoute, private http: HttpClient,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get('https://jsonplaceholder.typicode.com/photos/' + id).subscribe((res: any) => {
      this.item = res;
      this.imageUrl = res.url;
    });
  }
  ratings: any[] = [
    { value: 4.5, user: 'John Smith' },
    { value: 3.2, user: 'Jane Doe' },
    ];
  addtocart(item:any){
    this.cartService.addtoCart(item);
    }
}
