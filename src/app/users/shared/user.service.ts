import { Injectable } from '@angular/core';
import { HttpClientService } from '../../core/services/http-client.service';

const midUrl = '/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // eslint-disable-next-line no-useless-constructor
    constructor(private httpClientService: HttpClientService) {}

    register(user) {
        return this.httpClientService.post(`${midUrl}/register`, user);
    }

    login(user) {
        return this.httpClientService.post(`${midUrl}/login`, user);
    }

    getProfile() {
        return this.httpClientService.get(`${midUrl}/profile`);
    }
}
