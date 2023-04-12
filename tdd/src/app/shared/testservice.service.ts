import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  constructor(private http:HttpClient) { }
  getData() {
    let url = "http://localhost:8701/api/campaigns";
    console.log(this.http.get(url))
    return this.http.get(url)
}
}
