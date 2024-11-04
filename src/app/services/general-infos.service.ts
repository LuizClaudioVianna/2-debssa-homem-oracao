import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GeneralInfosService {
    private readonly _httpClient = inject(HttpClient);

    getRoles(): Observable<{ quantidade: number }> {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
        return this._httpClient.get<{ quantidade: number }>('https://localhost:7182/api/Role/GetQuantityRoles', { headers });
    }

    getUsers(): Observable<{ quantidade: number }> {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
        return this._httpClient.get<{ quantidade: number }>('https://localhost:7182/api/User/GetQuantityUsers', { headers });
    }

    getClients(): Observable<{ quantidade: number }> {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
        return this._httpClient.get<{ quantidade: number }>('https://localhost:7182/api/Cliente/GetQuantityClients', { headers });
    }
}
