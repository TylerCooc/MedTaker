import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineListComponent } from './features/medicine/medicine-list/medicine-list/medicine-list.component';
import { AddMedicineComponent } from './features/medicine/add-medicine/add-medicine.component';
import { HomeComponent } from './home/home/home.component';
import { EditMedicineComponent } from './features/medicine/edit-medicine/edit-medicine/edit-medicine.component';
import { AddMedicineEntryComponent } from './features/medicine-entry/add-medicine-entry/add-medicine-entry/add-medicine-entry.component';
import { EditMedicineEntryComponent } from './features/medicine-entry/edit-medicine-entry/edit-medicine-entry/edit-medicine-entry.component';
import { MedicineEntryListComponent } from './features/medicine-entry/medicine-entry-list/medicine-entry-list/medicine-entry-list.component';

const routes: Routes = [
  {
    path: 'lists/medicine',
    component: MedicineListComponent
  },
  {
    path: 'lists/medicine/add',
    component: AddMedicineComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'edit/medicine/:id',
    component: EditMedicineComponent
  },
  {
    path: 'lists/medicineEntry/add',
    component: AddMedicineEntryComponent
  },
  {
    path: 'edit/medicineEntry/:id',
    component: EditMedicineEntryComponent
  },
  {
    path: 'lists/medicineEntries',
    component: MedicineEntryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
