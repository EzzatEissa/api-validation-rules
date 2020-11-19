import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextViewerComponent implements OnInit {

  @Input() label: string;
  @Input() value: any;
  @Input() isTranslate: boolean = false;
  @Input() hasToolTip: boolean = false;
  @Input() toolTipMsg: string = '';
  emptyMsg = 'not found';

  constructor() { }

  ngOnInit() {
  }

}
