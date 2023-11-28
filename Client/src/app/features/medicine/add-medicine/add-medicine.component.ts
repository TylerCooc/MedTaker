import { Component } from '@angular/core';
import { AddMedicineRequest } from '../../models/add-medicine-request.model';
import { MedicineService } from '../../services/medicine/medicine.service';
import { GetMedicine } from '../../models/get-medicine.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent {
  medicines: GetMedicine[] = [];
  addMedicineRequest: AddMedicineRequest;

  constructor(private medicineService: MedicineService, private router: Router){
    this.addMedicineRequest ={
      MedicineName: '', 
      MedicineDescription: '',
      UsageInstruction: '',
    };
  }

  onFormSubmit(){
    this.medicineService.addMedicine(this.addMedicineRequest).subscribe({
      next: (response) =>{
        console.log('Successfully added medicine', response);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
    });

    console.log(this.addMedicineRequest);
  }
}
