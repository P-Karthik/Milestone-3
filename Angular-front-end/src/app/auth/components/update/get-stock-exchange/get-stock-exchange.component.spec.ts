import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStockExchangeComponent } from './get-stock-exchange.component';

describe('GetStockExchangeComponent', () => {
  let component: GetStockExchangeComponent;
  let fixture: ComponentFixture<GetStockExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStockExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStockExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
