import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const _LOGIN_KEY = "_login_key"
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router) { }

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    isLoggedIn() {
        return this.getToken() !== null;
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

    login({ email, password }: any): Observable<any> {
        console.log(email, password)
        if ((email === 'admin@gmail.com' && password === 'admin123') ||
            ((email === 'user@gmail.com' && password === 'user123'))) {
            if ((email === 'admin@gmail.com' && password === 'admin123')) {
                this.setToken('abcdefghijklmnopqrstuvwxyz');
                return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com',id : 1 });
            } else {
                this.setToken('abcdefghijklmnopqrstuvwxyz');
                return of({ name: 'Second User', email: 'user@gmail.com', id : 2 });
            }
        }
        return throwError(new Error('Failed to login'));
    }
    _setLoginData(data : any){
        localStorage.setItem(_LOGIN_KEY, JSON.stringify(data))
        // console.log(data )
    }
    _getLoginData(){
        return localStorage.getItem(_LOGIN_KEY);
    }
}