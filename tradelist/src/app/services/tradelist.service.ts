import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TradelistService {

  constructor(private httpClient: HttpClient) { }

  getTradelist(): Observable<string>{
    const headers = new HttpHeaders({
        Accept:'text/html',
      });
    let response = this.httpClient.get("/gs/trade-list", {headers: headers,responseType: "text"});
    return response;
    }

}