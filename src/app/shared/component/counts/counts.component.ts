import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CountsComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() count: string;
  @Input() bgColor: string;
  constructor() { }

  ngOnInit() {
  }

}
