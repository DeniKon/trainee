import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {ActivatedRoute} from "@angular/router";
import {DataItemsService} from "../../services/data-items.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-item-edit',
  templateUrl: 'item-edit.component.html',
  styles: [
  ]
})
export class ItemEditComponent implements OnInit {
item: Item = {id:1, name:'',description:'',price:0,count:0,total:0};
id: string;
itemSubscription;
  constructor(private route: ActivatedRoute, private dataItemsService: DataItemsService) { }

  ngOnInit(): void {
    this.itemSubscription = this.getItem().subscribe(item =>this.item=item);
    console.log('ItemDetail init');
  }
  getItem(): Observable<Item> {
    const id = this.route.snapshot.queryParamMap.get('id');
    return this.dataItemsService.getItem(+id);
  }
}
