import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicineEntryComponent } from './add-medicine-entry.component';

describe('AddMedicineEntryComponent', () => {
  let component: AddMedicineEntryComponent;
  let fixture: ComponentFixture<AddMedicineEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMedicineEntryComponent]
    });
    fixture = TestBed.createComponent(AddMedicineEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
