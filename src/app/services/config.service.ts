import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  httpOptions = new HttpHeaders({'Content-Type':'application/json', 'Accept': '*/*'})

  constructor(
    private http: HttpClient
  ) { }

  updateConfig(data:any) {
    return this.http.post('http://localhost:3000/update-config/', JSON.stringify(data), {headers: this.httpOptions})
  }

  deleteItem(data:any) {
    return this.http.post('http://localhost:3000/delete-item/', JSON.stringify(data), {headers: this.httpOptions})
  }

  getItem(id:any) {
    return this.http.get(`http://localhost:3000/item/${id}/`, {headers: this.httpOptions})
  }

  getAllItems() {
    return this.http.get<any>(`http://localhost:3000/items/`, {headers: this.httpOptions})
  }
}
