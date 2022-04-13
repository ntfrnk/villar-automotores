import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  public params: any = {
    status: 'on',
    page: 1,
    take: 10,
    ordering: 'id,desc'
  }

  constructor(
    private api: Api
  ) { }

  getArticles() : Observable<any> {
    this.api.setOptions({
      endpoint: `articles/${this.params.status}/${this.params.page}/${this.params.take}/${this.params.ordering}`
    });
    return this.api.get();
  }

  getArticle(slug: number|string) : Observable<any> {
    this.api.setOptions({
      endpoint: `article/${slug}`
    });
    return this.api.get();
  }

  setParams(options: any) {
    this.params = {
      ...this.params,
      ...options
    }
  }

}
