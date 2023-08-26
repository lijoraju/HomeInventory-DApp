import { Component,OnInit } from '@angular/core';
import { Web3Service } from '../web3.service';

export interface Item {
  id: string;
  name: number;
  purchaseDate: Date;
  purchasePrice: string;
  category: string;
  model: string;
  serialNumber: string;
  location: string;
  condition: string;
}

const ELEMENT_DATA: Item[] = [
];

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {
  myItems: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'purchaseDate', 'purchasePrice', 'category', 'model', 'serialNumber', 'location', 'condition'];
  dataSource = ELEMENT_DATA;
  constructor(private web3Service: Web3Service) {}

  async ngOnInit() {
    // Fetch my items from the smart contract
    this.myItems = await this.web3Service.getMyItems();
  }
}
