import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemManagementComponent } from './item-management/item-management.component';
import { AuctionManagementComponent } from './auction-management/auction-management.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { AuctionItemsComponent } from './auction-items/auction-items.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'item-management', component: ItemManagementComponent },
  { path: 'auction-management', component: AuctionManagementComponent },
  { path: 'my-items', component: MyItemsComponent },
  { path: 'auction-items', component: AuctionItemsComponent },
  { path: 'create-item', component: CreateItemComponent },
  { path: 'item-details', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
