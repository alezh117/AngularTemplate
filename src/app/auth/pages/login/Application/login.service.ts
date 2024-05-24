import { Injectable } from '@angular/core';
import { LogUserType } from '../Domain/logUser.type';
import { LogInStoreService } from '../Infraestructure/logIn.store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private logInStore: LogInStoreService
  ) { }

  public log(logUser :LogUserType): Promise<any> {    
      return this.logInStore.logIn(logUser);      
  }

}
