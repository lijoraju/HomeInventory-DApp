import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Item } from '../forms/appForms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
  formGroup: FormGroup;
  itemData: Item = new Item();
  constructor() {
    this.formGroup = new FormGroup({});
  }
}
