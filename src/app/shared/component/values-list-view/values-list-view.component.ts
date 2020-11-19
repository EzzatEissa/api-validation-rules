import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-values-list-view',
  templateUrl: './values-list-view.component.html',
  styleUrls: ['./values-list-view.component.scss']
})
export class ValuesListViewComponent implements OnInit {
  @Input() values = [];
  @Input() label = '';
  @Input() gridCol = 'col-xl-4 col-md-6 col-sm-12';
  @Input() isCard = true;
  constructor() { }

  ngOnInit() {
  }

}
