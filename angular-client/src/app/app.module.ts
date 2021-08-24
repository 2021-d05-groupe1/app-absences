import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacationRequestComponent } from './components/vacation-request/vacation-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AbsenceService } from './services/absence.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VacationRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
