import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Api } from 'src/app/services/api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  providers: [ProductsService, Api]
})
export class FeaturedComponent implements OnInit {

  public featuredOpt: OwlOptions = {
    loop: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 700,
    navText: ['<', '>'],
    items: 4,
    margin: 10,
    slideTransition: 'ease-in-out',
  };

  public products: any[] = [];

  constructor(
    private _products: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._products.getFeaturedProducts().subscribe(
      response => {
        this.products = response.products;
      }
    );
  }

}
