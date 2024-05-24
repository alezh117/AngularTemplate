import { Injectable } from '@angular/core';
import { LogUserType } from '../Domain/logUser.type';
import { LogInApiService } from './logIn.api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogInStoreService {

  constructor(
    private logInApi: LogInApiService,
    private router: Router
  ) { }

  logIn(logUser: LogUserType): Promise<any> {
    return new Promise((resolve, reject) => {
      this.logInApi.logIn(logUser).subscribe({
        next: (data) => {
          localStorage.setItem('userData', JSON.stringify(data))
          this.router.navigate(['/home']);
          resolve(data);
        },
        error: (err) => {
          reject(err.error.text)
        }
      });
    });
  }
}
