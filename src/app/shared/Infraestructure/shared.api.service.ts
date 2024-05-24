import { Injectable } from '@angular/core';
import { environment } from 'src/app/shared/enviroment/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  logInURL = environment.url + "checkToken";

  
  constructor(
    private http: HttpClient
  ) { }

  checkToken(user_ID: string):Observable<any>{
    const formData = new FormData();
    formData.append('user_ID', user_ID);

    return this.http.post(this.logInURL, formData);
  }
 
}
