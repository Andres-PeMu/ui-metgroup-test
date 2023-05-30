import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { stores } from '../../models/stores.model';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http: HttpClient) { }

  getStores() {
    return this.http.get<stores[]>(`${environment.url_api}/stores/`);
  }

  createStore(name: string) {
    return this.http.post<stores>(`${environment.url_api}/stores/${name}`,'');
  }

  editStore(id: number, name: string) {
    return this.http.patch<stores>(`${environment.url_api}/stores/${id}`, {
      "name": name
    });
  }

  deleteStore(name: string) {
    return this.http.delete<any>(`${environment.url_api}/stores/${name}`);
  }
}
