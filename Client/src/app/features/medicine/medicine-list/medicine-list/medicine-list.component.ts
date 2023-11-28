import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMedicine } from 'src/app/features/models/get-medicine.model';
import { MedicineService } from 'src/app/features/services/medicine/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicines: GetMedicine[] = [];

  constructor(private medicineService: MedicineService, private router: Router) {}


  ngOnInit(): void {
    this.getAllMedicines();
  }

  getAllMedicines(): void {
    this.medicineService.getMedicine().subscribe(
      (medicines: GetMedicine[]) => {
        this.medicines = medicines;
        console.log(JSON.stringify(medicines, null, 2));
      },
      (error) => {
        console.error('Error fetching medicines:', error);
      }
    );
  }

  deleteMedicine(medicine: GetMedicine): void{
    this.medicineService.deleteMedicine(medicine).subscribe({
      next: (response) => {
        console.log("Successfully deleted medicine");
        this.router.navigate(['/']).then(() =>{
          window.location.reload();
        });
      },
      error: (error) => {
        console.error("Error deleting medicine",error);
      }
    });
  }
}