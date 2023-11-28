import { Component, OnInit } from '@angular/core';
import { MedicineService } from './features/services/medicine/medicine.service';
import { GetMedicine } from './features/models/get-medicine.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Client';
}
