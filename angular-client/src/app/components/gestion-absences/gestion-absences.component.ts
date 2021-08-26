import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/services/absence';


@Component({
  selector: 'app-gestion-absences',
  templateUrl: './gestion-absences.component.html',
  styleUrls: ['./gestion-absences.component.css']
})
export class GestionAbsencesComponent implements OnInit {

  absence: Absence[] = [];

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
