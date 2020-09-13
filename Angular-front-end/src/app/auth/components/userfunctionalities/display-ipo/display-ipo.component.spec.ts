import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIpoComponent } from './display-ipo.component';

describe('DisplayIpoComponent', () => {
  let component: DisplayIpoComponent;
  let fixture: ComponentFixture<DisplayIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
