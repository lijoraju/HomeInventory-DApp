import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemManagementComponent } from './item-management/item-management.component';
import { AuctionManagementComponent } from './auction-management/auction-management.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AuctionDetailsComponent } from './auction-details/auction-details.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { AuctionItemsComponent } from './auction-items/auction-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemManagementComponent,
    AuctionManagementComponent,
    ItemDetailsComponent,
    AuctionDetailsComponent,
    MyItemsComponent,
    AuctionItemsComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
