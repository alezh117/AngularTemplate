import { CanActivateChildFn } from '@angular/router';
import { AuthGuardService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = async (childRoute, state) => {
/*   console.log("entra al guard...");
  const authGuardService = inject(AuthGuardService);
  
  if(false == await authGuardService.getAuthToken()){   
    authGuardService.router.navigate(['/auth']);
    console.log("falla el guard");    
    return false;
  }else{
    return true;
  } */
  return true
}
