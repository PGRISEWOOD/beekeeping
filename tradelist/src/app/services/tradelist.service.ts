import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TradelistService {

      constructor(private httpClient: HttpClient) { }

    getTradelist(): Observable<any>{
        let response = this.httpClient.get("gs/trade-list");
        return response;
    }

}