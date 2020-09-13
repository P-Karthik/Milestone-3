import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComapnyComponent } from './display-comapny.component';

describe('DisplayComapnyComponent', () => {
  let component: DisplayComapnyComponent;
  let fixture: ComponentFixture<DisplayComapnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComapnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComapnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
