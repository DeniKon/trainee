import { Component, OnInit } from '@angular/core';
import {DataItemsService} from "../services/data-items.service";
import {Observable} from "rxjs";
import {Item} from "../models/item";
import {map, reduce, tap} from "rxjs/operators";


@Component({
  selector: 'app-items-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ["item-list.component.scss"
  ]
})
export class ItemsListComponent implements OnInit {
  items$: Observable<Item[]>=this.dataItemsService.items$;
  total$: Observable<number>;

  displayedColumns: string[] = ['itemName', 'itemDescription', 'itemPrice', 'itemCount', 'itemTotal','itemDeleteLink','itemDetailLink'];
  constructor(private dataItemsService: DataItemsService) { }

  ngOnInit(): void {
    //this.items$ = this.dataItemsService.items$;
    this.total$= this.items$.pipe(map(item => item.reduce((acc,val) => acc+val.total, 0)))
    console.log('ItemList init')
  }

}
