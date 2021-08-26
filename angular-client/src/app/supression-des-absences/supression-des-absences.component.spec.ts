import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupressionDesAbsencesComponent } from './supression-des-absences.component';

describe('SupressionDesAbsencesComponent', () => {
  let component: SupressionDesAbsencesComponent;
  let fixture: ComponentFixture<SupressionDesAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupressionDesAbsencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupressionDesAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
