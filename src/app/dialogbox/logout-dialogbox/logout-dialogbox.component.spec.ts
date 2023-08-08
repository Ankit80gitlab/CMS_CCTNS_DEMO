import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutDialogboxComponent } from './logout-dialogbox.component';

describe('LogoutDialogboxComponent', () => {
  let component: LogoutDialogboxComponent;
  let fixture: ComponentFixture<LogoutDialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutDialogboxComponent]
    });
    fixture = TestBed.createComponent(LogoutDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
