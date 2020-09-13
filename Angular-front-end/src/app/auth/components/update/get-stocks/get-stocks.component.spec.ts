import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStocksComponent } from './get-stocks.component';

describe('GetStocksComponent', () => {
  let component: GetStocksComponent;
  let fixture: ComponentFixture<GetStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
