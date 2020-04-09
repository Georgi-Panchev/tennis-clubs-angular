import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8000';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {
    // eslint-disable-next-line no-useless-constructor
    constructor(private httpClient: HttpClient) {}

    get(url) {
        return this.httpClient.get(`${baseUrl}${url}`);
    }

    post(url, data) {
        return this.httpClient.post(`${baseUrl}${url}`, data);
    }

    put(url, data) {
        return this.httpClient.put(`${baseUrl}${url}`, data);
    }

    delete(url) {
        return this.httpClient.delete(`${baseUrl}${url}`);
    }
}
