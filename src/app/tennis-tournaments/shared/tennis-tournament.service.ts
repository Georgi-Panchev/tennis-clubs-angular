import { Injectable } from '@angular/core';
import { HttpClientService } from '../../core/services/http-client.service';

const midUrl = '/tournament';

@Injectable({
    providedIn: 'root'
})
export class TennisTournamentService {
    // eslint-disable-next-line no-useless-constructor
    constructor(private httpClientService: HttpClientService) {}

    create(clubId, tournament) {
        return this.httpClientService.post(`${midUrl}/create/${clubId}`, tournament);
    }

    read() {
        return this.httpClientService.get(`${midUrl}/all`);
    }

    readByClub(clubId) {
        return this.httpClientService.get(`${midUrl}/all/${clubId}`);
    }

    readOne(tournamentId) {
        return this.httpClientService.get(`${midUrl}/details/${tournamentId}`);
    }

    edit(tournamentId, tournament) {
        return this.httpClientService.put(`${midUrl}/update/${tournamentId}`, tournament);
    }

    remove(tournamentId) {
        return this.httpClientService.delete(`${midUrl}/delete/${tournamentId}`);
    }

    attend(tournamentId) {
        return this.httpClientService.put(`${midUrl}/attend/${tournamentId}`, {});
    }

    leave(tournamentId) {
        return this.httpClientService.put(`${midUrl}/leave/${tournamentId}`, {});
    }
}
