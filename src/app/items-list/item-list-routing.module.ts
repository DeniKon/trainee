import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsListComponent} from "./items-list.component";
import {ItemDetailComponent} from "../item-detail/item-detail.component";
import {ItemEditComponent} from "./item-edit/item-edit.component";

const routes: Routes = [

    {path:'',component:ItemsListComponent},
    {path:':id', component: ItemDetailComponent, children:[
            {path:'edit', component: ItemEditComponent}
        ]},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemListRoutingModule { }
