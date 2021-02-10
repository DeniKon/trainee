import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class DataItemsService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('items');
  }
  getItem(id:number):Observable<Item> {
    const itemUrl = `items/${id}`
    return this.http.get<Item>(itemUrl);
  }
}
