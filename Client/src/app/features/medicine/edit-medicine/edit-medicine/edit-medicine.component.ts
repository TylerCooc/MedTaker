import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddMedicineRequest } from 'src/app/features/models/add-medicine-request.model';
import { GetMedicine } from 'src/app/features/models/get-medicine.model';
import { MedicineService } from 'src/app/features/services/medicine/medicine.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent {

  medicines: GetMedicine[] = [];
  model: GetMedicine;
  medicine!: GetMedicine;

  constructor(private medicineService: MedicineService, private router: Router, private route: ActivatedRoute){
    this.model ={
      medicineId: '00000000-0000-0000-0000-000000000000',
      medicineName: '',
      medicineDescription: '',
      usageInstruction: '',
      createdBy: new Date,
      updatedBy: new Date,
    };
  }


  ngOnInit() {
    // Extract the medicine id from the route parameters
    const id = this.route.snapshot.paramMap.get('id');
    console.log(JSON.stringify(this.medicine));

    // Check if id is not null before using it
    if (id !== null) {
      // Fetch the medicine details using the service
      this.medicineService.getMedicineById(id).subscribe({
        next: (medicine) => {
          this.medicine = medicine;
          this.model.medicineId = id;
          this.model.medicineDescription = medicine.medicineDescription;
          this.model.medicineName = medicine.medicineName;
          this.model.usageInstruction = medicine.usageInstruction;
        },
        error: (error) => {
          console.error('Error fetching medicine details', error);
        }
      });
    }
    
  }

  onFormSubmit() {
    this.medicineService.updateMedicine(this.model.medicineId, this.model).subscribe({
      next: (response) => {
        console.log('Successfully updated medicine', response);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
      error: (error) => {
        console.error('Error updating medicine', error);
      }
    });

    console.log(this.model);
  }
}
