import { Injectable } from '@angular/core';
import { LogUserType } from '../Domain/logUser.type';
import { environment } from 'src/app/shared/enviroment/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInApiService {

  logInURL = environment.url + "login";

  
  constructor(
    private http: HttpClient
  ) { }

  logIn(logUser : LogUserType): Observable<any>{
    const formData = new FormData();
    formData.append('email', logUser.email);
    formData.append('password', logUser.password);

    return this.http.post(this.logInURL, formData);
  }
}
