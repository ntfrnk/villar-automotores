import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss'],
  providers: [PagesService, Api]
})
export class UsComponent implements OnInit {

  public page: any = {
    title: '',
    picture: {lg: ''},
    content: ''
  };

  constructor(
    private _pages: PagesService
  ) { }

  ngOnInit(): void {
    this.getPage('nosotros');
  }

  getPage(slug: string|number){
    this._pages.getPage(slug).subscribe(
      response => {
        this.page = response.page;
      }
    );
  }

}
