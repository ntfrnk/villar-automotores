import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { PagesService } from 'src/app/services/pages.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [PagesService, ProductsService, Api]
})
export class ProductsComponent implements OnInit {

  public page: any = {
    title: '',
    picture: {lg: ''},
    content: ''
  };

  public products: any;

  constructor(
    private _pages: PagesService,
    private _products: ProductsService
  ) { }

  ngOnInit(): void {
    this.getPage('productos');
    this.getProducts();
  }

  getPage(slug: string|number){
    this._pages.getPage(slug).subscribe(
      response => {
        this.page = response.page;
      }
    );
  }

  getProducts(){
    this._products.setParams({
      status: 'on',
      page: 1,
      take: 20,
      ordering: 'id,desc'
    });
    this._products.getProducts().subscribe(
      response => {
        this.products = response.products.map(
          (item: any) => {
            let sold = item.features.find(
              (feature: any) => feature.label.toLowerCase() == 'vendido'
            );
            item.sold = sold != undefined ? true : false;
            return item;
          }
        );
        console.log(this.products);
      }
    );
  }

}
