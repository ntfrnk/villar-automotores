import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  public params: any = {
    status: 'on',
    list_id: 0,
    page: 1,
    take: 10,
    ordering: 'id,desc'
  }

  constructor(
    private api: Api
  ) { }

  getVideos() : Observable<any> {
    this.api.setOptions({
      endpoint: `videos/${this.params.status}/${this.params.list_id}/${this.params.page}/${this.params.take}/${this.params.ordering}`,
    });
    return this.api.get();
  }

  setParams(options: any){
    this.params = {
      ...this.params,
      ...options
    }
  }

}
