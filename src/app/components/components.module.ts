import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SliderComponent } from './slider/slider.component';
import { IconComponent } from './icon/icon.component';
import { FeaturedComponent } from './featured/featured.component';
import { ClientsComponent } from './clients/clients.component';
import { HeadingComponent } from './heading/heading.component';
import { CardComponent } from './card/card.component';
import { VideoComponent } from './video/video.component';
import { BlockServicesComponent } from './block-services/block-services.component';

@NgModule({
  declarations: [
    SliderComponent,
    IconComponent,
    FeaturedComponent,
    ClientsComponent,
    HeadingComponent,
    CardComponent,
    VideoComponent,
    BlockServicesComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule
  ],
  exports: [
    SliderComponent,
    IconComponent,
    FeaturedComponent,
    ClientsComponent,
    HeadingComponent,
    CardComponent,
    VideoComponent,
    BlockServicesComponent
  ]
})
export class ComponentsModule { }
