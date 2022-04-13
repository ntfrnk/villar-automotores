import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public params: any = {
    status: 'on',
    group_id: 0,
    page: 1,
    take: 10,
    ordering: 'id,desc',
    except: ''
  };

  constructor(
    private api: Api
  ) { }

  getProducts() : Observable<any> {
    let except = this.params.except !== '' ? '/' + this.params.except : '';
    this.api.setOptions({
      endpoint: `products/${this.params.status}/${this.params.group_id}/${this.params.page}/${this.params.take}/${this.params.ordering}${except}`
    });
    return this.api.get();
  }

  getFeaturedProducts() : Observable<any> {
    let except = this.params.except !== '' ? '/' + this.params.except : '';
    this.api.setOptions({
      endpoint: `products/featured/${this.params.status}/${this.params.group_id}/${this.params.page}/${this.params.take}/${this.params.ordering}${except}`
    });
    return this.api.get();
  }

  getProduct(slug: number|string) : Observable<any> {
    this.api.setOptions({
      endpoint: `product/${slug}`
    });
    return this.api.get();
  }

  setParams(options: any){
    this.params = {
      ...this.params,
      ...options
    };
  }

}
