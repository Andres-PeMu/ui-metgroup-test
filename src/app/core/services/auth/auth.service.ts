import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, responseLogin, user } from '../../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN_KEY: string = 'miToken';
  private USER_KEY: string = 'user';
  private apiUrl = `http://localhost:3001/api/v1/auth/login/`;
  isLoggedIn = false;

  constructor(
    private http: HttpClient,
  ) { }

  login(data: login) {
    return this.http.post<responseLogin>(this.apiUrl, data);
  }

  logout() {
    this.isLoggedIn = false;
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  deleteToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  setUser(token: string): void {
    localStorage.setItem(this.USER_KEY, token);
  }

  getUser(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }

  deleteUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  isAuthenticated(){
    return this.isLoggedIn
  }

}
