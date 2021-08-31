import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private uri = environment.backendUrl;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http:HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(username: string, password: string): boolean{
    // 1 - We get the user in database corresponding to this username
    this.getUserFromDB(username, password).subscribe((user)=>{
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    });

    if(localStorage.getItem('currentUser') != null ){
      return true;
    }
    else {
      return false;
    }
  }

  public logout(){
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private getUserFromDB(login:string, password:string) : Observable<User> {
    return this.http.get<User>(`${this.uri}/user/${login}/${password}`);
  }


}
