import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SportsService {
  constructor(private http: HttpClient) {}
  getSports() {
    return this.http.get('https://hplussport.com/api/products');
  }
}
