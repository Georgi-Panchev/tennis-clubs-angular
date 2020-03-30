import { Injectable } from '@angular/core';
import { HttpClientService } from '../../core/services/http-client.service';

const midUrl = '/club';

@Injectable({
    providedIn: 'root'
})
export class TennisClubService {
    // eslint-disable-next-line no-useless-constructor
    constructor(private httpClientService: HttpClientService) {}

    create(club) {
        return this.httpClientService.post(`${midUrl}/create`, club);
    }

    read() {
        return this.httpClientService.get(`${midUrl}/all`);
    }

    readOne(clubId) {
        return this.httpClientService.get(`${midUrl}/details/${clubId}`);
    }

    edit(clubId, club) {
        return this.httpClientService.put(`${midUrl}/update/${clubId}`, club);
    }

    remove(clubId) {
        return this.httpClientService.delete(`${midUrl}/delete/${clubId}`);
    }
}
