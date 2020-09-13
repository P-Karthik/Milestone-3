import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageipoComponent } from './manageipo.component';

describe('ManageipoComponent', () => {
  let component: ManageipoComponent;
  let fixture: ComponentFixture<ManageipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
