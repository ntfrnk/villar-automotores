import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from 'src/app/services/api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductsService, Api]
})
export class ProductComponent implements OnInit {

  public product: any = {
    picture: {lg: ''}
  };

  public features: any = [];
  public isSold: boolean = false;

  constructor(
    private _products: ProductsService,
    private _route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this._route.params.subscribe(
      param => {
        if(param['product'] != ''){
          this.getProduct(param['product']);
        }
      }
    )
  }

  getProduct(slug: string|number){
    this._products.getProduct(slug).subscribe(
      response => {
        this.product = response.product;
        this.features = response.product.features.filter(
          (f: any) => f.label.toLowerCase() != 'vendido'
        );
        this.isSold = response.product.features.find(
          (data: any) => data.label.toLowerCase() == 'vendido'
        );
      }
    );
  }

}
