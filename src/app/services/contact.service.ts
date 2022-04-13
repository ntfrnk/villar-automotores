import { Injectable } from '@angular/core';
import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private _api: Api
  ) { }

  send(consulta: any) {
    this._api.setOptions({
      endpoint: 'contact',
      apiURL: 'https://api.kbzas.ar/apimail/'
    });
    return this._api.post(consulta);
  }
}
