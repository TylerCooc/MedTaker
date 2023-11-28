import { TestBed } from '@angular/core/testing';

import { MedicineEntryService } from './medicine-entry.service';

describe('MedicineEntryService', () => {
  let service: MedicineEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
