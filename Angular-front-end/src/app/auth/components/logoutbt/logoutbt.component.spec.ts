import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutbtComponent } from './logoutbt.component';

describe('LogoutbtComponent', () => {
  let component: LogoutbtComponent;
  let fixture: ComponentFixture<LogoutbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
