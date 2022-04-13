import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Api } from 'src/app/services/api.service';
import { SlidersService } from 'src/app/services/sliders.service';
import { Browser } from 'src/app/services/data.service';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [SlidersService, Api]
})
export class SliderComponent implements OnInit {

  public sliderOpt: OwlOptions = {
    loop: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 700,
    navText: ['<', '>'],
    items: 1,
    slideTransition: 'ease-in-out',
  };

  public sliders: any[] = [];
  public size: string;

  constructor(
    private _sliders: SlidersService
  ) {
    this.size = Browser.sizeDevice();
  }

  ngOnInit(): void {
    this.getSliders();
  }

  getSliders() {
    this._sliders.setParams({
      status: 'on',
      take: 10
    });
    this._sliders.getSliders().subscribe(
      response => {
        this.sliders = response.sliders;
      }
    );
  }

}
