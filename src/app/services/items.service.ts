import { HttpClient } from '@angular/common/http';
import { Injectable, makeStateKey } from '@angular/core';
export const STATE_KEY_ITEMS = makeStateKey('items');
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(url){
    return this.http.get<any>(url)
  }
}
