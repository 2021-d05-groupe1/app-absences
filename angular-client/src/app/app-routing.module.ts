import { GestionAbsencesComponent } from './components/gestion-absences/gestion-absences.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent} from './test/test.component';

const routes: Routes = [
  {path: 'accueil', component: TestComponent},
  {path: 'gestion des absences', component: TestComponent},
  {path: 'planning des absences', component: TestComponent},
  {path: 'jours feriés', component: TestComponent},
  {path: 'se déconecter', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
