import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIpoComponent } from './get-ipo.component';

describe('GetIpoComponent', () => {
  let component: GetIpoComponent;
  let fixture: ComponentFixture<GetIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
