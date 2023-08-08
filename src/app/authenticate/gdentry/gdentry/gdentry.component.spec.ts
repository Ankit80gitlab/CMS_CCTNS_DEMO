import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdentryComponent } from './gdentry.component';

describe('GdentryComponent', () => {
  let component: GdentryComponent;
  let fixture: ComponentFixture<GdentryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GdentryComponent]
    });
    fixture = TestBed.createComponent(GdentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
