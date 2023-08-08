import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadConfirmationDialogboxComponent } from './download-confirmation-dialogbox.component';

describe('DownloadConfirmationDialogboxComponent', () => {
  let component: DownloadConfirmationDialogboxComponent;
  let fixture: ComponentFixture<DownloadConfirmationDialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadConfirmationDialogboxComponent]
    });
    fixture = TestBed.createComponent(DownloadConfirmationDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
