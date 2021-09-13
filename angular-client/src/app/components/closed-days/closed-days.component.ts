import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClosedDay } from 'src/app/models/closed-day';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ClosedDaysService } from 'src/app/services/closed-days/closed-days.service';

@Component({
  selector: 'app-closed-days',
  templateUrl: './closed-days.component.html',
  styleUrls: ['./closed-days.component.css']
})
export class ClosedDaysComponent implements OnInit {

  holidays: ClosedDay[];
  user:User;

  constructor(private as: ClosedDaysService, private authService: AuthenticationService, private router:Router) {


   }

  ngOnInit(){

    this.user = this.authService.currentUserValue;


    this.getAllDatas();


  }
/**
 * to view the all holidays
 * @returns holidays
 */
  getAllDatas(){

    this.as.getDatas().subscribe((res:ClosedDay[])=> {
      this.holidays = res;
      res.forEach(element => {
        console.log(element);
      });
      console.log(this.holidays.length);
    });



  }
  /**
   * Get AdminRole if the user is Admin
   * @returns true
   */

  isUserAdmin(): boolean {

    if(this.user.role.nomRole === 'Admin'){
      return true;
    }
    return false;
  }

  /**
   * Method to delete a closedDay
   * @param id 
   */
  deleteClosedDay(id){
    

    this.as.deleteClosedDay(id).subscribe(res=> {
      this.holidays.pop();

      console.log(this.holidays);
      alert('Voulez-vous bien supprimer cette RTT ou Jour férié? !');
      this.router.navigateByUrl('/closeddays');
      
    })
   
  }

   /**
   * Return to Closeddays page
   */
    returnHome(){
      this.router.navigateByUrl('closed-days');
    }

}




