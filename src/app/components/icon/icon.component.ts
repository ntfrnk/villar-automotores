import { Component, OnInit, Input } from '@angular/core';
import { IconService } from 'src/app/services/icons.service';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  providers: [IconService]
})
export class IconComponent implements OnInit {

  @Input() name: string = '';
  @Input() size: number = 20;
  @Input() color: string = '#000';
  @Input() class: string = '';
  @Input() style: string = '';
  public paths: any[] = [];

  constructor(
    private _icons: IconService
  ) { }

  ngOnInit(): void {
    this.paths = this._icons.getIcon(this.name);
  }

}