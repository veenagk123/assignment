import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  public visibleProducts: any;
  public imageUrl: any = {};
  emailId!: string;
  
  @ViewChild('imageContainer') imageContainer!: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private cartService: CartService,
    private http: HttpClient
  ) {
    this.emailId = this.route.snapshot.queryParamMap.get('emailId');
  }

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.visibleProducts = this.productList.slice(0, 10);
      this.visibleProducts.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
        this.fetchImage(a.id);
      });
    });

    window.addEventListener('scroll', this.lazyLoadImages.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.lazyLoadImages.bind(this));
  }

  fetchImage(id: number): void {
    const url = `https://fakestoreapi.com/products/${id}`;
    this.http.get(url, { responseType: 'json' }).subscribe((data: any) => {
      this.imageUrl[id] = data.image;
    });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  lazyLoadImages() {
    const container = this.imageContainer.nativeElement;
    const images = container.querySelectorAll('.lazy-load-image');
    const containerTop = container.getBoundingClientRect().top;

    images.forEach((img: any) => {
      if (
        img.getBoundingClientRect().top - containerTop <
        window.innerHeight * 2
      ) {
        const src = img.dataset.src;
        if (src) {
          img.setAttribute('src', src);
          img.classList.remove('lazy-load-image');
        }
      }
    });
  }
}
