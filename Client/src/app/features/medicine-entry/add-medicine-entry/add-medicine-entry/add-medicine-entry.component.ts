import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineEntry } from 'src/app/features/models/medicine-entry';
import { MedicineEntryService } from 'src/app/features/services/medicine-entry/medicine-entry.service';
import { MedicineService } from 'src/app/features/services/medicine/medicine.service';

@Component({
  selector: 'app-add-medicine-entry',
  templateUrl: './add-medicine-entry.component.html',
  styleUrls: ['./add-medicine-entry.component.css']
})
export class AddMedicineEntryComponent {
  medicineEntry: MedicineEntry[] = [];
  medicineEntryForm: MedicineEntry;

  constructor(private medicineEntryServices: MedicineEntryService, private router: Router){
    this.medicineEntryForm ={
      medicineAmount: 0,
      medicineEntryId: '00000000-0000-0000-0000-000000000000',
      medicineName: '',
      timeTaken: new Date,
    };
  }

  onFormSubmit(){
    this.medicineEntryServices.addMedicineEntry(this.medicineEntryForm).subscribe({
      next:(response) =>{
        console.log('Successfully added a medicine entry', response);
        this.router.navigate(['/lists/medicineEntries']).then(() =>{
          window.location.reload();
        })
      }
    });
  }
}
