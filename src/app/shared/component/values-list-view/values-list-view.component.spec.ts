import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesListViewComponent } from './values-list-view.component';

describe('ValuesListViewComponent', () => {
  let component: ValuesListViewComponent;
  let fixture: ComponentFixture<ValuesListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
