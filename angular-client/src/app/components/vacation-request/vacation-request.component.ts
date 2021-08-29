import { Type } from './../../models/type';
import { AbsenceService } from './../../services/absence.service';
import { Status } from './../../models/status';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Absence } from 'src/app/models/absence';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent implements OnInit {
  createAbsenceForm: FormGroup

  constructor(private _fb: FormBuilder, private _absenceService: AbsenceService) { }

  ngOnInit(): void {
    this.createAbsenceForm = this._fb.group({
      type: ['', Validators.required],
      dates: this._fb.group(
        {
          startDate: ['', [Validators.required/* , this.dateRangeValidator() */]],
          endDate: ['', [Validators.required, /* this.dateRangeValidator() */]],
        }, { validator: this.dateRangeValidator() }


      ),

      reason: ['', this.reasonConditionnallyValidator('type', 3)],
      status: [Status.INITIALE]
    });
  }

  createAbsence() {
    console.log(this.createAbsenceForm);
    console.log(this.createAbsenceForm.value.dates.startDate);
    console.log(this.createAbsenceForm.value.type);
    const abscence = new Absence(0, (this.createAbsenceForm.value.type),
      new Date(this.createAbsenceForm.value.dates.startDate), new Date(this.createAbsenceForm.value.dates.endDate),
      this.createAbsenceForm.value.reason, Status.INITIALE, new User(1, "jdoe", "doe123", "Doe", "John", 22, 6));
    console.log(abscence);
    this._absenceService.addAbsence(abscence);

  }

  private dateRangeValidator(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      let invalid = false;
      if (!this.createAbsenceForm) {
        return null;
      }
      /*const from = this.createAbsenceForm.value.dates.startDate;
      const to = this.createAbsenceForm.value.dates.endDate;*/
      const from = group.value.startDate;
      console.log(`Date de début ${from}`);
      const to = group.value.endDate;
      console.log(`Date de fin ${to}`);
      if (from && to) {
        invalid = (new Date(from).valueOf()) > (new Date(to).valueOf());
        console.log(`invalid => ${invalid}`)
      }
      return invalid ? { invalidRange: { from, to } } : null;
      //return invalid ? { invalidRange: {value: group.value } } : null;
    };

  }
  private reasonConditionnallyValidator(controlName: string, conditionnalValue: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {

      if (!this.createAbsenceForm) {
        return null;
      }
      console.log('I m validating the reason');
      console.log("this.createAbsenceForm.get(controlName).value => " + this.createAbsenceForm.get(controlName).value);
      console.log("conditionnalValue => " + conditionnalValue);
      if(this.createAbsenceForm.get(controlName).value === conditionnalValue) {
        console.log(this.createAbsenceForm.get(controlName).value);
        return Validators.required;
      }
      return null;
    }
  }


}