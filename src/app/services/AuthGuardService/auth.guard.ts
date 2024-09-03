import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../AuthService/auth.service';

// export const authguardGuard: CanActivateFn = (route, state) => {
//   return true;
// };
export const authGuard: CanActivateFn = (): Observable<boolean> | Promise<boolean> | boolean => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuth$.pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(['/login']);
        return false;  // Navigation is denied
      }
      return true;  // Navigation is allowed
    })
  );
};