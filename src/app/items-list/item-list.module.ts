import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemListRoutingModule} from "./item-list-routing.module";
import {ItemsListComponent} from "./items-list.component";
import {MaterialModule} from "../material/material.module";
import {ItemDetailComponent} from "../item-detail/item-detail.component";
import {MatCardModule} from '@angular/material/card';
import { ItemEditComponent } from './item-edit/item-edit.component';



@NgModule({
  declarations: [ItemsListComponent, ItemDetailComponent, ItemEditComponent],
  imports: [
    CommonModule,
    ItemListRoutingModule,
    MaterialModule,
    MatCardModule,
  ]
})
export class ItemListModule { }
