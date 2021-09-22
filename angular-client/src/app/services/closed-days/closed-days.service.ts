import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClosedDay } from 'src/app/models/closed-day';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClosedDaysService {
 
  private uri = environment.backendUrl;

  constructor(private http: HttpClient) {}


 /**
  * to show all closedDays 
  * @returns closed-days 
  */
  getDatas():Observable <ClosedDay[]>  {
    return this.http.get<ClosedDay[]>(`${this.uri}/closed-days`);
  }

/**
 * to add new closedDays
 * @param Date 
 * @param Type 
 * @param Jour 
 * @param Commentaires 
 */
  addNewClosedDay(Date, Type, Jour, Commentaire){
    const closedDay  = new ClosedDay(0, Date,Type,Jour, Commentaire);
    console.log(closedDay);
    return this.http
    .post(`${this.uri}/closed-days`, closedDay,{ responseType: 'text' })
    .subscribe(res => {
      console.log(res);
    });
    

  }
/**
 * get closedDay by id in database  before updating
 * @param id method to edit the closedDays
 */
  editClosedDay(id:number):Observable <ClosedDay>{

    return this.http
    .get<ClosedDay>(`${this.uri}/closed-days/${id}`);
    
  }

/**
 * 
 * @param id update closedDay in database
 * @param Date 
 * @param Type 
 * @param Jour 
 * @param Commentaire 
 * @returns 
 */
  updateClosedDay(id,Date, Type, Jour, Commentaire){
    const closedDay = { id, Date,Type,Jour, Commentaire };

    return this.http
    .put<ClosedDay>(`${this.uri}/closed-days/${id}`, closedDay);
  }
/**
 * delete closedDay it in the database
 * @param id 
 */
  deleteClosedDay(id:number): Observable <ClosedDay> {

    return  this.http.delete<ClosedDay>(`${this.uri}/closed-days/${id}`);

  }

 
}
