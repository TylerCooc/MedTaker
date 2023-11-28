import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicineEntryComponent } from './edit-medicine-entry.component';

describe('EditMedicineEntryComponent', () => {
  let component: EditMedicineEntryComponent;
  let fixture: ComponentFixture<EditMedicineEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMedicineEntryComponent]
    });
    fixture = TestBed.createComponent(EditMedicineEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
