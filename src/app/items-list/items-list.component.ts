import { Component, OnInit } from '@angular/core';
import {DataItemsService} from "../services/data-items.service";
import {Observable} from "rxjs";
import {Item} from "../models/item";
import {map, reduce} from "rxjs/operators";


@Component({
  selector: 'app-items-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ["item-list.component.scss"
  ]
})
export class ItemsListComponent implements OnInit {
  items$: Observable<Item[]>;
  total$: Observable<number>;

  displayedColumns: string[] = ['itemName', 'itemDescription', 'itemPrice', 'itemCount', 'itemTotal','itemDeleteLink','itemDetailLink'];
  constructor(private dataItemsService: DataItemsService) { }
  getTotalPrice() {
    this.total$= this.items$.pipe(map(item => item.reduce((acc,val) => acc+val.total, 0)))

  }
  ngOnInit(): void {
    this.items$ = this.dataItemsService.getItems();

  }

}
