import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicineEntry } from '../../models/medicine-entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineEntryService {

  constructor(private http: HttpClient) { }

  getMedicineEntry() : Observable<MedicineEntry[]>{
    return this.http.get<MedicineEntry[]>('https://localhost:7223/api/MedicineEntry');
  }

  getMedicineEntryById(id: string) : Observable<MedicineEntry>{
    return this.http.get<MedicineEntry>(`${'https://localhost:7223/api/MedicineEntry'}/${id}`)
  }

  addMedicineEntry(medicineEntry: MedicineEntry) : Observable<void>{
    return this.http.post<void>('https://localhost:7223/api/MedicineEntry', medicineEntry)
  }

  updateMedicineEntry(id: string, medicineEntry: MedicineEntry): Observable<MedicineEntry> {
    return this.http.put<MedicineEntry>(`${'https://localhost:7223/api/MedicineEntry'}/${id}`, medicineEntry);
  }

  deleteMedicineEntry(medicineEntry: MedicineEntry): Observable<any>{
    return this.http.delete(`${'https://localhost:7223/api/MedicineEntry'}/${medicineEntry.medicineEntryId}`)
  }
  
}
