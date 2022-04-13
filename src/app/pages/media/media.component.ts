import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/services/api.service';
import { PagesService } from 'src/app/services/pages.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  providers: [PagesService, Api, VideosService]
})
export class MediaComponent implements OnInit {

  public page: any = {
    title: '',
    picture: {lg: ''},
    content: ''
  };

  public videos: any = [];

  constructor(
    private _pages: PagesService,
    private _videos: VideosService
  ) { }

  ngOnInit(): void {
    this.getPage('multimedia');
    this.getVideos();
  }

  getPage(slug: string|number){
    this._pages.getPage(slug).subscribe(
      response => {
        this.page = response.page;
      }
    );
  }

  getVideos(){
    this._videos.getVideos().subscribe(
      response => {
        this.videos = response.videos;
      }
    );
  }

  videoCode(link: string){
    return link.replace('https://youtu.be/', '');
  }

}
