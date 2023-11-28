import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MedicineListComponent } from './features/medicine/medicine-list/medicine-list/medicine-list.component';
import { AddMedicineComponent } from './features/medicine/add-medicine/add-medicine.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { EditMedicineComponent } from './features/medicine/edit-medicine/edit-medicine/edit-medicine.component';
import { AddMedicineEntryComponent } from './features/medicine-entry/add-medicine-entry/add-medicine-entry/add-medicine-entry.component';
import { EditMedicineEntryComponent } from './features/medicine-entry/edit-medicine-entry/edit-medicine-entry/edit-medicine-entry.component';
import { MedicineEntryListComponent } from './features/medicine-entry/medicine-entry-list/medicine-entry-list/medicine-entry-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MedicineListComponent,
    AddMedicineComponent,
    HomeComponent,
    EditMedicineComponent,
    AddMedicineEntryComponent,
    EditMedicineEntryComponent,
    MedicineEntryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
