import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';

import { FooterComponent } from './footer/footer.component';
import { DesktopComponent } from './header/desktop/desktop.component';
import { MobileComponent } from './header/mobile/mobile.component';

@NgModule({
  declarations: [
    FooterComponent,
    DesktopComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    FooterComponent,
    DesktopComponent,
    MobileComponent
  ]
})
export class TemplateModule { }
