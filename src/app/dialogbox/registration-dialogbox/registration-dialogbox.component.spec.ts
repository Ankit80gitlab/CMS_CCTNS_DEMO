import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDialogboxComponent } from './registration-dialogbox.component';

describe('RegistrationDialogboxComponent', () => {
  let component: RegistrationDialogboxComponent;
  let fixture: ComponentFixture<RegistrationDialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationDialogboxComponent]
    });
    fixture = TestBed.createComponent(RegistrationDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
