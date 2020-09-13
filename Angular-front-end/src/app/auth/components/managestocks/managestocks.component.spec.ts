import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestocksComponent } from './managestocks.component';

describe('ManagestocksComponent', () => {
  let component: ManagestocksComponent;
  let fixture: ComponentFixture<ManagestocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagestocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
