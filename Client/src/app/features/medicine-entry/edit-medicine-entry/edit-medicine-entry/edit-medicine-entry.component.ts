import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineEntry } from 'src/app/features/models/medicine-entry';
import { MedicineEntryService } from 'src/app/features/services/medicine-entry/medicine-entry.service';

@Component({
  selector: 'app-edit-medicine-entry',
  templateUrl: './edit-medicine-entry.component.html',
  styleUrls: ['./edit-medicine-entry.component.css']
})
export class EditMedicineEntryComponent {
  
  medicineEntries: MedicineEntry[] = [];
  medicineEntryForm: MedicineEntry;
  medicineEntry!: MedicineEntry;

  constructor(private medicineEntryService: MedicineEntryService, private router: Router, private route: ActivatedRoute){
    this.medicineEntryForm = {
      medicineAmount: 0,
      medicineEntryId: '00000000-0000-0000-0000-000000000000',
      medicineName: '',
      timeTaken: new Date,
    }
  }

  ngOnInit(){
    const medicineEntryId = this.route.snapshot.paramMap.get('id');
    console.log(JSON.stringify(this.medicineEntry));

    if(medicineEntryId !== null){
      this.medicineEntryService.getMedicineEntryById(medicineEntryId).subscribe({
        next: (medicineEntry) =>{
          this.medicineEntry = medicineEntry;
          this.medicineEntryForm.medicineAmount = medicineEntry.medicineAmount;
          this.medicineEntryForm.medicineEntryId = medicineEntryId;
          this.medicineEntryForm.medicineName = medicineEntry.medicineName;
          this.medicineEntryForm.timeTaken = medicineEntry.timeTaken;
        },
        error: (error) => {
          console.error('Error fetching medicine details', error);
        }
      });
    }
  }

  onFormSubmit() {
    this.medicineEntryService.updateMedicineEntry(this.medicineEntryForm.medicineEntryId, this.medicineEntryForm).subscribe({
      next: (response) => {
        console.log('Successfully updated medicine', response);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
      error: (error) => {
        console.error('Error updating medicine entry', error);
      }
    });

    console.log(this.medicineEntryForm);
  }
}
