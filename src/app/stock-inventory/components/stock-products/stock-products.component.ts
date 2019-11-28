import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {Product} from '../../models/product.interface';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  @Input() parent: FormGroup;
  @Input() map: Map<number, Product>;
  @Output() removed = new EventEmitter<any>();

  constructor() { }

  getProduct(id) {
    return this.map.get(id);
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }
}
