import { Injectable } from '@angular/core';
import { AddMedicineRequest } from '../../models/add-medicine-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetMedicine } from '../../models/get-medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }

  getMedicine(): Observable<GetMedicine[]>{
    return this.http.get<GetMedicine[]>('https://localhost:7223/api/Medicine');
  }

  getMedicineById(id: string): Observable<GetMedicine>{
    return this.http.get<GetMedicine>(`${'https://localhost:7223/api/Medicine'}/${id}`)
  }

  addMedicine(medicine: AddMedicineRequest) : Observable<void>{
    return this.http.post<void>('https://localhost:7223/api/Medicine', medicine);
  }

  updateMedicine(id: string, medicine: GetMedicine): Observable<GetMedicine> {
    return this.http.put<GetMedicine>(`${'https://localhost:7223/api/Medicine'}/${id}`, medicine);
  }

  deleteMedicine(medicine: GetMedicine): Observable<any> {
    return this.http.delete(`${'https://localhost:7223/api/Medicine'}/${medicine.medicineId}`);
  }
}
