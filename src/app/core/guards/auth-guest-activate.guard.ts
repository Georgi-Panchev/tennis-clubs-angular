import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuestActivate implements CanActivate {
    // eslint-disable-next-line no-useless-constructor
    constructor(private authService: AuthService) {}

    canActivate(): boolean {
        return !this.authService.isUserAuthenticated();
    }
}
