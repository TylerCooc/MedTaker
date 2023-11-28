import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineEntryListComponent } from './medicine-entry-list.component';

describe('MedicineEntryListComponent', () => {
  let component: MedicineEntryListComponent;
  let fixture: ComponentFixture<MedicineEntryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicineEntryListComponent]
    });
    fixture = TestBed.createComponent(MedicineEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
