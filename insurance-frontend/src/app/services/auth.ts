import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginResponse {
  token: string;
  customerId: number;
  email: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'http://localhost:5042/api/Auth';

  constructor(private http: HttpClient) {
  }

  login(
    email: string,
    password: string
  ): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      {}
    );
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
  ): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/register` +
      `?firstName=${encodeURIComponent(firstName)}` +
      `&lastName=${encodeURIComponent(lastName)}` +
      `&email=${encodeURIComponent(email)}` +
      `&password=${encodeURIComponent(password)}` +
      `&phone=${encodeURIComponent(phone)}`,
      {}
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}