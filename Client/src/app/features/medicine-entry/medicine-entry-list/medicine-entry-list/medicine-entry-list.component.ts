import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MedicineEntry } from 'src/app/features/models/medicine-entry';
import { MedicineEntryService } from 'src/app/features/services/medicine-entry/medicine-entry.service';

@Component({
  selector: 'app-medicine-entry-list',
  templateUrl: './medicine-entry-list.component.html',
  styleUrls: ['./medicine-entry-list.component.css']
})
export class MedicineEntryListComponent implements OnInit{

  medicineEntries: MedicineEntry[] = [];

  constructor(private medicineEntryService: MedicineEntryService, private router: Router){
  }

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
        this.router.navigate(['/lists/medicineEntries']).then(() =>{
          window.location.reload();
        });
      },
      error: (error) => {
        console.error("Error deleting medicine", error);
      }
    });
  }
}
