import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEstimateDialogComponent } from './send-estimate-dialog.component';

describe('SendEstimateDialogComponent', () => {
  let component: SendEstimateDialogComponent;
  let fixture: ComponentFixture<SendEstimateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendEstimateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendEstimateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
