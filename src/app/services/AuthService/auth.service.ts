import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuth$ = this.isAuthSubject.asObservable();
  login(username: string, password: string): Observable<boolean>{
    if(username === 'user' && password === 'pass' )
    {
      this.isAuthSubject.next(true);
      return new Observable(obs => {
        obs.next(true);
        obs.complete();

      });
    }
    else
    {
      return new Observable(obs => {
        obs.next(false);
        obs.complete();

      });
    }
  }

  logout() {
    this.isAuthSubject.next(false);
  }
  // constructor() { }
}
