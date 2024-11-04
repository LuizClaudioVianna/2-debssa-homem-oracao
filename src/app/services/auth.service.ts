import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly _httpClient = inject(HttpClient);

    login(email: string, password: string): Observable<{ token: string; }> {
        const dominioUsuario: string = 'HomemOracao';
        //const dominioUsuario: string = 'CursoAngular';
        return this._httpClient.post<{ token: string; }>('https://localhost:7182/api/account', { email, password, dominioUsuario }).pipe(
            map(resp => {
                localStorage.setItem('access-token', resp.token);

                return resp;
            })
        );
    }

    verifyToken(): Observable<{ valid: boolean; user: string }> {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'))
        return this._httpClient.get<{ valid: boolean; user: string }>('https://localhost:7182/api/account/VerifyToken', { headers });
    }

    getUsersScopes(): string[] {
        const token = localStorage.getItem('access-token');

        if (!token) {
            return [];
        }
        const decoded: any = jwtDecode(token)

        let array = decoded.scopes.split(',');

        return array;
        //return decoded.scopes;
    }

    logout(){
        localStorage.removeItem('access-token');
    }
}