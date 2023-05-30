import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerUser, user } from '../../models/auth.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUser() {
    return this.http.get<user[]>(`${environment.url_api}/users/`);
  }

  getUser(id: string) {
    return this.http.get<user>(`${environment.url_api}/users/${id}`);
  }

  createUser(DataUser: registerUser) {
    return this.http.post<user>(`${environment.url_api}/users/register/`, DataUser);
  }

  updateUser(id: string, changes: Partial<registerUser>) {
    return this.http.put<user>(`${environment.url_api}/users/${id}`, changes);
  }

  deleteUser(id: string) {
    return this.http.delete(`${environment.url_api}/users/${id}`);
  }
}
