import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMedicine } from 'src/app/features/models/get-medicine.model';
import { MedicineEntry } from 'src/app/features/models/medicine-entry';
import { MedicineEntryService } from 'src/app/features/services/medicine-entry/medicine-entry.service';
import { MedicineService } from 'src/app/features/services/medicine/medicine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  medicineEntries: MedicineEntry[] = [];

  constructor(private medicineEntryService: MedicineEntryService, private router: Router) {}

  ngOnInit(): void {
    this.getAllMedicineEntries();
  }

  getAllMedicineEntries(): void{
    this.medicineEntryService.getMedicineEntry().subscribe(
      (medicineEntries: MedicineEntry[]) => {
        this.medicineEntries = medicineEntries;
        console.log(JSON.stringify(medicineEntries, null, 2));
      },
      (error) => {
        console.error('Error fetching medicines:', error);
      }
    );
  }

  deleteMedicineEntry(medicineEntry: MedicineEntry): void{
    this.medicineEntryService.deleteMedicineEntry(medicineEntry).subscribe({
      next: (response) => {
        console.log("Successfully deleted medicine entry", response);
        this.router.navigate(['/']).then(() =>{
          window.location.reload();
        });
      },
      error: (error) => {
        console.error("Error deleting medicine", error);
      }
    });
  }
}
