import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input() title: string = '';
  @Input() image: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
