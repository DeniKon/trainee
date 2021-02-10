import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataItemsService} from "../services/data-items.service";
import {Item} from "../models/item";
import {Observable} from "rxjs";


@Component({
  selector: 'app-item-detail',
  templateUrl: 'item-detail.component.html',

})
export class ItemDetailComponent implements OnInit, OnDestroy {
  item: Item = {id:0, name:'',description:'',price:0,count:0,total:0};
  itemSubscription;

  constructor(private route: ActivatedRoute, private dataItemsService: DataItemsService) {}

  ngOnInit(): void {
    this.itemSubscription = this.getItem().subscribe(item =>this.item=item);
  }
  getItem(): Observable<Item> {
    const id = this.route.snapshot.paramMap.get('id');
    return this.dataItemsService.getItem(+id);
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }
}
