import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [PagesService, Api]
})
export class ServicesComponent implements OnInit {

  public page: any = {
    title: '',
    picture: {lg: ''},
    content: ''
  };

  constructor(
    private _pages: PagesService
  ) { }

  ngOnInit(): void {
    this.getPage('servicios');
  }

  getPage(slug: string|number){
    this._pages.getPage(slug).subscribe(
      response => {
        this.page = response.page;
      }
    );
  }

}
