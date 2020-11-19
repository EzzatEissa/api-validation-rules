import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardViewComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() description: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
