import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStockExchangeComponent } from './display-stock-exchange.component';

describe('DisplayStockExchangeComponent', () => {
  let component: DisplayStockExchangeComponent;
  let fixture: ComponentFixture<DisplayStockExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStockExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
