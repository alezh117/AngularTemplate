import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedApiService } from '../Infraestructure/shared.api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public router: Router,
    private sharedApi: SharedApiService
  ) { }

  getAuthToken() :any{
    const logUser = localStorage.getItem("userData");
    if (logUser !== null) {
      return new Promise((resolve, reject) => {
        this.sharedApi.checkToken(JSON.parse(logUser).user.id).subscribe({
          next(value) {        
            resolve(value.isTokenValid);
          },
         })
      })     
    }else{
      return false;
    }
      
  }
}
