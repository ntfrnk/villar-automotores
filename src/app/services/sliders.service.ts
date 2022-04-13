import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  public params: any = {
    status: 'all',
    page: 1,
    take: 10,
    ordering: 'id,desc'
  };
  constructor(
    private api: Api
  ) { }

  getSliders() : Observable<any> {
    this.api.setOptions({
      endpoint: `sliders/${this.params.status}/${this.params.page}/${this.params.take}/${this.params.ordering}`,
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
