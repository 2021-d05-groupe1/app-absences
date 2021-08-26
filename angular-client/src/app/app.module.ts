import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GestionAbsencesComponent } from './components/gestion-absences/gestion-absences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { TestComponent } from './test/test.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MenuComponent } from './menu/menu.component';
import { PlanningDesAbsencesComponent } from './planning-des-absences/planning-des-absences.component';
import { SupressionDesAbsencesComponent } from './supression-des-absences/supression-des-absences.component';

const appRoutes: Routes = [

  { path: 'GestionDesAbsences', component: GestionAbsencesComponent },
  { path: 'PlanningDesAbsences', component: PlanningDesAbsencesComponent },
  { path: 'SupressionDesAbsences', component: SupressionDesAbsencesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GestionAbsencesComponent,
    TestComponent,
    MenuComponent,
    PlanningDesAbsencesComponent,
    SupressionDesAbsencesComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
