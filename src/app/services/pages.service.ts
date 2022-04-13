import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(
    private api: Api
  ) { }

  getPage(slug: string|number): Observable<any> {
    this.api.setOptions({
      endpoint: `page/${slug}`
    });
    return this.api.get();
  }

}
