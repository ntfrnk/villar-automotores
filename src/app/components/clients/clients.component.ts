import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Api } from 'src/app/services/api.service';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [ArticlesService, Api]
})
export class ClientsComponent implements OnInit {

  public albumOpt: OwlOptions = {
    loop: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 700,
    navText: ['<', '>'],
    items: 3,
    margin: 2,
    slideTransition: 'ease-in-out',
  };

  public photos: any[] = [];

  constructor(
    private _articles: ArticlesService
  ) { }

  ngOnInit(): void {
    this.getArticle('entregas-vehiculos');
  }

  getArticle(slug: string|number) {
    this._articles.getArticle(slug).subscribe(
      response => {
        this.photos = response.article.media;
      }
    )
  }

}
