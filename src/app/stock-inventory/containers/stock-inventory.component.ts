import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Product} from '../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent {
  products: Product[] = [
    { id: 1, price: 2800, name: 'MacBook Pro'},
    { id: 2, price: 50, name: 'USB-C adapter'},
    { id: 3, price: 400, name: 'iPod'},
    { id: 4, price: 900, name: 'iPhone'},
    { id: 5, price: 600, name: 'Apple Watch'},
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  });

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
