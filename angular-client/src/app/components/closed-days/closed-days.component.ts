import { Component, OnInit } from '@angular/core';
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

  closedDays: ClosedDay;
  user:User;



  constructor(private closedDaysService: ClosedDaysService ) { }

  ngOnInit(){
    if(this.getAllDatas()){
      return  this.closedDaysService.getDatas();
    }
    
  }

  getAllDatas():boolean {

    this.closedDaysService.getDatas().subscribe((res:ClosedDay)=> {
      this.closedDays = res;
    });
    if(this.closedDays !=null){
      return true;
    }
    return false;
  }
  

}







  

  


