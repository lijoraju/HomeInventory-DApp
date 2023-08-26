import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionItemsComponent } from './auction-items.component';

describe('AuctionItemsComponent', () => {
  let component: AuctionItemsComponent;
  let fixture: ComponentFixture<AuctionItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuctionItemsComponent]
    });
    fixture = TestBed.createComponent(AuctionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
