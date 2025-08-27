import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelBookingDialogComponent } from './cancel-booking-dialog.component';

describe('CancelBookingDialogComponent', () => {
  let component: CancelBookingDialogComponent;
  let fixture: ComponentFixture<CancelBookingDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelBookingDialogComponent]
    });
    fixture = TestBed.createComponent(CancelBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
