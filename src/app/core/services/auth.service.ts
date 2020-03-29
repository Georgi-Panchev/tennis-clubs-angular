import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authenticateUser(token) {
        window.localStorage.setItem('token', token);
    }

    isUserAuthenticated() {
        return window.localStorage.getItem('token') !== null;
    }

    deauthenticateUser() {
        window.localStorage.removeItem('token');
    }

    getToken() {
        return window.localStorage.getItem('token');
    }

    saveUser(user) {
        window.localStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
        const userJson = window.localStorage.getItem('user');
        if (userJson) {
            return JSON.parse(userJson);
        }

        return {};
    }

    removeUser() {
        window.localStorage.removeItem('user');
    }

    isUserAdmin() {
        const user = this.getUser();
        if (user.roles && Object.keys(user).length > 0) {
            return user.roles.includes('Admin');
        }

        return false;
    }
}
