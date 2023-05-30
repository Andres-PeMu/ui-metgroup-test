import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Createitems, items } from '../../models/items.model';
import { environment } from 'src/environments/environments';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getItems() {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('authorization', `${token}`);
    return this.http.get<items[]>(`${environment.url_api}/items/`, { headers });
  }

  createItems(data: Createitems) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('authorization', `${token}`);
    return this.http.post<items>(`${environment.url_api}/items/`, data, { headers });
  }

  editItems(data: Createitems, name: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('authorization', `${token}`);
    return this.http.put<items>(`${environment.url_api}/items/${name}`, data, { headers });
  }

  deleteItems(name: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('authorization', `${token}`);
    return this.http.delete<any>(`${environment.url_api}/items/${name}`, { headers });
  }

}
