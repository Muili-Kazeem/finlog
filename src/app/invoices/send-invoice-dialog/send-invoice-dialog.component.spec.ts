import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInvoiceDialogComponent } from './send-invoice-dialog.component';

describe('SendInvoiceDialogComponent', () => {
  let component: SendInvoiceDialogComponent;
  let fixture: ComponentFixture<SendInvoiceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendInvoiceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendInvoiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
